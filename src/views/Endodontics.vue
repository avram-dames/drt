<template>
  <div class="container px-6 md:px-0">
    
    <!-- Hero -->
    <div
      class="flex flex-col md:flex-row justify-between items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="text-center md:text-left">Tratamente de salvare a dintelui</h1>
        <p class="">
          Tratamentul endodontic are ca obiectiv salvarea dintelui natural sau
          cel puțin a rădăcinii acestuia, folosind tehnici de tratare a
          canalelor dintelui. De cele mai multe ori, acest tratament presupune
          extirparea nervului, igienizara și umplerea canalelor cu materiale
          biocompatibile, precum și reconstrucția coroanei dentare.
        </p>
        <p class="mt-8">
          Salvarea dintelui natural sau a rădăcinii acestuia este deosebit de
          importantă pentru că previne migrarea dinților adiacenți în spațiul
          gol rămas și elimină necesitatea implantului dentar (backlink la
          implanturi) sau a altor lucrări protetice. Din acest motiv,
          tratamentul endodontic este mai economic și mai benefic pentru
          pacient, pe termen lung, decât extracția.
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

    <!-- Treatment Steps -->
    <div class="">
      <h2 class="text-center md:text-left">Etapele tratamentului</h2>
      <p class="max-w-prose">
        Tratamentul de canal se administrează sub anestezie locală și durează în
        medie 2 ore. În cazuri complexe, atunci când pulpa este inflamată sau
        infectată, tratamentul poate implica 2 sau mai multe ședințe. Medicul
        poate recomanda un analgezic în cazul în care apar dureri în termen de
        24-48 de ore de la efectuarea tratamentului.
      </p>

      <div class="mt-8 flex flex-col md:flex-row justify-beween items-center space-x-8">
        <div class="max-w-prose">
          <p class="mt-8">
            Prima etapă a tratamentului constă în curățarea canalului (scoaterea
            nervului) și eliminarea totală a infecției din canalul dintelui.
          </p>
        </div>
        <div class="flex-none order-first md:order-last">
          <img
            src="../assets/images/Endo1.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row justify-beween items-center space-x-8">
        <div class="max-w-prose">
          <p class="mt-8">
            A doua etapă se concentrează pe umplerea canalului cu o pasta
            biocompatibilă (compusă din antibiotic, iodoform, endometazonă, oxid
            de zinc, eugenol) pentru a preveni răspândirea baterilor. În anumite
            cazuri, medicul dentist va trebui sa insereze și un dispozitiv
            corono-radicular pentru stabilizarea lucrării protetice.
          </p>
        </div>
        <div class="flex-none order-first md:order-last">
          <img
            src="../assets/images/Endo2.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row justify-beween items-center space-x-8">
        <div class="max-w-prose">
          <p class="mt-8">
            A treia etapă are în vedere plombarea dintelui (obturație) și,
            eventual, refacerea coroanei dentare, atunci când este cazul.
          </p>
        </div>
        <div class="flex-none order-first md:order-last">
          <img
            src="../assets/images/Endo3.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>
    </div>

    <div class="w-full my-24">
      <!-- Price Table -->
      <h3>Listă prețuri</h3>
      <price-table :rows="service.priceTable.rows.ro"></price-table>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import PriceTable from "../components/PriceTable.vue";

export default {
  name: "Endo",
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
      return store.services.find((s) => s.id == 2);
    },
  },
};
</script>