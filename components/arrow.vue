<script setup lang="ts">
import { gsap } from "gsap";

const animationButton = () => {
  const timeline = gsap.timeline({ defaults: { duration: 0.6 } });

  timeline.to(".circle", { opacity: "1", ease: "power1" });
  timeline.to(".arrow-button", { x: "-2rem", ease: "power1" }, "-=0.6");
};

const animationButtonReturn = () => {
  const timeline = gsap.timeline({ defaults: { duration: 0.6 } });

  timeline.to(".circle", { opacity: "0.4", ease: "power1" });
  timeline.to(".arrow-button", { x: "0rem", ease: "power1" }, "-=0.6");
};
</script>

<template>
  <div
    class="container"
    @mouseover="animationButton"
    @mouseleave="animationButtonReturn"
  >
    <div class="circle"></div>
    <div class="arrow-button">
      <div class="arrow-head"></div>
      <div class="arrow-stick"></div>
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

.arrow-button {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-left: 1rem;
  right: 2.5rem;
}

.arrow-stick {
  width: 3rem;
  height: 0.1rem;
  background-color: #00454f;
}

.arrow-head {
  width: 0;
  height: 0;
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-top: 0.4rem solid #00454f;
  transform: rotate(90deg);
  position: absolute;
  right: 2.6rem;
}

@media (max-width: 700px) {
  .arrow-stick {
    width: 2rem;
    transform: translateX(-1rem);
  }

  .circle {
    width: 3rem;
    height: 3rem;
  }
}
</style>
