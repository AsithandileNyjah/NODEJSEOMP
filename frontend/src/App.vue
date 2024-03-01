<template>
  <router-view />
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: ; */
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

nav a.router-link-exact-active {
  font-size: 18px;
  gap: 20px;
  font-family: 'Alegreya", serif';
  color: white;
}

.logo {
  width: 90px;
  height: 70px;
  border-radius: 90px;
}
footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  position: fixed;
  margin-top: 10px;
  bottom: 0;
  background-color:rgb(20, 19, 19);
}

.para {
  font-family: "Alegreya", serif;
  font-size: 20px;
  font-weight: semi-bold;
  color: white;
  display: flex;
  margin-left: 20px;
}
.para2 {
  font-family: "Alegreya", serif;
  font-size: 20px;
  font-weight: semi-bold;
  color: white;
  display: flex;
  margin-right: 20px;
}
@media screen and (max-width: 480px){
  footer{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    position: fixed;
    margin-top: 10px;
    bottom: 0;
    background-color: #DEB887;
}
}
</style>
