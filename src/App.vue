<template>
  <div>
    <nav class="py-1">
      <Navbar />
    </nav>
    <div class="">
      <router-view />
    </div>
    <Footer class="" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #1f2937;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Style the scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #059669;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
