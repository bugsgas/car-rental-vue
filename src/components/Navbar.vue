<template>
  <div class="bg-gray-900 flex justify-center items-center">
    <nav
      class="container text-gray-100 py-3.5 px-6 justify-between shadow md:flex"
    >
      <div class="flex items-center cursor-pointer">
        <span class="text-green-500 text-xl mr-1">
          <router-link to="/" exact>
            <div class="logo-container">
              <img src="../assets/logo.png" alt="" />
            </div>
          </router-link>
        </span>
      </div>
      <!-- Menu toggle button -->
      <span
        @click="MenuOpen()"
        class="absolute right-6 top-1.5 cursor-pointer md:hidden text-4xl"
      >
        <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
      </span>
      <!-- Navigation menu -->
      <ul
        :class="[open ? 'left-0' : 'left-full hidden']"
        class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-10 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-300 ease-in left-0"
      >
        <li
          class="md:mx-4 md:my-0 my-6 text-left"
          v-for="link in Links"
          :key="link.name"
        >
          <router-link
            :to="link.link"
            class="text-xl text-white hover:text-green-500"
            :exact-active-class="'router-link-exact-active'"
          >
            {{ link.name }}
          </router-link>
        </li>
        <li class="md:mx-4 md:my-0 my-6 text-left">
          <Button class="md:w-auto w-full" :goTo="Login">Sign In</Button>
        </li>
        <li class="md:mx-4 md:my-0 my-6 text-left">
          <Button class="md:w-auto w-full" :goTo="Register">Register</Button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Button from "./Button.vue";
import { ref } from "vue";

export default {
  components: {
    Button,
  },
  methods: {
    Register() {
      this.$router.push("/register");
    },
    Login() {
      this.$router.push("/login");
    },
    MenuOpen() {
      this.open = !this.open;
    },
  },
  setup() {
    const open = ref(false);
    const Button = [
      { name: "Sign In", click: "Login" },
      { name: "Register", click: "Register" },
    ];
    const Links = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
      { name: "Testimonials", link: "/testimonials" },
      { name: "Vehicle List", link: "/vehicle-list" },
    ];

    function MenuOpen() {
      open.value = !open.value;
    }
    return { Links, open, MenuOpen };
  },
};
</script>

<style>
.logo-container {
  width: 20%; /* Adjust the width as needed */
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
