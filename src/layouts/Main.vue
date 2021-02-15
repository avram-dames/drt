<template>
  <header
    class="container px-6 pt-4 pb-2 flex flex-wrap items-center"
  >
    <div class="flex-1 lg:flex-none justify-between items-center">
      <v-link href="/">
        <icon name="logo"></icon>
      </v-link>
    </div>

    <!-- Mobile Toggle -->
    <label for="menu-toggle" class="cursor-pointer lg:hidden">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10" y1="9" x2="30" y2="9" stroke="black" stroke-width="2" />
        <line x1="10" y1="19" x2="30" y2="19" stroke="black" stroke-width="2" />
        <line x1="10" y1="29" x2="30" y2="29" stroke="black" stroke-width="2" />
      </svg>
    </label>

    <input type="checkbox" class="hidden" id="menu-toggle" />

    <!-- Menu Items -->
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul
          class="lg:flex items-center justify-between text-sm text-dark font-mwsl pt-4 lg:pt-0 lg:pl-16"
        >
          <li><v-link href="/" class="navbar-link">Tratamente</v-link></li>
          <li>
            <v-link href="/about" class="navbar-link">Echipa Noastră</v-link>
          </li>
          <li><v-link href="/foo" class="navbar-link">Contact</v-link></li>
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
          <v-link
            href="/about"
            class="px-6 py-3 block font-mwsr text-sm border-solid border-primary border-2 hover:border-primary-light hover:bg-primary-light hover:text-white rounded-md uppercase"
            >Programează-te online</v-link
          >
        </li>
      </ul>
    </div>
  </header>

  <slot></slot>
</template>

<script>
import VLink from "../components/VLink.vue";
import Icon from "../components/Icon.vue";

export default {
  components: {
    VLink,
    Icon
  },
};
</script>

<style>
@font-face {
  font-family: "Merriweather-Bold";
  src: local("Merriweather-Bold"),
    url(../assets/fonts/Merriweather/Merriweather-Bold.ttf) format("truetype");
}

@font-face {
  font-family: "Merriweather-Regular";
  src: local("Merriweather-Regular"),
    url(../assets/fonts/Merriweather/Merriweather-Regular.ttf)
      format("truetype");
}

@font-face {
  font-family: "MerriweatherSans-Bold";
  src: local("MerriweatherSans-Bold"),
    url(../assets/fonts/Merriweather_Sans/static/MerriweatherSans-Bold.ttf)
      format("truetype");
}

@font-face {
  font-family: "MerriweatherSans-Regular";
  src: local("MerriweatherSans-Regular"),
    url(../assets/fonts/Merriweather_Sans/static/MerriweatherSans-Regular.ttf)
      format("truetype");
}

@font-face {
  font-family: "MerriweatherSans-Light";
  src: local("MerriweatherSans-Light"),
    url(../assets/fonts/Merriweather_Sans/static/MerriweatherSans-Light.ttf)
      format("truetype");
}

@font-face {
  font-family: "MuktaVanni-Regular";
  src: local("MuktaVanni-Regular"),
    url(../assets/fonts/Mukta_Vaani/MuktaVaani-Regular.ttf) format("truetype");
}

@font-face {
  font-family: "MuktaVanni-Light";
  src: local("MuktaVanni-Light"),
    url(../assets/fonts/Mukta_Vaani/MuktaVaani-Light.ttf) format("truetype");
}

#menu-toggle:checked + #menu {
  display: block;
}

.navbar-link {
  @apply lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary;
}
</style>