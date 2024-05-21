<template>
  <div :style="statusStyle" class="main">
    {{ text }}
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";

export default defineComponent({
  props: {
    status: {
      id: Number as PropType<number>,
      name: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const text = ref('')
    const statusStyle = computed(() => {
      switch (props.status.name) {
        case 'planned':
          text.value = 'Запланировано'
          return {'background-color': '#AFBFF5'}
        case 'completed':
          text.value = 'Завершено'
          return {'background-color': '#91C893'}
        case 'canceled':
          text.value = 'Отменено'
          return {'background-color': 'red'}
        default:
          text.value = props.status.name
          return {'background-color': '#FFDAA1'}
      }
    })


    return {text, statusStyle}
  }
})
</script>

<style lang="scss" scoped>
.main{
  display:inline-block;
  font-size: 13px;
  line-height: 20px;
  font-weight: 700;
  border-radius: 43px;
  padding: 4px 12px 4px 12px;
}
</style>