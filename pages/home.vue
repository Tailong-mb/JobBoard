<script setup lang="ts">


const {getMetadataRole, user} = useAuth();

const role = ref("");
const id = ref("");
const email = ref("");

setTimeout(() => {
    role.value = getMetadataRole();
    id.value = user.value.id;
    email.value = user.value.email;
}, 0.00001);

</script>

<template>
    <div>
        <div class="header">
            <logo></logo>
            <NavBar></NavBar>
        </div>
        <candidate-home v-if="role === 'user'" :id="id" :email="email" ></candidate-home>
    </div>
</template>

<style scoped>
.header{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem ;
}
</style>