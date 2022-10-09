<script setup lang="ts">
import { gsap } from "gsap";
const companyProps = defineProps<{
  id: string;
  email: string;
}>();

const { getCompanyById } = useDB();
const createJobOffer = ref(false);

const data = await getCompanyById(companyProps.id);

const showCreateJobOffer = () => {
  gsap.to(".company-presentation-container", {
    transform: "translateX(-100%)",
    ease: "power4.out",
    duration: 1,
  });
  createJobOffer.value = true;
};

const unShowCreateJobOffer = () => {
  gsap.to(".formJobOffer", {
    transform: "translateX(-100%)",
    ease: "power4.out",
    duration: 1,
  });

  gsap.to(".arrow-company-container", {
    transform: "translateX(-100%)",
    ease: "power4.out",
    duration: 1,
  });

  gsap.to(".company-presentation-container", {
    transform: "translateX(0%)",
    ease: "power4.out",
    duration: 1,
    delay: 1,
  });

  setTimeout(() => {
    createJobOffer.value = false;
  }, 3000);
};
</script>

<template>
  <div class="company-home-container">
    <div v-if="createJobOffer" class="arrow-company-container">
      <arrow @click="unShowCreateJobOffer"></arrow>
    </div>
    <div class="formJobOffer" v-if="createJobOffer">
      <FormJobOffer :id="companyProps.id"></FormJobOffer>
    </div>
    <div class="company-presentation-container">
      <CompanyPresentation
        :name="data[0].name"
        :description="data[0].description"
        :siret="data[0].siret"
        :location="data[0].location"
        :email="companyProps.email"
      ></CompanyPresentation>
      <div class="option-company-button">
        <CircleButton
          text="Create a job"
          @click="showCreateJobOffer"
        ></CircleButton>
        <RectangleButton text="Change My information"></RectangleButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrow-company-container {
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 600;
  opacity: 0;
  animation: 1s fadeIn 2s forwards;
}

@keyframes fadeIn {
  100% {
    opacity: 1;
  }
}
.option-company-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}
.company-presentation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

@media (max-width: 768px) {
  .option-company-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
