<template>
  <div class="flex container mx-auto about">
    <div class="content w-1/2 px-5 text-left">
      <h3 class="text-6xl font-black">Need additional information?</h3>
      <p class="text-2xl py-4">
        A multifaceted professional skilled in multiple fields of research,
        development as well as a learning specialist. Over 15 years of
        experience.
      </p>
    </div>
    <div class="flex flex-col w-1/2 px-5 text-left">
      <label class="font-bold py-1"
        >Email <span class="text-green-600">*</span></label
      >
      <input
        class="bg-gray-100 my-2 py-4 px-2 text-gray-80"
        type="email"
        placeholder="Your email address"
      />
      <label class="font-bold py-1"
        >Full Name<span class="text-green-600">*</span></label
      >
      <input
        class="bg-gray-100 my-2 py-4 px-2 text-gray-80"
        type="text"
        placeholder="Your email address"
      />
      <label class="font-bold py-1"
        >Tell us about it<span class="text-green-600">*</span></label
      >
      <textarea
        class="bg-gray-100 my-2 py-4 px-2 text-gray-800"
        placeholder="Your message"
      ></textarea>
      <div class="py-4">
        <button
          class="bg-green-600 hover:text-gray-800 text-white font-bold py-2 px-4 transition-colors duration-300 w-full inline-block"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
