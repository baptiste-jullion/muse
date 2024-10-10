<template>
  <section id="appstores">
    <Heading
      title="L'application"
      subtitle="Télécharge l'appli sur les stores."
    />
    <div class="flex flex-wrap justify-center gap-4">
      <NuxtLink to="https://play.google.com/" target="_blank">
        <img src="/stores/playstore.svg" />
      </NuxtLink>
      <NuxtLink to="https://www.apple.com/fr/app-store/" target="_blank">
        <img src="/stores/appstore.svg" />
      </NuxtLink>
    </div>
  </section>
</template>
