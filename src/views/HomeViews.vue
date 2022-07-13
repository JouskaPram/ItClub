<template>
  <div>
    <navbar />
    <home />
    <myfooter />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import home from "@/components/home.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  components: {
    home,
    navbar,
    myfooter,
  },
};
</script>

<style lang="scss" scoped></style>
