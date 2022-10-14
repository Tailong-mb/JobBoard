<script setup lang="ts">


const {getAllJob} = useDBJob();

const dataJobById = await getAllJob();

const { getMetadataRole } = useAuth();


const role = ref("");

setTimeout(() => {
    if (process.client) {
    role.value = getMetadataRole();
    console.log(role.value)
}
}, 1);

</script>

<template>

<div class="job-card-container">

    <jobcard


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
    :role="role"
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