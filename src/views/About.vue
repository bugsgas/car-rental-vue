<template>
  <Breadcrumb :breadcrumbItems="breadcrumbItems" />
  <div class="py-16">
    <div class="container mx-auto flex justify-center items-center">
      <div class="">
        <img class="" src="../assets/photo1.jpg" alt="" />
      </div>
      <div class="text-left px-10 w-1/2">
        <p class="text-2xl font-bold">About Company</p>
        <h3 class="py-5 text-6xl font-black">
          You start the engine and your adventure begins
        </h3>
        <p class="">
          Certain but she but shyness why cottage. Guy the put instrument sir
          entreaties affronting. Pretended exquisite see cordially the you.
          Weeks quiet do vexed or whose. Motionless if no to affronting
          imprudence no precaution. My indulged as disposal strongly attended.
        </p>
        <div class="icon"></div>
      </div>
    </div>
    <ChooseUs :bgColor="bgColor" :textColor="textColor" />
  </div>
  <Calltoaction />
</template>

<script>
import ChooseUs from "@/components/ChooseUs.vue";
import Calltoaction from "../components/Calltoaction.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "About",
  components: { ChooseUs, Calltoaction, Breadcrumb },
  data() {
    return {
      breadcrumbItems: [
        { label: "Home", link: "/" },
        { label: "About", link: "/about" }, // Add Contact breadcrumb item
      ],
    };
  },
  props: {
    bgColor: {
      type: String,
      default: "bg-white",
    },
    textColor: {
      type: String,
      default: "text-grey-800",
    },
  },
};
</script>

<style scoped></style>
