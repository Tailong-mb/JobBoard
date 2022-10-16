<script setup lang="ts">
const candidacyDB = useDBCandidacy();
const jobOfferDB = useDBJob();

const valuesLineJobProps = defineProps<{
  id_job: number;
  id_company: string;
  title_job: string;
  description_job: string;
  salary: number;
  dateend: Date;
  datestart: Date;
  location_job: string;
  degree_job: string;
}>();

const valuesLineJob = reactive({
  id_job: valuesLineJobProps.id_job,
  id_company: valuesLineJobProps.id_company,
  title_job: valuesLineJobProps.title_job,
  description_job: valuesLineJobProps.description_job,
  salary: valuesLineJobProps.salary,
  dateend: valuesLineJobProps.dateend,
  datestart: valuesLineJobProps.datestart,
  location_job: valuesLineJobProps.location_job,
  degree_job: valuesLineJobProps.degree_job,
});

const updateJob = async () => {
  try {
    await jobOfferDB.updateJobOffer(valuesLineJob);
    alert("Job updated");
  } catch (err) {
    alert(err.message);
  }
};

const deleteJob = async () => {
  try {
    await candidacyDB.deleteCandidacyByIdJob(valuesLineJob.id_job);
    await jobOfferDB.deleteJobById(valuesLineJob.id_job);
    alert("Job deleted");
  } catch (err) {
    alert(err.message);
  }
};
</script>

<template>
  <div class="jobOfferLine">
    <div class="jobOfferLineData">
      <input class="text" v-model="valuesLineJob.id_job" />
      <input class="text" v-model="valuesLineJob.id_company" />
      <input class="text" v-model="valuesLineJob.title_job" />
      <input class="text" v-model="valuesLineJob.description_job" />
      <input class="text" v-model="valuesLineJob.salary" />
      <input class="text" v-model="valuesLineJob.dateend" />
      <input class="text" v-model="valuesLineJob.datestart" />
      <input class="text" v-model="valuesLineJob.location_job" />
      <input class="text" v-model="valuesLineJob.degree_job" />
    </div>

    <div class="button-container">
      <div class="text button-job green-hover" @click="updateJob()">Update</div>
      <div class="text button-job red-hover" @click="deleteJob()">
        Delete Line
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-job {
  border: 1px solid #8f71be;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  padding: 0.5rem;
}

.red-hover:hover {
  background-color: red;
  color: white;
}

.green-hover:hover {
  background-color: #00454f;
  color: white;
}
.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 2rem;
}
.jobOfferLine {
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}
.jobOfferLineData {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0rem;
}

input {
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
  width: 200px;
}

input:last-child {
  border-right: solid 2px #8f71be !important;
}
</style>
