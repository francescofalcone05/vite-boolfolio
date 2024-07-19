<script>
import MainApp from "./components/MainApp.vue";
import HelloWord from "./components/MainApp.vue";
import store from './data/store.js';
import axios from 'axios';

//import axios from 'axios';

export default {

  name: 'App',


  components: {
    MainApp,
  },

  data() {
    return {
      store,

    }
  },

  mounted() {

    axios
      .get('http://localhost:8000/api/projects')
      .then(response => {
        store.projects = response.data.progetti;
        console.log(store.projects);
      })
  }


}

</script>

<template>

  <MainApp />

</template>

<style></style>
