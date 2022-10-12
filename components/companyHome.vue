<script setup lang="ts">
import { gsap } from "gsap";
const companyProps = defineProps<{
  id: string;
  email: string;
}>();

const { getCompanyById } = useDBCompany();
const { getJobTitleByCompanyId } = useDBJob();
const createJobOffer = ref(false);
const changeAuth = ref(false);

const dataCompany = await getCompanyById(companyProps.id);
const dataJobOffer = await getJobTitleByCompanyId(companyProps.id);

const showEditAuth = () => {
  gsap.to(".company-presentation-container", {
    transform: "translateX(100%)",
    ease: "power4.out",
    duration: 1,
  });
  changeAuth.value = true;
};

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

const unShowEditAuth = () => {
  gsap.to(".edit-auth-container", {
    transform: "translateX(100%)",
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
    changeAuth.value = false;
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

    <div v-if="changeAuth" class="arrow-company-container">
      <arrow @click="unShowEditAuth"></arrow>
    </div>
    <div v-if="changeAuth" class="edit-auth-container">
      <EditAuth></EditAuth>
    </div>
    <div class="company-presentation-container">
      <CompanyPresentation
        :name="dataCompany[0].name"
        :description="dataCompany[0].description"
        :siret="dataCompany[0].siret"
        :location="dataCompany[0].location"
        :email="companyProps.email"
      ></CompanyPresentation>
      <div class="option-company-button">
        <CircleButton
          text="Create a job"
          @click="showCreateJobOffer"
        ></CircleButton>
        <RectangleButton
          text="Change My information"
          @click="showEditAuth"
        ></RectangleButton>
      </div>
      <div class="subTitle">Your Current Job Offer</div>
      <div class="joboffer-card-container">
        <div v-for="jobOffer in dataJobOffer">
          <CardJobCompany
            :title="jobOffer['title_job']"
            :id="jobOffer['id_job']"
          ></CardJobCompany>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.joboffer-card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  align-content: center;
  margin-top: 5rem;
  width: 100%;
}

.joboffer-card-container > div {
  min-width: calc(25% - 2rem);
}

.arrow-company-container {
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 1200;
  opacity: 0;
  animation: 1s fadeIn 2s forwards;
}

.company-home-container {
  animation: 1s fadeIn forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.edit-auth-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.option-company-button {
  margin-bottom: 5rem;
  margin-top: 5rem;
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
    margin-bottom: 3.5rem;
    margin-top: 3.5rem;
  }
}
</style>
