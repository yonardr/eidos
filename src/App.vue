<script setup lang="ts">

import TrainingSessions from "./components/TrainingSessions.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
<div class="_container">
  <SideBar />
    <TrainingSessions class="content"/>


</div>
</template>

<style>
._container{
  display: flex;
}
body{
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  color: #2F3144;
  background-color: #f4f4f8;
  padding: 0;
  margin: 0;
}
h2{
  font-size: 24px;
  font-weight: 900;
  line-height: 28px;
  text-align: start;
}
.content{
  margin-top: 8px;
  width: 100%;
}

</style>
