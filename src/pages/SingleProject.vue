<script>
import axios from 'axios';

import store from '../data/store.js';


export default {

  name: 'SingleProject',


  components: {

  },

  data() {
    return {
      store,

    }
  },

  mounted() {

    console.log(this.$route.params.id);

    axios
      .get(`http://localhost:8000/api/projects/  ${this.$route.params.id}`)
      .then(response => {
        store.singleProject = response.data.progetto;
        console.log('questo è ', store.singleProject);
      })
  }


}
</script>
<template>



  <div class="container d-flex flex-wrap" v-if="store.singleProject">


    <div class="card mb-3">

      <img v-if="!store.singleProject.img.startsWith('http')"
        :src="store.localHostUrl + '/storage/' + store.singleProject.img" class="card-img-top" alt="...">

      <img v-else="" :src="store.singleProject.img" class="card-img-top" alt="...">


      <div class="card-body">

        <h5 class="card-title">Progetto: {{ store.singleProject.name_project }}</h5>
        <p class="card-text">Descrizione: {{ store.singleProject.description }}</p>
        <p class="card-text"><small class="text-body-secondary">{{ store.singleProject.type.name }}</small></p>
        <ul>
          <template v-for="linguaggio in store.singleProject.languages">
            <li>{{ linguaggio.name }}</li>
          </template>
        </ul>
        <router-link :to="{ name: 'Projects' }" class="btn btn-outline-danger">
          back to the list</router-link>

      </div>

    </div>

  </div>


</template>

<style></style>
