<template>
  <div class="mt-8 flex">
    
    <!-- Icon -->
    <div class="flex justify-end w-1/6 lg:w-16">
      <icon :name="body.name"></icon>
    </div>

    <!-- Text -->
    <div class="flex flex-col w-5/6 pl-4 pr-16 md:pr-0 md:w-72 lg:max-w-prose">
      <div class="font-mwsb tracking-wide text-md">{{ body.title.ro }}</div>
      <p class="mt-4 text-justify font-mvl tracking-wide text-md">
        {{ body.description.ro }}
      </p>
      <router-link
        v-if="body.isComponent"
        :to="{
          name: body.name,
          params: { serviceName: body.name },
        }"
        class="mt-4 text-right tracking-wide font-mvl text-sm text-secondary-300"
        :key="body.id"
      >
        Citește mai mult
      </router-link>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "TCard",
  components: {
    Icon,
  },
  props: {
    body: {
      type: Object,
      required: true,
    },
  },
};
</script>