<template>
  <tbody :style="tableFieldColor">
  <td class="data__filed">
    <TrainingSessionDateTime :date="{start: props.session.start, end: props.session.end}"/>
  </td>
  <td>
    <StatusCheck :status="props.session.status"/>
  </td>
  <td class="module__name">
    <div>{{props.session.module}}</div>
  </td>
  <td>
    <TrainingSessionType :type="props.session.type"/>
  </td>
  <td>
    <div class="room__field">
      <div v-for="(room, index) in props.session.rooms" class="arrayField">Комната {{room.id}}<div v-if="index < props.session.rooms.length - 1" style="margin-right: 3px">,</div></div>
    </div>
  </td>
  <td>
    <div class="group__filed">
      <div v-for="(group, index) in props.session.groups" class="arrayField">{{group.name}}<div v-if="index < props.session.groups.length - 1" style="margin-right: 3px">,</div></div>
    </div>
  </td>
  </tbody>
</template>

<script lang="ts">
import StatusCheck from "./StatusCheck.vue";
import TrainingSessionDateTime from "./TrainingSessionDateTime.vue";
import TrainingSessionType from "./TrainingSessionType.vue";
import {defineComponent, PropType} from "vue";
import {computed} from "vue";

export default defineComponent({
  components: {TrainingSessionType, TrainingSessionDateTime, StatusCheck},
  props:{
    session: {
      type: Object as PropType<Object>,
      required: true
    },
    indexColor: {
      type: Number as PropType<number>,
      required: true
    }
  },
  setup(props){
    const tableFieldColor =
      computed(()=>{
        if(props.indexColor % 2 !== 0) return {'background-color': '#F4F4F4'}
      })

    return {props, tableFieldColor}
  }
})
</script>

<style lang="scss" scoped>
.arrayField{
  display: flex;
  align-items: flex-end;
  white-space: nowrap;
}
tbody{
  height: 68px;
}
td{
  padding: 10px 16px 10px 16px
}
.data__filed{
  width: 200px;
}
.room__field{
  width: 315px;
  display: flex;
  line-height: 24px;
  flex-wrap: wrap;
}
.group__filed{
  width: 260px;
  display: flex;
  flex-wrap: wrap;
  line-height: 24px;
}
.module__name{
  width: 520px;
}
</style>