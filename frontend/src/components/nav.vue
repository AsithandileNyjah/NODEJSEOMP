<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <router-link class="nav-link active" aria-current="page" to="/"
          ><img class="logo" src="https://i.imgur.com/zkMo7Zp.png" alt=""
        /></router-link>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 centerNav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Home |</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/about"
              >About |</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <router-link
              class="nav-link active dropdown-toggle"
              to="/menue"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Our Menue  
            </router-link>
            <ul class="dropdown-menu bg-light">
              <li>
                <router-link class="dropdown-item" to="/menue"
                  >Starters</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/menue"
                  >Main</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/menue"
                  >Dessert</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-curent="page"
              to="/admin"
              >|  Admin |</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active"
              aria-curent="page"
              to="/contact"
              >Contact |</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  z-index: 60;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
}
.centerNav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
}
.nav-item .nav-link.active {
  font-size: 18px;
  gap: 20px;
  font-family: 'Alegreya", serif';
}
.dropdown-item {
  color: black;
}
</style>
