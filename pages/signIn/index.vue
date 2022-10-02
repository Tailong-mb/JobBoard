<script setup lang="ts">


</script>


<template>
    <logo>

    </logo>
    <div class="container">
        <div
        class="sign-in"
        >
        <div class="subTitle">Sign In</div>
        <div class="sign-in-form">
            <div class="sign-in-form-data">
                <div class="input-data">
                    <input
                    type="text"
                    name="email"
                    class="text"
                    required
                    />
                    <div class="underline"></div>
                    <label class="text">Email</label>
                </div>
                <div class="input-data">
                    <input
                    class="text"
                    type="text"
                    name="password"
                    required
                    />
                    <div class="underline"></div>
                    <label class="text">Password</label>
                </div>
            </div>
        </div>

        <div class="text password-forgotten">Password forgotten ?</div>
        <div class="connect">
            <CircleButton text="Connect"></CircleButton>
        </div>
    </div>
    </div>
</template>



<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 3rem;
}

.sign-in {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
}

.sign-in-form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
}

.sign-in-form-data {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.subTitle{
    margin-top: 2rem;
}

.input-data {
    height: 2.5rem;
    width: 100%;
    position: relative;
}

input {
    height: 100%;
    width: 100%;
    border: none !important;
    border-bottom: 2px solid silver;
}

input[type="text"],
input[type="email"] {
    background: transparent;
    border: none !important;
}

input:focus ~ label,
input:valid ~ label {
    transform: translateY(-1.25rem);
    color: rgb(81, 79, 79);
}

label {
    position: absolute;
    bottom: 0.626rem;
    left: 0;
    color: #00454f;
    pointer-events: none;
    transition: all 0.3s ease;
}

.underline {
    position: absolute;
    bottom: 0;
    height: 0.125rem;
    width: 100%;
    background: #8f71be;
}

.connect{
    margin-top: 7rem;
}

.password-forgotten{
    margin-top: 2rem;
    cursor: pointer;
}
</style>