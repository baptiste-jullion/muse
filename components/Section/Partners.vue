<template>
  <section>
    <Heading
      title="Ils nous font confiance"
      subtitle="Les plus grands festivals nous ont fait confiance pour enrichir leur
        événement."
    />
    <NuxtMarquee auto-fill class="!overflow-visible">
      <img
        v-for="img in ['francofolies', 'hellfest', 'musilac', 'solidays']"
        :src="`/partners/${img}.png`"
        class="md:mx-8 mx-4 max-md:h-10"
      />
    </NuxtMarquee>
  </section>
</template>
