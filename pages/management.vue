<script setup lang="ts">
definePageMeta({
  middleware: ["admin"],
});

const { getAllcandidacy, insertCandidacy } = useDBCandidacy();
const { getAllJob, insertJob } = useDBJob();
const { getAllWorkers, insertWorker } = useDBWorker();
const { getAllCompanies, insertNewLineCompany } = useDBCompany();
const { getAllUsers, deleteUserById, createUser } = useDBAuth();
const { getMetadataRole } = useAuth();

const candidacyData = await getAllcandidacy();
const jobData = await getAllJob();
const workerData = await getAllWorkers();
const companiesData = await getAllCompanies();
const usersData = await getAllUsers();

const role = ref("");

setTimeout(() => {
  role.value = getMetadataRole();
}, 0.0000001);

const menu = ref([true, false, false, false, false]);
const menuText = ["Candidacy", "Job", "Worker", "Company", "User"];

const menuClick = (index: number) => {
  menu.value = [false, false, false, false, false];
  menu.value[index] = true;
};

const deleteUserClick = async (id: string) => {
  try {
    await deleteUserById(id);
    alert("Delete Success");
  } catch (err) {
    alert(err.message);
  }
};

const createUserClick = async (email, password, role) => {
  try {
    await createUser(email, password, role);
    alert("Create Success");
  } catch (err) {
    alert(err.message);
  }
};

const insertCompanyClick = async () => {
  try {
    await insertNewLineCompany(valuesCompany, valuesCompany.id_company);
    alert("Insert Success");
  } catch (err) {
    alert(err.message);
  }
};

const insertCandidacyClick = async () => {
  try {
    await insertCandidacy(valuesCandidacy);
    alert("Insert Success");
  } catch (err) {
    alert(err.message);
  }
};

const insertWorkerClick = async () => {
  try {
    await insertWorker(valuesWorker);
    alert("Insert Success");
  } catch (err) {
    alert(err.message);
  }
};

const insertJobClick = async () => {
  try {
    await insertJob(valuesJob);
    alert("Insert Success");
  } catch (err) {
    alert(err.message);
  }
};

const valuesCandidacy = reactive({
  id_job: 0,
  id_worder: "",
  message: "",
  status: "",
});

const valuesJob = reactive({
  id_company: "",
  title_job: "",
  description_job: "default",
  salary: 0,
  dateend: new Date(),
  datestart: new Date(),
  location_job: "",
  degree_job: "",
});

const valuesWorker = reactive({
  id_worker: "",
  first_name: "",
  last_name: "",
  phone_number: "",
  degree: "",
});

const valuesCompany = reactive({
  id_company: "",
  name: "",
  siret: "",
  location: "",
  description: "",
});

const authValues = reactive({
  email: "",
  password: "",
  role: "",
});
</script>

<template>
  <div v-if="role === 'admin'">
    <div class="menu-management text">
      <div v-for="(menuTitle, index) in menuText" @click="menuClick(index)">
        {{ menuTitle }}
      </div>
    </div>
    <div class="subTitle">Manage Table Here</div>
    <div class="section" v-if="menu[4]">
      <div class="subsubTitle">AuthTable</div>
      <div class="section-row text">
        <div class="section-row-data-auth">id</div>
        <div class="section-row-data-auth">email</div>
        <div class="section-row-data-auth">role</div>
      </div>
      <div class="section-row" v-for="auth in usersData">
        <div class="section-row text">
          <div class="section-row-data-auth">{{ auth.id }}</div>
          <div class="section-row-data-auth">{{ auth.email }}</div>
          <div class="section-row-data-auth">{{ auth.user_metadata.role }}</div>
        </div>
        <div class="text button-delete" @click="deleteUserClick(auth.id)">
          Delete
        </div>
      </div>
      <div class="form-user">
        <div class="subsubTitle">Add An User</div>
        <div class="form-data">
          <div class="input-data">
            <input
              type="text"
              name="email"
              class="text"
              required
              v-model="authValues.email"
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
              v-model="authValues.password"
            />
            <div class="underline"></div>
            <label class="text">Password</label>
          </div>
        </div>
        <div class="form-data">
          <div class="input-data">
            <input
              type="text"
              name="email"
              class="text"
              required
              v-model="authValues.role"
            />
            <div class="underline"></div>
            <label class="text">Role</label>
          </div>
        </div>
        <CircleButton
          text="Add"
          @click="
            createUserClick(
              authValues.email,
              authValues.password,
              authValues.role
            )
          "
        ></CircleButton>
      </div>
    </div>
    <div class="section" v-if="menu[3]">
      <div class="subsubTitle">Companies</div>
      <div class="section-row text">
        <div class="section-row-data text">id_company</div>

        <div class="section-row-data text">name</div>
        <div class="section-row-data text">siret</div>
        <div class="section-row-data text">location</div>
        <div class="section-row-data text">description</div>
      </div>
      <div class="section-data" v-for="company in companiesData">
        <CompanyLine
          :id_company="company.id_company"
          :name="company.name"
          :siret="company.siret"
          :location="company.location"
          :description="company.description"
        ></CompanyLine>
      </div>

      <div class="text">Insert a new line here :</div>
      <div class="section-row">
        <input
          class="text section-row-data"
          v-model="valuesCompany.id_company"
        />
        <input class="text section-row-data" v-model="valuesCompany.name" />
        <input class="text section-row-data" v-model="valuesCompany.siret" />
        <input class="text section-row-data" v-model="valuesCompany.location" />
        <input
          class="text section-row-data"
          v-model="valuesCompany.description"
        />
      </div>
      <div class="text button-add" @click="insertCompanyClick">Add</div>
    </div>
    <div class="section" v-if="menu[2]">
      <div class="subsubTitle">Worker</div>
      <div class="section-row text">
        <div class="section-row-data text">ID Worker</div>
        <div class="section-row-data text">First Name</div>
        <div class="section-row-data text">Last Name</div>
        <div class="section-row-data text">Phone</div>
        <div class="section-row-data text">Degree</div>
      </div>
      <div class="section-data" v-for="worker in workerData">
        <WorkerLine
          :id_worker="worker.id_worker"
          :first_name="worker.first_name"
          :last_name="worker.last_name"
          :phone_number="worker.phone_number"
          :degree="worker.degree"
        ></WorkerLine>
      </div>
      <div class="text">Insert a new line here :</div>
      <div class="section-row" style="margin-bottom: 1rem">
        <div class="section-row-data text">ID Worker</div>
        <div class="section-row-data text">First Name</div>
        <div class="section-row-data text">Last Name</div>
        <div class="section-row-data text">Phone</div>
        <div class="section-row-data text">Degree</div>
      </div>
      <div class="section-row">
        <input class="text section-row-data" v-model="valuesWorker.id_worker" />
        <input
          class="text section-row-data"
          v-model="valuesWorker.first_name"
        />
        <input class="text section-row-data" v-model="valuesWorker.last_name" />
        <input
          class="text section-row-data"
          v-model="valuesWorker.phone_number"
        />
        <input class="text section-row-data" v-model="valuesWorker.degree" />
      </div>
      <div class="text button-add" @click="insertWorkerClick">Add</div>
    </div>
    <div class="section" v-if="menu[1]">
      <div class="subsubTitle">Job Offer</div>
      <div class="section-row text">
        <div class="section-row-data text">ID Job</div>
        <div class="section-row-data text">ID Company</div>
        <div class="section-row-data text">Title</div>
        <div class="section-row-data text">Description</div>
        <div class="section-row-data text">salary</div>
        <div class="section-row-data text">dateend</div>
        <div class="section-row-data text">datestart</div>
        <div class="section-row-data text">location</div>
        <div class="section-row-data text">degree</div>
      </div>
      <div class="section-data" v-for="job in jobData">
        <JobOfferLine
          :id_job="job.id_job"
          :id_company="job.id_company"
          :title_job="job.title_job"
          :description_job="job.description_job"
          :salary="job.salary"
          :dateend="job.dateend"
          :datestart="job.datestart"
          :location_job="job.location_job"
          :degree_job="job.degree_job"
        >
        </JobOfferLine>
      </div>
      <div class="text">Insert a new line here :</div>
      <div class="section-row" style="margin-bottom: 1rem">
        <div class="section-row-data text">ID Company</div>
        <div class="section-row-data text">Title</div>
        <div class="section-row-data text">Description</div>
        <div class="section-row-data text">salary</div>
        <div class="section-row-data text">dateend</div>
        <div class="section-row-data text">datestart</div>
        <div class="section-row-data text">location</div>
        <div class="section-row-data text">degree</div>
      </div>
      <div class="section-row">
        <input v-model="valuesJob.id_company" class="section-row-data" />
        <input v-model="valuesJob.title_job" class="section-row-data" />
        <input v-model="valuesJob.description_job" class="section-row-data" />
        <input v-model="valuesJob.salary" class="section-row-data" />
        <input
          v-model="valuesJob.dateend"
          class="section-row-data"
          type="date"
        />
        <input
          v-model="valuesJob.datestart"
          class="section-row-data"
          type="date"
        />
        <input v-model="valuesJob.location_job" class="section-row-data" />
        <input v-model="valuesJob.degree_job" class="section-row-data" />
      </div>
      <div class="text button-add" @click="insertJobClick">Add</div>
    </div>
    <div class="section" v-if="menu[0]">
      <div class="subsubTitle">Candidacy</div>
      <div class="section-row text">
        <div class="section-row-data text">ID Job</div>
        <div class="section-row-data text">ID Candidacy</div>
        <div class="section-row-data text">ID User</div>
        <div class="section-row-data text">Status</div>
        <div class="section-row-data text">Message</div>
      </div>
      <div class="section-data" v-for="candidacy in candidacyData">
        <CandidacyLine
          :status="candidacy.status"
          :id_job="candidacy.id_job"
          :id_candidacy="candidacy.id_candidacies"
          :id_user="candidacy.id_worker"
          :message="candidacy.message_candidacies"
        ></CandidacyLine>
      </div>
      <div class="text">Insert a new line here :</div>
      <div class="section-row" style="margin-bottom: 1rem">
        <div class="section-row-data text">ID Candidacy</div>
        <div class="section-row-data text">ID User</div>
        <div class="section-row-data text">Status</div>
        <div class="section-row-data text">Message</div>
      </div>
      <div class="section-row">
        <input class="text section-row-data" v-model="valuesCandidacy.id_job" />
        <input
          class="text section-row-data"
          v-model="valuesCandidacy.id_worder"
        />
        <input
          class="text section-row-data"
          v-model="valuesCandidacy.message"
        />
        <input class="text section-row-data" v-model="valuesCandidacy.status" />
      </div>
      <div class="text button-add" @click="insertCandidacyClick">Add</div>
    </div>
  </div>
</template>

<style scoped>
.menu-management {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  padding: 2rem;
  color: #8f71be;
}

.menu-management > div {
  cursor: pointer;
}
.form-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
}
.button-delete {
  border: 1px solid #8f71be;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  padding: 0.5rem;
}

.button-delete:hover {
  background-color: red;
  color: white;
}
.button-add {
  border: 1px solid #8f71be;
  border-radius: 50%;
  padding: 0.5rem;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
}

.section-row > input {
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
}

.section-row > input:last-child {
  border-right: solid 2px #8f71be !important;
}

.button-add:hover {
  background-color: #00454f;
  color: white;
}
.section {
  width: 100%;
}
.section-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 0rem;
}

.section-row-data {
  overflow: hidden;
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
  width: 200px;
}

.section-row-data:last-child {
  border-right: solid 2px #8f71be !important;
}

.section-row-data-auth {
  overflow: hidden;
  border-left: solid 2px #8f71be !important;
  border-top: solid 2px #8f71be !important;
  border-bottom: solid 2px #8f71be !important;
  margin: 0;
  padding: 0.3rem;
  width: calc(33%-1rem);
}

.section-row-data-auth:last-child {
  border-right: solid 2px #8f71be !important;
}
</style>
