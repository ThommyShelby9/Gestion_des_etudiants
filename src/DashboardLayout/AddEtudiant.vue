
<template>
    <div class="block">
        <form action="">
            <h4>Ajouter un nouvel étudiant</h4>
            <input type="text" id="name" placeholder="Nom de l'étudiant" v-model="studentData.Nom"><br>
            <input type="text" id="" placeholder="Prenom" v-model="studentData.Prenom"><br>
            <input type="number"  placeholder="Age" v-model="studentData.Age"><br>
            <input type="text" name="" id="" placeholder="Genre" v-model="studentData.Genre">
        </form>
        <button type="submit" id="submit" @click="createEtudiant">Ajouter</button>
    </div>
</template>


<script lang="ts" setup>
import { supabase } from '@/lib/supabase'
import { ref } from 'vue'
import { useEtudiantStore } from '@/stores/etudiants'
import router from '@/router';
import { storeToRefs } from 'pinia';
const {etudiants} = storeToRefs(useEtudiantStore())
const {addstudent } = useEtudiantStore()

const studentData = ref({
    Nom: '',
    Prenom: '',
    Age: '',
    Genre: ''
})



const createEtudiant = async () => {
    await addstudent(studentData.value)
   console.log(etudiants)
   router.replace('/dashboard/etudiant')
}
</script>

<style>
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
        gap: 10px;
        padding: 20px;
        box-shadow: 0 0 5px #68c3ff;
        border-radius: 20px;
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