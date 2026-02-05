import {createRouter, createWebHashHistory} from  'vue-router'
import List from './views/List.vue'
import HomePage from './views/HomePage.vue'
import BawlZapher from './views/BawlZapher.vue'
import WikiShoutout from './views/WikiShoutout.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes: [
        {path: "/", component: HomePage, props:true},
        {path: "/list", component: List},
        {path: "/bawlzapher", component: BawlZapher},
        {path: "/zapherwiki", component: WikiShoutout}
    ]
})

export default router;