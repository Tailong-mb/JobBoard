<script setup lang="ts">

// take job id

const titleProps = defineProps<{
  title: string;
  id: string;
}>();



const statutAppliant = ref(false);


const { deleteJobById } = useDBJob();

const {getCandidacyByJobId, deleteCandidacyByIdJob} = useDBCandidacy();

const {getWorkerById} = useDBWorker();

const clickDeleteCard = async () => {
  try {
    await deleteCandidacyByIdJob(titleProps.id);
    await deleteJobById(titleProps.id);
    alert("Job deleted");
  } catch (err) {
    alert(err.message);
  }
};


const showAppliant = () => {
  statutAppliant.value = !statutAppliant.value;
};

// take table candidacy with id job

const dataCandidacy = await getCandidacyByJobId(titleProps.id);


console.log("dataCandidacy",dataCandidacy)


// hide appliant

const hideAppliant = () => {
  statutAppliant.value = !statutAppliant.value;
};


</script>

<template>
  <div class="card-job-title" v-if="statutAppliant === false">
    <div class="card-job-information-name-cross">
      <div class="subsubTitle">{{ titleProps.title }}</div>
      <div
        class="card-job-information-cross-container"
        @click="clickDeleteCard"
      >
        <div class="card-job-cross card-job-cross-left"></div>
        <div class="card-job-cross card-job-cross-right"></div>
      </div>
    </div>
    <TriangleButton text="Show Appliant" @click="showAppliant">
      
    </TriangleButton>

    
  </div>

      <!-- show card with all candidate for this job -->

  <div class="" v-if="statutAppliant === true">
      <CandidateCard 
      v-for="worker in dataCandidacy"
      :id_worker="worker.id_worker"
      :id_candidacy="worker.id_candidacies"
      >
      </CandidateCard>
      <TriangleButton class="triangleButton" text="Hide Appliant" @click="hideAppliant">
      </TriangleButton>
  </div>

</template>

<style scoped>
.card-job-title {
  min-width: calc(50% - 2rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  border: solid 2px #8f71be;
  margin-bottom: 1rem;
}

.card-job-information-name-cross {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.card-job-cross {
  width: 0.15rem;
  height: 1.5rem;
  background-color: #8f71be;
}

.card-job-information-cross-container:hover > .card-job-cross {
  cursor: pointer;
  animation: 1s colorRed forwards;
}

@keyframes colorRed {
  100% {
    background-color: #00454f;
  }
}

.card-job-information-cross-container {
  height: 2rem;
  width: 2em;
}
.card-job-cross-left {
  transform: translateX(1rem) rotate(45deg);
}

.card-job-cross-right {
  transform: translateX(1rem) translateY(-1.5rem) rotate(-45deg);
}

.triangleButton {
  margin-top: 1rem;
}
</style>
