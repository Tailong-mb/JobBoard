<script setup lang="ts"></script>

<template>
  <div class="load-container">
    <div class="load-left"></div>
    <div class="load-right"></div>
    <div class="subTitle text-load text-load-right">NEAR</div>
    <div class="subTitle text-load text-load-left">YOU</div>
  </div>
</template>

<style scoped>
.text-load-right {
  border: #00454f 1rem solid;
  border-right: none;
  padding: 0.3rem;
  animation: 1s fadeOut 1s ease-in-out forwards;
}

.text-load-left {
  border: #8f71be 1rem solid;
  border-left: none;
  padding: 0.3rem;
  animation: 1s fadeOut 1s ease-in-out forwards;
}
.text-load {
  color: white;
  z-index: 1000;
  transform: translateX(-25px);
}
.load-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #8f71be;
  border: #00454f solid 1px;
  animation: 1s translate-left 1s ease-in-out forwards;
}

.load-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: #00454f;
  animation: load-right 1s ease-in-out forwards;
  border: solid 1px #8f71be;
  animation: 1s translate-right 1s ease-in-out forwards;
}
.load-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1500;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  animation: 1s displayOut 1s ease-in-out forwards;
}

@keyframes display {
  100% {
    display: none;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes translate-left {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateX(-100%);
    display: none;
  }
}

@keyframes translate-right {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateX(100%);
    display: none;
  }
}
</style>
