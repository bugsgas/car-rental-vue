<template>
  <nav class="flex justify-between items-center">
    <router-link to="/">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="" />
      </div>
    </router-link>
    <div class="nav-links-container space-x-4">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/testimonials">Testimonial</router-link>
      <router-link to="/vehicle-list">Vehicle List</router-link>
    </div>
    <div class="auth-buttons-container space-x-4">
      <button
        class="bg-gray-800 hover:bg-green-600 text-white font-bold py-2 px-2 rounded-sm border border-green-600 transition-colors duration-300 w-24"
      >
        Login
      </button>

      <button
        class="bg-green-600 text-white font-bold py-2 px-2 rounded-sm border border-green-600 hover:text-gray-800 transition-colors duration-300 w-24"
      >
        Register
      </button>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.items-center {
  align-items: center;
}

.logo-container {
  width: 20%; /* Adjust the width as needed */
}

.nav-links-container {
  width: 60%; /* Adjust the width as needed */
  text-align: center; /* Center the links horizontally */
}

.auth-buttons-container {
  width: 20%; /* Adjust the width as needed */
  display: flex;
  justify-content: flex-end; /* Align buttons to the right */
}
</style>
