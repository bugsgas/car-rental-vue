<template>
  <div class="text-left bg-gray-800 rounded mt-20 mx-10 shadow-2xl">
    <div class="container p-10 lg:mx-auto justify-between items-center w-auto">
      <h3 class="text-white font-black text-4xl mb-4 lg:text-left text-center">
        Book a Car
      </h3>
      <div class="max-w-screen-xl w-full md:flex md:justify-center">
        <!-- Car Selection -->
        <div :class="columnClass">
          <label class="text-white" for="cars">Select Your Car Type</label>
          <select v-model="selectedCar" id="cars" class="p-2 border w-full">
            <option value="">Select a car</option>
            <option v-for="car in cars" :key="car.id" :value="car.id">
              {{ car.name }}
            </option>
          </select>
        </div>
        <!-- Pick-up Location -->
        <div :class="columnClass">
          <label class="text-white" for="pickup">Pick-up Location</label>
          <select
            v-model="selectedPickupLocation"
            id="pickup"
            class="p-2 border w-full"
          >
            <option value="">Select a location</option>
            <option
              v-for="location in locations"
              :key="location.id"
              :value="location.id"
            >
              {{ location.name }}
            </option>
          </select>
        </div>
        <!-- Drop-off Location -->
        <div :class="columnClass">
          <label class="text-white" for="dropoff">Drop-off Location</label>
          <select
            v-model="selectedDropoffLocation"
            id="dropoff"
            class="p-2 border w-full"
          >
            <option value="">Select a location</option>
            <option
              v-for="location in locations"
              :key="location.id"
              :value="location.id"
            >
              {{ location.name }}
            </option>
          </select>
        </div>
      </div>

      <div
        class="max-w-screen-xl w-full md:flex md:justify-center items-end lg:mt-4"
      >
        <!-- Pick-up Date -->
        <div :class="columnClass">
          <label class="text-white" for="pickupDate">Pick-up Date</label>
          <VueDatePicker
            v-model="pickupDate"
            id="pickupDate"
            class="bg-white w-full"
            input-class-name="dp-custom-input"
          ></VueDatePicker>
        </div>
        <!-- Drop-off Date -->
        <div :class="columnClass">
          <label class="text-white" for="dropoffDate">Drop-off Date</label>
          <VueDatePicker
            v-model="dropoffDate"
            id="dropoffDate"
            class="bg-white w-full"
            input-class-name="dp-custom-input"
          ></VueDatePicker>
        </div>
        <!-- Submit Button -->
        <div :class="columnClass">
          <Button :click="submitForm" class="mt-2 lg:mt-0"> Submit</Button>
        </div>
      </div>
      <!-- Error Message -->
      <div class="mx-2 mt-6">
        <p
          v-if="errorMessage"
          class="text-center font-black bg-red-600 text-white w-full p-2"
        >
          {{ errorMessage }}
        </p>
      </div>
      <!-- Reservation Message -->
      <div class="mx-2 mt-6">
        <div
          class="text-center font-black bg-green-600 text-gray-800 w-full p-2"
          v-if="reservationMessage"
        >
          <p>{{ reservationMessage }}</p>
        </div>
      </div>
    </div>

    <!-- Modal Component -->
    <Modal
      :is-visible="isModalVisible"
      :car-name="getCarName(selectedCar)"
      :pickup-location-name="getLocationName(selectedPickupLocation)"
      :dropoff-location-name="getLocationName(selectedDropoffLocation)"
      :pickup-date="pickupDate"
      :dropoff-date="dropoffDate"
      :car-image="selectedCarDetails ? selectedCarDetails.image : ''"
      @close="closeModal"
      @click="submitModal"
    ></Modal>
  </div>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import Modal from "./Modal.vue";
import Button from "./Button.vue";
import { cars } from "../composables/cars";

export default {
  name: "Book Car",
  components: { VueDatePicker, Modal, Button },
  data() {
    return {
      pickupDate: null,
      dropoffDate: null,
      selectedCar: "",
      selectedPickupLocation: "",
      selectedDropoffLocation: "",
      isModalVisible: false,
      cars: cars.cars,
      locations: [
        { id: 1, name: "Sleman" },
        { id: 2, name: "Depok" },
        { id: 3, name: "Condong Catur" },
      ],
      errorMessage: "", // Error message to display if form is incomplete
      reservationMessage: "",
      selectedCarDetails: null, // store details of selected car
    };
  },
  computed: {
    columnClass() {
      return "flex flex-col flex-1 mx-2 my-2 lg:my-0";
    },
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
      document.body.classList.add("modal-open");
    },
    closeModal() {
      this.isModalVisible = false;
      document.body.classList.remove("modal-open");
    },
    submitModal() {
      this.selectedCar = "";
      this.selectedPickupLocation = "";
      this.selectedDropoffLocation = "";
      this.pickupDate = null;
      this.dropoffDate = null;

      this.isModalVisible = false;
      document.body.classList.remove("modal-open");
      this.reservationMessage = `Check your email to confirm an order.`;
      setTimeout(() => {
        this.reservationMessage = "";
      }, 3000); // 3000 milliseconds = 3 seconds
    },
    getCarName(carId) {
      return this.cars.find((car) => car.id === carId)?.name || "Unknown";
    },
    getLocationName(locationId) {
      return (
        this.locations.find((location) => location.id === locationId)?.name ||
        "Unknown"
      );
    },
    submitForm() {
      // Check if all input fields are filled
      if (
        this.selectedCar &&
        this.selectedPickupLocation &&
        this.selectedDropoffLocation &&
        this.pickupDate &&
        this.dropoffDate
      ) {
        // Find the selected car details
        this.selectedCarDetails = this.cars.find(
          (car) => car.id === this.selectedCar
        );
        // If all fields are filled, show modal
        this.showModal();
        // Reset error message if any
        this.errorMessage = "";
      } else {
        // If any field is empty, show error message
        this.errorMessage = "Please fill in all fields.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 3000); // 3000 milliseconds = 3 seconds
      }
    },
  },
};
</script>

<style lang="scss">
/* Your existing styles */
.dp-custom-input {
  border-color: white;

  &:hover {
    border-color: white;
  }
}

body.modal-open {
  overflow: hidden;
}
</style>
