<template>
  <div class="page">
    <div class="container">
      <div class="left">
        <div class="login">Login</div>
        <div class="eula">
          By logging in you agree to the ridiculously long terms that you didn't
          bother to read
        </div>
      </div>
      <div class="right">
        <svg viewBox="0 0 320 300">
          <defs>
            <linearGradient
              inkscape:collect="always"
              id="linearGradient"
              x1="13"
              y1="193.49992"
              x2="307"
              y2="193.49992"
              gradientUnits="userSpaceOnUse"
            >
              <stop style="stop-color: #f0f" offset="0" id="stop876" />
              <stop style="stop-color: #f0f" offset="1" id="stop878" />
            </linearGradient>
          </defs>
          <path
            d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143"
          />
        </svg>
        <form class="form" v-on:submit="onSubmit">
          <label for="email">Username</label>
          <input
            class="input"
            type="text"
            v-model="form.username"
            id="username"
          />
          <label for="password">Password</label>
          <input
            class="input"
            type="password"
            id="password"
            v-model="form.password"
          />
          <input type="submit" id="button-submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    onSubmit(event) {
      event.preventDefault();
      localStorage.setItem("role", this.form.username);

      this.$router.push({ path: "/multiple-player" });
    },
  },
});
</script>

<style scoped>
@import url("https://rsms.me/inter/inter-ui.css");

::selection {
  background: #2d2f36;
}

::-webkit-selection {
  background: #2d2f36;
}

body {
  background: white;
  font-family: "Inter UI", sans-serif;
  margin: 0;
  padding: 20px;
}

.page {
  background: #e2e2e5;
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  position: absolute;
  place-content: center;
  width: calc(100% - 40px);
}

@media (max-width: 767px) {
  .page {
    height: auto;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
}

.container {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}

@media (max-width: 767px) {
  .container {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
}

.left {
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
}

@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
}

.login {
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px;
}

.eula {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px;
}

.right {
  background: #474a59;
  box-shadow: 0 0 40px 16px black;
  color: #f1f1f2;
  position: relative;
  width: 50%;
}

@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}

svg {
  position: absolute;
  width: 320px;
}

path {
  fill: none;
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}

.form {
  margin: 40px;
  position: absolute;
}

label {
  color: #c2c2c5;
  display: block;
  font-size: 14px;
  height: 16px;
  margin-top: 20px;
  margin-bottom: 5px;
}

input {
  background: transparent;
  border: 0;
  color: #f2f2f2;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: none;
  -webkit-text-fill-color: white;
  transition: background-color 5000s ease-in-out 0s;
}

input::-moz-focus-inner {
  border: 0;
}

#button-submit {
  color: #707075;
  margin-top: 40px;
  transition: color 300ms;
}

#submit:focus {
  color: #f2f2f2;
}

#submit:active {
  color: #d0d0d2;
}
</style>
