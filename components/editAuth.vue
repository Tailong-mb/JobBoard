<script setup lang="ts">
const { changePassword, changeEmail, user, getMetadataRole } = useAuth();
const { supabaseService } = useSupabaseService();
const { signOut } = useAuth();
const { getJobByCompanyId, deleteJobByCompanyId } = useDBJob();
const { deleteCandidacyByIdJob, deleteCandidacyByIdWorker } = useDBCandidacy();

const clickDelete = async () => {
  try {
    await signOut();
    if (getMetadataRole() === "company") {
      const companyData = await getJobByCompanyId(user.value.id);
      companyData.forEach(async (job) => {
        await deleteCandidacyByIdJob(job.id_job);
      });
      await deleteJobByCompanyId(user.value.id);
      supabaseService.auth.api.deleteUser(user.value.id);
    } else {
      await deleteCandidacyByIdWorker(user.value.id);
      supabaseService.auth.api.deleteUser(user.value.id);
    }
    const router = useRouter();
    router.push("/");
  } catch (err) {
    alert(err.message);
  }
};

const modifyAuth = reactive({
  password: "",
  confirmPassword: "",
  error: "",
  email: "",
});

setTimeout(() => {
  modifyAuth.email = user.value.email;
}, 1000);

const triggerErrorMessage = () => {
  setTimeout(() => {
    modifyAuth.error = "";
  }, 4000);
  setTimeout(() => {
    gsap.to(".error-message", {
      opacity: 0,
      duration: 0.5,
    });
  }, 3000);
};

const checkPasswordEqual = () => {
  return modifyAuth.password === modifyAuth.confirmPassword;
};

const clickChangeAuth = async () => {
  if (checkPasswordEqual()) {
    try {
      await changePassword(modifyAuth.password);
      await changeEmail(modifyAuth.email);
      alert("Your auth has been changed");
    } catch (err) {
      modifyAuth.error = err.message;
      triggerErrorMessage();
    }
  } else {
    modifyAuth.error = "Passwords do not match";
    triggerErrorMessage();
  }
};
</script>

<template>
  <div class="editAuth-container">
    <div class="subTitle">Change Your Email and Password</div>
    <div class="form-data">
      <div class="input-data">
        <input class="text" type="text" required v-model="modifyAuth.email" />
        <div class="underline"></div>
        <label class="text">Email</label>
      </div>
    </div>
    <div class="form-data">
      <div class="input-data">
        <input
          class="text"
          type="text"
          required
          v-model="modifyAuth.password"
        />
        <div class="underline"></div>
        <label class="text">Password</label>
      </div>
      <div class="input-data">
        <input
          type="text"
          class="text"
          required
          v-model="modifyAuth.confirmPassword"
        />
        <div class="underline"></div>
        <label class="text">confirmPassword</label>
      </div>
    </div>
    <CircleButton
      text="Change My Password"
      @click="clickChangeAuth"
    ></CircleButton>

    <RectangleButton
      text="Suppress Account"
      @click="clickDelete"
    ></RectangleButton>

    <div class="error-message" v-if="modifyAuth.error !== ''">
      <div class="subTitle">Error</div>
      <div class="text">
        <p>{{ modifyAuth.error }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ERROR */

.editAuth-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  transform: translateX(100%);
  min-height: 100%;
  width: 100%;
  animation: 1 slideIn 1s forwards;
}

@keyframes slideIn {
  100% {
    transform: translateX(0);
  }
}
.error-message {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8d7da;
  color: #721c24;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;
}

.editAuth-container > .subTitle {
  text-align: center;
}
</style>
