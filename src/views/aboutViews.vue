<template>
  <div>
    <navbar />
    <about />
    <myfooter />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import about from "@/components/about.vue";

export default {
  components: {
    navbar,
    about,
  },
};
</script>

<style lang="scss" scoped></style>
