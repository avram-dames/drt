<template>
  <main-layout>
    <!-- Hero -->
    <div
      class="container flex flex-col md:flex-row justify-around items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="">Protetică dentară</h1>
        <p class="">
          Pe lângă dificultăți de masticație si vorbire, lipsa unui dinte sau a
          unui grup de dinți duce și la afecțiuni ale cavitații bucale, ale
          articulației gurii sau afecțiuni digestive. De aceea este recomandată
          înlocuirea dinților lipsă cu implanturi, punți dentare sau proteze.
          Află care este cea mai potrivită variantă pentru tine.
        </p>
      </div>

      <!-- Image -->
      <div class="mt-16 lg:mt-24 md:max-w-xs lg:max-w-max">
        <img
          src="../assets/images/EndoHero.png"
          alt="Little girl having a toothache."
          class=""
        />
      </div>
    </div>

    <div class="container w-full md:w-160 px-4 md:px-0">
      <!-- Price Table -->
      <price-table></price-table>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import PriceTable from "../components/PriceTable.vue";

export default {
  components: {
    MainLayout,
    PriceTable,
  },
};
</script>