<template>
  <div id="app">
    <router-link to="/login"></router-link>
    <router-view />
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
  </div>
</template>

<script>
export default {
  created() {
    // var scriptTag1 = document.createElement("script");
    // scriptTag1.src =
    //   "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.22.0/bootstrap-vue.min.js";
    // scriptTag1.id = "bootstrap-vue-js";
    // document.getElementsByTagName("head")[0].appendChild(scriptTag1);

    var scriptTag = document.createElement("script");
    scriptTag.src =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.22.0/bootstrap-vue.min.css";
    scriptTag.id = "bootstrap-vue";
    document.getElementsByTagName("head")[0].appendChild(scriptTag);
  },
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
</style>
