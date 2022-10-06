<!-- professional page with component candidate card -->

<script setup lang="ts">

let show = ref(false);
let str = ref("show");


const showCard = () => {
        
    show.value = !show.value;

    if(show.value === false){
        str.value = "show"
    }else{
        str.value = "hide"
    }
}

</script>

<template>
    <div class="containerTitle">
        <span class="subTitle">Candidate</span>
        <div class="showHide subTitle" @click="showCard">{{str}}</div>
    </div>
    <candidate-card v-if="show === true">
        
    </candidate-card>   
</template>

<style scoped>

.containerTitle{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    width: 100%;
    border-bottom: 2px solid #8f71be;
    margin-bottom: 2rem;
}

.showHide{
    cursor: pointer;
    color: #8f71be;
}   

</style>