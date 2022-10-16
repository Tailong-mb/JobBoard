<script setup lang="ts">
const candidateInformation = defineProps<{
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  degree: string;
  id: string;
}>();
</script>

<template>
  <div class="container">
    <div class="container-info">
      <div class="header">
        <div class="subTitle">{{ degree }}</div>
        <div class="informations">
          <div class="text">{{ email }}</div>
          <div class="text">{{ phoneNumber }}</div>
        </div>
      </div>
      <h2>{{ firstName }} {{ lastName }}</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  height: 100%;
  width: 100%;
  top: 5rem;
  gap: 3rem;
}

.subTitle {
  padding-right: 1rem;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
}

.container-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.edit {
  display: flex;
  opacity: 1;
}

h2 {
  color: #8f71be;
}
.text {
  margin: 1rem;
}

@media screen and (min-width: 768px) {
  .button {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: -17rem;
    gap: 3rem;
  }
}
</style>
