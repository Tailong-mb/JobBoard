<!-- card for candidate who apply to the job -->

<script setup lang="ts">
import { gsap } from "gsap";
const infoCandidate = defineProps<{
  id_worker: string;
  id_candidacy: string;
}>();
const {getWorkerById} = useDBWorker();
// take informations worker with id worker in cardJobCompany
const dataWorker = await getWorkerById(infoCandidate.id_worker);
console.log(dataWorker)
// delete candidacy 
const {getCandidacyById} = useDBCandidacy();
const {deleteCandidacyById} = useDBCandidacy();
const candidacyById = await getCandidacyById(infoCandidate.id_candidacy);
const clickDeleteCandidacy = async () => {
  try {
    await deleteCandidacyById(candidacyById[0].id_candidacies);
    alert("Candidacy deleted");
  } catch (err) {
    alert(err.message);
  }
};
console.log("candidacyId", candidacyById)
// gsap
const cardCandidateCrossEnter = () => {
  gsap.to(".card-candidate-cross", {
    scale: 1.2,
    duration: 1,
  });
  gsap.to(".card-candidate-left-circle", {
    background: "#00454f",
    borderColor: "#8f71be",
    duration: 1,
  });
  gsap.to(".card-candidate-left-line", {
    background: "#00454f",
    duration: 1,
  });
};
const cardCandidateCrossLeave = () => {
  gsap.to(".card-candidate-cross", {
    scale: 1,
    duration: 1,
  });
  gsap.to(".card-candidate-left-circle", {
    background: "#8f71be",
    borderColor: "#00454f",
    duration: 1,
  });
  gsap.to(".card-candidate-left-line", {
    background: "#8f71be",
    duration: 1,
  });
};
const cardCandidateCrossClick = async () => {
  await clickDeleteCandidacy();
  const t1 = gsap.timeline();
  t1.to(".card-candidate", {
    duration: 1,
    ease: "power4.out",
    transform: "translateX(100%)",
    opacity: 0,
  }).to(".card-candidate", {
    duration: 1,
    display: "none",
  });
};
</script>

<template>
  <div class="card-candidate">
    <div class="card-candidate-left">
      <div class="card-candidate-left-circle"></div>
      <div class="card-candidate-left-line"></div>
    </div>
    <div class="card-candidate-right">
      <div class="card-candidate-information">
        <div class="card-candidate-information-name-cross">
          <div class="subsubTitle">{{ dataWorker[0].first_name }} {{ dataWorker[0].last_name}}</div>
          <div
            class="card-candidate-information-cross-container"
            @mouseenter="cardCandidateCrossEnter"
            @mouseleave="cardCandidateCrossLeave"
            @click="cardCandidateCrossClick"

            
          >
            <div class="card-candidate-cross card-candidate-cross-left" ></div>
            <div class="card-candidate-cross card-candidate-cross-right"></div>
          </div>
        </div>
        <div class="text">{{ dataWorker[0].degree }}</div>
        <a href="mailto: {{email}}" class="text send-email-candidate"></a>
      </div>
      <div class="text">{{ dataWorker[0].phone_number }}</div>
      <div class="text">{{ candidacyById[0].message_candidacies }}</div>
      <div class="card-candidate-button">
        <RectangleButton text="See more"></RectangleButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-candidate-information-name-cross {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card-candidate-cross {
  width: 0.15rem;
  height: 1.5rem;
  background-color: #8f71be;
}
.card-candidate-information-cross-container {
  height: 2rem;
  width: 2em;
}
.card-candidate-cross-left {
  transform: translateX(1rem) rotate(45deg);
}
.card-candidate-cross-right {
  transform: translateX(1rem) translateY(-1.5rem) rotate(-45deg);
}
.card-candidate {
  display: flex;
  flex-direction: row;
  gap: 1em;
  max-width: 500px;
}
.send-email-candidate {
  text-decoration: none;
}
.send-email-candidate:hover {
  text-decoration: underline;
  text-decoration-color: #8f71be;
}
.card-candidate-left {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card-candidate-left-circle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #8f71be;
  border: 0.5em solid #00454f;
}
.card-candidate-left-line {
  width: 0.1rem;
  height: 100%;
  background-color: #8f71be;
  border-radius: 2px;
}
.card-candidate-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}
.card-candidate-information {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
}
@media (max-width: 600px) {
  .card-candidate {
    max-width: 400px;
  }
}
</style>