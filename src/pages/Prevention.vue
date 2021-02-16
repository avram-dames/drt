<template>
  <main-layout>
    <div
      class="container flex flex-col md:flex-row justify-around items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="">Tratamente de prevenție</h1>
        <p class="">
          Întotdeauna este mai ieftin și mai puțin dureros să previi o afecțiune
          decât să o tratezi. Placa bacteriană (tartrul) este principala cauza a
          afecțiunilor dentare și gingivale. Astfel, prevenirea formării
          tartrului prin periaj regulat și igienizarea corectă a gurii este
          prima linie de protecție împotriva cariilor și bolilor parodontale.
        </p>
        <p class="mt-8">
          Însă, de cele mai multe ori, chiar și o igienă corectă nu este
          suficientă pentru curățarea în profunzime a danturii. Prin urmare,
          tratamentul de igienizare profesională este recomandat o dată la 6
          luni, pentru a curăța în totalitate dinții de tartru, prevenind astfel
          apariția cariilor și afecțiunile gingivale. Totodată, acesta oferă și
          o ușoară albire naturală a dinților, ajutându-te să te simți mai
          sănătos și să ai un zâmbet mai frumos.
        </p>
      </div>

      <!-- Image -->
      <div class="mt-16 lg:mt-24 md:max-w-xs lg:max-w-max">
        <img
          src="../assets/images/PreventionHero.png"
          alt="Young girl brushing her teeth."
          class=""
        />
      </div>
    </div>

    <!-- Price Table -->
    <div class="container w-full md:w-160 px-4 md:px-0">
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
    PriceTable
  },
};
</script>