<template>
<div class="w-full fixed h-20 pt-4 pb-6 bg-white items-center z-50">
  <header 
    class="md:container flex flex-row flex-wrap justify-between "
  >
    <!-- Logo -->
    <router-link 
      class="pl-6"
      to="/"
    >
      <icon name="logo"></icon>
    </router-link>

    <!-- Hamburger Toggle -->
    <label
      @click="menuToggleOn = !menuToggleOn"
      for="menu-toggle"
      class="pr-6 cursor-pointer lg:hidden"
    >
      <div class="inline-block cursor-pointer">
        <div class="bar1"></div>
        <div class="bar2" :class="menuToggleOn ? 'change' : ''"></div>
        <div class="bar3"></div>
      </div>
    </label>

    <!-- Menu Items -->
    <transition
      enter-active-class="transition ease-out duration-300 transform"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition ease-in duration-300 transform"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
    <div
      id="mobile-menu"
      v-show="menuToggleOn"
      class="w-full h-screen py-8 text-center text-xl text-dark font-mwsl bg-white"
    >
      <!-- implement event to toggle off menu after click on link -->
      <the-navigation @toggle-off-menu="toggleOff"></the-navigation>
    </div>
    </transition>

    <div
      id="desktop-menu"
      class="hidden lg:inline-block lg:text-sm text-dark font-mwsl pt-4 lg:pt-0 lg:pl-16" 
      >
      <the-navigation></the-navigation>
    </div>

    <!-- Call to Action -->
    <div
      class="hidden pr-6 lg:flex lg:flex-1 lg:items-center lg:justify-end lg:w-auto"
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
</div>
  
</template>

<script>
import Icon from "./Icon.vue";
import TheNavigation from "./TheNavigation.vue"

export default {
  name: "NavigationBar",
  components: {
    Icon,
    TheNavigation
  },
  data() {
    return {
      menuToggleOn: false,

    };
  },
  methods: {
    toggleOff() {
      this.menuToggleOn = false;
    },
  },
};
</script>

<style scoped>
#menu a.router-link-exact-active {
  color: #d4a45b;
}

.bar1,
.bar2,
.bar3 {
  width: 25px;
  height: 2px;
  background-color: #444444;
  margin: 6px 0;
  transition: 0.4s;
}

.change {
  transform: translate(-10px);
}
</style>