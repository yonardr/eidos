<template>
  <div class="__container">
    <header>
      <h2>
      Учебные сессии
    </h2>
      <div class="manupulator">
        <search-bar @search="handleSearch" style="margin-right: 14px"></search-bar>
        <img src="../assets/button.svg" style="margin-right: 14px" />
        <img src="../assets/button2.svg" style="margin-right: 14px" @click="dataSort"/>
        <button class="btn__create">Создать</button>
      </div>
    </header>
    <div>
<TrainingSessionsTable />
    </div>
  </div>
</template>

<script>
import TrainingSessionsTable from "./TrainingSessions/TrainingSessionsTable.vue";
import PaginationTrainigSessions from "./TrainingSessions/PaginationTrainigSessions.vue";
import {computed, defineComponent, ref} from "vue";
import {useStore} from "vuex";
import SearchBar from "./TrainingSessions/SearchBar.vue";
export default defineComponent({
  components: {PaginationTrainigSessions, TrainingSessionsTable, 'search-bar': SearchBar},
  setup(){
    const store = useStore()
    const sessions = computed(()=> store.getters.getSessions)
    const dataSort = () => {
      const data = sessions.value.sort((a, b) => {
          return new Date(a.start) - new Date(b.start);
      });
      store.commit('setSortData', data)
    }
    const searchResults = ref([])
    function handleSearch(query) {
      searchResults.value = sessions.value.filter(item => item.module.toLowerCase().includes(query.toLowerCase()))

    }

    return {dataSort, handleSearch}
  }

})
</script>

<style lang="scss" scoped>
.__container{
  width: 100%;
  padding: 24px;
  background-color: #FFFFFF;
  border-radius: 12px 12px 0px 0px;
}
header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0;
}

.btn{
background-color: #F4F4F4;
  width: 44px;
  height: 44px;
}
button{
  border: none;
  font-family: "Manrope", sans-serif;
}
.btn__create{
  color: #fff;
  padding: 0px 8px 0px 8px;
  width: 112px;
  height: 44px;
  background-color: #3761F3;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
}

.manupulator{
  display: flex;
  align-items: center;
  justify-content: space-between;

}
</style>