<script setup lang="ts">


const {getAllJob} = useDBJob();

const dataJobById = await getAllJob();

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

<div class="job-card-container">

    <jobcard

    v-if="role === 'user'"

    v-for="job in dataJobById"


    :id ="job.id_job"
    :title="job.title_job"
    :description="job.description_job"
    :salary="job.salary"
    :dateStart="job.datestart"
    :dateEnd="job.dateend"
    :location="job.location_job"
    :degree="job.degree"
    :idCompany="job.id_company"
    >
    </jobcard>

</div>
</template>

<style scoped>

.job-card-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
}

</style>