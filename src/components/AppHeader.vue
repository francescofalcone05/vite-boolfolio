<script>

import store from '../data/store.js';
import { RouterLink } from 'vue-router';



export default {

    name: 'AppHeader',


    components: {

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
    <div class=" bg-light mb-4">


        <div class="d-flex justify-content-center">
            <div>
                <h1 class="text-success text-center"> Francesco's Boolfolio </h1>

            </div>
            <div class="d-flex align-self-center">
                <ul v-for="link in store.linksMenu" class="m-0">
                    <li>
                        <router-link :to="{ name: link }" class="nav-link"> {{ link }} </router-link>
                    </li>
                </ul>
            </div>




        </div>
    </div>



</template>

<style scoped>
li {
    list-style: none;
}
</style>