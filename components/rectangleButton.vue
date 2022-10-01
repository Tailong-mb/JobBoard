<script setup lang="ts">
import { gsap } from "gsap";


const animationButton = () => {

    const timeline = gsap.timeline({defaults: {duration : 0.4}});

    timeline.to('.losange', {x: '3.2rem', width:'1rem', height:'1rem', ease: 'power1'});
    timeline.to('.arrow', {x: '-1.2rem', ease: 'power1'}, '-=0.4');
    timeline.to('.text', {x: '1.2rem', ease: 'power1'}, '-=0.4');
    }


const animationButtonReturn = () => {

    const timeline = gsap.timeline({defaults: {duration : 0.4}});

    timeline.to('.losange', {x: '0rem', width:'1.5rem', height:'1.5rem', ease: 'power1'});
    timeline.to('.arrow', {x: '0rem', ease: 'power1'}, '-=0.4');
    timeline.to('.text', {x: '0rem', ease: 'power1'}, '-=0.4');
}


</script>

<template>
    <div class="button" @mouseover="animationButton"  @mouseleave="animationButtonReturn">
        <div class="text">
            bonjour
        </div>
        <div class="arrow">
            <div class="losange"></div>
            <div class="arrow-stick"></div>
            <div class="arrow-head"></div>
        </div>
    </div>
</template>

<style scoped>

@media screen and (max-width: 600px) {
    .button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #8F71BE;
        padding: 0.5rem;
        margin: 0.1rem;
    }
    .arrow {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        margin: 0.5rem;

    }

    .losange {
        width: 1.5rem;
        height: 1.5rem;
        transform: rotate(45deg);
        background-color: #8F71BE;
        opacity: 0.2;
        position: absolute;
        left: -0.6rem;
    }
    .arrow-stick {
        width:3rem;
        height: 0.1rem;
        background-color: #00454F;
    }

    .arrow-head{
        width: 0;
        height: 0;
        border-left: 0.4rem solid transparent;
        border-right: 0.4rem solid transparent;
        border-top: 0.4rem solid #00454F;
        transform: rotate(-90deg);
        position: absolute;
        right: -0.5rem;
    }
}

@media screen and (min-width: 601px) and (max-width: 992px){
    .button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #8F71BE;
        padding: 0.5rem;
        margin: 0.1rem;
        width: 15rem;
    }
    .arrow {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        margin: 0.5rem;

    }

    .losange {
        width: 1.5rem;
        height: 1.5rem;
        transform: rotate(45deg);
        background-color: #8F71BE;
        opacity: 0.2;
        position: absolute;
        left: -0.6rem;
    }
    .arrow-stick {
        width:3rem;
        height: 0.1rem;
        background-color: #00454F;
    }

    .arrow-head{
        width: 0;
        height: 0;
        border-left: 0.4rem solid transparent;
        border-right: 0.4rem solid transparent;
        border-top: 0.4rem solid #00454F;
        transform: rotate(-90deg);
        position: absolute;
        right: -0.5rem;
    }
}

@media screen and (min-width: 993px) and (max-width: 1367px) {
    .button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #8F71BE;
        padding: 0.5rem;
        margin: 0.1rem;
        width: 20rem;
    }
    .arrow {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        margin: 0.5rem;

    }

    .losange {
        width: 1.5rem;
        height: 1.5rem;
        transform: rotate(45deg);
        background-color: #8F71BE;
        opacity: 0.2;
        position: absolute;
        left: -0.6rem;
    }
    .arrow-stick {
        width:3rem;
        height: 0.1rem;
        background-color: #00454F;
    }

    .arrow-head{
        width: 0;
        height: 0;
        border-left: 0.4rem solid transparent;
        border-right: 0.4rem solid transparent;
        border-top: 0.4rem solid #00454F;
        transform: rotate(-90deg);
        position: absolute;
        right: -0.5rem;
    }
}

@media screen and (min-width: 1367px){
    .button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #8F71BE;
        padding: 0.5rem;
        margin: 0.1rem;
        width: 25rem;
    }
    .arrow {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        margin: 0.5rem;
        width: 3rem;
    }

    .losange {
        width: 1.5rem;
        height: 1.5rem;
        transform: rotate(45deg);
        background-color: #8F71BE;
        opacity: 0.2;
        position: absolute;
        left: -0.6rem;
    }
    .arrow-stick {
        width:5rem;
        height: 0.2rem;
        background-color: #00454F;
    }

    .arrow-head{
        width: 0;
        height: 0;
        border-left: 0.6rem solid transparent;
        border-right: 0.6rem solid transparent;
        border-top: 0.6rem solid #00454F;
        transform: rotate(-90deg);
        position: absolute;
        right: -0.5rem;
    }
}

</style>