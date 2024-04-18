<template>
  <div class="flex items-center">
    <div class="text-left w-full md:w-1/2 px-5">
      <h3 class="text-3xl font-medium">Plan your trip now</h3>
      <h1 class="text-7xl font-black pt-4 pb-8">
        <span class="text-green-600 font-black">Save big</span> with our car
        rental
      </h1>
      <p>
        Rent the car of your dreams. Unbeatable prices, unlimited miles,
        flexible pick-up options and much more.
      </p>
      <div class="flex pt-8 space-x-4">
        <ButtonAlt class="w-full bg-gray-800" @click="scrollToBookCar"
          >Book a Ride</ButtonAlt
        >

        <ButtonAlt class="w-full bg-gray-800" :click="About"
          >Learn More</ButtonAlt
        >
      </div>
    </div>
    <div class="w-1/2 md:block hidden">
      <img src="../assets/main-car.png" alt="" class="w-auto" />
    </div>
  </div>
</template>

<script>
import ButtonAlt from "./ButtonAlt.vue";

export default {
  components: {
    ButtonAlt,
  },
  methods: {
    About() {
      this.$router.push("/about");
    },
    scrollToBookCar() {
      const bookCarSection = document.getElementById("book-car-section");
      if (bookCarSection) {
        bookCarSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
