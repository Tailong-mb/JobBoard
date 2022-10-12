<script setup lang="ts">

    const candidateProps = defineProps<{
        id: string;
        email: string; 
    }>()

    const { getWorkerById } = useDBWorker();

    const data = await getWorkerById(candidateProps.id);


</script>

<template>

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


</template>

<style scoped>
</style>