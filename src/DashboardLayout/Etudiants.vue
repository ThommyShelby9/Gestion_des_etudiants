<script lang="ts" setup>
import { useEtudiantStore } from '@/stores/etudiants';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue';
import {useUserStore} from '@/stores/user'
const  { userData } = useUserStore()
const {UserInitialise, UserConnectData} = storeToRefs(useUserStore())
const { initialise } = useEtudiantStore()
const { etudiants, dataConnection,dataConnect } = storeToRefs(useEtudiantStore())
const router = useRouter()



onMounted(async () => {
    await initialise()
    await userData()
    console.log(dataConnection)
    console.log(UserConnectData)
    console
}) 
/* const verifyId = dataConnection.value.find(item =>(item.idUser === dataConnect.value.find(item =>(item.id)) )) */





</script>

<template>
    <div class="container">
        <div class="main_content">
            <div class="main_content_top">
                <div class="main_content_top_left">
                    <a href="/dashboard/addstudent">
                        <button id="addStudient" type="submit">Ajouter un étudiant</button>
                    </a>
                </div>
                <div class="main_content_top_right">
                    <input type="text" id="search"><button id="search_btn" type="submit">Rechercher</button>
                </div>
            </div>
            <div class="content_table">
               <div class="container">
                <table class="table">
                    <tr>
                        <th>ID</th>
                        <th>Nom </th>
                        <th>Prenom</th>
                        <th>Age</th>
                        <th>Genre</th>
                    </tr>
                    <tbody v-for="element in etudiants">
                        <tr v-if="element.email_user == UserConnectData">
                            <td>{{ element.id }}</td>
                            <td>{{ element.Nom }}</td>
                            <td>{{ element.Prenom }}</td>
                            <td>{{ element.Age }}</td>
                            <td>{{ element.Genre }}</td>
                            <td>
                                <div class="two_btn">
                                    <button id="modify">Modifier</button>|<button id="delete">Supprimer</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
               </div>
            </div> 

<!--               <div class="modal__contribute">
                     <a href="#"></a>
                     <form action="" method="post">
                        <input type="text" name="Nom" id="" placeholder="Nom">  
                        <input type="text" name="prenom" placeholder="Prenom">
                        <input type="text" name="age" placeholder="Age">
                        <input type="text" name="genre" placeholder="Genre">
                        <button>Soumettre</button>
                       
                     </form>
                  
                 </div>  -->
        </div>
    </div>
</template>

<style scoped>

.main_content_top {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 10px;
}

.main_content_top_right {
    display: flex;
}

.content_table {
    margin-top: 65px;
}

table.table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    color: white !important;
}

table.table tr th,
td {
    color: white !important;
    border: solid 1px rgb(0, 195, 255);
    padding: 10px;
    align-items: center;
}


table tr:nth-child(even) td,
thead th {
    background-color: var(--color-dark);
    color: white;
}

table a.btn,
table button {
    border: none;
    color: var(--color-white);
    padding: 5px 17px;
}

#search_btn {
    border: 1px solid black;
    border-radius: 0 27px 27px 0;
    box-shadow: 0 0 5px #68c3ff;
    cursor: pointer;
}

#search_btn:hover {
    background-color: #68c3ff;
    color: black;
    box-shadow: 0 0 5px rgb(63, 61, 61);
}

#search {
    width: 100%;
    padding-left: 50px;
    height: 30px;
    border-radius: 27px 0 0 27px;
}

#addStudient,
#modify,
#delete {
    padding: 5px 15px;
    border-radius: 20rem;
    font-size: 15px;
    font-weight: 800;
    border: none;
    box-shadow: 0 0 5px #68c3ff;
    cursor: pointer;
    background-color: rgb(63, 61, 61);
    color: white;
}

#addStudient:hover,
#modify:hover, #delete:hover {
    background-color: #68c3ff;
    color: black;
    box-shadow: 0 0 5px rgb(63, 61, 61);
}


.modal__contribute {
    display: flex;
    background-color: aqua;
    padding: 30px 10px;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) scale(0);
    visibility: hidden;
    opacity: 0;
    background-color: #000000b5;
    z-index: 10;
    border: 2px solid green;
    border: 2px solid green;
    border-right: none;
    transition: 1s;
}

.modal__contribute.active {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
}

.modal__contribute input {
    height: 40px;
    border-radius: 35px 0 0 35px;
    border: none;
    padding-left: 15px;
    color: #434343;
}

.modal__contribute button {
    border-radius: 0 35px 35px 0;
    padding: 7.5px 22px;
    border: none;
    background-color: rgb(0, 128, 11);
    color: #fff;
    cursor: pointer;
}

.modal__contribute a {
    position: absolute;
    display: block;
    width: 30px;
    height: 30px;
    background-color: rgb(0, 128, 11);
    top: 30px;
    right: 30px;
}

.modal__contribute a::after,
.modal__contribute a::before {
    content: '';
    width: 30px;
    height: 4px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;

}

.modal__contribute a::after {
    transform: translate(-50%, -50%) rotate(-45deg);
}

.modal__contribute a::before {
    transform: translate(-50%, -50%) rotate(45deg);
}</style>