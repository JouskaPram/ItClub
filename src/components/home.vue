<template>
  <div class="container bg-gray-800">
    <div class="relative slide mt-16 max-w-full">
      <div class="carousel-indicators absolute bottom-0 flex">
        <ol class="z-50 flex w-4/12 justify-center">
          <li v-for="(img, i) in images" :key="i" class="md:w-4 md:h-4 bg-gray-300 rounded-full cursor-pointer mx-2"></li>
        </ol>
      </div>
      <div class="carousel-inner relative overflow-hidden w-full">
        <div v-for="(img, i) in images" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
          <img class="block w-full rounded-md" :src="img" alt="First slide" />
        </div>
      </div>
    </div>
    <!--jurusan start -->
    <h1 class="font-bold font-mono text-3xl text-center text-white mb-10 mt-16 tracking-wide">Pilihan Jurusan</h1>
    <section class="h-full md:flex md:justify-between gap-16 md:gap-16 mb-16">
      <div class="flip-card md:w-1/3 w-[300px] h-[450px] cursor-pointer mt-10 mx-auto">
        <div class="flip-card-inner">
          <div class="flip-card-front w-full h-full">
            <img src="@/assets/img/Game On (3).png" alt="Avatar" class="w-full h-full" />
          </div>
          <div class="flip-card-back w-full h-full bg-green-500 text-center mb-5">
            <h1 class="text-2xl font-bold font-serif text-white text-center mt-7">Front End Developer</h1>
            <div class="container">
              <p class="text-base font-semibold text-white text-justify mt-16">
                Seorang Front End Developer bertanggung jawab untuk membuat desain dari sebuah website atau aplikasi.dan juga bertugas untuk menyajikan data yang telah dibuat oleh Backend.
              </p>
              <button class="py-3 px-5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 mt-24">Lihat Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card md:w-1/3 w-[300px] h-[450px] cursor-pointer mt-10 mx-auto">
        <div class="flip-card-inner">
          <div class="flip-card-front w-full h-full">
            <img src="@/assets/img/Backend Developer.png" alt="Avatar" class="w-full h-full" />
          </div>
          <div class="flip-card-back w-full h-full bg-green-500 text-center">
            <h1 class="text-2xl font-bold font-serif text-white text-center mt-7">Back End Developer</h1>
            <div class="container">
              <p class="text-base font text-white text-center mt-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cum dolorem, cumque rerum deleniti corporis libero non sequi ullam id, minima quas fugit vero. Consequuntur molestias animi maxime accusamus voluptate.
              </p>
              <button class="py-3 px-5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 mt-24">Lihat Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card md:w-1/3 w-[300px] h-[450px] cursor-pointer mt-10 mx-auto">
        <div class="flip-card-inner">
          <div class="flip-card-front w-full h-full">
            <img src="@/assets/img/true-agency-o4UhdLv5jbQ-unsplash.jpg" alt="Avatar" class="w-full h-full" />
          </div>
          <div class="flip-card-back w-full h-full bg-green-500 text-center">
            <h1 class="text-2xl font-bold font-serif text-white text-center mt-7">Game Developer</h1>
            <div class="container">
              <p class="text-base font text-white text-center mt-16">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci cum dolorem, cumque rerum deleniti corporis libero non sequi ullam id, minima quas fugit vero. Consequuntur molestias animi maxime accusamus voluptate.
              </p>
              <button class="py-3 px-5 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 mt-24">Lihat Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Jurusan End -->
    <!-- event&showcase start -->
    <activity />

    <!-- event&showcase end -->
  </div>
</template>

<script>
import anggota from "../components/anggota.vue";
import activity from "../components/activity.vue";
export default {
  components: {
    anggota,
    activity,
  },
  data: () => ({
    images: ["https://i.ibb.co/8YfrpzY/Technology-For-A-Better-Life.png", "https://i.ibb.co/8YfrpzY/Technology-For-A-Better-Life.png", "https://i.ibb.co/BP7F86x/Desain-tanpa-judul.png"],
    active: 0,
  }),
  mounted() {
    let i = 0;
    setInterval(() => {
      if (i > this.images.length - 1) {
        i = 0;
      }
      this.active = i;
      i++;
    }, 4000);
  },
};
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
/* .myrotate {
  transform: rotateY(180deg);
} */
.myrotate:hover {
  transform: rotateY(180deg);
}
.presver {
  transform-style: preserve-3d;
}
.prespective {
  perspective: 1000px;
}
.backface {
  backface-visibility: hidden;
}
.flip-card {
  background-color: transparent;

  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  /* width: 100%; */
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  /* background-color: #bbb; */
  color: black;
}

/* Style the back side */
.flip-card-back {
  /* background-color: dodgerblue; */
  color: white;
  transform: rotateY(180deg);
  /* height: 453px; */
}
</style>
