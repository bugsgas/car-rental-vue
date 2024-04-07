<template>
  <Breadcrumb :breadcrumbItems="breadcrumbItems" />
  <div class="py-16 container mx-auto flex justify-center items-center">
    <!-- <Testimony /> -->
    <Testimony />
  </div>
  <Calltoaction />
</template>

<script>
import Testimony from "@/components/Testimony.vue";
import Calltoaction from "../components/Calltoaction.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Testimonials",
  components: { Testimony, Calltoaction, Breadcrumb },
  data() {
    return {
      breadcrumbItems: [
        { label: "Home", link: "/" },
        { label: "Testimonials", link: "/testimonials" }, // Add Contact breadcrumb item
      ],
    };
  },
};
</script>
