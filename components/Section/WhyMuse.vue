<template>
  <section>
    <div class="flex flex-col md:text-center">
      <h2>Pourquoi choisir MUSE⠀?</h2>
      <p class="text-balance text-black/60">
        Ce qui fait de MUSE ton meilleur allié pour les festivals.
      </p>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full min-w-[500px]">
        <thead>
          <tr>
            <th></th>
            <th v-for="app in apps" class="py-2 md:py-4">
              <img
                :src="`/whymuse/${app.name}.png`"
                class="mx-auto size-10 sm:size-14 md:size-20"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(feature, index) in features" class="even:bg-black/[.02]">
            <td class="text-center">{{ feature }}</td>
            <td v-for="app in apps" class="py-2 md:py-4">
              <img
                :src="`/whymuse/${app.features[index] ? 'yes' : 'no'}.svg`"
                class="mx-auto size-6 md:size-12"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
const apps = [
  {
    name: "songkick",
    features: [true, true, false, true, true],
  },
  {
    name: "touslesfestivals",
    features: [false, false, true, false, true],
  },
  {
    name: "fest",
    features: [false, false, true, true, false],
  },
  {
    name: "fever",
    features: [true, false, true, true, false],
  },
  {
    name: "muse",
    features: [true, true, true, true, true],
  },
];

const features = [
  "Programmation détaillée",
  "Favoris",
  "eTickets",
  "Recherche géolocalisée",
  "Notifications",
];
</script>
