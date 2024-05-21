<template>
  <div class="table">
    <table>
      <thead class="wrapper__table">
      <th>
        <div>Дата и время</div>
      </th>
      <th>
        <div> Статус</div>
      </th>
      <th>
        <div>Название учебного модуля</div>
      </th>
      <th>
        <div>Тип сессии</div>
      </th>
      <th>
        <div>Комната</div>
      </th>
      <th>
        <div>Группа</div>
      </th>
      </thead>
      <TrainingSessionItem v-for="(item, index) in sessions" :session="item" :indexColor="index"/>
    </table>
  </div>
  <PaginationTrainigSessions class="wrapper__table"/>

</template>
<script lang='ts'>
import StatusCheck from "./StatusCheck.vue";
import TrainingSessionDateTime from "./TrainingSessionDateTime.vue";
import TrainingSessionType from "./TrainingSessionType.vue";
import {computed, ref} from "vue";
import {useStore} from "vuex";
import PaginationTrainigSessions from "./PaginationTrainigSessions.vue";
import TrainingSessionItem from "./TrainingSessionItem.vue";

export default {
  components: {TrainingSessionItem, PaginationTrainigSessions, TrainingSessionType, TrainingSessionDateTime, StatusCheck},
  setup() {
    const store = useStore()
    const sessions = computed(() =>store.getters.getSessions)
    return {sessions}
  }
}
</script>

<style scoped>
.table {
  height: 730px;
  overflow-y: scroll;

  border-collapse: collapse;
  border-radius: 12px;
}

table {
  width: 100%;
}

thead {
  font-size: 17px;
  line-height: 28px;
  font-weight: 900;
}

td, th {
  border: none;

  div {
    display: flex;
    padding: 10px 16px;
  }
}

.wrapper__table {
  background-color: #F5F7F9;
  height: 52px;
}
.table::-webkit-scrollbar {
  width: 6px;               /* ширина scrollbar */
}
.table::-webkit-scrollbar-track {
  background: transparent;
}
.table::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.24);
  border-radius: 20px;
}
</style>
