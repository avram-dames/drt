<template>
  <div>
    <!-- Hero Section -->
    <section class="h-screen bg-hero-image bg-cover md:container relative">
      <div class="h-20"></div>
      <div class="md:hidden bg-gradient-to-b from-white inset-0 h-6"></div>

      <!-- Container for hero section, turns to white background on medium screens and larger -->
      <div
        class="h-screen md:bg-white md:grid md:grid-cols-2 md:gap-4 md:justify-items-center md:items-center"
      >
        <!-- Hero Message -->
        <div
          class="flex flex-col justify-end md:justify-start h-screen-adjusted md:h-auto"
        >
          <div
            class="px-6 py-8 bg-primary-200 bg-opacity-60 md:bg-white"
            style="
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
            "
          >
            <div
              class="font-mwb tracking-wide text-dark text-center md:text-left text-2xl md:text-3xl lg:text-4xl"
            >
              Zâmbetul perfect începe cu o consultație gratuită
            </div>
            <div
              class="my-4 font-mvl tracking-wide text-dark text-sm md:text-md lg:text-lg"
            >
              Echipa noastră de dentiști din Aiud îți va reda zâmbetul și starea
              de bine! Profită de consultația ta gratuită!
            </div>

            <!-- CTA -->
            <div class="mt-8 md:flex md:justify-start">
              <button-primary :reference="'#appointment-form'">
                PROGRAMEAZĂ-TE ACUM
              </button-primary>
            </div>
          </div>
        </div>

        <!-- Hero Image MD and larger screens-->
        <div class="hidden md:inline-block">
          <img
            src="../assets/images/HeroShape.png"
            alt="Photo of smiling lady by Hian Oliveira borrowd from Unsplash"
          />
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="md:mt-24 px-6 md:container">
      <div class="flex flex-col items-center">
        <h2 class="md:mt-0">Tratamente inovatoare</h2>
        <p class="max-w-prose text-center">
          Descoperă gama noastră variată de tratamente stomatologice la prețuri
          surprinzător de avantajoase!
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2">
        <t-card
          v-for="service in services"
          :key="service.id"
          :body="service"
          class="lg:flex lg:justify-center"
        />
      </div>

      <!-- CTA -->
      <div class="my-12 md:flex md:justify-center">
        <button-primary :reference="'#appointment-form'">
                PROGRAMEAZĂ-TE ACUM
              </button-primary>
      </div>
    </section>

    <!-- Our Team Section -->
    <section id="team">
      <h1 class="md:hidden text-2xl font-mwb my-8 text-center">
        Echipa Noastră
      </h1>
      <div
        class="hidden md:flex mt-16 justify-center bg-gradient-to-br from-primary-001 to-primary-200"
      >
        <div class="w-160 lg:w-192 my-16">
          <h1 class="text-2xl font-mwb my-8 text-center">Echipa Noastră</h1>
          <p>
            Ne mândrim cu o echipă profesionistă, determinată să țină pasul cu
            descoperirile din domeniul stomatologiei și dornică să ofere
            pacienților servicii de cea mai bună calitate. Echipa noastră își
            întâmpină pacienții cu zâmbetul pe buze, într-o atmosferă
            primitoare. Fiecare dentist din cadrul clinicii noastre își rezervă
            timp nu numai pentru a oferi tratamente personalizate, ci și pentru
            a le explica pacienților procedurile și pașii pe care trebuie să îi
            urmeze pentru sănătatea lor orală. Rezultatele de durată se nasc din
            comunicare!
          </p>
        </div>
      </div>

      <!-- Team Members Carousel -->
      <carousel></carousel>
    </section>

    <!-- Clinica Noastra -->
    <div class="mt-16 flex flex-col md:flex-row">
      <div
        class="min-h-screen bg-clinic-image bg-cover bg-right-bottom md:w-1/2"
      ></div>
      <div
        class="min-h-screen py-24 px-8 md:px-12 lg:px-16 bg-gradient-to-br from-primary-100 to-primary-200 md:w-1/2 md:flex md:flex-col md:justify-center"
      >
        <h2
          class="text-center md:text-left font-mwb tracking-wide text-xl md:text-2xl"
        >
          CLINICA NOASTRĂ
        </h2>
        <p class="mt-12 font-mvl tracking-wide text-md">
          Clinica noastră a fost înființată în 2008 pentru a reinventa relația
          dintre medicul stomatolog și pacient. Suntem determinați
          să ne întâmpinăm clienții într-un mediu primitor, în care fiecare
          pacient simte că este important și că problemele lui sunt ascultate.
        </p>
        <p class="mt-6 font-mvl tracking-wide text-md">
          Mizăm pe o relație deschisă și dorim să desființăm „frica de dentist”.
          Datorită unei abordări bazate pe comunicare, sinceritate și
          profesionalism, ne vom asigura că fiecare pacient va primi nu numai un
          tratament stomatologic corespunzător, de ultimă generație și eficient,
          ci și sprijinul psihologic de care are nevoie pentru a înțelege
          etapele tratamentului.
        </p>
        <p class="mt-6 font-mvl tracking-wide text-md">
          Mai mult decât atât, datorită experienței pluridisciplinare a echipei
          noastre și aparaturilor de cea mai nouă generație, clinica noastră se
          remarcă în peisajul clinicilor stomatologice din Aiud și împrejurimi mulțumită
          duratelor mai scurte a tratamentelor, nivelului redus de durere al
          procedurilor implicate, dar și prețurilor rezonabile menite să
          respecte bugetul fiecărui pacient.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

import TCard from "@/components/TCard.vue";
import Carousel from "@/components/Carousel.vue";
import ButtonPrimary from '@/components/ButtonPrimary.vue';

export default {
  components: {
    TCard,
    Carousel,
    ButtonPrimary,
  },
  data() {
    return {
      services: store.services,
    };
  },
};
</script>
