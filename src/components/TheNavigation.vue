<template>
  <nav class="divide-y-solid divide-y divide-grey px-8">
    <ul class="lg:flex lg:items-center lg:justify-between">
      <!-- Treatments Dropdown Menu for large screeen only -->
      <li class="hidden lg:block">
        <dropdown-menu></dropdown-menu>
      </li>
      <!-- Main Sections Menu for all screen sizes -->
      <li class="navbar-link lg:hidden" @click="emitToggleOff">
        <router-link :to="{ name: 'Home' }"> Home </router-link>
      </li>
      <li class="navbar-link" @click="emitToggleOff">
        <router-link :to="{ name: 'Home', hash: '#team' }"> Echipa Noastră </router-link>
      </li>
      <li class="navbar-link" @click="emitToggleOff">
        <router-link :to="{ name: 'Home', hash: '#contact' }"> Contact </router-link>
      </li>
    </ul>

    <!-- Treatment Pages for mobile -->
    <ul class="lg:hidden">
      <li class="text-xl font-mwsb my-4 text-gray" role="menuitem">Tratamente</li>
      <li v-for="service in services" :key="service.id" @click="emitToggleOff">
        <router-link
          :to="{
            name: service.name,
            params: { serviceName: service.name },
          }"
          role="menuitem"
          class="navbar-link"
          >{{ service.title.ro }}
        </router-link>
      </li>
      <li @click="emitToggleOff">
        <!-- <router-link
          :to="{ name: 'Details' }"
          role="menuitem"
          class="navbar-link"
          >Detalii și Prețuri</router-link
        > -->
      </li>
    </ul>
  </nav>
</template>

<script>
import DropdownMenu from "./DropdownMenu";
import store from "@/store";

export default {
  name: "TheNavigation",
  components: {
    DropdownMenu,
  },
  data() {
      return {
        services: store.services,
      }
  },
  methods: {
    emitToggleOff() {
      this.$emit('toggle-off-menu')
    },
  },
};
</script>