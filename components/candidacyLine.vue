<script setup lang="ts">
const candidacyDB = useDBCandidacy();

const valuesLineCandidaciesProps = defineProps<{
  status: string;
  id_job: number;
  id_candidacy: number;
  id_user: string;
  message: string;
}>();

const valuesLineCandidacies = reactive({
  status: valuesLineCandidaciesProps.status,
  id_job: valuesLineCandidaciesProps.id_job,
  id_candidacy: valuesLineCandidaciesProps.id_candidacy,
  id_worker: valuesLineCandidaciesProps.id_user,
  message: valuesLineCandidaciesProps.message,
});

const updateCandidacy = async (candidacyData) => {
  try {
    await candidacyDB.updateStatusCandidacy(candidacyData);
    alert("Update Success");
  } catch (err) {
    alert(err.message);
  }
};

const deleteCandidacy = async (id) => {
  try {
    await candidacyDB.deleteCandidacyById(id);
    alert("Delete Success");
  } catch (err) {
    alert(err.message);
  }
};
</script>

<template>
  <div class="candidacyLine">
    <div class="candidacyLineData">
      <input class="text" v-model="valuesLineCandidacies.id_job" />
      <input class="text" v-model="valuesLineCandidacies.id_candidacy" />
      <input class="text" v-model="valuesLineCandidacies.id_worker" />
      <input class="text" v-model="valuesLineCandidacies.status" />
      <input class="text" v-model="valuesLineCandidacies.message" />
    </div>

    <div class="button-container">
      <div
        class="text button-candidacy green-hover"
        @click="updateCandidacy(valuesLineCandidacies)"
      >
        Update
      </div>
      <div
        class="text button-candidacy red-hover"
        @click="deleteCandidacy(valuesLineCandidaciesProps.id_candidacy)"
      >
        Delete Line
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-candidacy {
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
.candidacyLine {
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}
.candidacyLineData {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0rem;
}

input {
  width: 200px;
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
}

input:last-child {
  border-right: solid 2px #8f71be !important;
}
</style>
