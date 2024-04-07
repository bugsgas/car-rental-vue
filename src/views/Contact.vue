<template>
  <div>
    <Breadcrumb :breadcrumbItems="breadcrumbItems" />
    <div class="py-16 container mx-auto">
      <OurContact />
    </div>

    <Calltoaction />
  </div>
</template>

<script>
import OurContact from "@/components/OurContact.vue";
import Calltoaction from "@/components/Calltoaction.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";

export default {
  name: "Contact",
  components: { Calltoaction, OurContact, Breadcrumb },
  data() {
    return {
      breadcrumbItems: [
        { label: "Home", link: "/" },
        { label: "Contact", link: "/contact" }, // Add Contact breadcrumb item
      ],
    };
  },
};
</script>

<style></style>
