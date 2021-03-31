<template>
  <div>
    <div class="h-20"></div>
  <div class="px-6 flex flex-col justify-center items-center"> 
    <h1>Pagina pe care o cauți nu există!</h1>
    <p class="mb-32">
      Click 
      <router-link :to="{name: 'Home'}" class="text-primary underline">aici</router-link>
      pentru a te reîntoarce la pagina principală.</p>
  </div>
  </div>
</template>

<script>
export default {
  components: {}
}
</script>