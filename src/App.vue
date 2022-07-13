<template>
  <div id="app" class="bg-gray-800">
    <router-view />
  </div>
</template>

<script>
import navbar from "../src/components/navbar.vue";
import myfooter from "../src/components/myfooter.vue";
export default {
  nama: "app",
  components: {
    navbar,
    myfooter,
  },
};
</script>
