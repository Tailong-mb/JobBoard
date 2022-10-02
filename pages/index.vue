<script setup lang="ts">
import Logo1 from '~~/components/logo.vue';
const { supabase } = useSupabase();
</script>

<template>
    <div class="container">
        <div class="logo">
            <logo></logo>
        </div>

        <div class="subscribe">
            <div class="signIn">
                <CircleButton></CircleButton>
                <div class="subTitle">Sign In</div>
            </div>
            <div class="signUp">
                <CircleButton></CircleButton>
                <div class="subTitle">Sign Up</div>
            </div>
        </div>

        <div class="bigTitle">
            <div class="wordNear">
                NEAR
            </div>
            <div class="wordYou">
                YOU
            </div>
        </div>
    </div>



</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        position: relative;
    }

    .subscribe{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 100%;
        position: absolute;
        bottom: -10rem;
        color: #00454f;
    }

    .bigTitle{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        bottom:-30rem;
    }

    .wordNear{
        color: #00454f;
    }

    .wordYou{
        color: #8F71BE;
    }


</style>


