<script>
import HelloWord from "./components/HelloWorld.vue";
//import axios from 'axios';

export default {

  name: 'App',


  components: {
    HelloWord,
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

  <HelloWord />

</template>

<style></style>
