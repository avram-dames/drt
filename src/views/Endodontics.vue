<template>
  <div class="container px-6">
    
    <!-- Hero Section -->
    <hero :service="service"></hero>

    <!-- Treatment Steps -->
    <div class="">
      <h2 class="">Etapele tratamentului</h2>
      <p class="max-w-prose">
        Tratamentul de canal se administrează sub anestezie locală și durează în
        medie 2 ore. În cazuri complexe, atunci când pulpa este inflamată sau
        infectată, tratamentul poate implica 2 sau mai multe ședințe. Medicul
        poate recomanda un analgezic în cazul în care apar dureri în termen de
        24-48 de ore de la efectuarea tratamentului.
      </p>

      <div class="mt-8 flex flex-col md:flex-row justify-beween items-center space-x-8">
        <div class="max-w-prose">
          <p class="mt-8">
            Prima etapă a tratamentului constă în curățarea canalului (scoaterea
            nervului) și eliminarea totală a infecției din canalul dintelui.
          </p>
        </div>
        <div class="flex-none order-first md:order-last">
          <img
            src="https://res.cloudinary.com/avram-dev/image/upload/v1619090758/drt/endo/Endo1_erwlly.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row justify-beween items-center space-x-8">
        <div class="max-w-prose">
          <p class="mt-8">
            A doua etapă se concentrează pe umplerea canalului cu o pasta
            biocompatibilă (compusă din antibiotic, iodoform, endometazonă, oxid
            de zinc, eugenol) pentru a preveni răspândirea baterilor. În anumite
            cazuri, medicul dentist va trebui sa insereze și un dispozitiv
            corono-radicular pentru stabilizarea lucrării protetice.
          </p>
        </div>
        <div class="flex-none order-first md:order-last">
          <img
            src="https://res.cloudinary.com/avram-dev/image/upload/v1619090758/drt/endo/Endo2_snhuiu.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>

      <div class="mt-8 flex flex-col md:flex-row justify-beween items-center space-x-8">
        <div class="max-w-prose">
          <p class="mt-8">
            A treia etapă are în vedere plombarea dintelui (obturație) și,
            eventual, refacerea coroanei dentare, atunci când este cazul.
          </p>
        </div>
        <div class="flex-none order-first md:order-last">
          <img
            src="https://res.cloudinary.com/avram-dev/image/upload/v1619090758/drt/endo/Endo3_qprdgr.png"
            alt="Ilustratie Tratament Endodontic - Carie si Deschidere Dinte."
          />
        </div>
      </div>
    </div>

    <appointment-form></appointment-form>
  </div>
</template>

<script>
import store from "@/store";
import Hero from '../components/Hero.vue';
import AppointmentForm from "@/components/AppointmentForm.vue";

export default {
  name: "Endo",
  components: {
    Hero,
    AppointmentForm
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 2);
    },
  },
};
</script>