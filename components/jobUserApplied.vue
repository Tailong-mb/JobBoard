<script setup lang="ts">
const jobProps = defineProps<{
  id_job: string;
  status: string;
  id_worker: string;
}>();

const candidacy = {
  id_job: jobProps.id_job,
  id_worker: jobProps.id_worker,
};

const { getTitleJobByJobId } = useDBJob();
const { deleteCandidacy } = useDBCandidacy();

const deleteClick = async () => {
  try {
    await deleteCandidacy(candidacy);
    alert("Suppression valided");
  } catch (err) {
    alert(err.message);
  }
};

const dataJob = await getTitleJobByJobId(jobProps.id_job);
</script>

<template>
  <div class="container-job-user">
    <div class="subsubTitle">{{ dataJob[0].title_job }}</div>

    <div class="text">{{ jobProps.status }}</div>
    <div class="button-delete-job-user text" @click="deleteClick">Delete</div>
  </div>
</template>

<style scoped>
.button-delete-job-user {
  background-color: red;
  color: black;
  border-radius: 50px;
  padding: 1rem;
  border: 1px solid black;
}
.container-job-user {
  display: flex;
  flex-direction: col;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
  height: 5rem;
  background-color: #f2f2f2;
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid #8f71be;
}
</style>
