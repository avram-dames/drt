<template>
  <h1 class="text-center">Cazuri</h1>
  <div class="w-full flex flex-col items-center">
    
    <!-- Image -->
    <img
      class="px-6 max-w-full lg:max-w-2xl"
      :src="teamMember.image" :alt="teamMemberNameAndTitle"
    />

    <!-- Arrows -->
    <div class="flex flex-row pt-8 md:pt-20 space-x-6 items-center">
        <!-- Left Arrow -->
        <button
          class="w-8 h-8 md:w-6 md:h-6"
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

        <div class="font-mvr text-md">{{ teamMember.id }} / {{ teamLength }}</div>
        <!-- Right Arrow -->
        <button
          class="w-8 h-8 md:w-6 md:h-6"
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
</template>

<script>
export default {
  name: "Gallery",
  data() {
    return {
      showTeamId: 1,
      intervalid1: "",
      interval: 3000,
      team: [
        {
          id: 1,
          name: "",
          image: require("@/assets/images/implants/16641012_1196659440453337_1235229032534191817_n_1196659440453337.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 2,
          name: "",
          image: require("@/assets/images/implants/16807649_1196659647119983_5948212443123081840_n_1196659647119983.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 3,
          name: "",
          image: require("@/assets/images/implants/16830702_1196659887119959_1141835219356672057_n_1196659887119959.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 4,
          name: "",
          image: require("@/assets/images/implants/16830806_1196659960453285_3764605308114760762_n_1196659960453285.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 5,
          name: "",
          image: require("@/assets/images/implants/16830854_1196659790453302_9138119100312445801_n_1196659790453302.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 6,
          name: "",
          image: require("@/assets/images/implants/16864739_1196659823786632_2460022174169156620_n_1196659823786632.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 7,
          name: "",
          image: require("@/assets/images/implants/16864805_1196659747119973_7263126389592529998_n_1196659747119973.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        },
        {
          id: 8,
          name: "",
          image: require("@/assets/images/implants/16865169_1196659947119953_5513848739198845815_n_1196659947119953.jpg"),
          description:
            "Scurtă descriere, ... dacă este cazul. Dacă nu putem renunța la rubrica asta.",
        }
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
    teamLength() {
      return this.team.length;
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