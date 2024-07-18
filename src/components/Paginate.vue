<script>
import axios from 'axios';

export default {

    name: 'Paginate',


    components: {
    },

    data() {
        return {
            projects: '',
            localHostUrl: 'http://localhost:8000',
            urlEachPage: '/api/projects?page='

        }
    },

    mounted() {

        axios
            .get('http://localhost:8000/api/projects')
            .then(response => {
                this.projects = response.data.progetti;
                console.log(this.projects);
            })
    }


}
</script>
<template>

    <nav aria-label="Page navigation">
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
    </nav>

</template>

<style></style>