<template>
  <div class="app">
    <side-menu></side-menu>
    <div class="right">
    <header-menu></header-menu>
    <card-list></card-list>
  </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import CardList from "@/components/CardList.vue"
export default{
  components:{
    SideMenu,
    HeaderMenu,
    CardList
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  justify-content: space-between;
}

</style>