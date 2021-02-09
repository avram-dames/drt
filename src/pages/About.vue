<template>
  <main-layout>
    <h1 class="text-yellow-500">About</h1>
    <p>{{msg}}</p>
  </main-layout>
</template>

<script>
import MainLayout from '../layouts/Main.vue'
export default {
  components: {
    MainLayout
  }
}
</script>
