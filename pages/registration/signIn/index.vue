<script setup lang="ts">
import { catchClause } from '@babel/types';

const {signIn,user} = useAuth();
const authState = ref("signIn");

const authError = ref("");


const input = reactive({
  password: "",
  email: ""
});



const handleSubmit = async() => {
  try{
    const signValues = await signIn({ email: input.email, password: input.password });
  
    }
    catch(err){
      authError.value = err.message;
    }
  
}

console.log(user.value)
</script>


<template>
<logo></logo>
  <!-- USER SIGNIN -->
  <div
    class="user-choice"
  >
    <div class="subTitle">Sign In</div>
    <div class="user-form">
      <div class="user-form-data">
        <div class="input-data">
          <input
            type="text"
            name="email"
            class="text"
            required
            v-model="input.email"
          />
          <div class="underline"></div>
          <label class="text">Email</label>
        </div>
        <div class="input-data">
          <input
            class="text"
            type="text"
            name="password"
            required
            v-model="input.password"
          />
          <div class="underline"></div>
          <label class="text">Password</label>
        </div>
      </div>
     
      <CircleButton text="Connect" @click="handleSubmit"></CircleButton>
    </div>
  </div>

  <!-- ERROR MESSAGE -->

  <div class="error-message" v-if="authError">
    <div class="subTitle">Error</div>
    <div class="text">
      <p>{{ authError }}</p>
    </div>
  </div>
</template>

<style scoped>
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
      z-index: 300;
    }
    .email-send {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 90vh;
    }
    
    .user-form {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      align-items: center;
    }
    
    .user-form-data {
      display: flex;
      flex-direction: row;
      gap: 3rem;
    }
    .user-choice {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      margin-top: 2rem;
      position: relative;
      top: 7rem;
      animation: 1s ease-in slideInFromLeft;
    }
    
    @keyframes slideInFromLeft {
      0% {
        opacity: 0;
        transform: translateX(-150%);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .container-choice {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10rem;
    }
    
    .container-choice-button {
      display: flex;
      flex-direction: row;
      gap: 5rem;
      justify-content: space-between;
      align-items: center;
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
    
    .underline:before {
      position: absolute;
      content: "";
      height: 100%;
      width: 100%;
      background: #8f71be;
      transition: transform 0.3s linear;
      transform: scaleX(0);
    }
    
    input:focus ~ .underline:before,
    input:valid ~ .underline::before {
      transform: scaleX(1);
    }
    
    .textarea {
      background-color: #ddd;
      color: #00454f;
      border-radius: 0.626rem;
      border: 0.125rem solid transparent;
      outline: none;
      line-height: 1.4;
      width: 100%;
      min-height: 12rem;
      transition: all 0.2s;
    }
    
    .textarea:valid,
    .textarea:focus {
      cursor: text;
      color: #00454f;
      background-color: white;
      border-color: #8f71be;
    }
    
    @media (max-width: 512px) {
      .user-form-data {
        display: flex;
        flex-direction: row;
        gap: 1rem;
      }
      .container-choice-button {
        flex-direction: column;
        gap: 3rem;
      }
    
      input,
      textarea {
        min-width: 150px;
      }
    }
    
    @media (min-width: 512px) and (max-width: 700px) {
      .container-choice-button {
        flex-direction: column;
        gap: 2rem;
      }
    
      input,
      textarea {
        min-width: 200px;
      }
    }

</style>