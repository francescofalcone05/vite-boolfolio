import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: '',
    localHostUrl: 'http://localhost:8000',
    urlEachPage: 'http://localhost:8000/api/projects?page=',
    urlProjects: 'http://localhost:8000/api/projects'


});

export default iMieiDati