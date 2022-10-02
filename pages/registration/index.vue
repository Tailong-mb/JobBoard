<script setup lang="ts">
import CircleButton1 from "~~/components/circleButton.vue";
const choiceSignUp = ref(true);

const signUpProfessionnal = reactive({
  email: "",
  password: "",
  name: "",
  siret: "",
  location: "",
  description: "",
});

const professionalChoice = ref(false);

const professionalChoiceClick = () => {
  choiceSignUp.value = false;
  professionalChoice.value = true;
};
</script>

<template>
  <logo></logo>
  <div class="container-choice" v-if="choiceSignUp">
    <div class="subTitle">Type of account</div>
    <div class="container-choice-button">
      <CircleButton
        text="Professional"
        @click="professionalChoiceClick"
      ></CircleButton>
      <rectangle-button text="User"></rectangle-button>
    </div>
  </div>

  <div class="professional-choice" v-if="professionalChoice">
    <div class="subTitle">Professional</div>
    <div class="professional-form">
      <div class="professional-form-data">
        <input
          class="text"
          placeholder="Email"
          v-model="signUpProfessionnal.email"
        />
        <input
          class="text"
          placeholder="Password"
          v-model="signUpProfessionnal.password"
        />
      </div>
      <div class="professional-form-data">
        <input
          class="text"
          placeholder="Name"
          v-model="signUpProfessionnal.name"
        />
        <input
          class="text"
          placeholder="Siret"
          v-model="signUpProfessionnal.siret"
        />
      </div>
      <input
        class="text"
        placeholder="Location"
        v-model="signUpProfessionnal.location"
      />
      <textarea
        class="text"
        placeholder="Description"
        v-model="signUpProfessionnal.description"
      />
      <CircleButton text="Submit"></CircleButton>
    </div>
  </div>
</template>

<style scoped>
input,
textarea {
  border: 2px solid #8f71be;
  border-radius: 0.5rem;
  padding: 0.5rem;
  min-width: 300px;
}

textarea {
  min-height: 200px;
}

.professional-form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
}

.professional-form-data {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}
.professional-choice {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
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

@media (max-width: 512px) {
  .professional-form-data {
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
