<template>
  <div
    class="flex flex-col md:my-32 md:container md:flex-row md:justify-center"
  >
    <div
      class="mt-16 m-auto md:m-0 md:mt-0 w-4/5 md:w-80 lg:w-96 rounded-md md:order-last"
    >
      <img :src="teamMember.image" :alt="teamMemberNameAndTitle" class="rounded-md"/>
    </div>

    <div
      class="flex flex-col md:w-80 lg:w-96 justify-between items-center md:items-start pt-4"
    >
      <div>
        <h3
          class="text-center md:text-left font-mwsb tracking-wide text-md md:text-lg lg:text-xl"
        >
          {{ teamMember.name }}
        </h3>
        <p class="text-center md:text-left font-mvl tracking-wide text-sm">
          {{ teamMember.title }}
        </p>
      </div>
      <p
        class="mt-2 text-center md:text-left font-mvl tracking-wide text-md w-60"
      >
        {{ teamMember.description }}
      </p>

      <div class="flex flex-row justify-end pr-4 md:justify-start">
        <!-- Left Arrow -->
        <button
          class="w-6 h-6"
          @click="previousTeamMember"
          :disabled="leftArrowDisabled"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="leftArrowColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </button>
        <!-- Right Arrow -->
        <button
          class="w-6 h-6"
          @click="nextTeamMember"
          :disabled="rightArrowDisabled"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            :stroke="rightArrowColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      showTeamId: 1,
      intervalid1: "",
      interval: 3000,
      team: [
        {
          id: 1,
          name: "Alin Trif",
          title: "Medic Specialist Chirurgie și Implantologie BMF",
          image: require("../assets/images/echipa/Alin.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 2,
          name: "Roxana Trif",
          title: "Tehnician Dentar",
          image: require("../assets/images/echipa/Roxana.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 3,
          name: "Domnica Nechiforet",
          title: "Medic Specialist Ortodonție si Ortopedie Facială",
          image: require("../assets/images/echipa/Dominica.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 4,
          name: "Emanuela Breaz",
          title: "Contabil",
          image: require("../assets/images/echipa/Emanuela.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
      ],
    };
  },
  methods: {
    nextTeamMember() {
      if (this.showTeamId < this.team.length) {
        this.showTeamId += 1;
      }
    },
    previousTeamMember() {
      if (this.showTeamId > 1) {
        this.showTeamId -= 1;
      }
    },
    carouselInterval() {
      this.intervalid1 = setInterval(
        function () {
          if (this.rightArrowDisabled) {
            this.showTeamId = 1;
          } else {
            this.nextTeamMember();
          }
        }.bind(this),
        this.interval
      );
    },
  },
  computed: {
    teamMember() {
      return this.team.find((x) => x.id === this.showTeamId);
    },
    teamMemberNameAndTitle() {
      return this.teamMember.name + " - " + this.teamMember.title;
    },
    leftArrowDisabled() {
      return this.showTeamId === 1 ? true : false;
    },
    rightArrowDisabled() {
      return this.showTeamId === this.team.length ? true : false;
    },
    leftArrowColor() {
      return this.leftArrowDisabled ? "gray" : "black";
    },
    rightArrowColor() {
      return this.rightArrowDisabled ? "gray" : "black";
    },
  },
  mounted() {
    // this.carouselInterval()
  },
  beforeUnmount() {
    clearInterval(this.intervalid1);
  },
};
</script>