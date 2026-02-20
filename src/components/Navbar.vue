<template>
    <nav 
        class="sticky-top"
        :class="[`bg-${theme}`, `navbar-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Convention</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">         

                <li>
                    <router-link 
                        to="/"
                        class="nav-link"
                        active-class="active"
                        aria-current="page"
                    >Home</router-link>
                </li>

                <li>
                    <router-link 
                        to="/list"
                        class="nav-link"
                        active-class="active"
                        aria-current="page"
                    >The List</router-link>
                </li>

                <li>
                    <router-link 
                        to="/bawlzapher"
                        class="nav-link"
                        active-class="active"
                        aria-current="page"
                    >Our Hero</router-link>
                </li>

                <li>
                    <router-link 
                        to="/zapherwiki"
                        class="nav-link"
                        active-class="active"
                        aria-current="page"
                    >Wiki</router-link>
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

export default {
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