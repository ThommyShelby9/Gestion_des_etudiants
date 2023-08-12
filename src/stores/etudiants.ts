import { defineStore } from "pinia";
import {ref} from 'vue'
import {computed} from 'vue'
import {supabase} from '@/lib/supabase'
type etudiant = {id?:number, Nom:string, Prenom: string, Age: string, Genre: string}

export const useEtudiantStore = defineStore('etudiant', () => {
    const etudiants= ref<etudiant[]>([])
    const UserInitialise = ref('')
    async function initialise(){
        const result = await supabase.from('Etudiants').select("*")
        console.log(result.data)
        if(result.data)
        etudiants.value = result.data
    }

   /*   async function userData(){
        const {data} = await supabase.auth.getSession()
        if(data.session){
            const UserInitialise = data.session?.user.email
            return {UserInitialise};
        }
    } */


    async function userData(){
        const {data} = await supabase.auth.getSession()
        if(data.session){
            const UserInitialise = data.session?.user.email
            console.log(UserInitialise)
            const getUser = await supabase.auth.getUser
            return {UserInitialise, getUser};
        }
    }

    async function addstudent(Etudiant: etudiant) {
        const {data,error} = await supabase.from('Etudiants').insert(Etudiant)
        if(data){
            etudiants.value.push(data[0])
        }

    } 
    
   /*   const userName = computed(() =>{
        const data = supabase.auth.getSession()
        if(data.session){
            const User = data.session.user
            return {User}
        }
    })  */


    
    return {etudiants, initialise, UserInitialise, userData, addstudent};
})