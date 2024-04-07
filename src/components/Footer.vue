<template>
  <footer class="bg-gray-800 text-white py-20">
    <div class="container mx-auto flex flex-wrap justify-center">
      <div
        v-for="(column, index) in footerContent"
        :key="index"
        class="text-left w-full sm:w-1/2 md:w-1/4 lg:w-1/4 px-4 mb-4"
      >
        <h4 class="text-lg font-semibold mb-2">{{ column.title }}</h4>
        <p v-if="column.description" class="py-2">{{ column.description }}</p>
        <ul v-if="column.items">
          <li
            v-for="(item, i) in column.items"
            :key="i"
            class="py-2 hover:text-green-600 transition-colors duration-300"
          >
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul>
        <div v-if="column.hours">
          <p v-for="(hour, i) in column.hours" :key="i" class="py-2">
            {{ hour }}
          </p>
        </div>
        <div v-if="column.subscribe" class="py-2">
          <input
            class="py-2 px-2 text-gray-800 w-full"
            type="email"
            placeholder="Your email address"
          />
          <div class="mt-2">
            <button
              class="bg-green-600 hover:text-gray-800 text-white font-bold py-2 px-4 transition-colors duration-300 w-full inline-block"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerContent: [
        {
          title: "CAR Rental",
          description:
            "We offer a wide range of vehicles to meet your driving needs.",
          items: [
            { label: "Phone: (123) -456-789", url: "#" },
            { label: "Email: carrental@gmail.com", url: "#" },
          ],
        },
        {
          title: "COMPANY",
          items: [
            { label: "Yogyakarta", url: "#" },
            { label: "Careers", url: "#" },
            { label: "Mobile", url: "#" },
            { label: "Blog", url: "#" },
            { label: "How we work", url: "#" },
          ],
        },
        {
          title: "WORKING HOURS",
          hours: [
            "Mon - Fri: 9:00AM - 9:00PM",
            "Sat: 9:00AM - 19:00PM",
            "Sun: Closed",
          ],
        },
        {
          title: "SUBSCRIPTION",
          subscribe: true,
        },
      ],
    };
  },
};
</script>

<style></style>
