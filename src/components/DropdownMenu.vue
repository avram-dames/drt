<template>
  <div
    class="relative inline-block text-left z-10"
    @mouseover="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <div>
      <div
        id="options-menu"
        type="button"
        class="navbar-link cursor-default"
        :aria-haspopup="isOpen"
        :aria-expanded="isOpen"
      >
        Tratamente
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        class="origin-top-right absolute -right-1/2 text-center rounded-md w-52 shadow-lg bg-white"
      >
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <v-link
            href="/tratamente-de-preventie"
            role="menuitem"
            class="navbar-link"
            >Prevenție</v-link
          >
          <v-link href="/endodontie" role="menuitem" class="navbar-link"
            >Endodonție</v-link
          >
          <v-link href="/protetica-dentara" role="menuitem" class="navbar-link"
            >Protetică</v-link
          >
          <v-link
            href="/tratamente-chirurgicale"
            role="menuitem"
            class="navbar-link"
            >Chirurgie</v-link
          >
          <v-link
            href="/tratamente-ortodontice"
            role="menuitem"
            class="navbar-link"
            >Ortodonție</v-link
          >
          <v-link href="/implanturi-dentare" role="menuitem" class="navbar-link"
            >Implantologie</v-link
          >
          <v-link
            href="/tratamente-detalii-si-preturi"
            role="menuitem"
            class="navbar-link"
            >Detalii și Prețuri</v-link
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import VLink from "./VLink";

export default {
  name: "DropdownMenu",
  data() {
    return {
      isOpen: false,
    };
  },
  components: {
    VLink,
  },
};
</script>