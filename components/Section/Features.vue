<template>
  <section>
    <Heading
      title="Les fonctionnalités"
      subtitle="Tout ce que MUSE peut t'offrir pour une expérience unique."
    />
    <div
      class="grid grid-cols-1 gap-3 max-lg:grid-rows-5 max-sm:*:h-40 sm:aspect-[71/120] sm:grid-cols-3 md:gap-4 lg:aspect-[120/71] lg:grid-cols-5 lg:gap-6"
    >
      <SectionFeaturesCard class="overflow-hidden sm:col-span-3">
        <video
          class="absolute bottom-0 left-0 w-full"
          muted
          autoplay
          loop
          src="/features/festival.mp4"
        />
      </SectionFeaturesCard>
      <SectionFeaturesCard
        class="max-sm:items-start sm:col-span-2"
        title="Favoris"
        tag-bottom
      >
        <img
          src="/features/favorites.png"
          class="absolute bottom-0 right-[8%] w-3/4 object-contain object-bottom max-sm:h-[110%]"
        />
      </SectionFeaturesCard>
      <SectionFeaturesCard
        class="max-sm:overflow-hidden sm:row-span-2"
        title="Notifications"
      >
        <img
          src="/features/notifications.png"
          class="absolute top-[35%] z-10 scale-125 object-contain max-sm:left-1/2 max-sm:top-1/2 max-sm:h-[200%] max-sm:-translate-x-1/2 max-sm:-translate-y-1/2"
        />
      </SectionFeaturesCard>
      <SectionFeaturesCard
        class="overflow-hidden sm:max-lg:col-start-1 sm:max-lg:row-start-3"
        title="eTickets"
      >
        <img src="/features/etickets.png" class="absolute left-[40%] top-1/3" />
      </SectionFeaturesCard>
      <SectionFeaturesCard
        class="overflow-hidden max-sm:hidden sm:max-lg:col-start-3 sm:max-lg:row-start-2"
      >
        <Logo class="absolute size-full scale-[2] fill-white" />
      </SectionFeaturesCard>
      <SectionFeaturesCard
        class="overflow-hidden sm:col-span-2 sm:row-span-2"
        title="Programmation détaillée"
      >
        <img
          src="/features/prog2.png"
          class="absolute bottom-0 left-0 w-1/2 -rotate-12 object-contain max-sm:h-[80%]"
        />
        <img
          src="/features/prog1.png"
          class="absolute left-1/2 top-1/2 w-1/2 -translate-y-1/2 rotate-12 object-contain shadow-2xl max-sm:h-[120%]"
        />
      </SectionFeaturesCard>
      <SectionFeaturesCard
        class="overflow-hidden sm:col-span-2 sm:max-lg:row-start-3"
        title="Recherche géolocalisée"
        tag-bottom
      >
        <img
          src="/features/map.png"
          class="absolute left-0 top-0 size-full object-cover"
        />
      </SectionFeaturesCard>
    </div>
  </section>
</template>
