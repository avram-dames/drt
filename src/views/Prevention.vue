<template>
  <div class="container px-6 md:px-0">  
    <!-- Hero Section -->
    <section class="">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Text -->
        <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
          <h1 class="text-center md:text-left">Tratamente de prevenție</h1>
          <p class="">
            Întotdeauna este mai ieftin și mai puțin dureros să previi o
            afecțiune decât să o tratezi. Placa bacteriană (tartrul) este
            principala cauza a afecțiunilor dentare și gingivale. Astfel,
            prevenirea formării tartrului prin periaj regulat și igienizarea
            corectă a gurii este prima linie de protecție împotriva cariilor și
            bolilor parodontale.
          </p>
          <p class="mt-8">
            Însă, de cele mai multe ori, chiar și o igienă corectă nu este
            suficientă pentru curățarea în profunzime a danturii. Prin urmare,
            tratamentul de igienizare profesională este recomandat o dată la 6
            luni, pentru a curăța în totalitate dinții de tartru, prevenind
            astfel apariția cariilor și afecțiunile gingivale. Totodată, acesta
            oferă și o ușoară albire naturală a dinților, ajutându-te să te
            simți mai sănătos și să ai un zâmbet mai frumos.
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
    </section>

    <section class="">
      <div class="max-w-2xl md:flex md:flex-row md:items-center md:space-x-4">
        <div class="">
          <h2 class="text-center md:text-left">Ce este tartrul?</h2>
          <img
            src="../assets/images/Plaque.png"
            alt=""
            class="float-right pl-4 md:hidden"
          />
          <p>
            Tartrul este o substanță de culoare galben-brună, formată prin
            mineralizarea plăcii bacteriene, care se solidifică pe suprafața
            dinților, deasupra si sub nivelul liniei gingivale. Odată formată,
            această placă bacteriană minerală nu poate fi înlăturată prin
            simplul periaj.
          </p>
        </div>
        <img
          src="../assets/images/Plaque.png"
          alt=""
          class="hidden md:block object-none md:mt-8"
        />
      </div>
    </section>

    <section class="mt-24">
      <div
        class="pb-12 px-4 flex justify-center bg-gradient-to-br from-primary-001 to-primary-200"
      >
        <div class="max-w-prose">
          <h2 class="text-center">Cum să previi afecțiunile dentare?</h2>
          <p class="text-justify">
            Pe lângă îngălbenirea dinților și efectele respirației urât
            mirositoare, pe termen lung, tartrul cauzează apariția cariilor și,
            în unele cazuri, chiar și gingivită, atunci când se formează sub
            linia gingiei. Detartrajul periodic elimină riscul acestor
            afecțiuni, protejându-ți dinții timp de aproximativ 6 luni.
          </p>
          <div class="mt-8 md:flex md:justify-center">
            <div class="rounded-md shadow">
              <a
                href="#appointment-form"
                class="w-full flex items-center justify-center px-4 py-3 md:px-6 md:py-3 border border-transparent font-mwsr text-sm rounded-md text-white bg-primary hover:bg-primary-light shadow-md focus:shadow-none"
              >
                Programare Igienizare Dentară
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Treatment Steps -->
    <section class="mt-12 flex justify-center">
      <div>
        <h2 class="text-center">{{ service.details.pageContent.title }}</h2>

        <div
          v-for="treatmentStep in service.details.pageContent.treatmentSteps"
          :key="treatmentStep.step"
          class="flex flex-col md:flex-row md:justify-start items-center md:mt-12"
        >
          <!-- <img
          :src="treatmentStep.icon"
          :alt="treatmentStep.step"
          class="w-20 float-left object-none"
        /> -->
          <p class="clear-none max-w-prose">
            {{ treatmentStep.description.ro }}
          </p>
          <div
            class="w-full flex justify-end flex-shrink-0 mb-4 md:mb-0 md:justify-start md:w-60 md:ml-12 order-first md:order-last"
          >
            <img
              :src="treatmentStep.illustration"
              :alt="treatmentStep.title"
            />
          </div>
        </div>
      </div>
    </section>

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
      return store.services.find((s) => s.id == 1);
    },
  },
};
</script>