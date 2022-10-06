<script setup lang="ts">
import { gsap } from "gsap";
</script>

<template>
  <div class="formJobOffer">
    <div class="subTitle">CREATE YOUR OFFER</div>
    
    <div class="formJobOffer-date">
      <div class="formJobOffer-info-row">
        <label for="dateStart" class="text">Start Date :</label>
        <input type="date" id="dateStart" class="text" />
      </div>
      <div class="formJobOffer-info-row">
        <label for="dateEnd" class="text">End Date : </label>
        <input type="date" class="text" id="dateEnd" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.formJobOffer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.formJobOffer-info-row {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

/* Date */
.formJobOffer-date {
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
}

.formJobOffer-date input {
  width: 10rem;
  height: 2rem;
  border: none !important;
  border-bottom: 1px solid #8f71be !important;
  background-color: transparent;
  outline: none;
  position: relative !important;
}

.formJobOffer-date label {
  position: relative;
  bottom: 0 !important;
}
</style>
