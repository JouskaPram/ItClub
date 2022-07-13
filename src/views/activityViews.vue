<template>
  <div>
    <navbar />
    <anggota />
    <myfooter />
  </div>
</template>

<script>
import navbar from "@/components/navbar.vue";
import anggota from "@/components/activity.vue";
import myfooter from "@/components/myfooter.vue";
export default {
  components: {
    navbar,
    anggota,
    myfooter,
  },
};
</script>

<style lang="scss" scoped></style>
