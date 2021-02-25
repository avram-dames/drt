<template>
  <div class="container px-6">

    <!-- Hero Section -->
    <hero :service="service"></hero>

    <div class="">
      <div class="max-w-prose">
        <h2 class="text-center md:text-left">Tratament de urgență abces dentar</h2>
        <p>
          Abcesul dentar este una din cele mai frecvente urgențe stomatologice.
          Abcesul dentar este o infecție în interiorul dintelui care se
          manifestă prin formarea unei pungi de puroi la vârful rădăcinii sau în
          partea laterala a unui dinte. Este cauzat de bacteriile aflate în
          interiorul cariilor și care ajung să infecteze vasele de sânge de la
          baza dintelui. Citește mai mult despre tratamentele de salvare a
          dintelui, aici.
        </p>

        <h2 class="text-center md:text-left">Extracții dentare</h2>
        <p>
          Păstrarea dintelui natural este deosebit de importantă pe termen lung.
          Clinica noastră oferă tratamente de prevenție si salvare a dinților
          făcând tot posibilul sa se evite procedura de extracție. Totuși uneori
          pacientul vine prea târziu la cabinet pentru a se mai putea salva
          dintele, astfel dintele trebuie scos. Citește mai mult despre
          tratamentele de prevenție, aici.
        </p>

        <h2 class="text-center md:text-left">Rezectie apicală</h2>
        <p>
          Uneori este nevoie de o intervenție chirurgicala pentru a îndepărta
          infecția formata la vârful rădăcinii dintelui pentru al salva. Acest
          tratament este des folosit pentru a îndepărta o infecție apărută în
          urma unui tratament de canal nereușit.
        </p>

        <h2 class="text-center md:text-left">Chiuretaj parodontal în câmp deschis</h2>
        <p>
          Acesta este un tratament care are ca scop eliminarea pungilor
          parodontale, formate sub gingie, prin intervenție chirurgicală.
        </p>
      </div>
    </div>
    <!-- Price Table -->
    <div class="my-24 w-full">
      <h3>Listă prețuri</h3>
      <price-table :rows="service.priceTable.rows.ro"></price-table>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import PriceTable from "../components/PriceTable.vue";
import Hero from '../components/Hero.vue';

export default {
  components: {
    PriceTable,
    Hero
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 4);
    },
  },
};
</script>