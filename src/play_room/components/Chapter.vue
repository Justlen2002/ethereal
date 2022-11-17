<template>
  <div class="play-room-screen">
    <div class="play-room-header">
      <div class="d-flex align-items-center cursor-pointer" @click="$router.push({path: '/'})">
        <logo-qwerty class="logo-style" />
        <p class="logo-name mt-3">Ethereal Project</p>
      </div>
      <div
        class="dashboard-card d-flex align-items-center justify-content-between px-4"
      >
        <div class="grey-color">Chapter 1</div>
        <b-button class="button-close" @click="$router.push({path: '/play-room'})">Close</b-button>
      </div>
    </div>

    <div class="d-flex chapter-board">
      <div class="season mx-4 p-4">
        <h5 class="text-white">Season</h5>
        <p class="text-white-1">Please choose 1 section</p>
        <div class="container-card">
          <div v-for="(item, index) in cards" :key="index" class="card">
            <p class="text-white-1">{{ item.title }}</p>
            <p class="text-white-1">{{ item.description }}</p>
            <p class="text-white-1">{{ item.word }}</p>
          </div>
        </div>
      </div>
      <div class="chapter mx-4 p-4">
        <h5 class="text-white">Chapter</h5>
        <div class="container-chapter">
          <div v-for="(item, index) in chapters" :key="index" class="card-chapter">
            <p class="text-white-1">{{ item.title }}</p>
            <p class="text-white-1">{{ item.description }}</p>
            <p class="text-white-1">{{ item.word }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import LogoQwerty from "../../assets/LogoQwerty";

export default Vue.extend({
  components: {
    LogoQwerty,
  },

  data() {
    return {
      cards: [
        {
          title: "Title",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 2",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 3",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 4",
          description: "Description",
          word: "200 words",
        },
        
      ],
      chapters: [
        {
          title: "Title",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 2",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 3",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 4",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 5",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 6",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 7",
          description: "Description",
          word: "200 words",
        },
        {
          title: "Title 8",
          description: "Description",
          word: "200 words",
        },
      ],
    };
  },
});
</script>

<style scoped>
.text-white-1 {
  color: white;
  opacity: 0.7;
  font-weight: 300;
}

@keyframes changeColor {
  from {
    color: white;
  }

  to {
    color: rbga(white, 0.5);
  }
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

.button-close {
  color: white;
  background-color: #818cf8;
  border-radius: 10px;
  padding: 5px 20px;
  cursor: pointer;
}

.season {
  background-color: #212936;
  width: 40%;
  border-radius: 10px;
}

.chapter {
  background-color: #212936;
  width: 60%;
  border-radius: 10px;
}

.chapter-board {
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 3rem;
}

.container-card {
  display: flex;
  flex-wrap: wrap;
}

.card {
  border-radius: 10px;
  background-color: transparent !important;
  border-color: white!important;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  width: 45%;
}

.container-chapter {
  display: flex;
  flex-wrap: wrap;
}

.card-chapter {
  border-radius: 10px;
  background-color: transparent !important;
  border: 1px solid white!important;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  width: 22%;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
