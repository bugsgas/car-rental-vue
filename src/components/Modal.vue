<template>
  <div
    v-if="isVisible"
    class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 overflow-auto"
  >
    <div class="bg-white border h-full py w-1/2 overflow-auto">
      <div class="text-left">
        <div class="px-6 py-4 bg-green-600 flex justify-between items-center">
          <div class="font-black text-4xl text-white">Complete Reservation</div>
          <button @click="closeModal" class="font-black text-white">X</button>
        </div>

        <div class="px-6 py-3 bg-gray-100">
          <h3 class="font-black text-xl">
            Upon completing this reservation enquiry, you will receive:
          </h3>
          <p class="font-bold text-md pt-2">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div class="px-6 py-6 flex">
          <div>
            <h3 class="text-xl text-green-600 font-black mb-3">
              Location and Date
            </h3>
            <label :class="label">Pick-Up Date & Time</label>
            <p class="pb-3">{{ pickupDate }}</p>
            <label :class="label">Drop-off Date & Time</label>
            <p class="pb-3">{{ dropoffDate }}</p>
            <label :class="label">Pick-Up Location</label>
            <p class="pb-3">{{ pickupLocationName }}</p>
            <label :class="label">Drop-off Location</label>
            <p class="">{{ dropoffLocationName }}</p>
          </div>
          <div class="">
            <h3 class="text-xl text-green-600 font-black mb-3">
              {{ carName }}
            </h3>
            <img :src="carImage" alt="Car Image" />
          </div>
        </div>
        <div class="px-6">
          <hr />
        </div>
        <div class="px-6 py-6">
          <div class="grid grid-cols-2 gap-4">
            <div class="">
              <label :class="label">First name</label>
              <input
                :class="input"
                type="text"
                placeholder="Enter your First Name"
              />
            </div>
            <div class="">
              <label :class="label">Last name</label>
              <input
                :class="input"
                type="text"
                placeholder="Enter your last name"
              />
            </div>
            <div class="">
              <label :class="label">Phone Number</label>
              <input
                :class="input"
                type="text"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div class="">
              <label :class="label">Age</label>
              <input :class="input" type="text" placeholder="18" />
            </div>
          </div>
          <div class="mt-4">
            <label :class="label">Email</label>
            <input
              :class="input"
              type="email"
              placeholder="Enter Your email address"
            />
          </div>
          <div class="mt-4">
            <label :class="label">Address</label>
            <input
              :class="input"
              type="text"
              placeholder="Enter Your address"
            />
          </div>
          <div class="mt-4 grid grid-cols-2 gap-4">
            <div class="">
              <label :class="label">city</label>
              <input :class="input" type="text" placeholder="Enter yourCity" />
            </div>
            <div class="">
              <label :class="label">zip code</label>
              <input
                :class="input"
                type="text"
                placeholder="Enter Your zip code"
              />
            </div>
          </div>
        </div>
        <div class="my-3 px-6 pb-6">
          <button
            @click="submitModal"
            class="rounded text-white font-black text-2xl w-full py-2 bg-green-600"
          >
            Reserve button
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    carName: String,
    pickupLocationName: String,
    dropoffLocationName: String,
    pickupDate: String,
    dropoffDate: String,
    carImage: String,
  },
  computed: {
    label() {
      return "font-bold mb-1";
    },
    input() {
      return "py-2 px-2 text-gray-800 bg-gray-200 w-full";
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Style the scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #3e3d3d;
}

::-webkit-scrollbar-thumb {
  background: #777;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
