<script setup lang="ts">
const { supabase } = useSupabase();
const { signUp } = useAuth();
const { insertCandidacyId } = useDBCandidacy();
const idJob = defineProps<{ idJob: number }>();
const signUpUser = reactive({
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  degree: "",
  phoneNumber: "",
  message: "",
});
const checkValuesUser = () => {
  return (
    signUpUser.email === "" ||
    signUpUser.password === "" ||
    signUpUser.firstName === "" ||
    signUpUser.lastName === "" ||
    signUpUser.degree === "" ||
    signUpUser.phoneNumber === ""
  );
};
const handleSubmitUser = async () => {
  const regXp = new RegExp(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
  if (!regXp.test(signUpUser.phoneNumber)) {
    alert("Invalid Phone Number");
    return;
  }
  if (checkValuesUser()) return;
  try {
    const user = await signUp({
      email: signUpUser.email,
      password: signUpUser.password,
      role: "user",
    });
    insertIntoTableUser(user.id);
    const candicacy = {
      message: signUpUser.message,
      id_job: idJob.idJob,
      status: "pending",
    };
    await insertCandidacyId(candicacy, user.id);
    alert("You have applied for this job, you will recieve an email soon");
  } catch (err) {
    alert(err.message);
  }
};
const insertIntoTableUser = async (userId) => {
  const { error } = await supabase.from("worker").insert([
    {
      id_worker: userId,
      first_name: signUpUser.firstName,
      last_name: signUpUser.lastName,
      degree: signUpUser.degree,
      phone_number: signUpUser.phoneNumber,
    },
  ]);
  if (error !== null) {
    if (error.code === "23503" || error.code === "23505") {
      alert("Email already used");
    } else {
      alert(error.message);
    }
  }
};
</script>

<template>
  <div class="formJob-apply-no-user">
    <div class="subTitle">Your information</div>
    <div class="user-form">
      <div class="form-data">
        <div class="input-data">
          <input type="text" class="text" required v-model="signUpUser.email" />
          <div class="underline"></div>
          <label class="text">Email</label>
        </div>
        <div class="input-data">
          <input
            class="text"
            type="text"
            required
            v-model="signUpUser.password"
          />
          <div class="underline"></div>
          <label class="text">Password</label>
        </div>
      </div>
      <div class="form-data">
        <div class="input-data">
          <input
            class="text"
            type="text"
            required
            v-model="signUpUser.firstName"
          />
          <div class="underline"></div>
          <label class="text">First Name</label>
        </div>
        <div class="input-data">
          <input
            class="text"
            type="text"
            required
            v-model="signUpUser.lastName"
          />
          <div class="underline"></div>
          <label class="text">Last Name</label>
        </div>
      </div>
      <div class="input-data">
        <input
          class="text"
          type="text"
          required
          v-model="signUpUser.phoneNumber"
        />
        <div class="underline"></div>
        <label class="text">Phone</label>
      </div>
      <div class="select">
        <select required class="text" v-model="signUpUser.degree">
          <option selected disabled>Select your degree</option>
          <option value="Associate degree">Associate degree</option>
          <option value="Bachelor's degree">Bachelor's degree</option>
          <option value="Master's degree">Master's degree</option>
          <option value="Doctoral degree">Doctoral degree</option>
        </select>
      </div>
      <div class="form-data">
        <textarea
          class="text"
          placeholder="Message"
          required
          v-model="signUpUser.message"
        ></textarea>
      </div>
      <CircleButton text="Submit" @click="handleSubmitUser"></CircleButton>
    </div>
  </div>
</template>

<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}
.formJob-apply-no-user {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  gap: 2rem;
}
textarea {
  max-width: 50rem;
}
</style>