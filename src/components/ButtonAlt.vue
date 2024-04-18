<template>
  <button
    @click="click"
    class="bg-gray-800 hover:bg-green-600 text-white font-bold py-2 px-4 transition-colors duration-300 w-full inline-block rounded-sm"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["click"],
};
</script>
