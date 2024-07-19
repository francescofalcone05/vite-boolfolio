<script>
import MainApp from "./components/MainApp.vue";
import HelloWord from "./components/MainApp.vue";
//import axios from 'axios';

export default {

  name: 'App',


  components: {
    MainApp,
  },

  data() {
    return {
      //projects: '',

    }
  },

  mounted() {

    // axios
    //   .get('http://localhost:8000/api/projects')
    //   .then(response => {
    //     this.projects = response.data.progetti;
    //     console.log(this.projects);
    //   })
  }


}

</script>

<template>

  <MainApp />

</template>

<style></style>
