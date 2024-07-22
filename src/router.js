import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import AppProjects from './pages/AppProjects.vue';
import AppContacts from './pages/AppContacts.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: AppHome
        },
        {
            path: '/about',
            name: 'About',
            component: AppAbout
        },
        {
            path: '/projects',
            name: 'Projects',
            component: AppProjects
        },
        {
            path: '/contacts',
            name: 'Contacts',
            component: AppContacts
        },
        {
            path: '/project/:id',
            name: 'SingleProject',
            component: SingleProject
        },
    ]
})

export { router };