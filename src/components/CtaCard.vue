<template>
  <div
    class="pb-12 px-4 flex justify-center bg-gradient-to-br from-primary-001 to-primary-200"
  >
    <div class="max-w-prose">
      <h2 class="text-center">{{ ctaMessage.title.ro }}</h2>
      <p class="text-justify" v-html="ctaMessage.description.ro"></p>
      <div class="mt-8 md:flex md:justify-center">
        <button-primary :reference="'#appointment-form'">
          {{ ctaMessage.ctaButton.ro }}
        </button-primary>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPrimary from "./ButtonPrimary.vue";

export default {
  components: { ButtonPrimary },
  name: "CtaCard",
  props: {
    ctaMessage: {
      type: Object,
      required: true,
    },
  },
};
</script>