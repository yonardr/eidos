<template>
  <div>
{{formattedDateTimeRange}}
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

export default defineComponent({
  props: {
    date: {
      start: String as PropType<string>,
      end: String as PropType<string>,
      required: true
    }
  },
  setup: function (props) {
    function formatDateTimeRange(startDateTime: string, endDateTime: string): string {
      const startDate = new Date(startDateTime);
      const endDate = new Date(endDateTime);

      const formattedStartDate = `${startDate.getDate()}.${startDate.getMonth() + 1}.${startDate.getFullYear()}`;
      const formattedStartTime = `${("0" + startDate.getHours()).slice(-2)}:${("0" + startDate.getMinutes()).slice(-2)}`;
      const formattedEndTime = `${("0" + endDate.getHours()).slice(-2)}:${("0" + endDate.getMinutes()).slice(-2)}`;

      return `${formattedStartDate}, ${formattedStartTime} - ${formattedEndTime}`;
    }

    const formattedDateTimeRange = formatDateTimeRange(props.date.start, props.date.start);
    return {formattedDateTimeRange}
  }
})
</script>

<style lang="scss" scoped>

</style>