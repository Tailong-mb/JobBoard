<script setup lang="ts">
const { insertOfferJob } = useDBCompany();

const offerJobProps = defineProps<{
  id: string;
}>();

const errorMessage = ref("");

const jobOfferData = reactive({
  title: "",
  description: "",
  salary: "",
  location: "",
  dateStart: Date,
  dateEnd: Date,
  degreeRequired: "",
});

const checkValidDate = () => {
  return jobOfferData.dateStart < jobOfferData.dateEnd;
};

const triggerErrorMessage = () => {
  setTimeout(() => {
    errorMessage.value = "";
  }, 4000);
  setTimeout(() => {
    gsap.to(".error-message", {
      opacity: 0,
      duration: 0.5,
    });
  }, 3000);
};

const checkDataInput = () => {
  if (
    jobOfferData.title === "" ||
    jobOfferData.description === "" ||
    jobOfferData.salary === "" ||
    jobOfferData.location === "" ||
    jobOfferData.dateStart === null ||
    jobOfferData.dateEnd === null ||
    jobOfferData.degreeRequired === "" ||
    !checkValidDate()
  ) {
    return false;
  } else {
    return true;
  }
};

const submitJobOffer = async () => {
  if (checkDataInput()) {
    try {
      const data = await insertOfferJob(jobOfferData, offerJobProps.id);
      if (data !== null) alert("Job offer added successfully");
    } catch (err) {
      errorMessage.value = err.message;
      triggerErrorMessage();
    }
  } else {
    errorMessage.value = "Please fill all the fields with correct values";
    triggerErrorMessage();
  }
};
</script>

<template>
  <div class="formJobOffer">
    <div class="error-message" v-if="errorMessage !== ''">
      <div class="subTitle">Error</div>
      <div class="text">
        <p>{{ errorMessage }}</p>
      </div>
    </div>
    <div class="subTitle">CREATE YOUR OFFER</div>
    <div class="form-data">
      <div class="input-data">
        <input class="text" type="text" required v-model="jobOfferData.title" />
        <div class="underline"></div>
        <label class="text">Job Title</label>
      </div>
      <div class="input-data">
        <input
          class="text"
          type="text"
          required
          v-model="jobOfferData.location"
        />
        <div class="underline"></div>
        <label class="text">Location</label>
      </div>
    </div>
    <div class="form-data">
      <div class="input-data">
        <input
          class="text"
          type="number"
          required
          v-model="jobOfferData.salary"
        />
        <div class="underline"></div>
        <label class="text">Salary</label>
      </div>
    </div>
    <div class="formJobOffer-date">
      <div class="formJobOffer-info-row">
        <label for="dateStart" class="text">Start Date :</label>
        <input
          type="date"
          id="dateStart"
          class="text"
          v-model="jobOfferData.dateStart"
        />
      </div>
      <div class="formJobOffer-info-row">
        <label for="dateEnd" class="text">End Date : </label>
        <input
          type="date"
          class="text"
          id="dateEnd"
          v-model="jobOfferData.dateEnd"
        />
      </div>
    </div>
    <div class="select">
      <select required class="text" v-model="jobOfferData.degreeRequired">
        <option selected disabled>Minimum Degree</option>
        <option value="Associate degree">Associate degree</option>
        <option value="Bachelor's degree">Bachelor's degree</option>
        <option value="Master's degree">Master's degree</option>
        <option value="Doctoral degree">Doctoral degree</option>
      </select>
    </div>
    <textarea
      class="text"
      placeholder="Description"
      v-model="jobOfferData.description"
    />
    <CircleButton text="Submit" @click="submitJobOffer"></CircleButton>
  </div>
</template>

<style scoped>
.error-message {
  background-color: red;
  font-weight: bold;
  text-align: center;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
}
.formJobOffer {
  position: absolute;
  padding-top: 8rem;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  z-index: 500;
  background: white;
  transform: translateX(-100%);
  animation: 1s slideInFromLeft 1s forwards;
}

@keyframes slideInFromLeft {
  100% {
    transform: translateX(0);
  }
}

.formJobOffer-info-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

/* Date */
.formJobOffer-date {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
}

.formJobOffer-date input {
  width: 10rem;
  height: 2rem;
  border: none !important;
  border-bottom: 1px solid #8f71be !important;
  background-color: transparent;
  outline: none;
  position: relative !important;
}

.formJobOffer-date label {
  position: relative;
  bottom: 0 !important;
}

textarea {
  max-width: 500px;
}

@media (max-width: 825px) {
  .formJobOffer-date {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
