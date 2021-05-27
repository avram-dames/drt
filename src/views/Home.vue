<template>
  <div>
    <!-- Hero Section -->
    <section
      class="h-auto lg:h-screen-adjusted md:container flex flex-col md:flex-row md:items-center"
    >
      <!-- Hero Message -->
      <div class="px-6 mt-20 flex flex-col md:justify-start flex-grow">
        <div
          class="font-mwb leading-snug tracking-wide max-w-2xl text-dark text-3xl md:text-3xl lg:text-4xl"
        >
          Zâmbetul perfect începe cu o consultație gratuită
        </div>
        <div
          class="mt-4 font-mvl leading-relaxed tracking-wide max-w-xl text-dark text-base md:text-md lg:text-lg"
        >
          Echipa noastră de dentiști din Aiud îți va reda zâmbetul și starea de
          bine.
          <!-- Profită de consultația ta gratuită! -->
        </div>

        <!-- CTA -->
        <div class="mt-4 md:flex md:justify-start">
          <button-primary
            :reference="{ name: 'Home', hash: '#appointment-form' }"
          >
            PROGRAMEAZĂ-TE ACUM
          </button-primary>
        </div>
      </div>

      <!-- Hero Image MD and larger screens-->
      <div
        class="hidden lg:block lg:px-6 lg:mt-0 lg:order-last lg:flex-shrink"
      >
        <img
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619091109/drt/hero/HeroShape_snq14u.png"
          alt="Photo of smiling lady by Hian Oliveira borrowd from Unsplash"
        />
      </div>
    </section>

    <div
      class="wistia_responsive_padding mt-12"
      style="padding: 56.25% 0 0 0; position: relative"
    >
      <div
        class="wistia_responsive_wrapper"
        style="height: 100%; left: 0; position: absolute; top: 0; width: 100%"
      >
        <div
          class="wistia_embed wistia_async_4fhihx5tkf videoFoam=true"
          style="height: 100%; position: relative; width: 100%"
        >
          &nbsp;
        </div>
      </div>
    </div>

    <!-- Services Section -->
    <section id="services" class="px-6 md:container">
      <div class="md:flex md:flex-col md:items-center">
        <h1 class="mb-4">Tratamente inovatoare</h1>
        <p class="md:max-w-prose md:text-center">
          Descoperă gama noastră variată de tratamente stomatologice.
        </p>
      </div>

      <!-- Cards -->
      <div class="mt-4 md:mt-8 lg:mt-12 grid grid-cols-1 md:grid-cols-2">
        <t-card
          v-for="service in services"
          :key="service.id"
          :body="service"
          class="lg:flex lg:justify-center"
        />
      </div>

      <!-- CTA -->
      <div class="mt-8 md:flex md:justify-center">
        <button-primary
          :reference="{ name: 'Home', hash: '#appointment-form' }"
        >
          PROGRAMEAZĂ-TE ACUM
        </button-primary>
      </div>
    </section>

    <!-- Our Team Section -->
    <div id="team"></div>
    <section>
      <div
        class="flex mt-24 justify-center bg-gradient-to-br from-primary-001 to-primary-200"
      >
        <div class="w-full px-6 md:w-160 lg:w-192">
          <h1 class="md:text-center">Echipa Noastră</h1>
          <p class="md:px-0 mb-16">
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
      <div class="h-20 md:h-0"></div>
    </section>

    <!-- Clinica Noastra -->
    <section class="flex flex-col md:flex-row">
      <div
        class="min-h-screen bg-clinic-image bg-cover bg-right-bottom md:w-1/2"
      ></div>

      <div
        class="min-h-screen px-6 pb-12 md:pb-16 md:px-12 lg:px-16 bg-gradient-to-br from-primary-100 to-primary-200 md:w-1/2 md:flex md:flex-col md:justify-start"
      >
        <h1 class="">Clinica noastră</h1>
        <p class="font-mvl tracking-wide text-md">
          Clinica noastră a fost înființată în 2008 pentru a reinventa relația
          dintre medicul stomatolog și pacient. Suntem determinați să ne
          întâmpinăm clienții într-un mediu primitor, în care fiecare pacient
          simte că este important și că problemele îi sunt ascultate.
        </p>
        <p class="mt-4 font-mvl tracking-wide text-md">
          Mizăm pe o relație deschisă și dorim să desființăm „frica de dentist”.
          Datorită unei abordări bazate pe comunicare, sinceritate și
          profesionalism, ne vom asigura că fiecare pacient va primi nu numai un
          tratament stomatologic corespunzător, de ultimă generație și eficient,
          ci și sprijinul psihologic de care are nevoie pentru a înțelege
          etapele tratamentului.
        </p>
        <p class="mt-4 font-mvl tracking-wide text-md">
          Mai mult decât atât, datorită experienței pluridisciplinare a echipei
          noastre și aparaturilor de cea mai nouă generație, clinica noastră se
          remarcă în peisajul clinicilor stomatologice din Aiud și împrejurimi
          mulțumită duratelor mai scurte a tratamentelor, nivelului redus de
          durere al procedurilor implicate, dar și prețurilor rezonabile menite
          să respecte bugetul fiecărui pacient.
        </p>
      </div>
    </section>

    <appointment-form></appointment-form>
  </div>
</template>

<script>
import store from "@/store";

import TCard from "@/components/TCard.vue";
import Carousel from "@/components/Carousel.vue";
import ButtonPrimary from "@/components/ButtonPrimary.vue";
import AppointmentForm from "@/components/AppointmentForm.vue";

export default {
  components: {
    TCard,
    Carousel,
    ButtonPrimary,
    AppointmentForm,
  },
  data() {
    return {
      services: store.services,
    };
  },
};
</script>
