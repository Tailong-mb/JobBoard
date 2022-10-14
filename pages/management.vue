<script setup lang="ts">
const { getAllcandidacy, insertCandidacy } = useDBCandidacy();
const { getAllJob, insertJob } = useDBJob();

const candidacyData = await getAllcandidacy();
const jobData = await getAllJob();

const insertCandidacyClick = async () => {
  try {
    await insertCandidacy(valuesCandidacy);
    alert("Insert Success");
  } catch (err) {
    alert(err.message);
  }
};

const insertJobClick = async () => {
  try {
    await insertJob(valuesJob);
    alert("Insert Success");
  } catch (err) {
    alert(err.message);
  }
};

const valuesCandidacy = reactive({
  id_job: 0,
  id_worder: "",
  message: "",
  status: "",
});

const valuesJob = reactive({
  id_company: "",
  title_job: "",
  description_job: "default",
  salary: 0,
  dateend: new Date(),
  datestart: new Date(),
  location_job: "",
  degree_job: "",
});
</script>

<template>
  <div class="subTitle">Manage Table Here</div>
  <div class="section">
    <div class="subsubTitle">Job Offer</div>
    <div class="section-row text">
      <div class="section-row-data text">ID Job</div>
      <div class="section-row-data text">ID Company</div>
      <div class="section-row-data text">Title</div>
      <div class="section-row-data text">Description</div>
      <div class="section-row-data text">salary</div>
      <div class="section-row-data text">dateend</div>
      <div class="section-row-data text">datestart</div>
      <div class="section-row-data text">location</div>
      <div class="section-row-data text">degree</div>
      <div class="section-row-data text">Message</div>
    </div>
    <div class="section-data" v-for="job in jobData">
      <JobOfferLine
        :id_job="job.id_job"
        :id_company="job.id_company"
        :title_job="job.title_job"
        :description_job="job.description_job"
        :salary="job.salary"
        :dateend="job.dateend"
        :datestart="job.datestart"
        :location_job="job.location_job"
        :degree_job="job.degree_job"
      >
      </JobOfferLine>
    </div>
    <div class="text">Insert a new line here :</div>
    <div class="section-row" style="margin-bottom: 1rem">
      <div class="section-row-data text">ID Company</div>
      <div class="section-row-data text">Title</div>
      <div class="section-row-data text">Description</div>
      <div class="section-row-data text">salary</div>
      <div class="section-row-data text">dateend</div>
      <div class="section-row-data text">datestart</div>
      <div class="section-row-data text">location</div>
      <div class="section-row-data text">degree</div>
    </div>
    <div class="section-row">
      <input v-model="valuesJob.id_company" class="section-row-data" />
      <input v-model="valuesJob.title_job" class="section-row-data" />
      <input v-model="valuesJob.description_job" class="section-row-data" />
      <input v-model="valuesJob.salary" class="section-row-data" />
      <input v-model="valuesJob.dateend" class="section-row-data" type="date" />
      <input
        v-model="valuesJob.datestart"
        class="section-row-data"
        type="date"
      />
      <input v-model="valuesJob.location_job" class="section-row-data" />
      <input v-model="valuesJob.degree_job" class="section-row-data" />
    </div>
    <div class="text button-add" @click="insertJobClick()">Add</div>
  </div>
  <div class="section" v-if="false">
    <div class="subsubTitle">Candidacy</div>
    <div class="section-row text">
      <div class="section-row-data text">ID Job</div>
      <div class="section-row-data text">ID Candidacy</div>
      <div class="section-row-data text">ID User</div>
      <div class="section-row-data text">Status</div>
      <div class="section-row-data text">Message</div>
    </div>
    <div class="section-data" v-for="candidacy in candidacyData">
      <CandidacyLine
        :status="candidacy.status"
        :id_job="candidacy.id_job"
        :id_candidacy="candidacy.id_candidacies"
        :id_user="candidacy.id_worker"
        :message="candidacy.message_candidacies"
      ></CandidacyLine>
    </div>
    <div class="text">Insert a new line here :</div>
    <div class="section-row" style="margin-bottom: 1rem">
      <div class="section-row-data text">ID Candidacy</div>
      <div class="section-row-data text">ID User</div>
      <div class="section-row-data text">Status</div>
      <div class="section-row-data text">Message</div>
    </div>
    <div class="section-row">
      <input class="text" v-model="valuesCandidacy.id_job" />
      <input class="text" v-model="valuesCandidacy.id_worder" />
      <input class="text" v-model="valuesCandidacy.message" />
      <input class="text" v-model="valuesCandidacy.status" />
    </div>
    <div class="text button-add" @click="insertCandidacyClick">Add</div>
  </div>
</template>

<style scoped>
.button-add {
  border: 1px solid #8f71be;
  border-radius: 50%;
  padding: 0.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
}

input {
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
}

input:last-child {
  border-right: solid 2px #8f71be !important;
}

.button-add:hover {
  background-color: #00454f;
  color: white;
}
.section {
  width: 100%;
}
.section-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0rem;
}

.section-row-data {
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
}

.section-row-data:last-child {
  border-right: solid 2px #8f71be !important;
}
</style>
