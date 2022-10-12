<script setup lang="ts">

const {user} = useAuth();

const {jobOffer} = useDBWorker();

const data = await jobOffer(user.value.id);



</script>

<template>

<div class="applied-company-container">
    <h2 class="applied-company-title">
        {{data[0].title_job}}
    </h2>
    <div class="applied-company-job-title subTitle">
        {{data[0].title_job}}
    </div>
    <div class="applied-company-job-salary subTitle">
        {{data[0].salary}}
    </div>
    <div class="applied-company-job-description text">
        {{data[0].description_job}} 
    </div>
    <div class="applied-company-job-location text">
        {{data[0].location_job}}
    </div>
    
</div>

</template>


<style scoped>
.applied-company-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border: 1px solid #8f71be;
    padding: 1rem;
    margin: 1rem;
    margin-top: 2rem;
}

h2{
    color: #8f71be;
}
</style>