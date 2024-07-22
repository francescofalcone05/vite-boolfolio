<script>
// import axios from 'axios';
import Paginate from '../elements/Paginate.vue';
import store from '../data/store.js';
import { RouterLink } from 'vue-router';



export default {

  name: 'AppProjects',


  components: {
    Paginate,
  },

  data() {
    return {
      store,

    }
  },

  mounted() {

    // axios
    //   .get('http://localhost:8000/api/projects')
    //   .then(response => {
    //     this.store.projects = response.data.progetti;
    //     console.log(this.store.projects);
    //   })
  }


}
</script>
<template>
  <div class="d-flex justify-content-center flex-wrap">

    <div class="card m-2 p-2" style="width: 18rem;" v-for="project, index in store.projects.data">
      <div class="card-body">
        <h5 class="card-title">Progetto: {{ project.name_project }}</h5>
        <p>Data pubblicazione: {{ project.date }}</p>
        <router-link :to="{ name: 'SingleProject', params: { id: project.id } }" class="btn btn-outline-danger">more
          details</router-link>

      </div>
    </div>

  </div>



  <!-- <div class="container d-flex flex-wrap">

    <template v-for="progetto, index in store.projects.data">

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


</template> -->

  <Paginate />

  <!-- </div> -->


</template>

<style></style>
