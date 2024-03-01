<template>
  <div class="mainUserCard">
    <h2>Users</h2>
    <button type="button" class="btn btn-primary" @click="openAddUserForm">
      Add User
    </button>
    <!-- Add User Form -->
    <form @submit.prevent="addUser" class="addUseForm">
      <!-- Your form inputs go here -->
      <div class="addUseForm-inputs">
        <label for="firstName">First Name:</label>
        <input
          v-model="formData.firstName"
          type="text"
          id="firstName"
          required
        />
      </div>
      <div class="addUseForm-inputs">
        <label for="lastName">Last Name:</label>
        <input v-model="formData.lastName" type="text" id="lastName" required />
      </div>
      <div class="addUseForm-inputs">
        <label for="userAge">Age:</label>
        <input v-model="formData.userAge" type="text" id="userAge" required />
      </div>
      <div class="addUseForm-inputs">
        <label for="userGender">Gender:</label>
        <input
          v-model="formData.userGender"
          type="text"
          id="userGender"
          required
        />
      </div>
      <div class="addUseForm-inputs">
        <label for="userPass">Password:</label>
        <input v-model="formData.userPass" type="text" id="userPass" required />
      </div>
      <div class="addUseForm-inputs">
        <label for="emailAdd">Email:</label>
        <input v-model="formData.emailAdd" type="text" id="emailAdd" required />
      </div>
      <div class="addUseForm-inputs">
        <label for="userProfile">Username:</label>
        <input
          v-model="formData.userProfile"
          type="text"
          id="userProfile"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary addUseForm-save">
        Save
      </button>
    </form>
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>User Role</th>
          <th>Email</th>
          <th>Username</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in getUsers" :key="user.userID">
          <td>{{ user.userID }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.userAge }}</td>
          <td>{{ user.userGender }}</td>
          <td>{{ user.userRole }}</td>
          <td>{{ user.emailAdd }}</td>
          <td>{{ user.userProfile }}</td>
          <td>
            <button
              type="button"
              class="btn btn-primary"
              @click="editUserForm(user)"
            >
              Edit
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-dark"
              @click="delUser(user.userID)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Edit User Form -->
    <form v-if="editedUser" @submit.prevent="saveEditedUser">
      <!-- Your form inputs go here -->
      <div>
        <label for="editFirstName">First Name:</label>
        <input
          v-model="formData.firstName"
          type="text"
          id="editFirstName"
          required
        />
      </div>
      <div>
        <label for="editLastName">Last Name:</label>
        <input
          v-model="formData.lastName"
          type="text"
          id="editLastName"
          required
        />
      </div>
      <div>
        <label for="editUserAge">Age:</label>
        <input
          v-model="formData.userAge"
          type="text"
          id="editUserAge"
          required
        />
      </div>
      <div>
        <label for="editUserGender">Gender:</label>
        <input
          v-model="formData.userGender"
          type="text"
          id="editUserGender"
          required
        />
      </div>
      <div>
        <label for="editEmailAdd">Email:</label>
        <input
          v-model="formData.emailAdd"
          type="text"
          id="editEmailAdd"
          required
        />
      </div>
      <div>
        <label for="editUserProfile">Username:</label>
        <input
          v-model="formData.userProfile"
          type="text"
          id="editUserProfile"
          required
        />
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
      <button type="button" class="btn btn-secondary" @click="clearEditedUser, addUser()">
        Cancel
      </button>
    </form>
  </div>
</template>
<script>
import Swal from 'sweetalert2';
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        userAge: "",
        userGender: "",
        emailAdd: "",
        userPass: "",
        userProfile: "",
      },
      editedUser: null
    };
  },
  computed: {
    ...mapGetters(["getUsers"]),
  },
  // computed: {
  //   ...mapGetters(["getUsers"]),
  // },
  methods: {
    openAddUserForm() {
      // Clear previous data
      this.clearForm();
      this.clearEditedUser();
    },
    async addUser() {
      const user = {
        ...this.formData,
        // userRole: "",
      };
      try {
        await this.$store.dispatch("addUserDB", { newUser: user });
        console.log("User added successfully");
        this.clearForm();
        await this.fetchUsers();
      } catch (error) {
        console.error("Error adding user:", error);
      }
    },
    async delUser(userID) {
      try {
        await this.$store.dispatch("delUser", userID);
        console.log("User deleted successfully");
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    },
    async fetchUsers() {
      try {
        await this.$store.dispatch("getUsers");
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    editUserForm(user) {
      this.editedUser = user;
      // Populate form with user data
      this.formData = {
        firstName: user.firstName,
        lastName: user.lastName,
        userAge: user.userAge,
        userGender: user.userGender,
        emailAdd: user.emailAdd,
        userProfile: user.userProfile,
      };
    },
    async saveEditedUser() {
      try {
        await this.$store.dispatch("editUser", {
          userID: this.editedUser.userID,
          updatedUser: this.formData,
        });
        console.log("User updated successfully");
        this.clearForm();
        this.editedUser = null;
      } catch (error) {
        console.error("Error updating user:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to update user. Please try again.',
        });
      }
    },
    clearForm() {
      this.formData = {
        firstName: "",
        lastName: "",
        userAge: "",
        userGender: "",
        emailAdd: "",
        userProfile: "",
      };
    },
    clearEditedUser() {
      this.editedUser = null;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  background-color: lightgray;
}
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
tr:hover {
  background-color: #F2F2F2;
}
img {
  width: 150px;
  height: 150px;
}
@media screen and (max-width: 480px) {
  .mainUserCard {
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    overflow-x: auto;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  .addUseForm {
    display: flex;
    flex-direction: column;
    /* max-width: 600px;s */
    width: 0px !important;
    margin-right: auto;
    margin-left: auto;
    gap: 16px;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
  }
  .addUseForm-inputs {
    display: flex;
    flex-direction: column;
    width: 200px !important;
  }
}
.addUseForm {
  display: flex;
  /* max-width: 600px;s */
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}
.addUseForm-inputs {
  display: flex;
  flex-direction: column;
  width: 100px;
}
.addUseForm-save {
  width: 80px;
  height: 40px;
  margin-top: 7px;
}
</style>
