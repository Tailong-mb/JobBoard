<script setup lang="ts">
import { gsap } from "gsap";

let navBarState = false;

const toggleNavBar = () => {
  navBarState = !navBarState;

  if (navBarState) {
    const timeline = gsap.timeline();

    timeline
      .to(".navbar-logo", {
        duration: 0.3,
        borderColor: "#fffeff",
      })
      .to(".navbar", {
        duration: 1,
        ease: "power4.out",
        transform: "translateX(0%)",
      })
      .to(
        ".navbar-line",
        {
          duration: 0.3,
          opacity: 0,
          backgroundColor: "#fffeff",
        },
        "<"
      )
      .to(
        ".line-left",
        {
          position: "absolute",
          duration: 0.3,
          rotate: 45,
          opacity: 1,
        },
        "<"
      )
      .to(
        ".line-right",
        {
          position: "absolute",
          duration: 0.3,
          rotate: -45,
          opacity: 1,
        },
        "<"
      );
  } else {
    const timeline2 = gsap.timeline();

    timeline2
      .to(".navbar-logo", {
        duration: 0.3,
        borderColor: "#00454f",
      })
      .to(".navbar", {
        duration: 1.3,
        ease: "power4.out",
        transform: "translateX(40rem)",
      })
      .to(
        ".navbar-line",
        {
          duration: 0.3,
          opacity: 0,
          backgroundColor: "#00454f",
          rotate: 0,
        },
        "<"
      )
      .to(".navbar-line", {
        duration: 0.3,
        opacity: 1,
        position: "relative",
      });
  }
};

const enterNavBarClose = () => {
  const timeline1 = gsap.timeline();

  timeline1
    .to(".navbar-logo", {
      rotate: 180,
      duration: 0.5,
    })
    .to(
      ".navbar-line",
      {
        duration: 0.5,
        scale: 0.8,
      },
      "<.5"
    )
    .to(".navbar-logo", {
      duration: 0.5,
      scale: 0.8,
    });
};

const leaveNavBarClose = () => {
  const timeline2 = gsap.timeline();

  timeline2
    .to(".navbar-logo", {
      duration: 0.5,
      scale: 1,
    })
    .to(".navbar-line", {
      duration: 0.5,
      scale: 1,
    })
    .to(".navbar-logo", {
      duration: 0.5,
      rotate: 0,
    });
};
</script>

<template>
  <div
    class="navbar-logo"
    @mouseenter="enterNavBarClose"
    @mouseleave="leaveNavBarClose"
    @click="toggleNavBar"
  >
    <div class="navbar-line line-left"></div>
    <div class="navbar-line line-right"></div>
  </div>

  <div class="navbar">
    <div class="navbar-elements">
      <NuxtLink class="subTitle navbar-element">HOME</NuxtLink>
      <NuxtLink class="subTitle navbar-element">TEST</NuxtLink>
      <div class="subTitle navbar-element">LOGOUT</div>
    </div>
  </div>
</template>

<style scoped>
.navbar-logo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  position: absolute;
  border-radius: 50%;
  padding: 1rem;
  border: 1px solid #00454f;
  z-index: 100;
}

.navbar-element {
  color: #fffeff;
}

.navbar-elements {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 2rem;
  top: 10rem;
}
.navbar {
  gap: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 254, 255, 1) 33%,
    rgba(0, 69, 79, 1) 100%
  );
  height: 100vh;
  width: 40rem;
  transform: translateX(40rem);
}

.navbar-line {
  height: 0.2rem;
  width: 2.5rem;
  background-color: #00454f;
  border-radius: 0.5rem;
}

@media screen and (max-width: 600px) {
  .navbar-logo {
    right: 3.4rem;
  }
}

@media screen and (min-width: 601px) and (max-width: 992px) {
  .navbar-logo {
    right: 3.4rem;
  }
}
@media screen and (min-width: 993px) and (max-width: 1367px) {
  .navbar-logo {
    top: 2rem;
    height: 4rem;
    width: 4rem;
    right: 5rem;
  }
}

@media screen and (min-width: 1368px) {
  .navbar-logo {
    top: 2rem;
    height: 6rem;
    width: 6rem;
    right: 8rem;
  }

  .navbar-elements {
    top: 15rem;
  }
}
</style>
