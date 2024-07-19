<script>
import axios from 'axios';
import store from '../data/store.js';

export default {

    name: 'Paginate',


    components: {
    },

    data() {
        return {
            store,


        }
    },
    methods: {
        changePage(numero) {
            axios
                .get(this.store.urlEachPage + numero)
                .then(response => {
                    this.store.projects = response.data.progetti;
                    console.log(this.store.projects);
                })
        },

        PrevOrNext(url) {
            axios
                .get(url)
                .then(response => {
                    this.store.projects = response.data.progetti;
                    console.log(this.store.projects);
                })
        }


    },

    mounted() {


    }


}
</script>
<template>
    <div class="bg-light">
        <nav aria-label="Page navigation">
            <ul class="pagination    ">
                <li class="page-item" :class="{ disabled: !store.projects.prev_page_url }">
                    <a @click="(store.projects.prev_page_url) ? PrevOrNext(store.projects.prev_page_url) : ''"
                        class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <!-- modificare active -->
                <li @click="changePage(n)" v-for="n in store.projects.last_page" class="page-item" aria-current="page">
                    <a class="page-link" href="#">{{ n }}</a>
                </li>
                <li class="page-item" :class="{ disabled: !store.projects.next_page_url }">
                    <a @click="(store.projects.next_page_url) ? PrevOrNext(store.projects.next_page_url) : ''"
                        class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>

    </div>

    <!-- <nav aria-label="Page navigation">
        <ul class="pagination    ">
            <li class="page-item disabled">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
            <li class="page-item active" aria-current="page">
                <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav> -->

</template>

<style></style>