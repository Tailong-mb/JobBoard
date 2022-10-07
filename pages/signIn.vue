<script setup lang="ts">
import { gsap } from "gsap";
const { signIn } = useAuth();
const { sendEmailResetPassword } = useEmail();

const forgetPassword = ref(false);
const emailSend = ref(false);

const getBackToSignIn = () => {
  gsap.to(".forgetPasswordContainer", {
    duration: 1,
    transform: "translateX(150%)",
    ease: "power4.out",
  });
  setTimeout(() => {
    forgetPassword.value = false;
  }, 1000);
};

const forgetPasswordClick = () => {
  gsap.to(".user-choice", {
    duration: 1,
    transform: "translateX(150%)",
    ease: "power4.out",
  });
  setTimeout(() => {
    forgetPassword.value = true;
  }, 1000);
};

const authError = ref("");

const input = reactive({
  password: "",
  email: "",
  emailForgetPassword: "",
});

// Handle The Submit Form
const handleSubmit = async () => {
  try {
    const signValues = await signIn({
      email: input.email,
      password: input.password,
    });
  } catch (err) {
    authError.value = err.message;
    setTimeout(() => {
      gsap.to(".error-message", { opacity: 0, duration: 1 });
    }, 2000);
    setTimeout(() => {
      authError.value = "";
    }, 3000);
  }
};

const resetPassword = async () => {
  if (input.emailForgetPassword === "") {
    authError.value = "Please Enter Your Email";
    setTimeout(() => {
      gsap.to(".error-message", { opacity: 0, duration: 1 });
    }, 2000);
    setTimeout(() => {
      authError.value = "";
    }, 3000);
  }
  try {
    await sendEmailResetPassword(input.emailForgetPassword);
    emailSend.value = true;
  } catch (err) {
    authError.value = err.message;
    setTimeout(() => {
      gsap.to(".error-message", { opacity: 0, duration: 1 });
    }, 2000);
    setTimeout(() => {
      authError.value = "";
    }, 3000);
  }
};
</script>

<template>
  <logo></logo>

  <!-- USER SIGNIN -->
  <div class="user-choice" v-if="!forgetPassword">
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
      <div class="text passwordForgotten" @click="forgetPasswordClick">
        Password forgotten ?
      </div>
    </div>
    <CircleButton text="Connect" @click="handleSubmit"></CircleButton>
  </div>

  <!-- PASSWORD FORGET -->
  <div class="forgetPasswordContainer" v-if="forgetPassword">
    <!-- GO BACK -->
    <div class="arrow" @click="getBackToSignIn">
      <arrow></arrow>
    </div>
    <div class="subsubTitle">Forget Password</div>
    <div class="user-form-data">
      <div class="input-data">
        <input
          type="text"
          class="text"
          required
          v-model="input.emailForgetPassword"
        />
        <div class="underline"></div>
        <label class="text">Email</label>
      </div>
    </div>
    <CircleButton text="Send" @click="resetPassword()"></CircleButton>
  </div>

  <!-- ERROR MESSAGE -->

  <div class="error-message" v-if="authError">
    <div class="subTitle">Error</div>
    <div class="text">
      <p>{{ authError }}</p>
    </div>
  </div>

  <!-- EMAIL SEND -->
  <div class="emailSend" v-if="emailSend">
    <div class="subTitle">Email Send</div>
    <div class="text">
      <p>
        An email has been sent to you, please check your inbox and follow the
        instructions.
      </p>
    </div>
  </div>
</template>

<style scoped>
.emailSend {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 500;
  background-color: white;
}
.forgetPasswordContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  gap: 2rem;
  min-height: 90vh;
  animation: 1s fadeIn forwards;
}

.arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 300;
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
  opacity: 0;
  animation: 1s fadeIn forwards;
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

.passwordForgotten {
  cursor: pointer;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
