<template>
  <footer class="bg-black px-4 py-12">
    <div
      class="container grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
    >
      <div class="flex flex-col gap-2">
        <Logo class="!size-10 fill-white" />
        <p class="text-white/70">
          Scope so important or high-level. Loss what driving spaces hard
          businesses back donuts with better.
        </p>
      </div>
      <nav v-for="widget in widgets" class="flex flex-col gap-2">
        <h3 class="font-semibold text-white">{{ widget.title }}</h3>
        <ul class="flex flex-col gap-1">
          <li v-for="link in widget.links" :key="link">
            <a href="#" class="text-white/70 hover:underline">{{ link }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
const widgets = [
  {
    title: "L'application",
    links: ["À propos", "Fonctionnalités", "Partenaires", "FAQ"],
  },
  {
    title: "Aide",
    links: ["Support client", "SAV", "CGU & CGV", "Confidentialité"],
  },
  {
    title: "Témoignages",
    links: ["Offres spéciales", "Carrières", "Contact"],
  },
  {
    title: "Blog",
    links: ["Mentions légales", "Newsletter", "Réglages", "Confidentialité"],
  },
  {
    title: "Produit",
    links: ["Prix", "Commander", "Livraison", "Contact"],
  },
];
</script>
