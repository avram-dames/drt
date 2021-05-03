<template>
<div>
  <div class="container px-6">

    <!-- Hero Section -->
    <hero :service="service"></hero>

    <div class="">
      <div class="max-w-prose">
        <h2 class="">Tratament de urgență abces dentar</h2>
        <p>
          Abcesul dentar este una din cele mai frecvente urgențe stomatologice.
          Abcesul dentar este o infecție în interiorul dintelui care se
          manifestă prin formarea unei pungi de puroi la vârful rădăcinii sau în
          partea laterală a unui dinte. Este cauzat de bacteriile aflate în
          interiorul cariilor și care ajung să infecteze vasele de sânge de la
          baza dintelui. Citește mai mult despre tratamentele de salvare a
          dintelui, aici.
        </p>

        <h2 class="">Extracții dentare</h2>
        <p>
          Păstrarea dintelui natural este deosebit de importantă pe termen lung.
          Clinica noastră oferă tratamente de prevenție si salvare a dinților
          făcând tot posibilul sa se evite procedura de extracție. Totuși uneori
          pacientul vine prea târziu la cabinet pentru a se mai putea salva
          dintele, astfel dintele trebuie extras. Citește mai mult despre
          tratamentele de prevenție, aici.
        </p>

        <h2 class="">Rezecție apicală</h2>
        <p>
          Uneori este nevoie de o intervenție chirurgicală pentru a îndepărta
          infecția formată la vârful rădăcinii dintelui pentru a-l salva. Acest
          tratament este des folosit pentru a îndepărta o infecție apărută în
          urma unui tratament de canal nereușit.
        </p>

        <h2 class="">Chiuretaj parodontal în câmp deschis</h2>
        <p>
          Acesta este un tratament care are ca scop eliminarea pungilor
          parodontale, formate sub gingie, prin intervenție chirurgicală.
        </p>
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
  components: {
    Hero,
    AppointmentForm
  },
  computed: {
    service() {
      return store.services.find((s) => s.id == 4);
    },
  },
};
</script>