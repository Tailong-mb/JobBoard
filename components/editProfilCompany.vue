<!-- component to edit user home page -->
<script setup lang="ts">

import {gsap} from "gsap";

const {getCompanyById, editCompany} = useDBCompany();

const {user} = useAuth();

const router = useRouter();



const data = await getCompanyById(user.value.id);

const editCompanyData = reactive({
    siret: data[0].siret,
    name: data[0].name,
    location: data[0].location,
    description: data[0].description,
});

const checkDataCompany = () => {
    if(editCompanyData.siret === "" 
    || editCompanyData.name === "" 
    || editCompanyData.location === "" 
    || editCompanyData.description === "" ){
        return false;
}
    return true;
}


const timeline = gsap.timeline({defaults: {duration: 0.5}});

const dataCompany = async () => {

    if(checkDataCompany()) {
        try{
            const data = await editCompany(editCompanyData,  user.value.id);
            if(data !== null) alert("Edit successful");
        }
        catch(err){
            console.log(err);
        }
    }
    setTimeout(() =>{
        timeline.to(".container-edit-profil", {opacity: 0, display: "none"});

    }, 100)

    router.push("/home");

}

const deleteForm = () =>
{
    timeline.to(".container-edit-profil", {opacity: 0, display: "none"});
    router.push("/home");
}


</script>


<template>

    <div class="container-edit-profil">
        <div
        class="sign-in"  
        >
        <div class="text deleteForm" @click="deleteForm">X</div>
        <div class="subTitle">Profil</div>
        <div class="sign-in-form">
            <div class="sign-in-form-data">
                
                <div class="input-data">
                    <input
                    class="text"
                    type="text"
                    name="password"
                    required
                    placeholder="phone number"
                    v-model="editCompanyData.siret"
                    />
                    <div class="underline"></div>
                    <label class="text"></label>
                </div>
                <div class="input-data">
                    <input
                    class="text"
                    type="text"
                    name="password"
                    required
                    placeholder="first Name"
                    v-model="editCompanyData.name"
            
                    />
                    <div class="underline"></div>
                    <label class="text"></label>
                </div>
                <div class="input-data">
                    <input
                    class="text"
                    type="text"
                    name="password"
                    required
                    placeholder="last name"
                    v-model="editCompanyData.location"
                    />
                    <div class="underline"></div>
                    <label class="text"></label>
                </div>
                <div class="input-data">
                    <input
                    class="text"
                    type="text"
                    name="password"
                    required
                    placeholder="degree"
                    v-model="editCompanyData.description"
                    />
                    <div class="underline"></div>
                    <label class="text"></label>
                </div>
            </div>
            
        </div>

        <div>
            <RectangleButton 
            class="confirm" 
            text="confirm" 
            @click="dataCompany">
            </RectangleButton>
    </div>

    </div>
    </div>
</template>



<style scoped>
.container-edit-profil{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 3rem;
    margin-top: 3rem;
    position: relative;
}

.sign-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 2rem;
    gap: 2rem;
    margin-top: 2rem;
    padding: 2rem;
    border: 2px;
    border-color: #8f71be;
    border-style: solid;
}


.sign-in-form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
}

.sign-in-form-data {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.subTitle{
    top: 5rem;
}

.error-message {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8d7da;
  color: #721c24;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.deleteForm{
    position: absolute;
    right: 0.5rem;
    top: 0;
    cursor: pointer;
}

.password-forgotten{
    margin-top: 2rem;
    cursor: pointer;
}


</style>