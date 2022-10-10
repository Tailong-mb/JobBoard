<script setup lang="ts">
const { changePassword } = useAuth();

const modifyAuth = reactive({
  password: "",
  confirmPassword: "",
  error: "",
});

const triggerErrorMessage = () => {
  setTimeout(() => {
    modifyAuth.error = "";
  }, 4000);
  setTimeout(() => {
    gsap.to(".error-message", {
      opacity: 0,
      duration: 0.5,
    });
  }, 3000);
};

const checkPasswordEqual = () => {
  return modifyAuth.password === modifyAuth.confirmPassword;
};

const clickChangePassword = async () => {
  if (checkPasswordEqual()) {
    try {
      await changePassword(modifyAuth.password);
    } catch (err) {
      modifyAuth.error = err.message;
      triggerErrorMessage();
    }
  } else {
    modifyAuth.error = "Passwords do not match";
    triggerErrorMessage();
  }
};
</script>

<template>
  <div class="editAuth-container">
    <div class="form-data">
      <div class="input-data">
        <input
          class="text"
          type="text"
          required
          v-model="modifyAuth.password"
        />
        <div class="underline"></div>
        <label class="text">Password</label>
      </div>
      <div class="input-data">
        <input
          type="text"
          class="text"
          required
          v-model="modifyAuth.confirmPassword"
        />
        <div class="underline"></div>
        <label class="text">confirmPassword</label>
      </div>
    </div>
    <CircleButton
      text="Change My Password"
      @click="clickChangePassword"
    ></CircleButton>

    <div class="error-message" v-if="modifyAuth.error !== ''">
      <div class="subTitle">Error</div>
      <div class="text">
        <p>{{ modifyAuth.error }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ERROR */
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
</style>
