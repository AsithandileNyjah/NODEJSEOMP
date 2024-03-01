<template>
  <div class="navbar">
    <div><img class="logo" src="https://i.imgur.com/zkMo7Zp.png" alt="" /></div>
    <div class="menu-toggle" @click="toggleMenu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-menu"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
      </svg>
    </div>
    <div class="router-links" :class="{ 'show-menu': isMenuOpen }">
      <router-link class="link" to="/">Home</router-link>
      <span>|</span>
      <router-link class="link" to="/about">About</router-link>
      <span>|</span>
      <div class="dropdown">
        <router-link class="link" to="/menue">Our Menu</router-link>

        <div class="dropdown-content">
          <router-link class="dropdown-item" to="/menue">Starters</router-link>
          <router-link class="dropdown-item" to="/menue">Main</router-link>
          <router-link class="dropdown-item" to="/menue">Dessert</router-link>
        </div>
      </div>
      <span>|</span>
      <router-link class="link" to="/admin">Admin</router-link>
      <span>|</span>
      <router-link class="link" to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
* {
  font-family: 'Alegreya", serif';
}
span {
  color: white;
}
.navbar {
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  padding-left: 16px;
  padding-right: 60px;
  z-index: 99;
}

.menu-toggle {
  display: none;
}

.router-links {
  display: flex;
  gap: 16px;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 120px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.logo {
  border-radius: 100%;
  width: 60px;
  height: 60px;
}

.link {
  font-size: 18px;
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  span {
    display: none;
  }
  .navbar {
    padding: 16px;
  }
  .menu-toggle {
    display: block;
    cursor: pointer;
  }

  .router-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    background-color: #fff;
    width: 100%;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }

  .router-links.show-menu {
    display: flex;
  }
  .link {
    color: black;
    text-decoration: none;
  }

  .logo {
    border-radius: 100%;
    width: 40px;
    height: 40px;
  }
}
</style>
