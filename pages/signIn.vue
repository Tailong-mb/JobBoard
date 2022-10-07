<script setup lang="ts">
import { time } from "console";
import { gsap } from "gsap";
const { signIn } = useAuth();

const forgetPassword = ref(false);

onMounted(() => {
  gsap.to(".user-choice", {
    duration: 2,
    opacity: 1,
    ease: "power4.out",
  });
});

const forgetPasswordClick = () => {
  forgetPassword.value = true;

  gsap.to(".user-choice", {
    duration: 1,
    opacity: 0,
    ease: "power4.out",
  });
  gsap.to(".forgetPasswordContainer", {
    duration: 1,
    opacity: 1,
  });
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

      <CircleButton text="Connect" @click="handleSubmit"></CircleButton>
    </div>
  </div>

  <!-- PASSWORD FORGET -->
  <div class="forgetPasswordContainer" v-if="forgetPassword">
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
.forgetPasswordContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  gap: 2rem;
  min-height: 90vh;
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
