<script setup lang="ts">
import { gsap } from "gsap";

const animationButton = () => {
  const timeline = gsap.timeline({ defaults: { duration: 0.6 } });

  timeline.to(".circle", { opacity: "1", ease: "power1" });
  timeline.to(".button-text", { x: "2rem", ease: "power1" }, "-=0.6");
};

const animationButtonReturn = () => {
  const timeline = gsap.timeline({ defaults: { duration: 0.6 } });

  timeline.to(".circle", { opacity: "0.4", ease: "power1" });
  timeline.to(".button-text", { x: "0rem", ease: "power1" }, "-=0.6");
};

const buttonText = defineProps<{ text: string }>();

</script>

<template>
  <div
    class="container"
    @mouseover="animationButton"
    @mouseleave="animationButtonReturn"
  >
    <div class="circle"></div>
    <div class="text button-text">
        {{ text }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.circle {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border-color: #8f71be;
  opacity: 0.4;
  border-style: solid;
  border-width: 1px;
}

.button-text {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 1rem;
  right: 2.5rem;
}





@media (max-width: 700px) {
  

  .circle {
    width: 3rem;
    height: 3rem;
  }
}
</style>
