<template>
  <div class="flex flex-col md:text-center">
    <h2>{{ title }}</h2>
    <p class="text-balance text-black/60">
      {{ subtitle }}
    </p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
