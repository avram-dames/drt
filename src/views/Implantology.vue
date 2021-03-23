<template>
  <div class="container px-6">
    
    <!-- Hero Section -->
    <hero :service="service"></hero>

    <!-- CTA Card -->
    <section class="mt-24">
      <cta-card :ctaMessage="service.details.ctaMessage"></cta-card>
    </section>

    <!-- Benefits -->
    <section id="benefits" class="mt-8 flex flex-col">
      <h2 class="text-center">{{ benefits.title.ro }}</h2>
      
      <div class="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2">
        <t-card
          v-for="benefit in benefits.benefits"
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
import Hero from '../components/Hero.vue';
import CtaCard from '../components/CtaCard.vue';

export default {
  components: {
    TCard,
    Hero,
    CtaCard
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
    }
  },
};
</script>