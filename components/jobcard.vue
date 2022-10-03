<script setup lang="ts">
const jobCardValue = defineProps<{
  companyName: string;
  date: string;
  jobLocation: string;
  degreeRequired: string;
  jobTitle: string;
  jobDescription: string;
  salary: string;
}>();
</script>

<template>
  <div class="job-card">
    <div class="job-card-header">
      <div class="job-card-header-logo">
        <div class="square-logo"></div>
      </div>
      <div class="card-title-container">
        <div class="subsubTitle">{{ jobTitle }}</div>
        <span class="subsubTitle">-</span>
        <span class="subsubTitle">{{ companyName }}</span>
      </div>
    </div>
    <div class="job-information-container">
      <div class="job-information">
        <div class="text">Location : {{ jobLocation }}</div>
        <div class="text">Date : {{ date }}</div>
      </div>
      <div class="job-information">
        <div class="text">Degree Required : {{ degreeRequired }}</div>
        <div class="text">Salary : {{ salary }}$/month</div>
      </div>
    </div>
    <p class="text">{{ jobDescription }}</p>
    <RectangleButton text="Apply"></RectangleButton>
  </div>
</template>

<style scoped>
/** LOGO */
.square-logo {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #00454f;
  margin: 0.77rem;
  transform: rotate(45deg);
  animation: 10s infinite squareRotationIn;
}

.job-information {
  display: flex;
  flex-direction: column;
}

.job-card-header-logo {
  border: 2px solid #8f71be;
  animation: 10s linear infinite squareRotationOut;
}

@keyframes squareRotationOut {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes squareRotationIn {
  0% {
    transform: rotate(45deg);
  }
  100% {
    transform: rotate(405deg);
  }
}

/** CARD HEADER */
.job-card-header {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.card-title-container {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  text-transform: uppercase;
  flex-wrap: wrap;
}

p {
  text-align: justify;
}

/* GLOBAL CARD */
.job-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #8f71be;
  align-items: center;
  border-radius: 1rem;
  max-width: 800px;
}
/** CARD INFORMATION */

.job-information-container {
  display: flex;
  flex-direction: row;
  gap: 5rem;
  align-items: center;
}
@media (min-width: 1367px) {
  .square-logo {
    width: 0.77rem;
    height: 0.77rem;
    margin: 1rem;
    border: 3px;
  }
}
</style>
