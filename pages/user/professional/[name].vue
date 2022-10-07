<script setup lang="ts">
const route = useRoute();
const name = route.params.name;
</script>

<template>
  <logo></logo>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 5rem;
  position: relative;
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
  position: relative;
  gap: 1rem;
}
.button {
  position: absolute;
  bottom: -15rem;
}

h2 {
  color: #8f71be;
}
</style>
