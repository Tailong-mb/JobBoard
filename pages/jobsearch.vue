<script setup lang="ts">
const { getAllJob } = useDBJob();

const jobData = await getAllJob();
</script>

<template>
  <div class="jobsearch-container">
    <div class="subTitle">Job Offers</div>
    <div class="joboffer-container" v-for="job in jobData">
      <Jobcard
        :jobTitle="job.title_job"
        :idJob="job.id_job"
        :idCompany="job.id_company"
        :date="job.datestart + ' ' + job.dateend"
        :jobLocation="job.location_job"
        :degreeRequired="job.degree_job"
        :salary="job.salary"
        :jobDescription="job.description_job"
      ></Jobcard>
    </div>
  </div>
</template>

<style scoped>
.jobsearch-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}
</style>
