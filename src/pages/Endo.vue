<template>
  <main-layout>
    <!-- Hero -->
    <div
      class="container flex flex-col md:flex-row justify-around items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="">Tratamente de salvare a dintelui</h1>
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
    <div class="container">
      <h2>Etapele tratamentului</h2>
      <p>
        Tratamentul de canal se administrează sub anestezie locală și durează în
        medie 2 ore. În cazuri complexe, atunci când pulpa este inflamată sau
        infectată, tratamentul poate implica 2 sau mai multe ședințe. Medicul
        poate recomanda un analgezic în cazul în care apar dureri în termen de
        24-48 de ore de la efectuarea tratamentului.
      </p>

      <div class="mt-12 md:mt-16 flex flex-col md:flex-row justify-around">
        <div class="md:max-w-sm lg:max-w-2xl">
          <p>
            Prima etapă a tratamentului constă în curățarea canalului (scoaterea
            nervului) și eliminarea totală a infecției din canalul dintelui.
          </p>
        </div>
        <div class="flex-none">
          <img
            src="../assets/images/Endo1.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>

      <div class="mt-12 md:mt-16 flex flex-col md:flex-row justify-around">
        <div class="md:max-w-sm lg:max-w-2xl">
          <p>
            A doua etapă se concentrează pe umplerea canalului cu o pasta
            biocompatibilă (compusă din antibiotic, iodoform, endometazonă, oxid
            de zinc, eugenol) pentru a preveni răspândirea baterilor. În anumite
            cazuri, medicul dentist va trebui sa insereze și un dispozitiv
            corono-radicular pentru stabilizarea lucrării protetice.
          </p>
        </div>
        <div class="flex-none">
          <img
            src="../assets/images/Endo2.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>

      <div class="mt-12 md:mt-16 flex flex-col md:flex-row justify-around">
        <div class="md:max-w-sm lg:max-w-2xl">
          <p>
            A treia etapă are în vedere plombarea dintelui (obturație) și,
            eventual, refacerea coroanei dentare, atunci când este cazul.
          </p>
        </div>
        <div class="flex-none">
          <img
            src="../assets/images/Endo3.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
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
  name: "Endo",
  components: {
    PriceTable,
    MainLayout,
  },
};
</script>