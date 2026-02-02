<template>
    <nav 
        :class="[`bg-${theme}`, `navbar-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Convention</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">         
                <navbar-link
                    v-for="(page, index) in publishedPages" 
                    class="nav-item" 
                    :page="page"
                    :index="index"
                ></navbar-link>

                <li>
                    <router-link 
                        to="/pages"
                        class="nav-link"
                        active-class="active"
                        aria-current="page"
                    >Pages</router-link>
                </li>

            </ul>
            <form class="d-flex">
                <button 
                    class="btn btn-primary"
                    @click.prevent="changeTheme()"
                >Toggle DarkMode</button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue';

export default {
    components:{
        NavbarLink
    },
    inject:["$pages"],
    created(){
        this.getThemeSetting();
        this.pages= this.$pages.getAllPages();
    },
    computed:{
        publishedPages(){
            return this.pages.filter(p=>p.published);
        }
    },
    data(){
        return{
            theme:'dark',
            pages:[]
        }
    },
    methods:{
        changeTheme(){
            let theme = "dark";
            
            if(this.theme == "dark"){
                theme = 'light';
            };
            this.theme = theme;
            this.storeThemeSetting();
        },
        storeThemeSetting(){
            localStorage.setItem("theme", this.theme);
        },
        getThemeSetting(){
            let theme = localStorage.getItem("theme");

            if(theme){
                this.theme = theme;
            }
        },
    }
}
</script>