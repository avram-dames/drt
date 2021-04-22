<template>
    <div class="container px-6">

    <!-- Hero Section -->
    <hero :service="service"></hero>

    <!-- CTA Card -->
    <!-- <section class="mt-24">
      <cta-card :ctaMessage="service.details.ctaMessage"></cta-card>
    </section> -->

    <section class="">
      <h2 class="">Proteze dentare mobile</h2>      
      <div class="mt-8 flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4 order-last md:order-first">
          <p class="max-w-prose">
            <strong class="font-mvb">Avantaje</strong>
          <ul class="list-inside list-disc">
            <li>Îmbunătățirea masticației, a vorbirii și a digestiei;</li>
            <li>Îmbunătățirea zâmbetului, redarea aspectului plăcut al buzelor, întinderea pielii feței la un nivel normal;
            </li>
            <li>Ușor de utilizat;</li>
            <li>Nu implică durere.</li>
          </ul>
          </p>
          <p class="mt-4 max-w-prose">
            <strong class="font-mveb">Dezavantaje</strong>
          <ul class="list-inside list-disc">
            <li>Necesită ajustări periodice;</li>
            <li>Se pot fractura;</li>
            <li>Există riscul destabilizării protezei;</li>
            <li>După fiecare masă trebuie scoase și igienizate.</li>
          </ul>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090692/drt/prosthetics/mobile_rhxzoz.jpg"
          alt="Proteză dentară mobilă"
          class="w-80 object-contain mb-8"
        />
      </div>

      <h2 class="mt-24">Proteze dentare fixe</h2>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:mr-4 order-last md:order-first">
          <p class="max-w-prose">
            <strong class="font-mveb">Avantaje</strong>
          <ul class="list-inside list-disc">
            <li>Stabilitate ridicată, fiind amplasate pe implanturi dentare sau pe dinții adiacenți;</li>
            <li>Conferă un aspect natural al dinților;</li>
            <li>Spre deosebire de protezele mobile, acestea sunt mai ușor de igienizat.</li>
          </ul>
          </p>
          <p class="mt-8 max-w-prose">
            <strong class="font-mveb">Dezavantaje</strong>
          <ul class="list-inside list-disc">
            <li>Cost mai ridicat decât cel al protezelor dentare mobile.</li>
          </ul>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090692/drt/prosthetics/fixed_zbzf4w.jpg"
          alt="Proteză dentară fixă"
          class="w-80 object-contain mb-8"
        />
      </div>

      <h2 class="mt-24">Coroane dentare</h2>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4 order-last md:order-first">
          
          <p class="max-w-prose">
            <strong class="font-mveb">Avantaje</strong>
          <ul class="list-inside list-disc">
            <li>Sunt folosite pentru a restaura dinții ce pot fi salvați;</li>
            <li>Sunt folosite pentru a acoperi implanturi;</li>
            <li>Nu sunt sensibile la variațiile de temperatură;</li>
            <li>Nu se fracturează;</li>
            <li>Nu există riscul apariției cariilor;</li>
            <li>Prezintă o duritate crescută, datorită materialelor folosite (ceramică sau zirconiu).</li>
          </ul>
          </p>
          <p class="mt-8 max-w-prose">
            <strong class="font-mveb">Dezavantaje</strong>
          <ul class="list-inside list-disc">
            <li>Cost mai ridicat decât cel al protezelor mobile.</li>
          </ul>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090692/drt/prosthetics/crown_tbceic.jpg"
          alt="Coroană dentară"
          class="w-80 object-contain mb-8"
        />
      </div>

      <h2 class="mt-24">Punți dentare</h2>
      <div class="flex flex-col md:flex-row justify-between">
        <div class="md:w-2/3 md:pr-4 order-last md:order-first">
          <p class="max-w-prose">
            <strong class="font-mveb">Avantaje</strong>
          <ul class="list-inside list-disc">
            <li>Cu o igienă corectă, acestea pot rezista pană la 10 ani;</li>
            <li>Sunt ancorate pe dinții vecini, cu ajutorul unor coroane dentare;</li>
            <li>nu sefracturează;</li>
            <li>nu există riscul apariției cariilor.</li>
          </ul>
          </p>
          <p class="mt-8 max-w-prose">
            <strong class="font-mveb">Dezavantaje</strong>
          <ul class="list-inside list-disc">
            <li>Procesul poate necesita șlefuirea dinților vecini sănătoși.</li>
          </ul>
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090692/drt/prosthetics/bridge_puxmzy.jpg"
          alt="Punte dentară"
          class="w-80 object-contain mb-8"
        />
      </div>
    </section>
</div>
    <section class="mt-12 md:mt-24 bg-gray-100 pt-1 pb-12">
      <gallery :images="galleryImages"></gallery>
    </section>

    <appointment-form></appointment-form>
  
</template>

<script>
import store from "@/store";
import Hero from "../components/Hero.vue";
// import CtaCard from '../components/CtaCard.vue';
import Gallery from "../components/Gallery.vue";
import AppointmentForm from "@/components/AppointmentForm.vue";

export default {
  components: {
    Hero,
    AppointmentForm,
    Gallery
    // CtaCard
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 3);
    },
    galleryImages() {
      return this.service.gallery.images;
    },
  },
};
</script>