<template>
  <div class="container mx-auto py-12 px-10 lg:text-center text-left">
    <h3 class="text-6xl font-black pb-6">Frequently Asked Questions</h3>
    <p class="text-lg">
      Frequently Asked Questions About the Car Rental Booking Process on Our
      Website: Answers to Common Concerns and Inquiries.
    </p>
    <div class="mt-10 lg:px-32">
      <div
        v-for="(question, index) in faq"
        :key="index"
        class="border-b pb-4 mb-4"
      >
        <button
          @click="toggle(index)"
          class="flex justify-between w-full focus:outline-none"
        >
          <h3
            :class="{
              'text-left lg:text-center text-green-600 transition-colors duration-300':
                question.open,
              'text-left lg:text-center': !question.open,
            }"
            class="text-xl font-semibold"
          >
            {{ question.title }}
          </h3>
          <img
            v-bind:class="{ rotated: question.open }"
            src="../assets/arrow-down.svg"
            alt="Arrow Down"
            class="w-6 h-6 text-gray-500 rotate"
          />
        </button>
        <p
          v-if="question.open"
          class="bg-white text-left text-gray-700 mt-2 duration-300"
        >
          {{ question.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: "1. What is special about comparing rental car deals?",
          answer:
            "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
          open: false,
        },
        {
          title: "2. How do I find the car rental deals?",
          answer:
            "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
          open: false,
        },
        {
          title: "3. How do I find such low rental car prices?",
          answer:
            "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      // Close all FAQ items first
      this.faq.forEach((item, i) => {
        if (i !== index) {
          item.open = false;
        }
      });
      // Toggle the selected FAQ item
      this.faq[index].open = !this.faq[index].open;
    },
  },
};
</script>

<style>
.rotate {
  transition: transform 0.3s ease;
}

.rotated {
  transform: rotate(180deg);
}
</style>
