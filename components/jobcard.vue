<script setup lang="ts">

import { gsap } from "gsap";

const jobCardValue = defineProps<{
  id: string;
  dateStart: string;
  dateEnd: string;
  degree: string;
  location: string;
  title: string;
  description: string;
  salary: string;
  idCompany: string;
}>();

const {getWorkerById} = useDBWorker();

const {user} = useAuth();

const workerId = await getWorkerById(user.value.id);

const {getCompanyById} = useDBCompany();

const companyName = await getCompanyById(jobCardValue.idCompany);

const {insertCandidacy} = useDBCandidacy();


const candidacy = {
    id_worker: workerId[0].id_worker,
    id_job: jobCardValue.id,
    status: "pending",
  }


const applyJob =  () => {

  // hide the card

  gsap.to(".job-card", {
    duration: 0.5,
    opacity: 0,
    x: -100,
    ease: "power2.inOut",
  });

  // if user applied to the job, create candidate card for the company

  insertCandidacy(candidacy);


  alert("Job applied");

};

</script>

<template>
  <div class="job-card">
    <div class="job-card-header">
      <div class="job-card-header-logo">
        <div class="square-logo"></div>
      </div>
      <div class="card-title-container">
        <div class="subsubTitle">{{ jobCardValue.title }}</div>
        <span class="subsubTitle">-</span>
        <span class="subsubTitle">{{ companyName[0].name }}</span>
      </div>
    </div>
    <div class="job-information-container">
      <div class="job-information">
        <div class="text">Location : {{ jobCardValue.location }}</div>
        <div class="text">Date : {{ jobCardValue.dateStart }} to {{jobCardValue.dateEnd}}</div>
      </div>
      <div class="job-information">
        <div class="text">Degree Required : {{ jobCardValue.degree }}</div>
        <div class="text">Salary : {{ jobCardValue.salary }}$/month</div>
      </div>
    </div>
    <p class="text">{{ jobCardValue.description }}</p>
    <RectangleButton text="Apply" @click="applyJob"></RectangleButton>
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

@media (max-width: 650px) {
  .job-card {
    max-width: 400px;
  }
}

@media (min-width: 651px) and (max-width: 900px) {
  .job-card {
    max-width: 500px;
  }
}

@media (min-width: 901px) and (max-width: 1200px) {
  .job-card {
    max-width: 600px;
  }
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
