<!-- home page -->

<script setup lang="ts">
const { checkEmailResetPasswordEvent } = useEmail();

const router = useRouter();

await checkEmailResetPasswordEvent();

const buttonEnter = () => {
  router.push("/searchJob");
};
</script>

<template>
  <animation-load-home style="pointer-events: none"> </animation-load-home>

  <div class="container">
    <div class="logo">
      <logo></logo>
    </div>

    <div class="subscribe">
      <div clas="signIn">
        <a href="/signIn">
          <CircleButton text="Sign In"></CircleButton>
        </a>
      </div>
      <div class="signUp">
        <a href="/registration">
          <CircleButton text="Sign Up"></CircleButton>
        </a>
      </div>
    </div>

    <div class="bigTitle">
      <div class="wordNear">NEAR</div>
      <div class="wordYou">YOU</div>
    </div>

    <div class="subscribe">
      <div clas="signIn">
        <a href="/signIn">
          <CircleButton text="Sign In"></CircleButton>
        </a>
      </div>
      <div class="signUp">
        <a href="/registration">
          <RectangleButton text="Sign Up"></RectangleButton>
        </a>
      </div>
    </div>

    <div class="bigTitle">
      <div class="wordNear">NEAR</div>
      <div class="wordYou">YOU</div>
    </div>

    <div class="text">
      <span class="nearYou">Near <span class="you">You</span></span> is the
      first platform in numerics allowing meetings between companies and
      encoders.<br />
      Average hiring rate lower than three weeks and average salary is equal to
      50k$ per year.<br />
      In partnership with
      <span class="epi">Epi<span class="steak">Steak</span></span
      >.
    </div>
    <div class="button-enter">
      <ButtonEnter text="Enter" @click="buttonEnter"></ButtonEnter>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  animation: vanish 2s 3.5s ease-in-out forwards;
}

@keyframes vanish {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.subscribe {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: -15rem;
  color: #00454f;
}

.bigTitle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: -35rem;
}

.wordNear {
  color: #00454f;
}

.wordYou {
  color: #8f71be;
}

.text {
  display: none;
}

.nearYou {
  color: #00454f;
  font-style: italic;
}

.you {
  color: #8f71be;
}
.steak {
  color: #8f71be;
  font-style: italic;
}

.button-enter {
  position: absolute;
  top: 5rem;
}
@media screen and (min-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .logo {
    position: absolute;
    right: 5rem;
  }

  .bigTitle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 5rem;
  }

  .subscribe {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -42rem;
    color: #00454f;
  }

  .text {
    display: block;
    position: absolute;
    right: 5rem;
    top: 20rem;
    width: 20rem;
  }

  .button-enter {
    position: absolute;
    top: 5rem;
    right: 5rem;
  }
}

a {
  text-decoration: none;
}

@media screen and (min-width: 1900px) {
  .logo {
    position: absolute;
    right: 10rem;
  }
  .text {
    display: block;
    position: absolute;
    right: 5rem;
    top: 20rem;
    width: 40rem;
  }

  .bigTitle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    left: 10rem;
    top: 15rem;
  }

  .subscribe {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -60rem;
    color: #00454f;
  }
}
</style>
