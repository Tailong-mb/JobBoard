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
    <logo></logo>
    <NavBar></NavBar>
    <CompanyHome
      v-if="role === 'company'"
      :id="id"
      :email="email"
    ></CompanyHome>
  </div>
</template>
