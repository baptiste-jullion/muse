<template>
  <section>
    <Heading title="FAQ" subtitle="Tout ce que tu dois savoir sur MUSE." />
    <div class="mx-auto flex w-full flex-col gap-2">
      <div
        class="flex flex-col rounded-4 even:bg-black/[.02]"
        v-for="(QA, index) in QAs"
      >
        <button
          @click="toggleAccordion(index)"
          class="flex w-full items-center justify-between rounded-4 p-4"
        >
          <h3 class="text-left">{{ QA.question }}</h3>
          <svg
            class="shrink-0"
            v-if="active === index"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 13V11H19V13H5Z" fill="black" />
          </svg>
          <svg
            class="shrink-0"
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.999 13.0002H4.99902V11.0002H10.999V5.00024H12.999V11.0002H18.999V13.0002H12.999V19.0003H10.999V13.0002Z"
              class="fill-black"
            />
          </svg>
        </button>
        <p class="px-4 pb-6 text-black/60" v-if="active == index">
          {{ QA.answer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const QAs = [
  {
    question: "Qu'est-ce que MUSE‏‏‎ ‎?",
    answer:
      "MUSE est une application mobile qui te permet de retrouver tous les festivals de musique en France. Tu peux acheter des billets, consulter la programmation et partager tes photos. MUSE est ton allié pour ne rien manquer de tes festivals préférés.",
  },
  {
    question: "Comment ça marche‏‏‎ ‎?",
    answer:
      "Il te suffit de télécharger l'application, de créer un compte et de te laisser guider. Tu peux consulter les festivals à venir, ajouter tes événements préférés à ta liste de favoris et acheter des billets en quelques clics. Tu peux également partager tes photos et tes impressions avec la communauté. MUSE est l'application indispensable pour tous les festivaliers.",
  },
  {
    question: "Combien ça coûte‏‏‎ ‎?",
    answer:
      "L'application est gratuite. Tu peux acheter des billets pour les festivals directement depuis l'application. Les tarifs varient en fonction des festivals et des offres disponibles. Tu peux consulter les tarifs et les offres spéciales directement depuis l'application. MUSE te permet de trouver les meilleurs tarifs et de profiter de réductions exclusives.",
  },
  {
    question: "Est-ce que je peux ajouter mes propres événements‏‏‎ ‎?",
    answer:
      "Oui, tu peux ajouter tes propres événements et les partager avec la communauté. Tu peux ajouter des photos, des vidéos et des commentaires pour partager tes impressions avec les autres festivaliers. MUSE te permet de rester en contact avec tes amis et de découvrir de nouveaux événements à ne pas manquer.",
  },
  {
    question:
      "Y a-t-il une limite au nombre d'événements que je peux créer‏‏‎ ‎?",
    answer:
      "Non, tu peux créer autant d'événements que tu le souhaites. Tu peux ajouter des événements à ta liste de favoris, les partager avec tes amis et les consulter à tout moment. MUSE te permet de rester informé des événements à venir et de ne rien manquer de tes festivals préférés.",
  },
  {
    question:
      "Les événements peuvent-ils être partagés avec d'autres utilisateurs‏‏‎ ‎?",
    answer:
      "Oui, tu peux partager tes événements avec d'autres utilisateurs. Tu peux ajouter des photos, des vidéos et des commentaires pour partager tes impressions avec la communauté. MUSE te permet de rester en contact avec tes amis et de découvrir de nouveaux événements à ne pas manquer.",
  },
  {
    question:
      "Quelles sont les options de rappel disponibles pour les événements‏‏‎ ‎?",
    answer:
      "Tu peux ajouter des événements à ta liste de favoris pour recevoir des notifications avant le début de l'événement. Tu peux également ajouter des événements à ton calendrier pour recevoir des rappels automatiques. MUSE te permet de rester informé des événements à venir et de ne rien manquer de tes festivals préférés.",
  },
  {
    question: "Quelle est la procédure pour supprimer un événement‏‏‎ ‎?",
    answer:
      "Tu peux supprimer un événement en quelques clics. Il te suffit de te rendre sur la page de l'événement et de cliquer sur le bouton 'Supprimer'. Tu peux également masquer un événement pour le rendre invisible aux autres utilisateurs. MUSE te permet de gérer tes événements en toute simplicité.",
  },
];

const active = ref<number | null>(null);

const toggleAccordion = (index: number) => {
  active.value = active.value === index ? null : index;
};
</script>
