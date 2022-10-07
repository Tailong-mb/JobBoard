<!-- component to edit user home page -->

<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="sign-in">
      <div class="subTitle">Profil</div>
      <div class="sign-in-form">
        <div class="sign-in-form-data">
          <div class="input-data">
            <input type="text" name="email" class="text" required />
            <div class="underline"></div>
            <label class="text">Email</label>
          </div>
          <div class="input-data">
            <input class="text" type="text" name="password" required />
            <div class="underline"></div>
            <label class="text">phone number</label>
          </div>
          <div class="input-data">
            <input class="text" type="text" name="password" required />
            <div class="underline"></div>
            <label class="text">first name</label>
          </div>
          <div class="input-data">
            <input class="text" type="text" name="password" required />
            <div class="underline"></div>
            <label class="text">last name</label>
          </div>
          <div class="input-data">
            <input class="text" type="text" name="password" required />
            <div class="underline"></div>
            <label class="text">grade</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 3rem;
  position: relative;
}

.sign-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 2rem;
  gap: 2rem;
  margin-top: 2rem;
  padding: 2rem;
  border: 2px;
  border-color: #8f71be;
  border-style: solid;
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
  gap: 0.5rem;
}

.subTitle {
  top: 5rem;
}

.password-forgotten {
  margin-top: 2rem;
  cursor: pointer;
}
</style>
