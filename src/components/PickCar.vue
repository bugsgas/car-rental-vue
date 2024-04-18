<template>
  <div
    :id="car.id"
    class="flex lg:flex-row flex-col justify-between items-center px-2"
  >
    <!-- Button on the left -->
    <div class="flex flex-col">
      <button
        v-for="car in carData.cars"
        :key="car.id"
        @click="changeCar(car.id)"
        :class="{
          active:
            activeCar === car.id ||
            (!activeCar && car.id === carData.cars[0].id),
        }"
        class="bg-gray-800 hover:bg-green-600 text-left text-2xl text-white font-bold my-1 py-2 px-4 transition-colors duration-300"
      >
        {{ car.name }}
      </button>
    </div>

    <!-- Image -->
    <div class="space-x-4 px-10 lg:py-0 py-10">
      <img :src="car.image" alt="Car Image" />
    </div>

    <!-- Car details table on the right -->
    <div class="table-container">
      <table class="table-fixed border h-full">
        <thead>
          <tr>
            <th colspan="2" class="bg-green-600 text-white text-xl py-2">
              <span class="font-black text-4xl">${{ car.price }}</span> /day
            </th>
          </tr>
        </thead>
        <body class="h-full">
          <template v-for="(value, key) in car">
            <template
              v-if="['id', 'price', 'name', 'image'].indexOf(key) === -1"
            >
              <tr :key="key" class="border">
                <td class="border text-xl py-2 px-4">{{ key }}</td>
                <td class="border text-xl py-2 px-4">
                  <p class="w-32">{{ value }}</p>
                </td>
              </tr>
            </template>
          </template>
        </body>
      </table>
    </div>
  </div>
</template>

<script>
import { cars } from "../composables/cars";

export default {
  name: "Cars",
  data() {
    return {
      car: cars.cars[0],
      carData: cars,
      activeCar: null,
    };
  },
  methods: {
    changeCar(id) {
      this.car = this.carData.cars.find((car) => car.id === id);
      this.activeCar = id; // Update active car
    },
  },
};
</script>

<style>
.active {
  background-color: rgb(5 150 105);
}
</style>
