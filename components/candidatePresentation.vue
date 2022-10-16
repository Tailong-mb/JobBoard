<script setup lang="ts">
import { gsap} from "gsap";

const candidateInformation = defineProps<{

    firstName: string;
    lastName: string;
    phoneNumber : string;
    email: string;
    degree: string;
    id: string;

}>();

const editProfil = ref(false);

const appliedCompany = ref(false);

const editAuthentification = ref(false);

const showEditProfil = () => {
    editProfil.value = !editProfil.value;
    setTimeout(() => {
        
        const timeline = gsap.timeline({defaults: {duration: 0.5}});
        timeline.to(".container", {opacity: 0, display: "none"});
        timeline.to(".edit-user-container", {opacity: 1, display: "flex"}, "-=0.5");
    
    }, 100);
    
}

const hideEditProfil = () => {
    editProfil.value = !editProfil.value;

    setTimeout(() => {
    const timeline = gsap.timeline({defaults: {duration: 0.5}});
    timeline.to(".edit-user-container", {opacity: 0, display: "none"});
    timeline.to(".container", {opacity: 1, display: "flex"}, "-=0.5");
        
    }, 100);
    
    
}

const showAppliedCompany = () => {
    appliedCompany.value = !appliedCompany.value;
    setTimeout(() => {
        
        const timeline = gsap.timeline({defaults: {duration: 0.5}});
        timeline.to(".container", {opacity: 0, display: "none"});
        timeline.to(".applied-company", {opacity: 1, display: "flex"}, "-=0.5");
    
    }, 100);
    
}

const showAuthentification = () => {
    editAuthentification.value = !editAuthentification.value;
    setTimeout(() => {
        
        const timeline = gsap.timeline({defaults: {duration: 0.5}});
        timeline.to(".container", {opacity: 0, display: "none"});
        timeline.to(".edit-user-container", {opacity: 1, display: "flex"}, "-=0.5");
    
    }, 100);
    
}

</script>

<template>

    <div class="container">
        <div class="container-info">
            <div class="header">
                <div class="subTitle">{{degree}}
                </div>
                <div class="informations">
                    <div class="text">{{email}}</div>
                    <div class="text">{{phoneNumber}}</div>
                </div>
                
            </div>
            <h2>{{firstName}} {{lastName}}</h2>
        </div>
        <div class="button">
            <rectangle-button class="" text="edit" @click="showEditProfil" v-if="editProfil === false"></rectangle-button>
            <rectangle-button class="" text="applied" @click="showAppliedCompany" v-if="editProfil === false"></rectangle-button>
            <rectangle-button class="" text="change password" @click="showAuthentification" v-if="editAuthentification === false"></rectangle-button>
        </div>
    </div>
    <div class="edit-user-container" v-if="editProfil === true">
        <edit-profil-user :id="id" class="edit"></edit-profil-user>
    </div>
    <div class="edit-user-container" v-if="editAuthentification === true">
        <edit-auth></edit-auth>
    </div>
    <div class="applied-company" v-if="appliedCompany === true">
        <company-applied></company-applied>
    </div>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 5rem;
    position: relative;
    gap: 3rem;
}

.subTitle{
    padding-right: 1rem;
}
.header{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
}

.container-info{
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.button{
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -18rem;
    gap: 2rem;
}

.edit{
    display: flex;
    opacity: 1;

}

h2{
    color: #8f71be;
}

.confirm{
    display: flex;
    position: absolute;
    bottom: -38rem;
}

.edit-user-container{
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    top: 10rem;
    position: relative;
}

.text{
    margin: 1rem;
}



@media screen and (min-width: 768px) {
    .button{
        display: flex;
        flex-direction: row;
        position: absolute;
        bottom: -17rem;
        gap: 3rem;
    }
}

</style>