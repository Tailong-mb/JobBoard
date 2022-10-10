<script setup lang="ts">

</script>

<template>

    <div class="container">
        <div class="text">
            Enter
        </div>
        <div class="circleContainer">
            <div class="firstCircle" style="--fill:20%">

            </div>
            <div class="secondCircle">

            </div>
        </div>
    
    </div>

</template>

<style scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 10rem;
    width: 10rem;
    opacity: 1;
}

.text{
    position: absolute;
    left: 1rem;
}

.circleContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 10rem;
    width: 10rem;
}

.firstCircle{
    position: absolute;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border-color: #8F71BE;
    border: 1;
    border-style: solid;
    opacity: 1;
}

.secondCircle{
    position: absolute;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    border-color: #8F71BE;
    border: 1;
    border-style: solid;    
    opacity: 0.5;
}
</style>