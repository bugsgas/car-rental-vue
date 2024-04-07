<template>
  <div class="flex justify-center items-center h-full">
    <div>
      <div class="px-5">
        <p class="text-2xl font-black">Reviewed by People</p>
        <h3 class="text-6xl font-black pt-2 pb-6">Client's Testimonials</h3>
        <p class="text-xl px-10">
          Discover the positive impact we've made on our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div class="flex flex-wrap justify-center mt-8">
        <div
          v-for="testimony in testimonies"
          :key="testimony.name"
          class="w-1/2 mb-4 text-left flex"
        >
          <div class="flex-1">
            <div
              class="bg-gray-800 p-8 mx-2 rounded-md text-white h-full flex flex-col justify-between"
            >
              <p class="text-2xl font-light">{{ testimony.body }}</p>
              <div class="flex items-center mt-5">
                <div class="overflow-hidden rounded-full h-20 w-20 mr-8">
                  <img
                    :src="testimony.img"
                    alt=""
                    class="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 class="text-3xl font-bold">{{ testimony.name }}</h3>
                  <h3 class="text-md">{{ testimony.place }}</h3>
                </div>
                <div class="w-20 ml-auto">
                  <img src="../assets/quote.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { testimony } from "../composables/testimony";

export default {
  name: "Testimony",
  data() {
    return {
      testimonies: testimony.testimony,
    };
  },
};
</script>
