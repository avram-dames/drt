<template>
  <div class="hello">
    <h1 class="text-yellow-500">{{ msg }}</h1>
    <div class="grid grid-cols-3 gap-4">
    <div class="box">1</div>
    <div class="box">1</div>
    <div class="box">1</div>
    <div class="box">1</div>
    <div class="box">1</div>
    <div class="box">1</div>
    <div class="box">1</div>
    <div class="box">1</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  border: grey 1px solid;
}
</style>
