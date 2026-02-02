<template>
    <h4>Edit {{ page.pageTitle }}</h4>

    <div class="container mb-3">
        <form action="">
            <div class="row">
                <div class="col-md-8">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Page Title
                        </label>
                        <input 
                            type="text"
                            class="form-control"
                            v-model="page.pageTitle"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Content
                        </label>
                        <textarea 
                            type="text"
                            class="form-control"
                            rows="5"
                            v-model="page.content"
                        ></textarea>
                    </div>
                </div>
 
                <div class="col">
                    <div class="mb-3">
                        <label for="" class="form-label">
                            Link Text
                        </label>
                        <input 
                            type="text"
                            class="form-control"
                            v-model="page.link.text"
                        />
                    </div>
                    <div class="row mb-3">
                        <div class="form-check">
                            <label for="gridCheck1" class="form-check-label">
                                Published
                            </label>
                            <input 
                                type="checkbox"
                                class="form-check-input"
                                v-model="page.published"
                            />
                        </div>
                    </div>
                </div>
            
            </div>

            <div class="mb-3">
                <button
                    class="btn btn-primary"
                    @click.prevent="submit"
                >Edit</button>
            </div>
            <div class="mb-3">
                <button
                    class="btn btn-primary"
                >Cance</button>
            </div>

        </form>
    </div>
</template>

<script setup>
import { inject } from "vue";
import {useRoute, useRouter} from "vue-router"

const route = useRoute();
const router = useRouter();
const pages = inject("$pages");

let page = pages.getSinglePage(route.params.index)

function submit(){
}

</script>