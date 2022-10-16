<script setup lang="ts">
import { gsap } from "gsap";

const candidateProps = defineProps<{
  id: string;
  email: string;
}>();

const { getWorkerById } = useDBWorker();

const data = await getWorkerById(candidateProps.id);

const changeAuth = ref(false);

const changeProfil = ref(false);

const showEditAuth = () => {
  gsap.to(".candidate-prensentation-container", {
    duration: 0.5,
    ease: "power4.out",
    transform: "translateX(-300%)",
  });
  changeAuth.value = true;
};

const showEditProfile = () => {
  gsap.to(".candidate-prensentation-container", {
    duration: 1,
    ease: "power4.out",
    transform: "translateX(300%)",
  });
  changeProfil.value = true;
};

const unShowEditAuth = () => {
  const timeline = gsap.timeline();

  timeline
    .to(".edit-auth-container", {
      transform: "translateX(100%)",
      ease: "power4.out",
      duration: 1,
    })
    .to(".candidate-prensentation-container", {
      duration: 1,
      ease: "power4.out",
      transform: "translateX(0)",
    })
    .to(".arrow-candidate-container", {
      transform: "translateX(-100%)",
      ease: "power4.out",
      duration: 1,
    });

  setTimeout(() => {
    changeAuth.value = false;
  }, 2000);
};

const unShowEditProfile = () => {
  const timeline = gsap.timeline();

  timeline
    .to(".edit-profil-user", {
      transform: "translateX(400%)",
      ease: "power4.out",
      duration: 1,
    })
    .to(".candidate-prensentation-container", {
      duration: 1,
      ease: "power4.out",
      transform: "translateX(0)",
    })
    .to(".arrow-candidate-container", {
      transform: "translateX(-100%)",
      ease: "power4.out",
      duration: 1,
    });

  setTimeout(() => {
    changeProfil.value = false;
  }, 3000);
};
</script>

<template>
  <div class="home-candidate-container">
    <div v-if="changeAuth" class="arrow-candidate-container">
      <arrow @click="unShowEditAuth"></arrow>
    </div>
    <div v-if="changeAuth" class="edit-auth-container">
      <EditAuth></EditAuth>
    </div>

    <div v-if="changeProfil" class="arrow-candidate-container">
      <arrow @click="unShowEditProfile"></arrow>
    </div>
    <div v-if="changeProfil" class="edit-profil-user">
      <EditProfilUser></EditProfilUser>
    </div>
    <div class="candidate-prensentation-container">
      <div class="candidate-presentation">
        <CandidatePresentation
          :id="id"
          :firstName="data[0].first_name"
          :lastName="data[0].last_name"
          :phoneNumber="data[0].phone_number"
          :email="candidateProps.email"
          :degree="data[0].degree"
        >
        </CandidatePresentation>
      </div>

      <div class="button">
        <div class="button-edit">
          <CircleButton text="Edit Profil" @click="showEditProfile">
          </CircleButton>

          <rectangle-button
            text="Change Authentification"
            @click="showEditAuth"
          >
          </rectangle-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-candidate-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  top: 3rem;
  position: relative;
  gap: 3rem;
  animation: 1s fadeIn 2s forwards;
}

.candidate-presentation {
  display: flex;
  margin-bottom: 2rem;
}
.edit-user-container {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  top: 10rem;
  position: relative;
}

.button {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -18rem;
  align-items: center;
  gap: 3rem;
}

.button-edit {
  display: flex;
  flex-direction: row;
  gap: 3rem;
}

.arrow-candidate-container {
  position: absolute;
  top: 3rem;
  left: 3rem;
  z-index: 1200;
  opacity: 0;
  animation: 1s fadeIn 2s forwards;
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

@media screen and (max-width: 768px) {
  .button {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: -18rem;
    gap: 3rem;
  }

  .button-edit {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
