<template>
  <div :class="bgColor">
    <div
      :class="textColor"
      class="container lg:mx-auto mt-20 py-32 justify-between items-center"
    >
      <div class="pb-20">
        <h3 class="text-2xl font-bold">Plan your trip now</h3>
        <h1 class="text-6xl font-black px-3">
          <span class="text-green-600"> Quick & easy </span> car rental
        </h1>
      </div>
      <div class="flex">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="flex flex-col items-center justify-center h-full"
        >
          <div
            class="bg-green-600 rounded-xl h-32 w-32 flex justify-center items-center"
          >
            <i
              :class="section.icon"
              class="text-white"
              style="font-size: 4em"
            ></i>
          </div>

          <div class="px-5">
            <h3 class="text-2xl font-black pt-10">{{ section.title }}</h3>
            <p class="">{{ section.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String,
      default: "bg-gray-800",
    },
    textColor: {
      type: String,
      default: "text-white",
    },
  },
  data() {
    return {
      sections: [
        {
          icon: "bi bi-car-front-fill",
          title: "Select Car",
          description:
            "We offer a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.",
        },
        {
          icon: "bi bi-person-workspace",
          title: "Contact Operator",
          description:
            "Our knowledgeable and friendly operators are always ready to help with any questions or concerns.",
        },
        {
          icon: "bi bi-rocket-takeoff-fill",
          title: "Let's Drive",
          description:
            "Whether you're hitting the open road, we've got you covered with our wide range of cars.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.filter.invert {
  filter: invert(100%);
}
</style>
