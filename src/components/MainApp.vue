<script>
import axios from 'axios';
import Paginate from './Paginate.vue';
import store from '../data/store.js';


export default {

  name: 'MainApp',


  components: {
    Paginate,
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
        this.store.projects = response.data.progetti;
        console.log(this.store.projects);
      })
  }


}
</script>
<template>

  <h1 class="text-success text-center my-4">Francesco's Boolfolio</h1>

  <div class="container d-flex flex-wrap">

    <template v-for="progetto in store.projects.data">

      <div class="card mb-3">

        <img v-if="!progetto.img.startsWith('http')" :src="store.localHostUrl + '/storage/' + progetto.img"
          class="card-img-top" alt="...">

        <img v-else="" :src="progetto.img" class="card-img-top" alt="...">


        <div class="card-body">

          <h5 class="card-title">Progetto: {{ progetto.name_project }}</h5>
          <p class="card-text">Descrizione: {{ progetto.description }}</p>
          <p class="card-text"><small class="text-body-secondary">{{ progetto.type.name }}</small></p>
          <ul>
            <template v-for="linguaggio in progetto.languages">
              <li>{{ linguaggio.name }}</li>
            </template>
          </ul>

        </div>

      </div>

    </template>

    <Paginate />

  </div>


</template>

<style></style>
