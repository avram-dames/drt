<template>
<div>
  <div class="container px-6">
    <!-- Hero Section -->
    <section>
      <hero :service="service"></hero>

      <div class="max-w-2xl md:flex md:flex-row md:items-center md:space-x-4">
        <div class="">
          <h2 class="">Ce este tartrul?</h2>
          <img
            src="https://res.cloudinary.com/avram-dev/image/upload/v1619090874/drt/prevention/Plaque_hmcurd.png"
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
          src="https://res.cloudinary.com/avram-dev/image/upload/v1619090874/drt/prevention/Plaque_hmcurd.png"
          alt=""
          class="hidden md:block object-none md:mt-8"
        />
      </div>
    </section>

    <!-- CTA Card -->
    <section class="mt-24">
      <cta-card :ctaMessage="service.details.ctaMessage"></cta-card>
    </section>

    <!-- Treatment Steps -->
    <section class="mt-12 flex justify-center">
      <div>
        <h2 class="text-left md:text-center">
          {{ service.details.pageContent.title }}
        </h2>

        <div
          v-for="treatmentStep in service.details.pageContent.treatmentSteps"
          :key="treatmentStep.step"
          class="flex flex-col md:flex-row md:justify-start items-center md:mt-12"
        >
          <p class="clear-none max-w-prose">
            {{ treatmentStep.description.ro }}
          </p>
          <div
            class="w-full flex justify-end flex-shrink-0 mb-4 md:mb-0 md:justify-start md:w-60 md:ml-12 order-first md:order-last"
          >
            <img :src="treatmentStep.illustration" :alt="treatmentStep.title" />
          </div>
        </div>
      </div>
    </section>
  </div>
  <appointment-form></appointment-form>
  </div>
</template>

<script>
import store from "@/store";
import Hero from "../components/Hero.vue";
import CtaCard from '../components/CtaCard.vue';
import AppointmentForm from "@/components/AppointmentForm.vue";

export default {
  components: {
    Hero,
    CtaCard,
    AppointmentForm
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 1);
    },
  },
};
</script>