<script setup lang="ts">
import { gsap } from "gsap";
const buttonText = defineProps<{ text: string }>();

const animationButtonMouseEnter = () => {
  gsap.to(".circle", {
    scale: 0.9,
    duration: 0.5,
  });
  gsap.to(".button-container", {
    gap: "1.5rem",
    duration: 0.5,
  });
  gsap.to(".button-text", {
    letterSpacing: "0.1rem",
    duration: 0.5,
  });
};

const animationButtonMouseOut = () => {
  gsap.to(".circle", {
    scale: 1,
    duration: 0.5,
  });
  gsap.to(".button-container", {
    gap: "3rem",
    duration: 0.5,
  });
  gsap.to(".button-text", {
    letterSpacing: "0.3rem",
    duration: 0.5,
  });
};
</script>

<template>
  <div
    class="button-container"
    @mouseenter="animationButtonMouseEnter"
    @mouseleave="animationButtonMouseOut"
  >
    <span class="button-text">{{ text }}</span>
    <div class="circle">
      <div class="line"></div>
      <div class="square"></div>
    </div>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3rem;
}

.line {
  width: 0.15rem;
  height: 3rem;
  background-color: #d0d6d9;
  border-radius: 2px;
  opacity: 50%;
  transform: rotate(90deg) translateY(2.5rem);
  z-index: 0;
}
.square {
  width: 7px;
  height: 7px;
  background-color: #00454f;
  animation: 10s linear square-animation infinite;
  animation-delay: 0s;
}

.button-container > span {
  color: #00454f;
  font-size: 1.5rem;
  font-family: "SuisseIntl";
  font-weight: 200;
  letter-spacing: 0.3rem;
}

.circle {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  border: #8f71be solid 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
}

@keyframes square-animation {
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 600px) {
  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }
  .button-container > span {
    font-size: 1rem;
    letter-spacing: 0.2rem;
  }

  .line {
    height: 2rem;
    transform: translateY(-1.5rem) translateX(0.25rem);
  }
  .circle {
    width: 3rem;
    height: 3rem;
  }
}
</style>
