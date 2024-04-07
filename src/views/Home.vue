<template>
  <Hero class="container lg:mx-auto mt-20 py-20 px-0" />
  <BookCar id="book-car-section" />
  <ChooseUs class="" />
  <PickCar class="container lg:mx-auto mt-20 py-20" />
  <div class="mt-20 py-20 bg-gray-800 text-white">
    <h3 class="text-6xl font-black">Save big with our cheap car rental!</h3>
    <p class="text-2xl font-medium pt-5">
      Top Airports. Local Suppliers. 24/7 Support.
    </p>
  </div>
  <Testimony class="container lg:mx-auto mt-20 py-20" />
  <Faq class="container py-20" />
</template>

<script>
import Hero from "@/components/Hero.vue";
import PickCar from "@/components/PickCar.vue";
import ChooseUs from "@/components/ChooseUs.vue";
import Testimony from "@/components/Testimony.vue";
import Faq from "@/components/Faq.vue";
import BookCar from "@/components/BookCar.vue";

export default {
  name: "Home",
  components: { Hero, PickCar, ChooseUs, Testimony, Faq, BookCar },
};
</script>
<style></style>
