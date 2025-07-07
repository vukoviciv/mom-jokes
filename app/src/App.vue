<template>
  <main class="main">
    <h1 class="orange">Dad Joke Generator</h1>
    <br />
    <joke-box :joke="currentJoke" />
    <generate-btn @generate-new="generateJoke()" />
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getRandomJoke, type Joke } from './utils/jokes'
import JokeBox from './components/JokeBox.vue'
import GenerateBtn from './components/GenerateBtn.vue'

const generateJoke = () => (currentJoke.value = getRandomJoke())
const currentJoke = ref<Joke>(getRandomJoke())
</script>

<style scoped>
.main {
  text-align: center;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  border: 2px dashed #ffb84d;
}
</style>
