import { reactive } from 'vue';

const iMieiDati = reactive({
    projects: '',
    singleProject: null,
    localHostUrl: 'http://localhost:8000',
    urlEachPage: 'http://localhost:8000/api/projects?page=',
    urlProjects: 'http://localhost:8000/api/projects',
    linksMenu: [
        'Home',
        'Projects',
        'About',
        'Contacts'
    ],


});

export default iMieiDati