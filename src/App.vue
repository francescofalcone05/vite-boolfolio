<script>
import AppHeader from "./components/AppHeader.vue";
import store from './data/store.js';
import { RouterView } from 'vue-router';

//import axios from 'axios';

export default {

  name: 'App',


  components: {

    AppHeader

  },

  data() {
    return {
      store,

    }
  },

  mounted() {


  }


}

</script>

<template>

  <AppHeader />
  <router-view></router-view>



</template>

<style></style>
