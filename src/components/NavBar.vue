<template>
  <header class="container px-6 lg:px-0 pt-4 pb-2 flex flex-wrap items-center">
    <div class="flex-1 lg:flex-none justify-between items-center">
      <router-link to="/">
        <icon name="logo"></icon>
      </router-link>
    </div>

    <!-- Mobile Toggle -->
    <label
      @click="menuToggleOn = !menuToggleOn"
      for="menu-toggle"
      class="cursor-pointer lg:hidden"
    >
      <icon :name="menuToggleOn ? 'closeMenu' : 'openMenu'"></icon>
    </label>

    <!-- Menu Items -->
    <div
      id="menu"
      :class="menuToggleOn ? 'block' : 'hidden'"
      class="w-full lg:block lg:w-auto h-screen lg:h-auto text-center text-xl lg:text-sm text-dark font-mwsl pt-4 lg:pt-0 lg:pl-16"
    >
      <nav class="dividy-solid divide-y divide-black">
        <ul class="lg:flex lg:items-center lg:justify-between">
          <li class="hidden lg:block"><dropdown-menu></dropdown-menu></li>
          <li class="navbar-link lg:hidden" @click="toggleOff">
            <router-link :to="{ name: 'Home' }"> Home </router-link>
          </li>
          <li class="navbar-link" @click="toggleOff">
            <a href="/#echipa-noastra"> Echipa Noastră </a>
          </li>
          <li class="navbar-link" @click="toggleOff">
            <a href="#contact"> Contact </a>
          </li>
        </ul>

        <ul class="lg:hidden">
          <li class="text-xl font-mwsb my-4" role="menuitem">Tratamente</li>
          <li
            v-for="service in services"
            :key="service.id"
            @click="toggleOff"
          >
            <router-link 
              :to="{ 
                name: service.name,
                params: { serviceName: service.name }
                }"
              role="menuitem"
              class="navbar-link"
              >{{ service.title.ro }}
            </router-link>
          </li>
          <li @click="toggleOff">
            <router-link
              :to="{name: 'Details'}"
              role="menuitem"
              class="navbar-link"
              >Detalii și Prețuri</router-link
            >
          </li>
        </ul>
      </nav>
    </div>

    <!-- Call to Action -->
    <div
      class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:w-auto w-full"
    >
      <ul class="lg:flex lg:items-center text-sm text-primary pt-4 lg:pt-0">
        <li>
          <span class="pr-4 font-mwr text-lg">+40 358 405 272</span>
        </li>
        <li>
          <a
            href="#appointment-form"
            class="px-6 py-3 block font-mwsr text-sm border-solid border-primary border-2 hover:border-primary-light hover:bg-primary-light hover:text-white rounded-md"
          >
            Programare Online
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Icon from "./Icon.vue";
import DropdownMenu from "./DropdownMenu";
import store from "@/store";

export default {
  name: "NavigationBar",
  components: {
    Icon,
    DropdownMenu,
  },
  data() {
    return {
      menuToggleOn: false,
      services: store.services,
    };
  },
  methods: {
    toggleOff() {
      this.menuToggleOn = false
    }
  }
};
</script>