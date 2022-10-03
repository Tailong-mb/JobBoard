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
        <div class="subTitle">{{ jobTitle }}</div>
        <span class="subTitle">-</span>
        <span class="subTitle">{{ companyName }}</span>
      </div>
    </div>
    <div class="job-information">
      <div class="text">{{ jobLocation }}</div>
      <div class="text">{{ date }}</div>
    </div>
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
  flex-direction: row;
  gap: 2rem;
  align-items: center;
}

.job-information > div {
  color: #8f71be;
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

/* GLOBAL CARD */
.job-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
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
