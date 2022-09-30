<script setup lang="ts">
import { gsap } from "gsap";

const mouseEnter = () => {
  gsap.to(".letter", {
    transform: "rotate(180deg)",
    color: "#8F71BE",
    duration: 0.2,
  });

  gsap.to(".letter", {
    transform: "rotate(0deg)",
    color: "#8F71BE",
    duration: 0.2,
    delay: 0.2,
  });
};

const mouseOut = () => {
  gsap.to(".letter", {
    transform: "rotate(180deg)",
    color: "#00454f",
    duration: 0.2,
  });
  gsap.to(".letter", {
    transform: "rotate(0deg)",
    color: "#00454f",
    duration: 0.2,
    delay: 0.2,
  });
};
</script>

<template>
  <div class="logo-container" @mouseenter="mouseEnter" @mouseleave="mouseOut">
    <div class="letter">N</div>
    <div class="letter">E</div>
    <div class="letter">A</div>
    <div class="letter">R</div>
    <div class="letter">Y</div>
    <div class="letter">O</div>
    <div class="letter">U</div>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.letter {
  font-family: "SuisseIntl", sans-serif;
  font-weight: 600;
  color: #00454f;
  font-size: 1.5rem;
}
</style>
