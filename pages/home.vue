<script setup lang="ts">
const { getMetadataRole, user } = useAuth();

definePageMeta({
  middleware: ["auth"],
});

const role = ref("");
const id = ref("");
const email = ref("");

setTimeout(() => {
  if (process.client) {
    role.value = getMetadataRole();
    id.value = user.value.id;
    email.value = user.value.email;
  }
}, 1);
</script>

<template>
  <div>
    <AnimationLoadPage></AnimationLoadPage>
    <logo></logo>
    <NavBar></NavBar>
    <CompanyHome
      v-if="role === 'company'"
      :id="id"
      :email="email"
    ></CompanyHome>
    <CandidateHome 
    v-if="role === 'user'" 
    :id="id" 
    :email="email">
    </CandidateHome>
  </div>
</template>
