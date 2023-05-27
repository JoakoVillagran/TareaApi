import { createRouter, createWebHistory } from 'vue-router';
import broma from './paginas/Broma.vue'
import meme from './paginas/JAJAgrafico.vue'
import home from './paginas/Home.vue'

const routes = [
{
path: '/Broma',
name: 'Broma',
component: broma
},
{
    path: '/jajagrafico',
    name: 'jajagraf',
    component: meme
    },
    {
        path: '/',
        name: 'home',
        component: home
        },
];


const router = createRouter({
history: createWebHistory(),
routes
});

export default router;