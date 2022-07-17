<template>
  <div class="">
    <section class="pt-16 pb-16 container">
      <h1 class="text-center font-bold text-white text-3xl mb-10 font-mono">
        Event ItClub
      </h1>
      <div
        class="flex w-full flex-wrap justify-center items-center px-4 xl:mx-auto xl:w-10/12"
      >
        <div
          class="mb-12 p-4 md:w-1/2"
          v-for="informasi in informations"
          :key="informasi.id"
        >
          <div class="overflow-hidden rounded-md shadow-md w-full h-52 md:h-80">
            <img
              :src="informasi.gambar"
              alt=""
              class="w-full object-cover h-full"
            />
          </div>
          <h3 class="text-2xl mb-3 font-semibold text-white">
            {{ informasi.nama_event }}
          </h3>
          <p class="text-base font-medium text-slate-300">
            {{ informasi.tanggal_event }}
          </p>
        </div>
      </div>
      <div v-if="!informations.length < count" class="text-center">
        <button
          @click="loadmore"
          class="bg-green-400 text-center font-semibold py-3 px-5 text-xl text-white rounded-full hover:bg-green-500"
        >
          Lihat Lainnya
        </button>
      </div>
    </section>
    <section class="pt-16 pb-16">
      <h1 class="text-center font-mono text-white font-bold mb-10 text-3xl">
        {{ title }}
      </h1>
      <div
        class="flex flex-wrap justify-center w-full px-4 md:ms-auto xl:q-10/12"
      >
        <div
          class="mb-12 p-4 md:w-1/2"
          v-for="project in projects"
          :key="project.id_project"
        >
          <img :src="project.gambar" alt="" class="w-full" />
          <h3 class="text-xl mt-3 font-semibold text-white">
            {{ project.nama_project }}
          </h3>
          <p class="text-sm font-medium text-slate-300 mb-3">
            Dibuat oleh {{ project.pembuat }}
          </p>
          <p class="text-md font-medium text-slate-400">
            {{ project.deskripsi }}
          </p>
        </div>
      </div>
      <!-- <div v-if="informations.length > count" class="text-center">
        <button @click="loadmore" class="bg-green-400 text-center font-semibold py-3 px-5 text-xl text-white rounded-full hover:bg-green-500">Lihat Lainnya</button>
      </div> -->
    </section>
  </div>
</template>

<script>
// import { SyncLoader } from "@saeris/vue-spinners";
export default {
  data() {
    return {
      title: "Showcase Project",
      informations: "",
      projects: "",

      count: 0,
    };
  },
  mounted() {
    this.getEvent();
    this.getProjects();
  },
  methods: {
    async getEvent() {
      let { data, error } = await this.$supabase
        .from("event")
        .select("id,created_at,nama_event,tanggal_event,gambar")
        .range(0, 3);
      if (data) this.count = data.length;
      this.informations = data;
    },
    async getProjects() {
      let { data, error } = await this.$supabase
        .from("project")
        .select("id_project,created_at,name_project,pembuat,deskripsi,gambar");
      this.projects = data;
    },
    async loadmore() {
      let limitStar = this.informations.length;
      let limitend = limitStar + 2;
      let { data, error } = await this.$supabase
        .from("event")
        .select("id,created_at,nama_event,tanggal_event,gambar")
        .range(limitStar, limitend);
      if (data) {
        for (let i = 0; i < data.length; i++) {
          this.informations.push(data[i]);
        }
      }
      if (error) console.error(error);
    },
  },
};
</script>

<style lang="scss" scoped></style>
