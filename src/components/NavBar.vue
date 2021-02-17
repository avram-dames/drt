<template>
  <header class="container px-6 lg:px-0 pt-4 pb-2 flex flex-wrap items-center">
    <div class="flex-1 lg:flex-none justify-between items-center">
      <v-link href="/">
        <icon name="logo"></icon>
      </v-link>
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
          <li>
            <v-link href="/" class="navbar-link lg:hidden">Home</v-link>
          </li>
          <li>
            <v-link href="/" class="navbar-link">Echipa Noastră</v-link>
          </li>
          <li>
            <v-link href="/" class="navbar-link">Contact</v-link>
          </li>
        </ul>

        <ul class="lg:hidden">
          <li class="text-xl font-mwsb my-4">Tratamente</li>
          <li>
            <v-link
              href="/tratamente-de-preventie"
              role="menuitem"
              class="navbar-link"
              >Prevenție</v-link
            >
          </li>
          <li>
            <v-link href="/endodontie" role="menuitem" class="navbar-link"
              >Endodonție</v-link
            >
          </li>
          <li>
            <v-link
              href="/protetica-dentara"
              role="menuitem"
              class="navbar-link"
              >Protetică</v-link
            >
          </li>
          <li>
            <v-link
              href="/tratamente-chirurgicale"
              role="menuitem"
              class="navbar-link"
              >Chirurgie</v-link
            >
          </li>
          <li>
            <v-link
              href="/tratamente-ortodontice"
              role="menuitem"
              class="navbar-link"
              >Ortodonție</v-link
            >
          </li>
          <li>
            <v-link
              href="/implanturi-dentare"
              role="menuitem"
              class="navbar-link"
              >Implantologie</v-link
            >
          </li>
          <li>
            <v-link
              href="/tratamente-detalii-si-preturi"
              role="menuitem"
              class="navbar-link"
              >Detalii și Prețuri</v-link
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
          <span class="pr-4 font-mwr text-lg">+40 731 212 121</span>
        </li>
        <li>
          <button
            class="px-6 py-3 block font-mwsr text-sm border-solid border-primary border-2 hover:border-primary-light hover:bg-primary-light hover:text-white rounded-md uppercase"
            @click="scrollMeTo('appointment-form')"
            >Programează-te online
          </button>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Icon from "./Icon.vue";
import VLink from "./VLink.vue";
import DropdownMenu from "./DropdownMenu";

export default {
  name: "NavigationBar",
  components: {
    Icon,
    VLink,
    DropdownMenu,
  },
  data() {
    return {
      menuToggleOn: false,
    };
  },
};
</script>