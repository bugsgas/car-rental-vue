<template>
  <div class="flex items-center">
    <div class="text-left w-1/2 pr-5">
      <h3 class="text-3xl font-medium">Plan your trip now</h3>
      <h1 class="text-7xl font-black pt-4 pb-8">
        <span class="text-green-600 font-black">Save big</span> with our car
        rental
      </h1>
      <p>
        Rent the car of your dreams. Unbeatable prices, unlimited miles, <br />
        flexible pick-up options and much more.
      </p>
      <div class="flex pt-8">
        <button
          class="bg-gray-800 hover:bg-green-600 text-xl text-white font-bold py-3 px-20 mr-4 rounded-sm"
          @click="scrollToBookCar"
        >
          Book a Ride
        </button>

        <router-link to="/about">
          <button
            class="bg-gray-800 hover:bg-green-600 text-xl text-white font-bold py-3 px-20 rounded-sm"
          >
            Learn More
          </button>
        </router-link>
      </div>
    </div>
    <div class="w-1/2">
      <img src="../assets/main-car.png" alt="" class="w-auto" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToBookCar() {
      const bookCarSection = document.getElementById("book-car-section");
      if (bookCarSection) {
        bookCarSection.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
