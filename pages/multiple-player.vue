<template>
  <div class="play-room-screen">
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
    <div class="play-room-header">
      <div
        class="d-flex align-items-center cursor-pointer"
        @click="$router.push({ path: '/' })"
      >
        <logo-qwerty class="logo-style" />
        <p class="logo-name mt-3">Ethereal Project</p>
      </div>

      <b-button
        v-if="winner && !startGame"
        class="button-start cursor-pointer"
        @click="$router.go()"
      >
        Back
      </b-button>
      <b-button
        v-if="!winner && !startGame"
        class="button-start cursor-pointer"
        @click="onStart"
      >
        Start
      </b-button>
      <p v-if="startGame" class="text-white">{{ `Time: ${timeCount}` }}</p>
    </div>

    <div
      v-if="finish && winner.result"
      class="d-flex flex-column play-room-main-ground justify-content-center align-items-center w-100"
      :style="{ paddingTop: '20vh', paddingBottom: '20vh' }"
    >
      <h1 class="text-white text-center mb-4">CONGRATULATIONS! YOU WIN!!!</h1>
      <h2 class="text-white">{{ winner.host }} : {{ winner.member }}</h2>
      <img
        src="https://cdn.dribbble.com/users/217021/screenshots/1703306/pic_5.gif"
        class="w-25 text-center"
      />
    </div>

    <div
      v-if="finish && !winner.result"
      class="d-flex flex-column play-room-main-ground justify-content-center align-items-center w-100"
      :style="{ paddingTop: '20vh', paddingBottom: '20vh' }"
    >
      <h1 class="text-white text-center mb-2">TRY AGAIN LATER!</h1>
      <h2 class="text-white">{{ winner.host }} : {{ winner.member }}</h2>
      <img
        src="https://media0.giphy.com/media/9b5PGYzFoeLvy3RfJO/giphy.gif?cid=6c09b9529e9f9b510da78aa198c9d2781280530d95c92e20&rid=giphy.gif&ct=ts"
        class="w-25 text-center"
      />
    </div>

    <div v-if="!finish" class="d-flex w-100">
      <div class="play-room-main-ground">
        <div
          v-if="!startGame"
          class="d-flex justify-content-center align-items-center"
          :style="{ paddingTop: '30vh', paddingBottom: '20vh' }"
        >
          <div class="text-board">Waiting for player</div>
        </div>

        <div
          v-if="startGame"
          class="justify-content-center align-items-center"
          :style="{ paddingTop: '20vh', paddingBottom: '20vh' }"
        >
          <div class="d-flex justify-content-center align-items-center">
            <div class="text-keyboard-data d-flex">
              <p
                v-for="(char, idx) in checkSpell(hostWordList[hostIndex])"
                :key="idx"
                :class="checkColor(idx + 1) ? '' : returnSpellColor(idx)"
              >
                {{ char }}
              </p>
            </div>
          </div>
        </div>

        <div
          class="calculate-card d-flex justify-content-around align-items-center"
        >
          <div
            v-for="(field, id) in calculateFields"
            :key="id"
            class="text-center"
            :style="{ width: '40%' }"
          >
            <span class="text-white"> {{ field.value }} </span>
            <hr :style="{ borderTop: '2px solid white' }" />
            <p class="text-white">{{ field.title }}</p>
          </div>
        </div>
      </div>

      <hr
        :style="{
          flexDirection: 'row',
          height: '100%',
          borderLeft: '1px solid white',
        }"
      />

      <div class="play-room-main-ground">
        <div
          v-if="!startGame"
          class="d-flex justify-content-center align-items-center"
          :style="{
            paddingTop: '35vh',
          }"
        >
          <div class="text-board">Waiting for player</div>
        </div>

        <div
          v-if="startGame"
          class="justify-content-center align-items-center"
          :style="{ paddingTop: '20vh', paddingBottom: '20vh' }"
        >
          <div class="d-flex justify-content-center align-items-center">
            <div class="text-keyboard-data d-flex">
              <p v-for="(char, idx) in memberWord.split('')" :key="idx">
                {{ char }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import LogoQwerty from '@/assets/LogoQwerty';

export default Vue.extend({
  components: {
    LogoQwerty,
  },

  data() {
    // const { messages, sendMessage } = useTyping();
    return {
      hostWordList: [],
      time: 0,
      hostInputNumber: 0,
      hostIndex: 0,
      wordSelectId: 0,
      startGame: false,
      intervalId: null,
      finish: false,
      data: null,
      wordSelect: '',
      winner: false,
      memberWord: '',
    };
  },

  computed: {
    calculateFields() {
      return [
        {
          title: 'Input number',
          value: this.hostInputNumber,
        },
        {
          title: 'Speed',
          value: this.speed.toFixed(1),
        },
      ];
    },

    speed() {
      if (!this.time) return 0;
      return this.hostInputNumber / 5 / (this.time / 60);
    },

    timeCount() {
      return `${Math.floor(this.time / 60) < 10 ? '0' : ''}${Math.floor(
        this.time / 60
      )}:${this.time - Math.floor(this.time / 60) * 60 < 10 ? '0' : ''}${
        this.time - Math.floor(this.time / 60) * 60
      }`;
    },
  },

  watch: {
    time: {
      handler(val) {
        if (val === 10) {
          this.onStop();
          this.finish = true;
          this.onCompare();
        }
        this.fetchMemberWord();
      },
    },

    hostIndex: {
      handler() {
        this.onSpeak(this.hostWordList[this.hostIndex]);
        this.onUpdate();
      },
    },
  },

  async created() {
    const scriptTag = document.createElement('script');
    scriptTag.src =
      'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-vue/2.22.0/bootstrap-vue.min.css';
    scriptTag.id = 'bootstrap-vue';
    // eslint-disable-next-line nuxt/no-globals-in-created
    document.getElementsByTagName('head')[0].appendChild(scriptTag);

    const snapshot = await this.$fire.firestore.collection('messages').get();
    const [data] = snapshot.docs.map((doc) => doc.data());
    this.hostWordList = data.host.word_list;
    this.data = data;
  },

  mounted() {
    window.addEventListener('keydown', (e) => {
      if (!this.startGame) return;
      this.hostInputNumber++;
      if (e.keyCode === this.wordSelect[this.wordSelectId].charCodeAt() - 32) {
        this.char = e.keyCode;
        this.onBeepTrue();
        if (this.wordSelectId === this.wordSelect.length - 1) {
          this.hostIndex++;
          this.wordSelectId = 0;
        } else {
          this.wordSelectId++;
        }
      } else {
        this.wordSelectId++;
        this.onBeepWrong();
        this.onSpeak(this.hostWordList[this.hostIndex]);
        setTimeout(() => {
          this.wordSelectId = 0;
        }, 500);
      }
    });
  },

  methods: {
    // onGetFirebase() {},

    countTime() {
      this.intervalId = setInterval(() => {
        this.time++;
      }, 1000);
    },

    onStop() {
      this.startGame = false;
      clearInterval(this.intervalId);
    },

    onStart() {
      this.startGame = true;
      this.onSpeak(this.hostWordList[this.hostIndex]);
      this.countTime();
      this.fetchMemberWord();
    },

    checkSpell(word) {
      var arr = word.split('');
      this.wordSelect = arr;
      return arr;
    },

    checkColor(idx) {
      return idx > this.wordSelectId;
    },

    onSpeak(word) {
      const mediaUrl = `https://ssl.gstatic.com/dictionary/static/sounds/20160317/${word}--_gb_1.mp3`;
      const playSound = new Audio(mediaUrl);
      playSound.play();
    },

    onBeepWrong() {
      const mediaUrl = `https://www.pacdv.com/sounds/interface_sound_effects/beep-3.wav`;
      const playSound = new Audio(mediaUrl);
      playSound.play();
    },

    onBeepTrue() {
      const mediaUrl = `http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3`;
      const playSound = new Audio(mediaUrl);
      playSound.play();
    },

    async onUpdate() {
      await this.$fire.firestore
        .collection('messages')
        .doc('typing')
        .update({
          ...this.data,
          host: {
            word_list: this.hostWordList,
            id: 1,
            count: this.hostIndex,
          },
        });
    },

    async onCompare() {
      const snapshot = await this.$fire.firestore.collection('messages').get();
      const [data] = snapshot.docs.map((doc) => doc.data());

      if (data.host.count >= data.member.count)
        this.winner = {
          host: data.host.count,
          member: data.member.count,
          result: true,
        };
      else {
        this.winner = {
          host: data.host.count,
          member: data.member.count,
          result: false,
        };
      }
    },

    async fetchMemberWord() {
      const snapshot = await this.$fire.firestore.collection('messages').get();
      const [data] = snapshot.docs.map((doc) => doc.data());

      // TODO: Make real data
      // this.memberWord = data.member.word_list[data.member.count] ?? '';

      this.memberWord = data.member.word_list[this.time] ?? '';
    },

    returnSpellColor(idx) {
      return this.wordSelect[idx].charCodeAt() - 32 === this.char ||
        idx + 1 < this.wordSelectId
        ? 'text-green'
        : 'text-red';
    },
  },
});
</script>

<style scoped>
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
    0 12.5216px 10.0172px rgb(0 0 0 / 4%), 0 6.6501px 5.3201px rgb(0 0 0 / 3%),
    0 2.7673px 2.2138px rgb(0 0 0 / 2%);
}

.play-room-main-ground {
  padding-bottom: 80px;
  padding-right: 70px;
  padding-left: 70px;
  width: 100%;
}

@keyframes change-color {
  from {
    color: white;
  }

  to {
    color: white;
    opacity: 0.25;
  }
}

.text-keyboard-data {
  font-size: 6vw;
  color: #fff;
}

.text-board {
  width: 80%;
  height: auto;
  font-size: 20px;
  text-align: center;
  animation-duration: 1.5s;
  animation-name: change-color;
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
    0 12.5216px 10.0172px rgb(0 0 0 / 4%), 0 6.6501px 5.3201px rgb(0 0 0 / 3%),
    0 2.7673px 2.2138px rgb(0 0 0 / 2%);
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

.text-green {
  color: green;
}

.text-red {
  color: red;
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
