<template>
  <div class="container px-6">
    
    <!-- Hero -->
    <div class="flex flex-col md:flex-row justify-between items-center">
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-prose pr-2 order-last md:order-first">
        <h1 class="text-center md:text-left">Implanturi Dentare</h1>
        <p class="">
          Implantul dentar este o procedură medicală prin care se înlocuiește
          rădăcina unuia sau mai multor dinți cu o rădăcină din titan de înaltă
          puritate, înfiletată chirurgical în țesutul osos al maxilarului.
          Această rădăcină va servi ca fundație pentru montarea lucrării
          protetice.
        </p>
        <p class="mt-8">
          Materialul folosit pentru realizarea implantului este
          <strong class="font-mveb">100% biocompatibil</strong>, organismul
          nostru integrându-l astfel in osul mandibular prin
          <strong class="font-mveb">procesul natural de osteointegrare.</strong>
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

    <!-- CTA -->
    <section class="mt-24">
      <div
        class="pb-12 px-4 flex justify-center bg-gradient-to-br from-primary-001 to-primary-200"
      >
        <div class="max-w-prose">
          <h2 class="text-center">TBD</h2>
          <p>
            Implantul dentar este recomandat de medici din întreaga lume pentru
            că, spre deosebire de punțile sau protezele clasice, acesta este mai
            estetic, mai funcțional, mai rezistent și prezintă mai puține
            riscuri. Procedura de implant dentar este specialitatea clinicii
            noastre, echipa noastră oferind servicii de înaltă calitate la
            costuri sub nivelul celor din clinicile din marile orașe.
          </p>
          <div class="mt-8 md:flex md:justify-center">
            <div class="rounded-md shadow">
              <a
                href="#appointment-form"
                class="w-full flex items-center justify-center px-4 py-3 md:px-6 md:py-3 border border-transparent font-mwsr text-sm rounded-md text-white bg-primary hover:bg-primary-light shadow-md focus:shadow-none"
              >
                Programare Consultatie
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section id="benefits" class="mt-8 flex flex-col">
      <h2 class="text-center">Care sunt beneficiile implantului dentar?</h2>
      
      <div class="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2">
        <t-card
          v-for="benefit in benefits"
          :key="benefit.id"
          :body="benefit"
          class="lg:flex lg:justify-center"
        />
      </div>
    </section>

    <!-- Procedure Steps -->
    <section class="mt-24">
    <h2>{{ procedure.title.ro }}</h2>

    <div
      v-for="procedureStep in procedure.steps"
      :key="procedureStep.step"
      class="flex flex-col md:flex-row md:justify-between"
    >
      <div class="md:w-2/3 md:pr-4 flex flex-col justify-around order-last md:order-first">
        <div>
          <h3>{{ procedureStep.title.ro }}</h3>
          <p
            v-for="(description, index) in procedureStep.description.ro"
            :key="index"
            class="mb-4 md:max-w-sm lg:max-w-prose"
          >
            {{ description }}
          </p>
        </div>
      </div>
      <img
        v-if="procedureStep.image"
        :src="procedureStep.image"
        :alt="procedureStep.title"
        class="object-scale-down w-full md:w-72"
      />
    </div>
    </section>

    <section class="w-full my-24">
      <!-- Price Table -->
      <h3>Listă prețuri</h3>
      <price-table :rows="service.priceTable.rows.ro"></price-table>
    </section>
  </div>
</template>

<script>
import PriceTable from "../components/PriceTable.vue";
import TCard from "../components/TCard.vue";
import store from "@/store";

export default {
  components: {
    PriceTable,
    TCard,
  },
  data() {
    return {
      benefits: store.dentalImplantBenefits,
      procedure: {
        title: {
          ro: "Etapele Implantului Dentar",
        },
        steps: [
          {
            step: 1,
            title: {
              ro: "Consultația și planul de tratament",
            },
            image: require("../assets/images/ImplantStep1.png"),
            description: {
              ro: [
                "Planul de tratament este stabilit de medicul specialist, pe baza unei radiografii panoramice. În unele cazuri, este nevoie și de o scanare CT, în special atunci când radiografia simplă nu reflectă clar volumul osului. Dacă pacientul suferă de afecțiuni cronice, medicul implantolog poate recomanda efectuarea unor analize suplimentare.",
                "De obicei, planul de tratament cuprinde procedura de inserarea a rădăcinii din titan și montarea bontului de prindere și a coroanei dentare. Acest plan va conține o estimare a costurilor și a programărilor calendaristice.",
                "Uneori, este necesar ca planul de tratament sa conțină și proceduri de creștere a volumului de os, prin adiție osoasă și, eventual, sinus lifting.",
              ],
            },
          },
          {
            step: 2,
            title: {
              ro: "Inserarea chirurgicală a implantului",
            },
            image: require("../assets/images/ImplantStep2.png"),
            description: {
              ro: [
                "Inserarea unui implant dentar în os se face sub anestezie locală. Procedura nu este dureroasă și are o durată de aproximativ 30 de minute. În funcție de caz, după inserare, implantul poate fi acoperit cu gingia, pentru a facilita procesul de osteointegrare sau se poate continua cu montarea bontului și atașarea coroanei.",
              ],
            },
          },
          {
            step: 3,
            title: {
              ro: "Perioada de osteointegrarea",
            },
            image: false,
            description: {
              ro: [
                "De cele mai multe ori, implantul dentar presupune o perioadă de vindecare între inserarea implantului și montarea bontului și a coroanei dentare. Această perioadă poate dura de la 3 la 6 luni, în funcție de recomandarea medicul implantolog.",
              ],
            },
          },
          {
            step: 4,
            title: {
              ro: "Montarea bonturilor",
            },
            image: require("../assets/images/ImplantStep3.png"),
            description: {
              ro: [
                "La finalul perioadei de osteointegrare, se montează, pentru o perioadă de 2-3 săptămâni, un bont de vindecare, ce ajută gingia să capete o formă naturală. Apoi, se atașează o altă piesă, numită bont protetic, care va constitui suportul pentru coroana dentară ce va înlocui dintele lipsă.",
              ],
            },
          },
          {
            step: 5,
            title: {
              ro: "Atașarea Coroanei",
            },
            image: false,
            description: {
              ro: [
                "Coroana este realizată de tehnicianul dentar, conform specificațiilor medicului implantolog. Aceasta urmează a fi cimentată pe bont, rezultând astfel un dinte perfect funcțional și estetic.",
              ],
            },
          },
        ],
      },
    };
  },
  props: {
    serviceName: {
      type: String,
      required: true,
    },
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 6);
    },
  },
};
</script>