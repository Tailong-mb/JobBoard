<!-- component to edit user home page -->
<script setup lang="ts">

import {gsap} from "gsap";

const {editWorker} = useDBWorker();

const {user} = useAuth();

const router = useRouter();

const editWorkerData = reactive({
    first_name: "",
    last_name: "",
    phone_number: "",
    degree: "",
});

const checkDataWorker = () => {
    if(editWorkerData.first_name === "" || 
        editWorkerData.last_name === "" || 
        editWorkerData.phone_number === "" || 
        editWorkerData.degree === "") {
        return false;
    }
    else return true;
}

const timeline = gsap.timeline({defaults: {duration: 0.5}});

const DataWorker = async () => {

    if(checkDataWorker()) {
        try{
            const data = await editWorker(editWorkerData,  user.value.id);
            if(data !== null) alert("Edit successful");
        }
        catch(err){
            console.log(err);
        }
    }

    timeline.to(".container-edit-profil", {opacity: 0, display: "none"});

}


</script>


<template>

    <div class="container-edit-profil">
        <div
        class="sign-in"  
        >
        <div class="subTitle deleteForm"></div>
        <div class="subTitle">Profil</div>
        <div class="sign-in-form">
            <div class="sign-in-form-data">
                <div class="input-data">
                    <input
                    type="text"
                    name="email"
                    class="text"
                    required
                    placeholder="email"
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
                    placeholder="phone number"
                    v-model="editWorkerData.phone_number"
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
                    v-model="editWorkerData.first_name"
            
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
                    v-model="editWorkerData.last_name"
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
                    v-model="editWorkerData.degree"
                    />
                    <div class="underline"></div>
                    <label class="text"></label>
                </div>
            </div>
            
        </div>

        <div><RectangleButton class="confirm" text="confirm" @click="DataWorker"></RectangleButton></div>

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

.deleteForm{
    position: absolute;
    right: 2rem;
    top: 0;
    cursor: pointer;
}

.input-data {
    height: 2.5rem;
    width: 100%;
    position: relative;
}

input {
    height: 100%;
    width: 100%;
    border: none !important;
    border-bottom: 2px solid silver;
}

input[type="text"],
input[type="email"] {
    background: transparent;
    border: none !important;
}

input:focus ~ label,
input:valid ~ label {
    transform: translateY(-1.25rem);
    color: rgb(81, 79, 79);
}

label {
    position: absolute;
    bottom: 0.626rem;
    left: 0;
    color: #00454f;
    pointer-events: none;
    transition: all 0.3s ease;
}

.underline {
    position: absolute;
    bottom: 0;
    height: 0.125rem;
    width: 100%;
    background: #8f71be;
}


.password-forgotten{
    margin-top: 2rem;
    cursor: pointer;
}


</style>