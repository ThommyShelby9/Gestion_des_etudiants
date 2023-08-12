<script lang="ts" setup>
import { supabase } from '@/lib/supabase'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import router from '@/router';
import { connected } from 'process';
const { addUser } = useUserStore()
const Error = ref('')
/* const emits = defineEmits(['submit']) */

const add = ref({
    nomEtablissement: "",
    email: "",
    registre_de_commerce: "",
    password: "",
})

const connectedUser = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: add.value.email,
        password: add.value.password,
    })
    console.log(data)
     if (error) {
        console.log(error)
        Error.value = error.message
    }else{
        router.replace('/dashboard')
    }
    return {data} 
}
</script>

<template>
    <div class="block">
        <form action="">
            <h4>Connexion</h4>
            <input type="email" name="" id="email" placeholder="Email" v-model="add.email"><br>
            <input type="password" id="password" placeholder="Mot de passe" v-model="add.password"><br>
            <p>{{ Error }}</p>
            <a href="/inscription_user">Pas encore inscrit? Cliquez ici</a>
        </form>
        <button type="submit" id="submit" @click="connectedUser">Connecter</button>
    </div>
</template>    


<style scoped>
* {
    color: black;
    position: relative;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    margin: 0;
    padding: 0;
}

.block {
    padding: 0 30px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

form {
    color: black !important;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px #68c3ff;
    border-radius: 20px;
    gap: 10px;
    padding: 20px;
}

form h4{
    color: rgb(0, 195, 255);
    font-size: 20px;
}

form a{
    border: none;
    color: rgb(0, 195, 255);
    text-decoration: underline;
}

a {
    border: 1px solid black;
    border-radius: 25rem;

}

#submit{
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer; 
    box-shadow: 0 0 5px #68c3ff;
    background-color: rgb(63, 61, 61); 
    color: white;
}

#submit:hover{
    background-color: #68c3ff;
    color: black;
    box-shadow: 0 0 5px rgb(63, 61, 61);
}

input {
    width: 100%;
    color: black !important;
    height: 40px;
    border-radius: 10px;
}
</style>