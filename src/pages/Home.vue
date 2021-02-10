<template>
  <main-layout>
    <div class="container">
      <div class="h-screen bg-gray-200 md:bg-white md:grid md:grid-cols-2 md:gap-4">
        <div class="flex items-end md:items-center">
          <div class="flex flex-col">
            <h1 class="font-mwb text-2xl md:text-4xl">
              Zâmbetul perfect începe cu o consultație
            </h1>
            <p class="hidden md:inline-block font-mvr text-lg">
              Misiunea noastră este redarea zâmbetului dumneavoastră, acesta
              fiind oglinda stării de bine a întregului organism.
            </p>
            <div class="mt-5 sm:mt-8 md:flex md:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-10 py-2 border border-transparent font-mwsr text-sm rounded-md text-white bg-primary hover:bg-primary-light"
                >
                  Află cum
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:inline-block">
          <img
            src="../assets/images/header.png"
            alt="Photo of smiling lady by Hian Oliveira borrowd from Unsplash"
          />
        </div>
      </div>
    </div>

    <div class="px-4">
      <div class="max-w-3xl bg-red-200 rounded-lg mx-auto my-16 p-16">
        <h1 class="text-2xl font-mwb mb-2">
          Let's build with TailwindCSS
        </h1>
        <h2 class="uppercase tracking-wide">
          Misiunea noastră este redarea zâmbetului dumneavoastră, acesta
          fiind oglinda stării de bine a întregului organism.
        </h2>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
export default {
  components: {
    MainLayout,
  },
};
</script>
