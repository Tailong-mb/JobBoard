<script setup lang="ts">
const { getAllcandidacy, insertCandidacy } = useDBCandidacy();

const candidacyData = await getAllcandidacy();

const insertCandidacyClick = async () => {
  try {
    await insertCandidacy(valuesCandidacy);
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
</script>

<template>
  <div class="subTitle">Manage Table Here</div>
  <div class="candidacy-section" v-if="false">
    <div class="subsubTitle">Candidacy</div>
    <div class="candidacy-section-title text">
      <div class="candidacy-section-title-data text">ID Job</div>
      <div class="candidacy-section-title-data text">ID Candidacy</div>
      <div class="candidacy-section-title-data text">ID User</div>
      <div class="candidacy-section-title-data text">Status</div>
      <div class="candidacy-section-title-data text">Message</div>
    </div>
    <div class="candidacy-section-data" v-for="candidacy in candidacyData">
      <CandidacyLine
        :status="candidacy.status"
        :id_job="candidacy.id_job"
        :id_candidacy="candidacy.id_candidacies"
        :id_user="candidacy.id_worker"
        :message="candidacy.message_candidacies"
      ></CandidacyLine>
    </div>
    <div class="text">Insert a new line here :</div>
    <div class="candidacy-section-title" style="margin-bottom: 1rem">
      <div class="candidacy-section-title-data text">ID Candidacy</div>
      <div class="candidacy-section-title-data text">ID User</div>
      <div class="candidacy-section-title-data text">Status</div>
      <div class="candidacy-section-title-data text">Message</div>
    </div>
    <div class="candidacy-section-title">
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
.candidacy-section {
  width: 100%;
}
.candidacy-section-title {
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0rem;
}

.candidacy-section-title-data {
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
}

.candidacy-section-title-data:last-child {
  border-right: solid 2px #8f71be !important;
}
</style>
