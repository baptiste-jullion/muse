<template>
  <section>
    <div class="flex flex-col md:text-center">
      <h1><span class="inline-block">Vibre</span> au rythme des festivals</h1>
      <p class="text-balance text-black/60">
        Avec MUSE, trouve facilement les festivals qui te correspondent,<br />
        achète tes billets en quelques clics et organise ton séjour.
      </p>
    </div>
    <div
      class="relative flex items-center justify-center gap-4 *:block *:min-w-0"
    >
      <img src="/mockups/m1-left.png" />
      <img src="/mockups/m1-front.png" />
      <img src="/mockups/m1-right.png" />
      <Logo class="absolute -z-10 w-2/5 opacity-5" />
    </div>
    <a
      class="mx-auto flex w-fit gap-1.5 rounded-default bg-black px-3 py-1.5 text-white hover:bg-black/90"
      href="#appstores"
    >
      <span>Télécharger l'application</span>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99918 13.833L5.83252 9.66634L6.99919 8.45801L9.16585 10.6247V3.83301H10.8325V10.6247L12.9992 8.45801L14.1659 9.66634L9.99918 13.833ZM4.99919 17.1663C4.54085 17.1663 4.14863 17.0033 3.82252 16.6772C3.49641 16.3511 3.33308 15.9586 3.33252 15.4997V12.9997H4.99919V15.4997H14.9992V12.9997H16.6658V15.4997C16.6658 15.958 16.5028 16.3505 16.1767 16.6772C15.8506 17.0038 15.4581 17.1669 14.9992 17.1663H4.99919Z"
          class="fill-white"
        />
      </svg>
    </a>
  </section>
</template>

<style scoped>
h1:hover span {
  animation: vibrate 50ms linear infinite forwards;
  filter: blur(1px);
  transition: filter 0.2s;
}

@keyframes vibrate {
  0% {
    transform: translateX(-1px) translateY(1px);
  }
  100% {
    transform: translateX(1px) translateY(-2px);
  }
}
</style>
