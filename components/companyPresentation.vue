<script setup lang="ts">
const companyInformation = defineProps<{
  name: string;
  description: string;
  siret: string;
  location: string;
  email: string;
}>();
</script>

<template>
  <div class="company-information-container">
    <div class="subTitle">{{ name }}</div>
    <div class="company-information-data">
      <div class="company-data">
        <div class="text underline-company">Siret :</div>
        <div class="text">{{ siret }}</div>
      </div>
      <div class="company-data">
        <div class="text underline-company">Location :</div>
        <div class="text">{{ location }}</div>
      </div>
    </div>
    <div class="text">{{ description }}</div>
    <div class="company-data">
      <div class="text underline-company">Email :</div>
      <div class="text">{{ email }}</div>
    </div>
  </div>
</template>

<style scoped>
.underline-company {
  text-decoration: underline;
  text-decoration-color: #00454f;
}
.company-information-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  gap: 2rem;
  border: solid 2px #8f71be;
  padding: 2rem;
  max-width: 300px;
}

.company-information-data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.company-data {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

@media (min-width: 1360px) {
  .company-information-container {
    max-width: 450px;
  }
}
</style>
