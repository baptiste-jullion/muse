<template>
  <LayoutHeader class="sticky top-0 z-50" />
  <main
    class="flex flex-col gap-10 overflow-hidden px-4 *:container *:flex *:flex-col *:gap-8 lg:*:gap-16 *:py-8 lg:*:py-20"
  >
    <SectionHero />
    <SectionFeatures />
    <SectionWhyMuse />
    <SectionPartners />
    <SectionFaq />
    <SectionStores />
  </main>
  <LayoutFooter />
</template>

<script setup lang="ts">
import Lenis from "lenis";

onMounted(() => {
  const lenis = new Lenis();

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
});
</script>
