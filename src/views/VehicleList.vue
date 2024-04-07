<template>
  <div>
    <Breadcrumb :breadcrumbItems="breadcrumbItems" />
    <div class="py-32 container mx-auto">
      <PickCar />
    </div>
    <Calltoaction />
  </div>
</template>

<script>
import PickCar from "../components/PickCar.vue";
import Calltoaction from "../components/Calltoaction.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Vehicle-List",
  components: { PickCar, Calltoaction, Breadcrumb },
  data() {
    return {
      breadcrumbItems: [
        { label: "Home", link: "/" },
        { label: "Vehicle-List", link: "/vehicle-list" },
      ],
    };
  },
};
</script>

<style></style>
