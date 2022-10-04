<script setup lang="ts">
    import {gsap} from "gsap";

    const auth = useAuth();
    const { supabase } = useSupabase();
    
    const signUpUser = reactive({
        email: "",
        password: "",
        name: "",
        surname: "",
        location: "",
        description: "",
    });

    const editButton = () => {
        gsap.to('.container', {opacity: "0"})
        gsap.to('.edit-profil',{display: "flex", opacity: 1, delay: 1})
    }



    
    </script>
    
    <template>

        <logo></logo>
        <div class="container">
            <div class="container-info">
                <div class="header">
                    <div class="subTitle">grade</div>
                    <div class="informations">
                        <div class="text">mail</div>
                        <div class="text">phone number</div>
                    </div>
                    
                </div>
                <h2>Name</h2>
                <text class="text">Description text</text>
            </div>
            <rectangle-button class="button" text="edit profil" @click="editButton"></rectangle-button>
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
        top: 2rem;
    }

    </style>