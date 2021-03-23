<template>
  <div class="h-20"></div>
  <div class="md:hidden bg-gradient-to-b from-white inset-0 h-6"></div>
  <div class="flex flex-col md:flex-row justify-between items-center">
    <!-- Text -->
    <div class="md:max-w-sm lg:max-w-prose mr-2 order-last md:order-first">
      <h1 class="text-center md:text-left">{{ service.details.hero.title.ro }}</h1>
      <p
        v-for="(p, index) in service.details.hero.description.ro"
        :key="index"
        class="mb-4"
        v-html="p"
      ></p>
    </div>

    <!-- Image -->
    <div class="mt-12 lg:mt-24 px-12 md:max-w-xs lg:max-w-max">
      <img
        :src="service.details.hero.image.src"
        :alt="service.details.hero.image.alt.ro"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
};
</script>