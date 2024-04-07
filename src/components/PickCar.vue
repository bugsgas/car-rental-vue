<template>
  <div :id="car.id" class="flex justify-between items-center">
    <!-- Button on the left -->
    <div class="button flex flex-col mr-4">
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
    <div class="space-x-4">
      <img :src="car.image" alt="Car Image" />
    </div>

    <!-- Car details table on the right -->
    <div class="table-container space-x-4">
      <table class="table-fixed border h-full">
        <thead>
          <tr>
            <th colspan="2" class="bg-green-600 text-white text-xl py-2">
              <span class="font-black text-4xl">${{ car.price }}</span> /day
            </th>
          </tr>
        </thead>
        <tbody class="h-full">
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
        </tbody>
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
