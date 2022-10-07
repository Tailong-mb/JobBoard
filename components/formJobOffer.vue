<script setup lang="ts">
const jobOfferData = reactive({
  title: "",
  description: "",
  salary: "",
  location: "",
  dateStart: Date,
  dateEnd: Date,
  degreeRequired: "",
});
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
          type="text"
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
    <textarea class="text" placeholder="Description" />
    <CircleButton text="Submit"></CircleButton>
  </div>
</template>

<style scoped>
.formJobOffer {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
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
