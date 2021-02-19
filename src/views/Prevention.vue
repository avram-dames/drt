<template>
  <div>
    <!-- Hero Section -->
    <div
      class="container flex flex-col md:flex-row justify-around items-center"
    >
      <!-- Text -->
      <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
        <h1 class="text-center">Tratamente de prevenție</h1>
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

    <!-- Treatment Steps -->
    <div class="px-6 max-w-2xl">
      <h2 class="text-center">Ce este tartrul?</h2>
      <img src="../assets/images/Plaque.png" alt="" class="float-right p-4" />
      <p>
        Tartrul este o substanță de culoare galben-brună, formată prin
        mineralizarea plăcii bacteriene, care se solidifică pe suprafața
        dinților, deasupra si sub nivelul liniei gingivale. Odată formată,
        această placă bacteriană minerală nu poate fi înlăturată prin simplul
        periaj.
      </p>
    </div>

    <h2 class="text-center">Cum se efectuează igienizarea profesională?</h2>

    <div class="p-6 max-w-2xl">
      <img src="../assets/images/1.svg" alt="" class="p-4 float-left" />
      <p class="clear-none">
        Primul pas în tratamentul de igienizare profesională este îndepărtarea
        tartrului. Deoarece detartrajul manual crește riscul deteriorării
        smalțului, clinica noastră folosește procedura de detartraj cu
        ultrasunete, care nu afectează smalțul dinților sau gingiile și este mai
        puțin dureroasă decât procedura standard de detartraj.
      </p>
      <img src="../assets/images/Sonic.png" alt="" class="m-auto" />
    </div>

    <div class="p-6 max-w-2xl">
      <img src="../assets/images/2.svg" alt="" class="p-4 float-left" />
      <p>
        Urmează procedura de periaj profesional pentru a îndepărta resturile mai
        mici de tartru rămase în zonele mai puțin accesibile ale dinților.
        Aceasta este complet nedureroasă fiind realizată cu ajutorul unor
        instrumente și paste de dinți speciale. Periajul profesional nu
        folosește substanțe chimice care deteriorează dintele sau gingia.
      </p>
      <img src="../assets/images/Brush.png" alt="" class="m-auto" />
    </div>

    <div class="p-6 max-w-2xl">
      <img src="../assets/images/3.svg" alt="" class="p-4 float-left" />
      <p>
        Air Flow-ul este ultima procedură efectuată în procesul de igienizare.
        Procedura este efectuată cu ajutorul unui aparat care pulverizează un
        jet de aer comprimat, apă și particule fine de bicarbonat de sodiu
        direct pe suprafața dintelui, curățând smalțul dinților de pete sau alte
        depuneri ce nu au putut fi îndepărtate cu ajutorul detartrajului și al
        periajului profesional.
      </p>
      <img src="../assets/images/Airflow.png" alt="" class="m-auto" />
    </div>

    <p class="p-6 max-w-2xl">
      Pe lângă îngălbenirea dinților și efectele respirației urât mirositoare,
      pe termen lung, tartrul cauzează apariția cariilor și, în unele cazuri,
      chiar și gingivită, atunci când se formează sub linia gingiei. Detartrajul
      periodic elimină riscul acestor afecțiuni, protejându-ți dinții timp de
      aproximativ 6 luni.
    </p>

    <!-- Price Table -->
    <div class="container w-full md:w-160 mx-4 md:mx-0">
      <price-table></price-table>
    </div>
  </div>
</template>

<script>
import PriceTable from "../components/PriceTable.vue";

export default {
  components: {
    PriceTable,
  },
};
</script>