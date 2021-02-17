<template>
  <main-layout>
    <div class="container px-4">
      <!-- Hero -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Text -->
        <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
          <h1 class="">Protetică dentară</h1>
          <p class="">
            Pe lângă dificultăți de masticație si vorbire, lipsa unui dinte sau a unui grup de dinți duce și la afecțiuni ale cavitații bucale, ale articulației gurii sau afecțiuni digestive. De aceea este recomandată înlocuirea dinților lipsă cu implanturi, punți dentare sau proteze. Află care este cea mai potrivită variantă pentru tine.
          </p>
        </div>

        <!-- Image -->
        <div class="mt-16 lg:mt-24 md:max-w-xs lg:max-w-max">
          <img
            src="../assets/images/ProtHero.png"
            alt="Little girl having a toothache."
            class=""
          />
        </div>
      </div>

      <!-- Content -->
      <h2>Care soluție e potrivită pentru mine?</h2>
      <p>
        Există mai multe tipuri de proteze, fixe sau mobile, cum ar fi: proteze care se conectează la dinți sau implanturi, proteze care se atașează folosind adezivi, sau care pot fi menținute de mușchii înconjurători. Aceste proteze au scopul de a reda forma și culoarea dinților dumneavoastră naturali, pentru a vă oferi un zâmbet cât mai natural și estetic.
      </p>
      <p>
        Soluția potrivită pentru tine, însă, trebuie aleasă împreună cu medicul stomatolog, în urma unei consultații profesioniste.
      </p>

      <h3>Proteze dentare mobile</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Avantaje
            <ul>
            <li>Îmbunătățirea masticației, a vorbirii și a digestiei;</li>
            <li>Îmbunătățirea zâmbetului, redarea aspectului plăcut al buzelor, întinderea pielii feței la un nivel normal;</li>
            <li>Ușor de utilizat;</li>
            <li>Nu implică durere.</li>
            </ul>
          </p>
          <p class="mt-4">
            Dezavantaje
            <ul>
              <li>Necesită ajustări periodice;</li>
              <li>Se pot fractura;</li>
              <li>Există riscul destabilizării protezei;</li>
              <li>După fiecare masă trebuie scoase și igienizate.</li>
            </ul>
          </p>
        </div>
        <img
          src="../assets/images/ProtezaDentaraMobila.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

      <h3>Proteze dentare fixe</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Avantaje
            <ul>
            <li>Stabilitate ridicată, fiind amplasate pe implanturi dentare sau pe dinții adiacenți;</li>
            <li>Conferă un aspect natural al dinților;</li>
            <li>Spre deosebire de protezele mobile, acestea sunt mai ușor de igienizat.</li>
          </ul>
          </p>
          <p class="mt-4">
            Dezavantaje
            <ul>
          <li>Cost mai ridicat decât cel al protezelor dentare mobile</li>
          </ul>
          </p>
        </div>
        <img
          src="../assets/images/ProtezaDentaraFixa.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

      <h3>Coroane dentare</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Avantaje
            <ul>
            <li>Sunt folosite pentru a restaura dinții ce pot fi salvați;</li>
            <li>Sunt folosite pentru a acoperi implanturi;</li>
            <li>Nu sunt sensibile la variațiile de</li>
            temperatură;
            <li>Nu se fracturează;</li>
            <li>Nu există riscul apariției cariilor;</li>
            <li>Prezintă o duritate crescută, datorită</li>
            materialelor folosite (ceramică sau zirconiu).
            </ul>
          </p>
          <p class="mt-4">
            Dezavantaje
            <ul>
            <li>Cost mai ridicat decât cel al punților dentare.</li></ul>
          </p>
        </div>
        <img
          src="../assets/images/CoroanaDentara.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

      <h3>Punți dentare</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Avantaje
            <ul>
              <li>Cu o igienă corectă, acestea pot rezista pană la 10 ani;</li>
              <li>Sunt ancorate pe dinții vecini, cu ajutorul unor coroane dentare;</li>
              <li>nu sefracturează;</li>
              <li>nu există riscul apariției cariilor.</li>
              </ul>
          </p>
          <p class="mt-4">
            Dezavantaje
            <ul>
            <li>Procesul poate necesita șlefuirea dinților vecini sănătoși.</li>
            </ul>
          </p>
        </div>
        <img
          src="../assets/images/PunteDentara.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

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