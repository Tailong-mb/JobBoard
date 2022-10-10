<!-- profil candidate which can be edit with json data -->

<script setup lang="ts">

    const {supabase} = useSupabase();
    const {user} = useAuth();

    const workerId = ref();

    // if(process.client){
    //     workerId.value = await supabase.from("worker").select();
    // }

        console.log(user);
</script>
<template>

        <logo></logo>
        <div class="container">
            <div class="container-info">
                <div class="header">
                    <div class="subTitle">degree
                    </div>
                    <div class="informations">
                        <div class="text">mail</div>
                        <div class="text">phone</div>
                    </div>
                    
                </div>
                <h2>name</h2>
                <text class="text"></text>
            </div>
            <rectangle-button class="button" text="edit" @click=""></rectangle-button>
            <rectangle-button class="confirm" text="confirm" @click=""></rectangle-button>

        </div>

        <edit-profil-user class="edit-profil" ></edit-profil-user>
        
</template>
    
<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        top: 5rem;
        position: relative;
        gap: 3rem;
    }
    
    .subTitle{
        padding-right: 1rem;
    }
    .header{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .container-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        gap: 1rem;
    }
    .button{
        position: absolute;
        bottom: -15rem;
    }

    .edit-profil{
        display: none;
        position: absolute;
        top: 3rem;
    }

    h2{
        color: #8f71be;
    }

    .confirm{
        display: none;
        position: absolute;
        bottom: -18rem;
        opacity: 0;

    }

</style>