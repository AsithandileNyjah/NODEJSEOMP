<template>
  <div class="vh-100">
    <navbar />
    <div class="contact">
      <div>
        <h1 class="header">Keep In Touch</h1>
        <h3 class="sub">
          Reach Out and Let's Craft Delicious Memories! <br> Embrace the Italian
          Flair
        </h3>
      </div>
    </div>

    <div class="bigger mt-3">
      <div class="col-6 columnA">
        <form @submit.prevent="submitForm" class="formDiv">
          <label>
            <input
              v-model="formData.name"
              class="name"
              type="name"
              name="name"
              placeholder="Enter Your Name"
              required
            />
            <span v-if="formErrors.name" class="error">{{
              formErrors.name
            }}</span>
          </label>
          <label>
            <input
              v-model="formData.email"
              class="input"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <span v-if="formErrors.email" class="error">{{
              formErrors.email
            }}</span>
          </label>
          <label>
            <textarea
              v-model="formData.message"
              class="input"
              name="message"
              placeholder="Enter Message"
              required
            ></textarea>
            <span v-if="formErrors.message" class="error">{{
              formErrors.message
            }}</span>
          </label>
          <div>
            <button class="btn" type="submit" :disabled="isLoading">
              <span v-if="isLoading" class="loader"></span>
              <span v-else>Send</span>
            </button>
          </div>
        </form>
      </div>
      <div class="col-6 columnB">
        <span class="subhead">Find Us?</span>

        <div class="row iconRow">
          <div class="col-3">
            <p><i class="fa-solid fa-location-dot fa-2x"></i></p>
          </div>
          <div class="col-9"><p>Corso Filippo Re Capriata,<br> 22, Italy</p></div>
        </div>
        <div class="row iconRow">
          <div class="col-3">
            <p><i class="fa-solid fa-envelope fa-2x"></i></p>
          </div>
          <div class="col-9"><p>lepetititalia@gmail.com</p></div>
        </div>
        <div class="row iconRow">
          <div class="col-3">
            <p><i class="fa-solid fa-mobile-screen fa-2x"></i></p>
          </div>
          <div class="col-9"><p class="num">+3883642465</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "@/components/nav.vue";
export default {
  components: { navbar },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      formErrors: {
        name: "",
        email: "",
        message: "",
      },
      isLoading: false,
    };
  },
  methods: {
    submitForm() {
      this.formErrors = {
        name: "",
        email: "",
        message: "",
      };

      this.isLoading = true;

      fetch("https://formspree.io/f/mvoerovk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.formData),
      })
        .then((response) => {
          if (!response.ok) {
            alert("Something went wrong , please try again");
          }
          if (response.ok) {
            alert("Your information was submitted successfullly! Thanks! ");
          }
          return response.json();
        })
        .then((data) => {
          this.formData = {
            name: "",
            email: "",
            message: "",
          };
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
          this.formErrors.message =
            "An error occurred while submitting the form. Please try again.";
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style scoped>
.contact{
  overflow: hidden;
  margin-top: 7%;
}
.loader {
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.formDiv {
  max-width: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

.error {
  color: red;
  font-size: 14px;
}

.header {
  font-size: 40px;
  font-family: 'Alegreya", serif';
  color:black;
}
.sub {
  font-weight: 200;
  font-size: 18px;
  font-family: "Fraunces", serif;
  color:black;
}
.subhead {
  font-family: "Fraunces", serif;
  font-size: 40px;
  font-weight: 200;
  color:black;
  display: flex;
  justify-content: flex-start;
  padding-left: 150px;
  padding-bottom:30px;
}
h4 {
  font-weight: bold;
  color: black;
}
p {
  font-size: 18px;
  font-weight: 300;
  font-family: 'Alegreya", serif';
  color: black;
}
.num {
  font-weight: 300;
  font-family: 'Alegreya", serif';
  margin-right: 60px;
  color: black;
}

.columnA {
  padding-top: 58px;
  height: 500px;
  width: 400px;
}
.columnB {
  padding-bottom: 49px;
  height: 500px;
  width: 400px;
}

.iconRow {
  height: 100px;
}
.bigger {
  display: flex;
  justify-content: center;
  gap: 200px;
  align-items: center;
  padding-top: 5%;
}
.find {
  margin-top: 5%;
}
.name {
  border: 0px solid black;
  border-bottom: 3px solid;
  width: 200%;
  color: black;
}

.input {
  border: 0px solid black;
  border-bottom: 3px solid;
  color: black;
  width: 200%;
  margin-top: 35%;
}
::placeholder {
  font-weight: 300;
  font-size: 16px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-family: "Fraunces", serif;
  color: black;
}
.btn {
  margin-top: 10%;
  margin-left: 100px;
  background-color: black;
  color: white;
  width: 200px;
}

@media screen and (max-width: 480px) {
  .bigger {
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 20px;
    align-items: center;
  }

  .subhead {
    font-size: 20px;
    font-weight: bold;
    color: black;
    display: flex;
    justify-content: flex-start;
  }
  .find {
    margin-top: 0%;
  }
  .columnA {
    height: 100%;
  }

  form {
    margin-bottom: 100px;
  }

  .formDiv {
    max-width: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
  }
}
</style>
