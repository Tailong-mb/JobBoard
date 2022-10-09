<script setup lang="ts">
const { insertOfferJob } = useDB();

const offerJobProps = defineProps<{
  id: string;
}>();

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
      alert("Job offer added successfully");
    } catch (err) {
      alert("Error while adding job offer");
    }
  } else {
    console.log("error");
  }
};
</script>

<template>
  <div class="formJobOffer">
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
.formJobOffer {
  position: absolute;
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
