<!-- candidate profil without edit profil -->

<script setup lang="ts">

    import users from "@/data.json"

    const route = useRoute();
    const name = route.params.name;
    const user = users.find(r => r.name === name);


    
    </script>
    
    <template>

        <logo></logo>
        <div class="container">
            <div class="container-info">
                <div class="header">
                    <div class="subTitle">{{user.degree}}</div>
                    <div class="informations">
                        <div class="text">{{user.mail}}</div>
                        <div class="text">{{user.phone}}</div>
                    </div>
                    
                </div>
                <h2>{{user.name}}</h2>
                <text class="text">{{user.description}}</text>
            </div>

        </div>
        
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

    

    h2{
        color: #8f71be;
    }

   

    </style>