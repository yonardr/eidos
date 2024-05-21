<template>
  <div>
    {{ text }}
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";

export default defineComponent({
  props: {
    type: {
      id: Number as PropType<number>,
      name: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const text = ref('');
    switch (props.type.name) {
      case 'accreditation':
        text.value = 'Аккредитация'
      case 'examination':
        text.value = 'Экзамен'
      case 'lesson':
        text.value = 'Урок'
    }
    return {text}
  }
})
</script>

<style lang="scss" scoped>

</style>