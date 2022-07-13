<template>
  <div>
    <navbar />
    <formdaftar />
    <myfooter />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import formdaftar from "@/components/form-daftar.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  components: {
    navbar,
    formdaftar,
    myfooter,
  },
};
</script>

<style lang="scss" scoped></style>
