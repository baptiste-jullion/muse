<template>
  <header class="border-b border-b-black/10 p-4 backdrop-blur-md">
    <div class="container">
      <nav class="flex items-center gap-2">
        <Logo class="max-lg:size-8" />
        <ul class="flex gap-2 max-lg:hidden">
          <li v-for="link in links" :key="link.url">
            <NuxtLink class="px-4 py-2" :to="link.url">
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <ul class="ml-auto flex gap-2 max-lg:hidden">
          <li>
            <NuxtLink
              class="rounded-default px-3 py-1.5 hover:bg-black/5"
              to="/login"
            >
              Se connecter
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="rounded-default bg-black px-3 py-1.5 text-white hover:bg-black/90"
              to="/login"
            >
              S'inscrire
            </NuxtLink>
          </li>
        </ul>
        <button class="lg:hidden ml-auto">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
              class="fill-black"
            />
          </svg>
        </button>
      </nav>
    </div>
  </header>
</template>

<script lang="ts" setup>
const links = ref([
  {
    label: "Accueil",
    url: "/",
  },
  {
    label: "Les festivals",
    url: "/festivals",
  },
  {
    label: "L'application",
    url: "/app",
  },
  {
    label: "Nous contacter",
    url: "/contact",
  },
]);
</script>
