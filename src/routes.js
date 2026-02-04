import {createRouter, createWebHashHistory} from  'vue-router'
import CreatePage from './views/CreatePage.vue'
import Pages from './views/Pages.vue'
import PagesList from './views/PagesList.vue'
import PageEdit from './views/PageEdit.vue'
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