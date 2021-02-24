<template>
  <div class="mt-8 flex">
    
    <!-- Icon -->
    <div class="w-16 flex justify-end">
      <icon :name="body.name"></icon>
    </div>

    <!-- Text -->
    <div class="flex px-6 flex-col max-w-prose">
      <h3 class="mt-0">{{ body.title.ro }}</h3>
      <p>
        {{ body.description.ro }}
      </p>
      <router-link
        v-if="body.isComponent"
        :to="{
          name: body.name,
          params: { serviceName: body.name },
        }"
        class="mt-4 text-right tracking-wide font-mvl text-md text-secondary-300"
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