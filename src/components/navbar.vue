<template>
  <nav class="bg-gray-900 text-gray-100 py-4 px-7 shadow md:flex justify-between items-center">
    <div class="flex items-center">
      <span class="text-green-500 mb-2 mr-1 text-2xl font-extrabold">
        <i class="bi bi-code-slash"></i>
      </span>
      <h1 class="text-xl font-extrabold font-mono">ItClub</h1>
    </div>
    <span @click="Myclick" class="absolute md:hidden right-6 top-1.5 cursor-pointer text-4xl">
      <i :class="[open ? 'bi bi-x' : 'bi bi-filter-left']"></i>
    </span>
    <ul class="md:flex md:items-center md:px-0 px-10 md:pb-0 pb-4 z-50 md:static absolute bg-gray-900 md:w-auto w-full top-14 duration-700 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <li class="md:mx-4 md:my-0 my-6">
        <router-link to="/" class="text-xl hover:text-green-500">Home</router-link>
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <router-link to="/anggota" class="text-xl hover:text-green-500">Anggota</router-link>
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <router-link to="/event" class="text-xl hover:text-green-500">Event</router-link>
      </li>
      <li class="md:mx-4 md:my-0 my-6">
        <router-link to="/about" class="text-xl hover:text-green-500">About</router-link>
      </li>

      <router-link tag="button" to="/form-daftar" class="bg-green-400 rounded font-semibold text-white hover:bg-green-500 duration-300 py-2 px-4 md:my-0 my-6">Daftar Sekarang</router-link>
    </ul>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let open = ref(false);
    function Myclick() {
      open.value = !open.value;
    }
    {
      return { open, Myclick };
    }
  },
};
</script>

<style lang="scss" scoped></style>
