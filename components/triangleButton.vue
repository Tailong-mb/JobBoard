<script lang="ts" setup>
const text = defineProps<{
  text: string;
}>();
</script>

<template>
  <div class="triangle-button">
    <div class="triangle"></div>
    <div class="text">
      {{ text.text }}
    </div>
  </div>
</template>

<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-left: 0.3rem solid transparent;
  border-right: 0.3rem solid transparent;
  border-bottom: 0.3rem solid #00454f;
  transform: rotate(45deg) translateY(-0.5rem);
}

.triangle-button {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border-bottom: #00454f solid 1px;
}
</style>
