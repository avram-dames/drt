<template>
<div>
  <div class="container px-6">
    <!-- Hero Section -->
    <hero :service="service"></hero>

    <!-- Content -->
    <h2>
      De ce tip de aparat dentar am nevoie?
    </h2>
    <p class="max-w-prose">
      Cu toții ne dorim ca tratamentul ortodontic sa fie cât mai scurt, iar
      aparatul dentar să fie cât mai puțin vizibil. Însă, pentru că în fiecare
      plan de tratament trebuie să se țină cont de aspectele individuale ale
      pacientului, alegerea aparatului se va face împreună cu medicul ortodont.
    </p>

    <h2>
      Aparate dentare fixe metalice (Brackets)
    </h2>
    <div class="flex flex-col md:flex-row justify-between items-end">
      <div>
        <p class="pr-2 max-w-prose">
          Aparatul dentar fix este dispozitivul recomandat cel mai des pentru
          adolescenți și adulți datorită timpului mai scurt de purtare și a
          rezistenței sporite la alimentele neindicate și activități sportive
          intense.
        </p>
        <p class="pr-2 max-w-prose mt-4">
          Aplicațiile metalice sau brackets-urile sunt lipite de dinte folosind
          o substanță bogată în fluor și minerale, ce hrănește și protejează
          suprafața dintelui de carii sau pete, pe toată durata tratamentului.
          Astfel, brackets-urile susțin arcul principal sau "sârma" care aplică
          forțele corectoare asupra arcadei dentare.
        </p>
      </div>
        <img
          class="object-scale-down w-full md:w-72 order-first md:order-last mb-4"
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090450/drt/braces/metal_m38y1z.jpg"
          alt="Ilustrație aparat dentar fix metalic"
        />

    </div>

    <h2>Aparate dentare fixe ceramice</h2>
    <div class="flex flex-col md:flex-row justify-between items-end">
      <div>
        <p class="pr-2 max-w-prose">
          Brackets-urile realizate din material ceramic sau safir sunt mai
          estetice comparativ cu cele metalice. De aceea, acestea sunt
          recomandate persoanelor pentru care, pe durata tratamentului, aspectul
          fizic este mai important decât aspectul practic asigurat de cele
          metalice, cum ar fi cazul persoanelor care lucrează cu publicul.
        </p>
        <p class="pr-2 max-w-prose mt-4">
          Acest tip de aparat necesită o
          <a class="text-blue-800 hover:underline" href="/preventie"
            >igienă riguroasă</a
          >
          specifică pentru a menține aspectul discret al dispozitivului.
          Totodată, este importantă evitarea alimentelor tari ce pot cauza
          desprinderea bracket-ului de pe suprafața dintelui.
        </p>
      </div>

        <img
          class="object-scale-down w-full md:w-72 order-first md:order-last mb-4"
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090450/drt/braces/ceramics_bmfkf9.jpg"
          alt="Ilustrație aparat dentar fix ceramic"
        />

    </div>

    <h2>Aparate dentare mobile</h2>
    <div class="flex flex-col md:flex-row justify-between items-end">
      <div>
        <p class="pr-2 max-w-prose">
          Acest tip de aparat poate fi aplicat și îndepărtat de pacient, fără
          ajutorul medicului. Spre deosebire de aparatul fix, acesta are un
          efect corectiv mai limitat, tratând doar înclinările dinților. Poate
          fi folosit și cu efect de contenție, adică de fixare a poziției
          dinților după terminarea tratamentului ortodontic.
        </p>
        <p class="pr-2 max-w-prose mt-4">
          Este, de obicei, recomandat copiilor de până la 12 ani, tratând
          defecte de vorbire, înghițire (deglutiție), poziție a limbii și
          altele, dar poate avea și un efect ortopedic, de ghidare a creșterii
          oaselor maxilare.
        </p>
      </div>

        <img
          class="object-scale-down w-full md:w-72 order-first md:order-last mb-4"
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090450/drt/braces/mobile_imb2ko.jpg"
          alt="Ilustrație aparat dentar mobil"
        />
    </div>

    <h2>Aparate dentare de contenție</h2>
    <div class="flex flex-col md:flex-row justify-between items-end">
      <div>
        <p class="pr-2 max-w-prose">
          Purtarea aparatului de contenție după terminarea tratamentului
          ortodontic este o etapă deosebit de importantă pentru păstrarea
          rezultatelor obținute. Țesutul osos are nevoie de o perioada de 3-6
          luni pentru a se forma complet în jurul dinților și a-i fixa în noua
          poziție, prevenind migrarea acestora înapoi la locul lor obișnuit.
        </p>
        <p class="pr-2 max-w-prose mt-4">
          Stabilirea perioadei de purtare și alegerea tipului de aparat de
          contenție se va face împreună cu medicul ortodont.
        </p>
      </div>
      <img
          class="object-scale-down w-full md:w-72 order-first md:order-last mb-4"
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090450/drt/braces/contention_mxrmoi.jpg"
          alt="Ilustrație aparat dentar de contenție"
      />
    </div>
    
  </div>
  <appointment-form></appointment-form>
  </div>
</template>

<script>
import store from "@/store";
import Hero from "../components/Hero.vue";
import AppointmentForm from "@/components/AppointmentForm.vue";

export default {
  components: {
    Hero,
    AppointmentForm,
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 5);
    },
  },
};
</script>