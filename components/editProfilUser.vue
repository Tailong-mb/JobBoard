<!-- component to edit user home page -->
<script setup lang="ts">

import {gsap} from "gsap";

const {editWorker, getWorkerById} = useDBWorker();

const {user} = useAuth();

const router = useRouter();



const data = await getWorkerById(user.value.id);

const editWorkerData = reactive({
    first_name: data[0].first_name,
    last_name: data[0].last_name,
    phone_number: data[0].phone_number,
    degree: data[0].degree,
});

const checkDataWorker = () => {
    if(editWorkerData.first_name === "" || editWorkerData.last_name === "" || editWorkerData.phone_number === "" || editWorkerData.degree === "" ){
        return false;
}
    return true;
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
    

}

</script>


<template>

    <div class="container-edit-profil">
        <div
        class="sign-in"  
        >
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
    transform: translateX(100%);
    animation: 1 slideIn 1s forwards;
}

@keyframes slideIn {
  100% {
    transform: translateX(0);
  }
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