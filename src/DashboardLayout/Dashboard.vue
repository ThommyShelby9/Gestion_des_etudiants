<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia';
import {useUserStore} from '@/stores/user' 
import { onMounted, ref, } from 'vue';
import AsideBar from './AsideBar.vue';
const router = useRouter()
 const { userData } = useUserStore()
const { users, UserInitialise,  } = storeToRefs(useUserStore()) 

 onMounted(async () => {
    await userData()
    console.log(UserInitialise)
}) 

</script>

<template>
    <div class="wrapper">
        <AsideBar />
        <main class="main">
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
* {
    position: relative;
    margin: 0;
    padding: 0;
    color: white;
    font-size: 16px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
    text-decoration: none;
    color: black;
}

ul li {
    list-style-type: none;
}

body {
    width: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

.wrapper {
    display: flex;
    width: 100%;
}

main {
    width: calc(100% - 200px);
    height: 100vh;
    background-color: rgb(17, 17, 22);
    overflow: scroll; 
    z-index: 1;  
}

main::-webkit-scrollbar {
    width: 5px;
}

main::-webkit-scrollbar-thumb {
    background-color: rgb(20, 19, 88);
    border-radius: 35px;
}
</style>
