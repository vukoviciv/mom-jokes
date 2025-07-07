<template>
  <button class="generate-new" @click="$emit('generate-new')">Tell me another!</button>
</template>

<script lang="ts" setup>
defineEmits(['generate-new'])
</script>

<style scoped>
.generate-new {
  background-color: #ff7b00;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
