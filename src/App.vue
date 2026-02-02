<template>
    <navbar></navbar>

    <router-view></router-view>



    <!--
    <page-viewer 
        v-if="pages.length > 0"
        :page="pages[activePage]" 
    ></page-viewer>

    <create-page
        @page-created="pageCreated"
    ></create-page>
    -->

    <!--<div v-if="activePage == 0">
        <ol>
            <li v-for="(level, index) in levels" class="container" :key="index">
                <a href="#">{{ level.name }}</a>
            </li>
        </ol>
    </div>-->
</template>

<script>

import Navbar from './components/Navbar.vue';

export default{
    components:{
        Navbar,
    },
    methods:{
        pageCreated(pageObj){
            this.pages.push(pageObj);
        }
    }
}
</script>