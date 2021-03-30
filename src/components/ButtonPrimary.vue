<template>
  <div class="">
    <router-link
      class="btn text-sm pl-6"
      :to="reference"
    >
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ButtonPrimary",
  props: {
    reference: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.btn {
  @apply flex items-center justify-center py-3 px-6 border border-transparent font-mwsr tracking-wide rounded-sm text-white bg-primary hover:bg-primary-light;
}
</style>