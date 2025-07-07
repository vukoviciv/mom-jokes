<template>
  <div class="joke-box">
    <p class="setup">{{ joke.setup }}</p>
    <p class="punchline">{{ joke.punchline }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  joke: { type: Object, required: true },
})
</script>
