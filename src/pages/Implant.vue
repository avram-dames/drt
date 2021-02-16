<template>
  <main-layout>
    <!-- Hero -->
    <div
      class="container flex flex-col md:flex-row justify-around items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="">Implanturi Dentare</h1>
        <p class="">
          Implantul dentar este o procedură medicală prin care se înlocuiește
          rădăcina unuia sau mai multor dinți cu o rădăcină din titan de înaltă
          puritate, înfiletată chirurgical în țesutul osos al maxilarului.
          Această rădăcină va servi ca fundație pentru montarea lucrării
          protetice.
        </p>
        <p class="mt-8">
          Materialul folosit pentru realizarea implantului este 100%
          biocompatibil, organismul nostru integrându-l astfel in osul
          mandibular prin procesul natural de osteointegrare.
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