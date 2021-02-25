<template>
  <div class="rounded-md shadow">
    <a :href="reference" class="btn text-base">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    reference: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn {
  @apply w-full flex items-center justify-center py-3 px-6 border border-transparent font-mwsr tracking-wide rounded-md text-white bg-primary hover:bg-primary-light shadow-md focus:shadow-none;
}
</style>