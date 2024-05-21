<template>
  <div>
    <img src="../../assets/search.svg" class="icon">
  <input type="text" v-model="searchQuery" @input="search" class="search" placeholder="Поиск">
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    search() {
      this.$emit('search', this.searchQuery);
    }
  }
};
</script>

<style>
.search{
  width: 260px;
  height: 44px;
  border: 1px solid #E0E0E0;
  background-color: #FFFFFF;
  padding: 0px 8px 0px 16px;
  border-radius: 16px;
  padding-left: 40px;
}
.icon{
  position: absolute;
  top: 52px;
  right: 540px;
}
input::placeholder {
  font-family: "Manrope", sans-serif;
  font-size: 13px;
  color: rgba(47, 49, 68, 1);
  line-height: 20px;
  font-weight: 600;
}
</style>