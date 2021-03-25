<template>
  <div class="">
    <!-- Hero Section -->
    <div class="container px-6">
      <hero :service="service"></hero>
    </div>
    <!-- CTA Card -->
    <!-- <section class="mt-12 md:mt-24">
      <cta-card :ctaMessage="service.details.ctaMessage"></cta-card>
    </section> -->

    <!-- Benefits -->
    <section id="benefits" class="mt-24 lg:mt-32 container px-6">
      <h1 class="text-center">{{ benefits.title.ro }}</h1>

      <div class="mt-8 lg:mt-24 grid grid-cols-1 md:grid-cols-2">
        <t-card
          v-for="benefit in benefits.benefits"
          :key="benefit.id"
          :body="benefit"
          class="lg:flex lg:justify-center"
        />
      </div>
    </section>

    <!-- Procedure Steps -->
    <section id="procedure" class="mt-24 lg:mt-44 container px-6">
      <h1 class="text-center">{{ procedure.title.ro }}</h1>
      <div class="mt-8 lg:mt-20">
        <div
          v-for="procedureStep in procedure.steps"
          :key="procedureStep.step"
          class="flex flex-col md:flex-row md:justify-between"
        >
          <h2 class="md:hidden">{{ procedureStep.title.ro }}</h2>
          <div
            class="md:w-2/3 md:pr-4 flex flex-col justify-around order-last md:order-first"
          >
            <div>
              <h2 class="hidden md:block">{{ procedureStep.title.ro }}</h2>
              <p
                v-for="(description, index) in procedureStep.description.ro"
                :key="index"
                class="my-4 md:max-w-sm lg:max-w-prose"
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
      </div>
    </section>

    <section class="mt-12 md:mt-24 bg-gray-100 pt-1 pb-12">
      <gallery></gallery>
    </section>

    <!-- Price Table -->
    <!-- <section class="w-full my-24">
      <h3>Listă prețuri</h3>
      <price-table :rows="service.priceTable.rows.ro"></price-table>
    </section> -->
  </div>
</template>

<script>
import TCard from "../components/TCard.vue";
import store from "@/store";
import Hero from "../components/Hero.vue";
// import CtaCard from '../components/CtaCard.vue';
import Gallery from "../components/Gallery.vue";

export default {
  components: {
    TCard,
    Hero,
    // CtaCard,
    Gallery,
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 6);
    },
    benefits() {
      return this.service.details.dentalImplantBenefits;
    },
    procedure() {
      return this.service.details.pageContent.implantProcedure;
    },
  },
};
</script>