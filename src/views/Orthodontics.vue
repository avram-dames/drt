<template>
  <div>
    <div class="container px-4">
      <!-- Hero -->
      <div class="flex flex-col md:flex-row justify-between items-center">
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
            alinierea dinților folosind aparate dentare fixe sau mobile, cu
            scopul îmbunătățirii mușcăturii, igienei dentare și, nu în ultimul
            rând, a aspectului fizic al feței și al zâmbetului.
          </p>
        </div>

        <!-- Image -->
        <div class="mt-16 lg:mt-24 md:max-w-xs lg:max-w-max">
          <img
            src="../assets/images/OrtoHero.png"
            alt="Little girl having a toothache."
            class=""
          />
        </div>
      </div>

      <!-- Content -->
      <h2>De ce tip de aparat dentar am nevoie?</h2>
      <p>
        Cu toții ne dorim ca tratamentul ortodontic sa fie cât mai scurt, iar
        aparatul dentar să fie cât mai puțin vizibil. Însă, pentru că fiecare
        plan de tratament trebuie să se țină cont de aspectele individuale ale
        pacientului, alegerea aparatului se va face împreună cu medicul
        ortodont.
      </p>

      <h3>Aparate dentare fixe (Brackets)</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Aparatul dentar fix este dispozitivul recomandat cel mai des pentru
            adolescenți și adulți datorită timpului mai scurt de purtare și a
            rezistenței sporite la alimentele neindicate și activități sportive
            intense.
          </p>
          <p class="mt-4">
            Aplicațiile metalice sau brackets-urile sunt lipite de dinte
            folosind o substanță bogată în fluor și minerale, ce hrănește și
            protejează suprafața dintelui de carii sau pete, pe toată durata
            tratamentului. Astfel, brackets-urile susțin arcul principal sau
            "sârma" care aplică forțele corectoare asupra arcadei dentare.
          </p>
        </div>
        <img
          src="../assets/images/AparatDentarFixMetalic.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Brackets-urile realizate din material ceramic sau safir sunt mai
            estetice comparativ cu cele metalice. De aceea, acestea sunt
            recomandate persoanelor pentru care, pe durata tratamentului,
            aspectul fizic este mai important decât aspectul practic asigurat de
            cele metalice, cum ar fi cazul persoanelor care lucrează cu
            publicul.
          </p>
          <p class="mt-4">
            Acest tip de aparat necesită o igienă riguroasă (backlink prevenție)
            specifică pentru a menține aspectul discret al dispozitivului.
            Totodată, este importantă evitarea alimentelor tari ce pot cauza
            desprinderea bracket-ului de pe suprafața dintelui.
          </p>
        </div>
        <img
          src="../assets/images/AparatDentarFixCeramic.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

      <h3>Aparate dentare mobile</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Acest tip de aparat poate fi aplicat și îndepărtat de pacient, fără
            ajutorul medicului. Spre deosebire de aparatul fix, acesta are un
            efect corectiv mai limitat, tratând doar înclinările dinților. Poate
            fi folosit și cu efect de contenție, adică de fixare a poziției
            dinților după terminarea tratamentului ortodontic.
          </p>
          <p class="mt-4">
            Este, de obicei, recomandat copiilor de până la 12 ani, tratând
            defecte de vorbire, înghițire (deglutiție), poziție a limbii și
            altele, dar poate avea și un efect ortopedic, de ghidare a creșterii
            oaselor maxilare.
          </p>
        </div>
        <img
          src="../assets/images/AparatDentarMobil.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

      <h3>Aparate dentare de contenție</h3>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4">
          <p>
            Purtarea aparatului de contenție după terminarea tratamentului
            ortodontic este o etapă deosebit de importantă pentru păstrarea
            rezultatelor obținute. Țesutul osos are nevoie de o perioada de 3-6
            luni pentru a se forma complet în jurul dinților și a-i fixa în noua
            poziție, prevenind migrarea acestora înapoi la locul lor obișnuit.
          </p>
          <p class="mt-4">
            Stabilirea perioadei de purtare și alegerea tipului de aparat de
            contenție se va face împreună cu medicul ortodont.
          </p>
        </div>
        <img
          src="../assets/images/AparatDentarContentie.png"
          alt="Little girl having a toothache."
          class="w-60"
        />
      </div>

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
      return store.services.find((s) => s.id == 5);
    },
  },
};
</script>