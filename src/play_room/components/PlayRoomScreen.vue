<template>
  <div class="play-room-screen">
    <div class="play-room-header">
      <div class="d-flex align-items-center cursor-pointer" @click="$router.push({path: '/'})">
        <logo-qwerty class="logo-style" />
        <p class="logo-name mt-3">Ethereal Project</p>
      </div>
      <div
        class="
          dashboard-card
          d-flex
          align-items-center
          justify-content-between
          px-4
        "
      >
        <div class="grey-color change-chapter" @click="$router.push({path: '/chapter'})">Chapter 1</div>
        <b-form-select class="grey-color">Beautiful sound</b-form-select>
        <div class="d-flex mb-3">
          <b-button class="logo-child mx-2">
            <switch-logo></switch-logo>
            <p :style="{ color: 'transparent' }" class="d-none">button1</p>
          </b-button>
          <b-button class="logo-child mx-2">
            <play-again></play-again>
            <p :style="{ color: 'transparent' }">button2</p>
          </b-button>
          <b-button class="logo-child mx-2">
            <change-logo></change-logo>
            <p :style="{ color: 'transparent' }">button3</p>
          </b-button>
          <b-button class="logo-child mx-2">
            <volume-logo></volume-logo>
            <p :style="{ color: 'transparent' }">button4</p>
          </b-button>
          <b-button class="logo-child mx-2">
            <hidden-logo></hidden-logo>
            <p :style="{ color: 'transparent' }">button5</p>
          </b-button>
          <b-button class="logo-child mx-2">
            <un-mute></un-mute>
            <p :style="{ color: 'transparent' }">button5</p>
          </b-button>
        </div>
        <b-button class="button-start">Start</b-button>
      </div>
    </div>

    <div class="play-room-main-ground">
      <div
        class="d-flex justify-content-center align-items-center"
        :style="{ paddingTop: '27vh', paddingBottom: '27vh' }"
      >
        <div class="text-board">Press any key to start</div>
      </div>

      <div class="calculate-card d-flex justify-content-around align-items-center">
        <div v-for="(field, index) in calculateFields" class="text-center" :key="index" :style="{width: '15%'}">
          <span class="text-white">
            0.0
          </span>
          <hr :style="{ borderTop: '2px solid white'}">
          <p class="text-white">{{ field }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import Vue from "vue";
import LogoQwerty from "../../assets/LogoQwerty";
import SwitchLogo from "../../assets/SwitchLogo";
import PlayAgain from "../../assets/PlayAgain";
import ChangeLogo from "../../assets/ChangeLogo.vue";
import VolumeLogo from "../../assets/VolumeLogo.vue";
import HiddenLogo from "../../assets/HiddenLogo.vue";
import UnMute from "../../assets/UnMute.vue";

export default Vue.extend({
  components: {
    LogoQwerty,
    SwitchLogo,
    PlayAgain,
    ChangeLogo,
    VolumeLogo,
    HiddenLogo,
    UnMute,
  },

  data() {
    return {
      calculateFields: [
        "Time",
        "Input number",
        "Speed",
        "Correct number",
        "Correct rate",
      ],
    };
  },
});
</script>

<style>
.play-room-screen {
  background-color: #121826;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 112px auto 50px;
}
.play-room-header {
  /* display: grid;
  grid-template-columns: 50% 50%; */
  padding-top: 24px;
  padding-right: 72px;
  padding-left: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dashboard-card {
  background-color: #212936;
  height: 68px;
  width: 680px;
  border-radius: 10px;
  box-shadow: 0 100px 80px rgb(0 0 0 / 7%),
    0 41.7776px 33.4221px rgb(0 0 0 / 5%), 0 22.3363px 17.869px rgb(0 0 0 / 4%),
    0 12.5216px 10.0172px rgb(0 0 0 / 4%), 0 6.6501px 5.32008px rgb(0 0 0 / 3%),
    0 2.76726px 2.21381px rgb(0 0 0 / 2%);
}
.play-room-main-ground {
  padding-bottom: 80px;
  padding-right: 70px;
  padding-left: 70px;
}

@keyframes changeColor {
  from {
    color: white;
  }

  to {
    color: rbga(white, 0.5);
  }
}

.text-board {
  width: 80%;
  height: auto;
  font-size: 20px;
  text-align: center;
  animation-duration: 1.5s;
  animation-name: changeColor;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.calculate-card {
  background-color: #212936;
  top: 70vh;
  height: 140px;
  width: 60%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  box-shadow: 0 100px 80px rgb(0 0 0 / 7%),
    0 41.7776px 33.4221px rgb(0 0 0 / 5%), 0 22.3363px 17.869px rgb(0 0 0 / 4%),
    0 12.5216px 10.0172px rgb(0 0 0 / 4%), 0 6.6501px 5.32008px rgb(0 0 0 / 3%),
    0 2.76726px 2.21381px rgb(0 0 0 / 2%);
}

.logo-name {
  font-size: 2.25rem;
  line-height: 2.5rem;
  --tw-text-opacity: 1;
  color: #818cf8;
  font-weight: 700;
}

.logo-style {
  width: 64px;
  height: 64px;
}

.grey-color {
  color: #9ca3af;
}

.purple-color {
  color: #818cf8;
}

.logo-child {
  line-height: 1.75rem;
  font-size: 1.125rem;
  width: 22.5px;
  height: 18px;
  cursor: pointer;
}

.button-start {
  color: white;
  background-color: #818cf8;
  border-radius: 10px;
  padding: 5px 20px;
}

.change-chapter:hover {
  cursor: pointer;
  background-color: #818cf8;
  color: white;
  padding: 0.75rem;
  border-radius: 30px;
}

.cursor-pointer {
  cursor: pointer;
}
</style>