<template>
  <navigation-bar></navigation-bar>

  <slot></slot>

  <a href="appointment-form"></a>
  <appointment-form ref="appointment-form"></appointment-form>

  <footer-section></footer-section>
</template>

<script>
import AppointmentForm from "../components/AppointmentForm.vue";
import FooterSection from "../components/FooterSection.vue";
import NavigationBar from '../components/NavBar.vue';


export default {
  components: {
    AppointmentForm,
    FooterSection,
    NavigationBar
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

@font-face {
  font-family: "MuktaVanni-ExtraBold";
  src: local("MuktaVanni-ExtraBold"),
    url(../assets/fonts/Mukta_Vaani/MuktaVaani-ExtraBold.ttf) format("truetype");
}

@font-face {
  font-family: "MuktaVanni-Bold";
  src: local("MuktaVanni-Bold"),
    url(../assets/fonts/Mukta_Vaani/MuktaVaani-ExtraBold.ttf) format("truetype");
}
</style>