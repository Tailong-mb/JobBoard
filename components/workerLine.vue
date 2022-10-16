<script setup lang="ts">
const { deleteWorker, updateWorker } = useDBWorker();
const { deleteCandidacyByIdWorker } = useDBCandidacy();

const workerProps = defineProps<{
  id_worker: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  degree: string;
}>();

const workerValues = reactive({
  id_worker: workerProps.id_worker,
  first_name: workerProps.first_name,
  last_name: workerProps.last_name,
  phone_number: workerProps.phone_number,
  degree: workerProps.degree,
});

const updateWorkerClick = async () => {
  try {
    await deleteCandidacyByIdWorker(workerValues.id_worker);
    await updateWorker(workerValues);
    alert("Update Success");
  } catch (err) {
    alert(err.message);
  }
};

const deleteWorkerClick = async () => {
  try {
    await deleteWorker(workerValues.id_worker);
    alert("Delete Success");
  } catch (err) {
    alert(err.message);
  }
};
</script>

<template>
  <div class="workerLine">
    <div class="workerLineData">
      <input class="text" v-model="workerValues.id_worker" />
      <input class="text" v-model="workerValues.first_name" />
      <input class="text" v-model="workerValues.last_name" />
      <input class="text" v-model="workerValues.phone_number" />
      <input class="text" v-model="workerValues.degree" />
    </div>
    <div class="button-container">
      <div class="text button-job green-hover" @click="updateWorkerClick">
        Update
      </div>
      <div class="text button-job red-hover" @click="deleteWorkerClick">
        Delete Line
      </div>
    </div>
  </div>
</template>

<style scoped>
.workerLine {
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.workerLineData {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0rem;
}

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
