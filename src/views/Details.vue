<template>
  <div>
    <div class="container w-full md:w-160 px-4 md:px-0">
      <h1 class="text-center">Tratamente oferite de clinica noastră</h1>

      <div v-for="service in services" :key="service.id">
        <h2 class="text-center">{{ service.priceTable.title.ro }}</h2>
        <p>{{ service.priceTable.description.ro }}</p>
        <price-table :rows="service.priceTable.rows.ro"></price-table>
      </div>
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
  data() {
    return {
      services: store.services,
    };
  },
};
</script>