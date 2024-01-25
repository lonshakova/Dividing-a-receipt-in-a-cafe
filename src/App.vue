<template>
  <v-app>
    <v-main>
      <header-menu> </header-menu>
</v-main>
  </v-app>
</template>

<script>
import SideMenu from './components/SideMenu.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import NewProduct from './components/DialogWindows/NewProduct.vue';

export default {
  name: 'App',

  components: {
SideMenu,
HeaderMenu,
NewProduct

  },

  data: () => ({
    }),
}
</script>
