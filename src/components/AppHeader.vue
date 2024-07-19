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
    <div class="p-3 bg-light mb-4">

        <h1 class="text-success text-center">
            Francesco's Boolfolio
        </h1>
        <div class="d-flex justify-content-center">
            <ul v-for="link in store.linksMenu">
                <li>
                    <router-link :to="{ name: link }" class="nav-link"> {{ link }} </router-link>
                </li>
            </ul>

        </div>
    </div>



</template>

<style scoped>
li {
    list-style: none;
}
</style>