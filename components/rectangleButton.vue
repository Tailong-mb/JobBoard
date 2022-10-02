<script setup lang="ts">
import { gsap } from "gsap";

const animationButton = () => {
  const timeline = gsap.timeline({ defaults: { duration: 0.4 } });

  timeline.to(".losange", {
    x: "3.2rem",
    width: "1rem",
    height: "1rem",
    ease: "power1",
  });
  timeline.to(".arrow", { x: "-1.2rem", ease: "power1" }, "-=0.4");
  timeline.to(".button-square-text", { x: "1.2rem", ease: "power1" }, "-=0.4");
  gsap.to(".button-square-text", { letterSpacing: "0.1rem", duration: 0.4 });
};

const animationButtonReturn = () => {
  const timeline = gsap.timeline({ defaults: { duration: 0.4 } });

  timeline.to(".losange", {
    x: "0rem",
    width: "1.5rem",
    height: "1.5rem",
    ease: "power1",
  });
  timeline.to(".arrow", { x: "0rem", ease: "power1" }, "-=0.4");
  timeline.to(".button-square-text", { x: "0rem", ease: "power1" }, "-=0.4");
  gsap.to(".button-square-text", { letterSpacing: "0.3rem", duration: 0.4 });
};

const buttonText = defineProps<{ text: string }>();
</script>

<template>
  <div
    class="button"
    @mouseover="animationButton"
    @mouseleave="animationButtonReturn"
  >
    <div class="button-square-text">{{ text }}</div>
    <div class="arrow">
      <div class="losange"></div>
      <div class="arrow-stick"></div>
      <div class="arrow-head"></div>
    </div>
  </div>
</template>

<style scoped>
.button-square-text {
  color: #00454f;
  font-size: 1.5rem;
  font-family: "SuisseIntl";
  font-weight: 200;
  letter-spacing: 0.3rem;
}
@media (max-width: 600px) {
  .button-square-text {
    letter-spacing: 0.1rem;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #8f71be;
    padding: 0.5rem;
    margin: 0.1rem;
  }
  .arrow {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 0.5rem;
  }

  .losange {
    width: 1.5rem;
    height: 1.5rem;
    transform: rotate(45deg);
    background-color: #8f71be;
    opacity: 0.2;
    position: absolute;
    left: -0.6rem;
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
    transform: rotate(-90deg);
    position: absolute;
    right: -0.5rem;
  }
}

@media (min-width: 601px) {
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #8f71be;
    padding: 0.5rem;
    margin: 0.1rem;
    width: 15rem;
  }
  .arrow {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 0.5rem;
  }

  .losange {
    width: 1.5rem;
    height: 1.5rem;
    transform: rotate(45deg);
    background-color: #8f71be;
    opacity: 0.2;
    position: absolute;
    left: -0.6rem;
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
    transform: rotate(-90deg);
    position: absolute;
    right: -0.5rem;
  }
}

@media (min-width: 993px) {
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #8f71be;
    padding: 0.5rem;
    margin: 0.1rem;
    width: 20rem;
  }
  .arrow {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    margin: 0.5rem;
  }

  .losange {
    width: 1.5rem;
    height: 1.5rem;
    transform: rotate(45deg);
    background-color: #8f71be;
    opacity: 0.2;
    position: absolute;
    left: -0.6rem;
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
    transform: rotate(-90deg);
    position: absolute;
    right: -0.5rem;
  }
}
</style>
