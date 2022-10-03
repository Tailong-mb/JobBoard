<script setup lang="ts">
import {gsap} from 'gsap';



</script>

<template>
    <div class="animationLoadHome">
        <svg viewbox="0 0 100 100">
            <circle cx="50" cy="50" r="30"></circle>
        </svg>
        <div class="title">
            <div class="subTitle">find the job of your life !</div>
        </div>
    </div>
</template>


<style scoped>

.animationLoadHome{
    animation: vanish 1s 3s ease-in-out forwards;
}

svg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.title{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    text-align: center;
    animation: translate 2s ease-in-out forwards;
}

.title > h2{
    color: #00454f;
    font-weight: 900 !important;
}

circle{
    fill: none;
    stroke: #8F71BE;
    stroke-width: 7;
    stroke-dasharray: 188;
    animation: offset 1s linear forwards;
}

@keyframes offset{
    0%{
        stroke-dashoffset: 188;
    }
    100%{
        stroke-dashoffset: 20;
    }
}

@keyframes translate{
    100%{
        transform: translateY(-1.5rem);

    }
}

@keyframes vanish{
    0%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}

</style>