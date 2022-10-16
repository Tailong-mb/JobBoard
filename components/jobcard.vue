<script setup lang="ts">
const { getCompanyNameById } = useDBCompany();
const { isLoggedIn, user } = useAuth();
const {getCandidacyByUserId} = useDBCandidacy();
const isConnected = ref(false);
setTimeout(() => {
  isConnected.value = isLoggedIn();
}, 1);
const showMoreToggle = ref(false);
const apply = ref(false);
const applyNoUser = ref(false);
const jobCardValue = defineProps<{
  date: string;
  jobLocation: string;
  degreeRequired: string;
  jobTitle: string;
  jobDescription: string;
  salary: number;
  idCompany: string;
  idJob: number;
}>();
const companyNameQuery = await getCompanyNameById(jobCardValue.idCompany);
const buttonShowText = ref("Show More");
const companyName = companyNameQuery[0].name;
const jobDescriptionShorted = jobCardValue.jobDescription.slice(0, 50);
const clickShowMore = () => {
  showMoreToggle.value = !showMoreToggle.value;
  buttonShowText.value = showMoreToggle.value ? "Show Less" : "Show More";
};
const checkCandidacy = async () => {
  if(isConnected.value === false){
    return false;
  }
    
  const getCandidacy = await getCandidacyByUserId(user.value.id);
  
  let bool = false;
  getCandidacy.forEach((candidacy) => {
    
    if (candidacy.id_job === jobCardValue.idJob) {
      
      bool = true;
      return;
    }
  });
  return bool;
}
const clickApply = async () => {
  const alreadyApplied = await checkCandidacy();
  if(alreadyApplied){
    alert("You already applied for this job");
    return;
  }
  if (isConnected.value === true) {
    apply.value = !apply.value;
  } else {
    applyNoUser.value = !applyNoUser.value;
  }
  
};
</script>

<template>
  <div class="job-card">
    <div class="job-card-header">
      <div class="job-card-header-logo">
        <div class="square-logo"></div>
      </div>
      <div class="card-title-container">
        <div class="subsubTitle">{{ jobCardValue.jobTitle }}</div>
        <span class="subsubTitle">-</span>
        <span class="subsubTitle">{{ companyName[0].name }}</span>
      </div>
    </div>
    <div class="job-information-container" v-if="showMoreToggle">
      <div class="job-information">
        <div class="text">Location : {{ jobCardValue.jobLocation }}</div>
        <div class="text">Date : {{ jobCardValue.date }}</div>
      </div>
      <div class="job-information" v-if="showMoreToggle">
        <div class="text">Degree Required : {{ degreeRequired }}</div>
        <div class="text">Salary : {{ salary }}$/month</div>
      </div>
    </div>

    <p class="text" v-if="!showMoreToggle">{{ jobDescription }}</p>
    <p class="text" v-if="showMoreToggle">{{ jobDescriptionShorted }}</p>
    <div class="button-apply text" @click="clickApply">Apply</div>
    <RectangleButton
      :text="buttonShowText"
      @click="clickShowMore"
    ></RectangleButton>
    <FormJobApplyUser :idJob="idJob" v-if="apply"></FormJobApplyUser>
    <FormJobApplyNoUser :idJob="idJob" v-if="applyNoUser"></FormJobApplyNoUser>
    <div class="arrow" v-if="apply || applyNoUser">
      <arrow @click="clickApply"></arrow>
    </div>
  </div>
</template>

<style scoped>
.arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1200;
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
.button-apply {
  border: #8f71be 1px solid;
  padding: 1rem;
  border-radius: 0.333rem;
}
.button-apply:hover {
  background-color: #8f71be;
  color: white;
  cursor: pointer;
}
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