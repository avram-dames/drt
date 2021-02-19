<template>
  <div>
    <!-- Hero -->
    <div
      class="container flex flex-col md:flex-row justify-around items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="">Tratamente Chirurgicale</h1>
        <p class="">
          Tratamentele chirurgicale sunt specialitatea clinicii noastre.
          Obiectivul nostru este de a salva dinții recuperabili prin rezolvarea
          complicațiilor dentare și gingivale în cel mai scurt timp posibil,
          ușor și fără durere.
        </p>
        <p class="mt-8">
          Află mai multe despre tratamentele noastre și fa-ți o programare
          online pentru a crește șansele de ați salva dinții aflați in pericol.
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

    <div class="container">
      <h2>Tratament de urgență abces dentar</h2>
      <p>
        Abcesul dentar este una din cele mai frecvente urgențe stomatologice.
        Abcesul dentar este o infecție în interiorul dintelui care se manifestă
        prin formarea unei pungi de puroi la vârful rădăcinii sau în partea
        laterala a unui dinte. Este cauzat de bacteriile aflate în interiorul
        cariilor și care ajung să infecteze vasele de sânge de la baza dintelui.
        Citește mai mult despre tratamentele de salvare a dintelui, aici.
      </p>

      <h2>Extracții dentare</h2>
      <p>
        Păstrarea dintelui natural este deosebit de importantă pe termen lung.
        Clinica noastră oferă tratamente de prevenție si salvare a dinților
        făcând tot posibilul sa se evite procedura de extracție. Totuși uneori
        pacientul vine prea târziu la cabinet pentru a se mai putea salva
        dintele, astfel dintele trebuie scos. Citește mai mult despre
        tratamentele de prevenție, aici.
      </p>

      <h2>Rezectie apicală</h2>
      <p>
        Uneori este nevoie de o intervenție chirurgicala pentru a îndepărta
        infecția formata la vârful rădăcinii dintelui pentru al salva. Acest
        tratament este des folosit pentru a îndepărta o infecție apărută în urma
        unui tratament de canal nereușit.
      </p>

      <h2>Chiuretaj parodontal în câmp deschis</h2>
      <p>
        Acesta este un tratament care are ca scop eliminarea pungilor
        parodontale, formate sub gingie, prin intervenție chirurgicală.
      </p>
    </div>

    <div class="container w-full md:w-160 px-4 md:px-0">
      <!-- Price Table -->
      <price-table :rows="service.priceTable.rows.ro"></price-table>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import PriceTable from "../components/PriceTable.vue";

export default {
  components: {
    PriceTable,
  },
  props: {
    serviceName: {
      type: String,
      required: true,
    },
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 4);
    },
  },
};
</script>