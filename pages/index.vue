<template>
  <div id="slider-container">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <link
      type="text/css"
      rel="stylesheet"
      href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"
    />
    <link
      type="text/css"
      rel="stylesheet"
      href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"
    />
    <div id="main-slider" class="d-flex justify-content-center">
      <div
        id="side-1"
        class="slide card active cursor-pointer mr-4"
        @click="$router.push({ path: '/play-room' })"
      >
        <div class="card-body">
          <single class="logo" />
          <h2 class="text-center mt-4 text-white">Single player</h2>
        </div>
      </div>
      <div
        id="side-2"
        class="slide card active cursor-pointer ml-4"
        @click="$router.push({ path: '/login' })"
      >
        <div class="card-body">
          <multiple class="logo" />
          <h2 class="text-center mt-4 text-white">Multiple player</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Single from "@/assets/Single.vue";
import Multiple from "@/assets/Multiple.vue";

export default Vue.extend({
  components: {
    Single,
    Multiple,
  },

  created() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    const scriptTag = document.createElement("script");
    scriptTag.src =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.22.0/bootstrap-vue.min.css";
    scriptTag.id = "bootstrap-vue";
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
  },
});
</script>

<style scoped>
#slider-container {
  max-height: 100vh;
  background-color: #121826;
}

#main-slider {
  display: flex;
  align-items: center;
  height: 100vh;
}

#main-slider .slide {
  width: 18rem;
  height: 25rem;
  transition: all 0.5s;
  background-color: #818cf8;
}

.slide.card {
  border-radius: 10px;
  border-color: #818cf8;
}

.slide .card-title {
  font-size: 0.9rem;
}

.slide .card-body {
  margin-top: 4rem;
}

.slide img {
  border-radius: 10px 10px 0 0;
  filter: grayscale(100%);
  transition: all 1s;
}

.slide .card-body p {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  transition: all 1s;
  opacity: 0;
}

.slide.active img {
  filter: none;
}

#side-1:hover {
  z-index: 99;
  transform: scale(1.25);
}

#side-2:hover {
  z-index: 99;
  transform: scale(1.25);
}

.slider-controls {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto 3rem;
}

.logo {
  width: 10rem;
  height: 10rem;
  margin-left: 3rem;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
