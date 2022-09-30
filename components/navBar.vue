<script setup lang="ts">
import { gsap } from "gsap";
let navBarState = false;

const toggleNavBar = () => {
  navBarState = !navBarState;

  if (navBarState) {
    const timeline = gsap.timeline();

    timeline
      .to(".navbar", {
        duration: 0.5,
        borderColor: "#8F71BE",
      })
      .to(
        ".navbar-line",
        {
          duration: 0.5,
          opacity: 0,
          backgroundColor: "#8F71BE",
        },
        "<"
      )
      .to(
        ".line-left",
        {
          position: "absolute",
          duration: 0.5,
          rotate: 45,
          opacity: 1,
        },
        "<"
      )
      .to(
        ".line-right",
        {
          position: "absolute",
          duration: 0.5,
          rotate: -45,
          opacity: 1,
        },
        "<"
      );
  } else {
    const timeline2 = gsap.timeline();

    timeline2
      .to(".navbar", {
        duration: 0.5,
        borderColor: "#00454f",
      })
      .to(
        ".navbar-line",
        {
          duration: 0.5,
          opacity: 0,
          backgroundColor: "#00454f",
          rotate: 0,
        },
        "<"
      )
      .to(".navbar-line", {
        duration: 0.5,
        opacity: 1,
        position: "relative",
      });
  }
};

const enterNavBarClose = () => {
  const timeline1 = gsap.timeline();

  timeline1
    .to(".navbar", {
      rotate: 180,
      duration: 1,
    })
    .to(
      ".navbar-line",
      {
        duration: 0.5,
        scale: 0.8,
      },
      "<.5"
    )
    .to(".navbar", {
      duration: 0.5,
      scale: 0.8,
    });
};

const leaveNavBarClose = () => {
  const timeline2 = gsap.timeline();

  timeline2
    .to(".navbar", {
      duration: 0.5,
      scale: 1,
    })
    .to(".navbar-line", {
      duration: 0.5,
      scale: 1,
    })
    .to(".navbar", {
      duration: 0.5,
      rotate: 0,
    });
};
</script>

<template>
  <div
    class="navbar"
    @mouseenter="enterNavBarClose"
    @mouseleave="leaveNavBarClose"
    @click="toggleNavBar"
  >
    <div class="navbar-line line-left"></div>
    <div class="navbar-line line-right"></div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 2rem;
  right: 2rem;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  padding: 1rem;
  border: 1px solid #00454f;
}

.navbar-line {
  height: 0.2rem;
  width: 2.5rem;
  background-color: #00454f;
  border-radius: 0.5rem;
}
</style>
