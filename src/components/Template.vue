<template lang="">
  <div class="text-left">
    <div class="px-6 bg-red-300">Complete Reservation</div>
    <div class="px-6 bg-red-100">
      <h3>Upon completing this reservation enquiry, you will receive:</h3>
      <p>
        Your rental voucher to produce on arrival at the rental desk and a
        toll-free customer support number.
      </p>
    </div>
    <div class="flex">
      <div class="">
        <label> Location and Date</label>
        <label>Pick-Up Date & Time</label>
        <p>pickupDate</p>
        <label>Drop-off Date & Time</label>
        <p>dropoffDate</p>
        <label>Pick-Up Location</label>
        <p>pickupLocationName</p>
        <label>Drop-off Location</label>
        <p>dropoffLocationName</p>
      </div>
      <div class="">
        <label> carName </label>
      </div>
    </div>
    <hr />
    <div class="personal-information">
      <div class="input grid grid-cols-2 gap-4">
        <div class="">
          <label>First name</label>
          <input
            class="py-2 px-2 text-gray-800 w-full"
            type="text"
            placeholder="Enter your First Name"
          />
        </div>
        <div class="">
          <label>Last name</label>
          <input
            class="py-2 px-2 text-gray-800 w-full"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div class="">
          <label>phone Number</label>
          <input
            class="py-2 px-2 text-gray-800 w-full"
            type="text"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div class="">
          <label>Age</label>
          <input
            class="py-2 px-2 text-gray-800 w-full"
            type="text"
            placeholder="18"
          />
        </div>
      </div>
      <div class="">
        <label>Email</label>
        <input
          class="py-2 px-2 text-gray-800 w-full"
          type="email"
          placeholder="Enter Your email address"
        />
      </div>
      <div class="">
        <label>Address</label>
        <input
          class="py-2 px-2 text-gray-800 w-full"
          type="text"
          placeholder="Enter Your address"
        />
      </div>
      <div class="input grid grid-cols-2 gap-4">
        <div class="">
          <label>city</label>
          <input
            class="py-2 px-2 text-gray-800 w-full"
            type="text"
            placeholder="Enter yourCity"
          />
        </div>
        <div class="">
          <label>zip code</label>
          <input
            class="py-2 px-2 text-gray-800 w-full"
            type="text"
            placeholder="Enter Your zip code"
          />
        </div>
      </div>
    </div>
    <div class="button">
      <button>Reserve</button>
    </div>
  </div>
</template>
