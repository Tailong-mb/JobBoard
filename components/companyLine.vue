<script setup lang="ts">
const { deleteCompany, updateCompany } = useDBCompany();
const { deleteCandidacyByIdCompany } = useDBCandidacy();

const companyProps = defineProps<{
  id_company: string;
  name: string;
  siret: string;
  location: string;
  description: string;
}>();

const companyValues = reactive({
  id_company: companyProps.id_company,
  name: companyProps.name,
  siret: companyProps.siret,
  location: companyProps.location,
  description: companyProps.description,
});

const updateCompanyClick = async () => {
  try {
    await deleteCandidacyByIdCompany(companyValues.id_company);
    await updateCompany(companyValues);
    alert("Update Success");
  } catch (err) {
    alert(err.message);
  }
};

const deleteCompanyClick = async () => {
  try {
    await deleteCompany(companyValues.id_company);
    alert("Delete Success");
  } catch (err) {
    alert(err.message);
  }
};
</script>

<template>
  <div class="companyLine">
    <div class="companyLineData">
      <input class="text" v-model="companyValues.id_company" />
      <input class="text" v-model="companyValues.name" />
      <input class="text" v-model="companyValues.siret" />
      <input class="text" v-model="companyValues.location" />
      <input class="text" v-model="companyValues.description" />
    </div>
    <div class="button-container">
      <div class="text button-job green-hover" @click="updateCompanyClick">
        Update
      </div>
      <div class="text button-job red-hover" @click="deleteCompanyClick">
        Delete Line
      </div>
    </div>
  </div>
</template>

<style scoped>
.companyLine {
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
}

.companyLineData {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0rem;
}

.button-job {
  border: 1px solid #8f71be;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  padding: 0.5rem;
}

.red-hover:hover {
  background-color: red;
  color: white;
}

.green-hover:hover {
  background-color: #00454f;
  color: white;
}
.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 2rem;
}

input {
  width: 200px;
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
}

input:last-child {
  border-right: solid 2px #8f71be !important;
}
</style>
