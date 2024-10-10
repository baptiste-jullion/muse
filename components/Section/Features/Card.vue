<template>
  <div
    :class="[
      'group relative flex rounded-bento-card bg-black p-4 transition-all',
      {
        'bg-black text-white': dark,
        'items-end': tagBottom,
      },
    ]"
  >
    <slot />
    <div
      v-if="title"
      :class="[
        'z-10 flex size-fit flex-col gap-2 rounded-bento-tag bg-white px-4 py-2',
      ]"
    >
      <p class="font-semibold">{{ title }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    dark?: boolean;
    title?: string;
    tagBottom?: boolean;
  }>(),
  {
    dark: false,
  },
);
</script>
