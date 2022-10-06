<script setup lang="ts">
import { gsap } from "gsap";

// Composables
const auth = useAuth();
const { supabase } = useSupabase();

const showConfirmEmailMessage = ref(false);
const choiceSignUp = ref(true);
const authError = ref("");
const professionalChoice = ref(false);
const userChoice = ref(false);

const goBackProToChoice = () => {
  setTimeout(() => {
    professionalChoice.value = false;
    choiceSignUp.value = true;
  }, 1000);
  gsap.to(".professional-choice", {
    ease: "power4.out",
    transform: "translateX(-200%)",
    duration: 1,
  });
  gsap.to(".arrow", {
    opacity: 0,
    duration: 1,
  });
};

const goBackUserToChoice = () => {
  setTimeout(() => {
    userChoice.value = false;
    choiceSignUp.value = true;
  }, 1000);
  gsap.to(".user-choice", {
    ease: "power4.out",
    transform: "translateX(200%)",
    duration: 1,
  });
  gsap.to(".arrow", {
    opacity: 0,
    duration: 1,
  });
};

const signUpProfessionnal = reactive({
  email: "",
  password: "",
  name: "",
  siret: "",
  location: "",
  description: "",
});

const signUpUser = reactive({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  degree: "",
  phoneNumber: "",
});

const handleSubmitPro = async () => {
  if (checkValuesPro()) return;

  try {
    const user = await auth.signUp({
      email: signUpProfessionnal.email,
      password: signUpProfessionnal.password,
      role: "company",
    });
    showConfirmEmailMessage.value = true;
    insertIntoTableCompany(user.id);
  } catch (err) {
    authError.value = err.message;
    triggerErrorMessage();
  }
};

const triggerErrorMessage = () => {
  setTimeout(() => {
    authError.value = "";
  }, 4000);
  setTimeout(() => {
    gsap.to(".error-message", {
      opacity: 0,
      duration: 0.5,
    });
  }, 3000);
};

const handleSubmitUser = async () => {
  if (
    !signUpUser.phoneNumber.match(
      "^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$"
    )
  ) {
    authError.value = "Invalid Phone Number";
    triggerErrorMessage();
    return;
  }

  if (checkValuesUser()) return;

  try {
    const user = await auth.signUp({
      email: signUpUser.email,
      password: signUpUser.password,
      role: "user",
    });
    showConfirmEmailMessage.value = true;
    insertIntoTableUser(user.id);
  } catch (err) {
    authError.value = err.message;
    setTimeout(() => {
      authError.value = "";
    }, 4000);
    setTimeout(() => {
      gsap.to(".error-message", {
        opacity: 0,
        duration: 0.5,
      });
    }, 3000);
  }
};

const insertIntoTableUser = async (userId) => {
  const { error } = await supabase.from("worker").insert([
    {
      id_worker: userId,
      first_name: signUpUser.firstName,
      last_name: signUpUser.lastName,
      degree: signUpUser.degree,
      phone_number: signUpUser.phoneNumber,
    },
  ]);
  if (error !== null) {
    if (error.code === "23503" || error.code === "23505") {
      authError.value =
        "This email already exists if you didn't receive the confirmation email another one has been send";
    } else {
      authError.value = error.message;
    }
    triggerErrorMessage();
  }
};
const insertIntoTableCompany = async (user) => {
  const { error } = await supabase.from("company").insert([
    {
      id_company: user,
      name: signUpProfessionnal.name,
      siret: signUpProfessionnal.siret,
      location: signUpProfessionnal.location,
      description: signUpProfessionnal.description,
    },
  ]);
  if (error !== null) {
    if (error.code === "23503" || error.code === "23505") {
      authError.value =
        "This email already exists if you didn't receive the confirmation email another one has been send";
    } else {
      authError.value = error.message;
    }
    triggerErrorMessage();
  }
};

const professionalChoiceClick = () => {
  professionalChoice.value = true;
  gsap.to(".container-choice", {
    ease: "power4.out",
    transform: "translateX(-100%)",
    duration: 1,
  });

  setTimeout(() => {
    choiceSignUp.value = false;
  }, 800);
};

const userChoiceClick = () => {
  userChoice.value = true;
  gsap.to(".container-choice", {
    ease: "power4.out",
    transform: "translateX(200%)",
    duration: 1,
  });

  setTimeout(() => {
    choiceSignUp.value = false;
  }, 800);
};

const checkValuesPro = () => {
  if (
    signUpProfessionnal.email === "" ||
    signUpProfessionnal.password === "" ||
    signUpProfessionnal.name === "" ||
    signUpProfessionnal.siret === "" ||
    signUpProfessionnal.location === "" ||
    signUpProfessionnal.description === ""
  ) {
    return true;
  } else {
    return false;
  }
};

const checkValuesUser = () => {
  if (
    signUpUser.email === "" ||
    signUpUser.password === "" ||
    signUpUser.firstName === "" ||
    signUpUser.lastName === "" ||
    signUpUser.degree === "" ||
    signUpUser.phoneNumber === ""
  ) {
    return true;
  } else {
    return false;
  }
};
</script>

<template>
  <!-- GO BACK -->
  <div class="arrow" v-if="!choiceSignUp && professionalChoice">
    <arrow @click="goBackProToChoice"></arrow>
  </div>

  <div class="arrow" v-if="!choiceSignUp && userChoice">
    <arrow @click="goBackUserToChoice"></arrow>
  </div>

  <logo></logo>
  <!-- CHOICE -->
  <div class="container-choice" v-if="choiceSignUp">
    <div class="subTitle">TYPE OF ACCOUNT</div>
    <div class="container-choice-button">
      <CircleButton
        text="Professional"
        @click="professionalChoiceClick"
      ></CircleButton>
      <rectangle-button text="User" @click="userChoiceClick"></rectangle-button>
    </div>
  </div>

  <!-- PROFESSIONAL SIGNUP -->
  <div
    class="professional-choice signup"
    v-if="professionalChoice && !showConfirmEmailMessage"
  >
    <div class="subTitle">PROFESSIONAL</div>
    <div class="professional-form">
      <div class="form-data">
        <div class="input-data">
          <input
            type="text"
            name="email"
            class="text"
            required
            v-model="signUpProfessionnal.email"
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
            v-model="signUpProfessionnal.password"
          />
          <div class="underline"></div>
          <label class="text">Password</label>
        </div>
      </div>
      <div class="form-data">
        <div class="input-data">
          <input
            class="text"
            type="text"
            name="name"
            required
            v-model="signUpProfessionnal.name"
          />
          <div class="underline"></div>
          <label class="text">Name</label>
        </div>
        <div class="input-data">
          <input
            class="text"
            type="text"
            name="siret"
            required
            v-model="signUpProfessionnal.siret"
          />
          <div class="underline"></div>
          <label class="text">Siret</label>
        </div>
      </div>
      <div class="input-data">
        <input
          class="text"
          type="text"
          name="location"
          required
          v-model="signUpProfessionnal.location"
        />
        <div class="underline"></div>
        <label class="text">Location</label>
      </div>
      <textarea
        class="text"
        placeholder="Description"
        v-model="signUpProfessionnal.description"
      />
      <CircleButton text="Submit" @click="handleSubmitPro"></CircleButton>
    </div>
  </div>

  <!-- USER SIGNUP -->
  <div class="user-choice signup" v-if="userChoice && !showConfirmEmailMessage">
    <div class="subTitle">USER</div>
    <div class="user-form">
      <div class="form-data">
        <div class="input-data">
          <input
            type="text"
            name="email"
            class="text"
            required
            v-model="signUpUser.email"
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
            v-model="signUpUser.password"
          />
          <div class="underline"></div>
          <label class="text">Password</label>
        </div>
      </div>
      <div class="form-data">
        <div class="input-data">
          <input
            class="text"
            type="text"
            name="firstName"
            required
            v-model="signUpUser.firstName"
          />
          <div class="underline"></div>
          <label class="text">First Name</label>
        </div>
        <div class="input-data">
          <input
            class="text"
            type="text"
            name="lastName"
            required
            v-model="signUpUser.lastName"
          />
          <div class="underline"></div>
          <label class="text">Last Name</label>
        </div>
      </div>
      <div class="input-data">
        <input
          class="text"
          type="text"
          name="phone"
          required
          v-model="signUpUser.phoneNumber"
        />
        <div class="underline"></div>
        <label class="text">Phone</label>
      </div>
      <div class="select">
        <select required class="text">
          <option selected disabled>Select your degree</option>
          <option value="Associate degree">Associate degree</option>
          <option value="Bachelor's degree">Bachelor's degree</option>
          <option value="Master's degree">Master's degree</option>
          <option value="Doctoral degree">Doctoral degree</option>
        </select>
      </div>
      <CircleButton text="Submit" @click="handleSubmitUser"></CircleButton>
    </div>
  </div>

  <!-- CONFIRM EMAIL -->
  <div class="email-send" v-if="showConfirmEmailMessage">
    <div class="subTitle">Email send</div>
    <div class="text">
      <p>
        A confirmation email has been sent to your email address. Please click
        on the link in the email to complete your registration.
      </p>
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
/* ARROW */
.arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 300;
  animation: 2s ease-in-out fadeIn-animation;
}

@keyframes fadeIn-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

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

/* SELECT */
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: white;
  background-image: none;
  flex: 1;
  padding: 0 0.5em;
  color: #fff;
  cursor: pointer;
  color: #00454f;
}
select::-ms-expand {
  display: none;
}
.select {
  margin-right: 2em;
  margin-left: 2em;
  position: relative;
  display: flex;
  width: 30em;
  height: 3em;
  line-height: 3;
  background: white;
  overflow: hidden;
  border-radius: 0.25em;
  border: #8f71be solid 1px;
}
.select::after {
  content: "\25BC";
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 1em;
  background: #8f71be;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}
.select:hover::after {
  color: white;
}

/* EMAIL SEND */
.email-send {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  z-index: 400;
}

p {
  text-align: center;
}

/* CHOICE PRO*/
textarea {
  background-color: white;
  padding: 1em;
  border-radius: 0.626rem;
  border: 0.125rem solid #8f71be;
  outline: none;
  line-height: 1.4;
  width: calc(100% - 2em);
  min-height: 5rem;
  transition: all 0.2s;
}
.professional-form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

.user-form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

.form-data {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}

.user-choice {
  animation: 1s ease-in slideInFromLeft;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(150%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.signup {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
}
.professional-choice {
  animation: 1s ease-in slideInFromRight;
}

@keyframes slideInFromRight {
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
  animation: 1s ease-in-out fadeIn-animation;
}

.container-choice-button {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 512px) {
  .form-data {
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

  .select {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
}

@media (min-width: 512px) and (max-width: 700px) {
  .container-choice-button {
    flex-direction: column;
    gap: 2rem;
  }

  .select {
    width: 20em;
  }

  input,
  textarea {
    min-width: 200px;
  }
}

@media (min-width: 700px) and (max-width: 1370px) {
  .container-choice-button {
    flex-direction: column;
    gap: 2rem;
  }

  input,
  textarea {
    min-width: 300px;
  }
}
</style>
