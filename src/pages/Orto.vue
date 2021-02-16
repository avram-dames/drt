<template>
  <main-layout>
    <!-- Hero -->
    <div
      class="container flex flex-col md:flex-row justify-around items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="">Tratamente ortodontice</h1>
        <p class="">
          Din ce în ce mai multe persoane adulte apelează la tratamente
          ortodontice recunoscând astfel importanța alinierii dinților și a
          mușcăturii. Tratamentele moderne nu impun nicio limită de vârstă,
          încurajând chiar corectarea anomaliilor arcadei dentare la adulți,
          pentru a preveni viitoare complicații.
        </p>
        <p class="mt-8">
          Dinții înghesuiți sunt mai greu de curățat fiind astfel mai expuși
          riscului de a fi pierduți din cauza cariilor și a paradontozei.
          Ortodonția este specialitatea medicinei dentare care se ocupă de
          alinierea dinților folosind aparate dentare fixe sau mobile, cu scopul
          îmbunătățirii mușcăturii, igienei dentare și, nu în ultimul rând, a
          aspectului fizic al feței și al zâmbetului.
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