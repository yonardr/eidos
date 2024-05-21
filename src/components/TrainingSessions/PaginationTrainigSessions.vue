<template>
  <div class="wrapper">
    <div class="btn" @click="prevPage()">
      <img src="../../assets/Vector.svg"/>
    </div>
    <div v-for="item in viewArrayPagination" :style="styleCurrentPage(item)">
      <div v-if="current === item" class="btn activePage">{{item}}</div>
      <div v-if="current !== item" class="btn" @click="changePage(item)">{{item}}</div>
    </div>
    <div v-if="current < countPage-2" class="btn" @click="lastPage">{{countPage}}</div>
    <div class="btn" @click="nextPage">
      <img src="../../assets/VectorR.svg"/>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref, watch} from "vue";
import {useStore} from "vuex";

export default defineComponent({
  setup(){
    const store = useStore()
    const current: number = computed(()=> store.getters.getCurrentPage)
    const countPage: number = computed(()=> store.getters.getCountPages)

    const viewArrayPagination = ref([1,2,3, '...'])

    watch(current, ()=>{
      viewArrayPagination.value = []
      if(current.value === 1){
        viewArrayPagination.value.push(current.value, current.value+1,current.value+2, '...')
      }
      else if(current.value === 2){
        viewArrayPagination.value.push(current.value-1,current.value, current.value+1,current.value+2, '...')
      }
      else if(current.value === countPage.value-2){
        viewArrayPagination.value.push(1, '...')
        viewArrayPagination.value.push(current.value-2,current.value-1,current.value)
        viewArrayPagination.value.push(current.value+1,current.value+2)
      }
      else if(current.value <= countPage.value-2){
        viewArrayPagination.value.push(current.value-2,current.value-1,current.value)
        viewArrayPagination.value.push(current.value+1,current.value+2, '...')
      }
      else if(current.value === countPage.value-1){
        viewArrayPagination.value.push(1, '...')
        viewArrayPagination.value.push(current.value-2,current.value-1,current.value,current.value+1)
      }
      else if(current.value === countPage.value){
        viewArrayPagination.value.push(1, '...')
        viewArrayPagination.value.push(current.value-2,current.value-1,current.value)
      }
      })

    const prevPage = () => store.commit('setBackPage')
    const nextPage = () => store.commit('setNextPage')

    const styleCurrentPage = (item: number) => computed(()=>{
        if(current.value === item) return {'background-color': 'red'}
    })

    const lastPage = () =>{
      store.commit('setCurrentPage', countPage.value)
    }

    const changePage = (item: number) => {
      if(item !== '...') store.commit('setCurrentPage', item)
    }

    return {lastPage, prevPage, nextPage, countPage, current, viewArrayPagination, styleCurrentPage, changePage}
  }

})
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  align-items: center;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn{
  width: 30px;
  height: 30px;
  border-radius: 8px;
  margin: 4px;
  background-color: #FFFFFF;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: #E0E0E0;
  }
}
.activePage{
  border: 1px solid #3761F3;
  color: #3761F3;
}
</style>