<script setup lang="ts">
const { user } = useAuth();
const { insertCandidacyId } = useDBCandidacy();

const idJob = defineProps<{ idJob: number }>();

const applyValuesConnected = reactive({
  message: "",
  id_job: idJob.idJob,
  status: "pending",
});

const applyClick = async () => {
  try {
    await insertCandidacyId(applyValuesConnected, user.value.id);
    alert("You have applied for this job");
  } catch (err) {
    alert(err.message);
  }
};
</script>

<template>
  <div class="form-apply-container">
    <div class="subTitle">Apply Here</div>
    <textarea
      class="text"
      v-model="applyValuesConnected.message"
      placeholder="Write your message here"
    ></textarea>
    <CircleButton text="Apply" @click="applyClick"></CircleButton>
  </div>
</template>

<style scoped>
textarea {
  max-width: 50rem;
}
.form-apply-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  gap: 2rem;
}
</style>
