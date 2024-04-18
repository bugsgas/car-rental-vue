<template>
  <Hero class="container lg:mx-auto mt-20 py-20 px-0" />
  <BookCar id="book-car-section" />
  <ChooseUs class="" />
  <PickCar class="container lg:mx-auto mt-20 py-20" />
  <div class="mt-20 py-20 bg-gray-800 text-white px-10">
    <h3 class="text-6xl font-black leading-tight">
      Save big with our cheap car rental!
    </h3>

    <div class="text-2xl font-medium pt-5">
      <div class="lg:hidden">
        Top Airports. Local Suppliers. <br />
        24/7 Support.
      </div>
      <div class="hidden lg:block">
        Top Airports. Local Suppliers. 24/7 Support.
      </div>
    </div>
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
