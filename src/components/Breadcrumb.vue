<template>
  <nav aria-label="breadcrumb" class="flex items-center">
    <ol class="container mx-auto flex items-center">
      <li
        v-for="(item, index) in breadcrumbItems"
        :key="index"
        class="breadcrumb-item"
      >
        <router-link :to="item.link" class="text-gray-800 hover:underline">{{
          item.label
        }}</router-link>
        <!-- Render '/' separator if it's not the last breadcrumb item -->
        <span
          v-if="index < breadcrumbItems.length - 1"
          class="text-gray-400 mx-2"
          >/</span
        >
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: {
    breadcrumbItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Add any additional styling for breadcrumbs as needed */
</style>
