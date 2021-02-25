<template>
    <div
      class="flex flex-col md:flex-row justify-between items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-prose mr-2 order-last md:order-first">
        <h1 class="">{{ service.details.hero.title.ro }}</h1>
        <p
          v-for="(p, index) in service.details.hero.description.ro"
          :key="index"
          class="mb-8"
          v-html="p"
          >
        </p>
      </div>

      <!-- Image -->
      <div class="mt-16 lg:mt-24 md:max-w-xs lg:max-w-max">
        <img
          :src="service.details.hero.image.src"
          :alt="service.details.hero.image.alt.ro"
        />
      </div>
    </div>
</template>

<script>
export default {
    name: 'Hero',
    props: {
    service: {
      type: Object,
      required: true,
    },
  },
}
</script>