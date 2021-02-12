<template>
  <div class="mt-8 flex">
    <!-- Icon -->
    <div class="flex justify-end w-1/6 lg:w-16">
      <icon :name=iconName></icon>
    </div>
    
    <!-- Text -->
    <div class="flex flex-col w-5/6 pl-4 pr-16 md:pr-0 md:w-72 lg:w-prose">
      <div class="font-mwsb tracking-wide text-md">{{ title }}</div>
      <p class="mt-4 text-justify font-mvl tracking-wide text-md">
        <slot></slot>
      </p>
      <p class="mt-4 text-right tracking-wide font-mvl text-sm text-secondary-300">
        Citește mai mult
      </p>
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
    title: String,
    iconName: String,
    flink: String,
  },
};
</script>