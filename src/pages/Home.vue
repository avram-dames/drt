<template>
  <main-layout>
    <div class="h-screen-adjusted bg-hero-image bg-cover md:container">
      <!-- Gradient step for mobile -->
      <div
        class="bg-gradient-to-b from-white via-white to-transparent h-16 md:hidden"
      ></div>

      <!-- Container for hero secion, turns to white background on medium screens and larger -->
      <div
        class="h-full-adjusted md:h-full md:bg-white md:grid md:grid-cols-2 md:gap-4 md:justify-items-center md:items-center"
      >
        <!-- Hero Message -->
        <div
          class="flex flex-col justify-end h-full-adjusted md:justify-start md:h-auto"
        >
          <div
            class="p-6 bg-primary-200 bg-opacity-60 md:bg-white"
            style="
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
            "
          >
            <h1
              class="font-mwb tracking-wide text-dark text-center md:text-left text-2xl md:text-3xl lg:text-4xl"
            >
              Zâmbetul perfect începe cu o consultație gratuită
            </h1>
            <p
              class="my-2 font-mvl tracking-wide text-justify text-dark text-sm md:text-md lg:text-lg"
            >
              Echipa noastră de dentiști din Aiud îți va reda zâmbetul și starea
              de bine! Profită de consultația ta gratuită!
            </p>
            <div class="md:mt-8 md:flex md:justify-start">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-4 py-2 md:px-6 md:py-3 border border-transparent font-mwsr text-sm rounded-md text-white bg-primary hover:bg-primary-light"
                >
                  PROGRAMEAZĂ-TE ACUM
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="hidden md:inline-block">
          <img
            src="../assets/images/header.png"
            alt="Photo of smiling lady by Hian Oliveira borrowd from Unsplash"
            class="w-"
          />
        </div>
      </div>
    </div>

    <!-- Tratamente -->
    <div class="mt-24 md:mt-0 container flex flex-col">
      <h2
        class="text-center font-mwb tracking-wide text-xl md:text-2xl lg:text-3xl"
      >
        Tratamente inovatoare
      </h2>
      <div
        class="mt-4 px-6 flex justify-center text-center font-mvl text-sm md:text-md lg:text-lg"
      >
        Descoperă gama noastră variată de tratamente stomatologice la prețuri
        surprinzător de avantajoase!
      </div>
      <div class="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2">
        <t-card
          class="lg:flex lg:justify-end lg:pr-8"
          title="Prevenție"
          flink="/tratamente-preventive"
          iconName="tooth"
        >
          Primul pas spre un zâmbet sănătos este prevenția. Controalele regulate
          și tratamentele de igienizare profesională bianuale sunt recomandate
          de medicii dentiști din toată lumea pentru prevenția cariilor și a
          afecțiunilor gingivale. Alege un dentist în Aiud căruia îi pasă! Alege
          DRT Dentist!
        </t-card>
        <t-card
          class="lg:flex lg:justify-start lg:pl-4"
          title="Endodonție"
          flink="/tratamente-endodontie"
          iconName="endo"
        >
          Endodonția se concentrează pe păstrarea dintelui natural cât mai mult
          timp posibil. Echipa noastră de dentiști din Aiud-Cluj are experiența
          necesară pentru a trata straturile interioare ale dintelui,
          contribuind astfel la prelungirea duratei sale de viață. Salvează-ți
          dinții cu tratamente stomatologice de ultimă generație!
        </t-card>
        <t-card
          class="lg:flex lg:justify-end lg:pr-8"
          title="Protetică"
          flink="/tratamente-protetica"
          iconName="prosthesis"
        >
          Când a sosit momentul să îți înlocuiești dinții, alege punți dentare
          sau proteze care să reziste! Lipsa unui dinte sau a unui grup de dinți
          se va răsfrânge dincolo de aspectul estetic. De la probleme de
          masticație și afecțiuni ale cavității bucale la afecțiuni ale
          articulației gurii și afecțiuni digestive, lipsa dinților îți poate
          afecta calitatea vieții. Profită de serviciile de protetică oferite de
          echipa noastră de dentiști din Aiud!
        </t-card>
        <t-card
          class="lg:flex lg:justify-start lg:pl-4"
          title="Chirurgie"
          flink="/tratamente-chirurgie"
          iconName="syringe"
        >
          Echipa noastră de chirurgi stomatologi are o singură prioritate:
          salvarea dinților tăi naturali! Clinica noastră se mândrește cu
          tratamente chirurgicale de ultimă generație, care reduc la minim
          durerea și maximizează eficacitatea procedurilor chirurgicale. Ne
          concentrăm pe rezolvarea rapidă a complicațiilor dentare și gingivale
          și mizăm pe rezultate rapide, ușoare și fără durere!
        </t-card>
        <t-card
          class="lg:flex lg:justify-end lg:pr-8"
          title="Ortodonție"
          flink="/tratamente-ortodontie"
          iconName="orthodontics"
        >
          Clinica noastră perfecționează zâmbete prin tratamente ortodontice
          moderne. Folosind aparate dentare fixe sau mobile, ne asigurăm că
          dinții strâmbi sau înghesuiți rămân doar o amintire. Mai mult decât
          atât, tratamentele ortodontice nu numai că vor corecta dantura, dar
          vor contribui și la menținerea unei igiene orale impecabile și vor
          reduce riscul apariției cariilor.
        </t-card>
        <t-card
          class="lg:flex lg:justify-start lg:pl-4"
          title="Implantologie"
          flink="/tratamente-implantologie"
          iconName="implant"
        >
          Implantologia este una dintre cele mai importante ramuri ale
          stomatologiei datorită rolului vital pe care îl joacă în păstrarea
          unei danturi frumoase și sănătoase. Implanturile dentare se remarcă
          datorită rezistenței în timp și nu compromit dinții alăturați. Cu cât
          se acționează mai repede pentru înlocuirea dintelui extras, cu atât
          mai bine pentru întreaga dantură! Descoperă materialele și tehnologia
          de ultimă generație utilizate pentru implanturi de către medicii
          noștri dentiști din Aiud!
        </t-card>
      </div>
      <div class="my-12 md:mt-8 md:flex md:justify-center">
        <div class="rounded-md shadow">
          <v-link 
            href="/detalii"
            class="w-full flex items-center justify-center px-10 py-2 border border-transparent font-mwsr text-sm rounded-md text-white bg-secondary-300 hover:bg-secondary-200"
          >
            DETALII ȘI PREȚURI
          </v-link>
          
        </div>
      </div>
    </div>

    <div
      class="hidden md:flex justify-center bg-gradient-to-br from-primary-100 to-primary-200"
    >
      <div class="w-160 lg:w-192 rounded-lg mx-auto my-16">
        <h1 class="text-2xl font-mwb my-16 text-center">Echipa Noastră</h1>
        <p class="text-justify">
          Ne mândrim cu o echipă profesionistă, determinată să țină pasul cu
          descoperirile din domeniul stomatologiei și dornică să ofere
          pacienților servicii de cea mai bună calitate. Echipa noastră își
          întâmpină pacienții cu zâmbetul pe buze, într-o atmosferă primitoare.
          Fiecare dentist din cadrul clinicii noastre își rezervă timp nu numai
          pentru a oferi tratamente personalizate, ci și pentru a le explica
          pacienților procedurile și pașii pe care trebuie să îi urmeze pentru
          sănătatea lor orală. Rezultatele de durată se nasc din comunicare!
        </p>
      </div>
    </div>

    <div
      class="flex flex-col md:my-32 md:container md:flex-row md:justify-center"
    >
      <div class="mt-16 m-auto md:m-0 md:mt-0 w-4/5 md:w-80 lg:w-96 rounded-md md:order-last">
        <img
          :src="teamMember.image"
          :alt="teamMemberNameAndTitle"
        />
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
            <p
              class="text-center md:text-left font-mvl tracking-wide text-sm"
            >
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
          <button class="w-6 h-6" @click="previousTeamMember" :disabled=leftArrowDisabled>
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
          <button class="w-6 h-6" @click="nextTeamMember" :disabled=rightArrowDisabled>
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

    <div class="mt-16 flex flex-col md:flex-row">
      <div
        class="min-h-screen bg-clinic-image bg-cover bg-right-bottom md:w-1/2"
      >
        <!-- <img class="h-full"
          src="../assets/images/clinica.jpg" 
          alt="Clinica DRT Dentist" /> -->
      </div>
      <div
        class="min-h-screen py-24 px-8 md:px-12 lg:px-16 bg-gradient-to-br from-primary-100 to-primary-200 md:w-1/2 md:flex md:flex-col md:justify-center"
      >
        <h2
          class="text-center md:text-left font-mwb tracking-wide text-xl md:text-2xl"
        >
          CLINICA NOASTRĂ
        </h2>
        <p class="mt-12 text-justify font-mvl tracking-wide text-md">
          Clinica noastră a fost înființată în 2008 pentru a reinventa relația
          dintre medicii stomatologi și pacienții acestora. Suntem determinați
          să ne întâmpinăm clienții într-un mediu primitor, în care fiecare
          pacient simte că este important și că problemele lui sunt ascultate.
        </p>
        <p class="mt-6 text-justify font-mvl tracking-wide text-md">
          Mizăm pe o relație deschisă și dorim să desființăm „frica de dentist”.
          Datorită unei abordări bazate pe comunicare, sinceritate și
          profesionalism, ne vom asigura că fiecare pacient va primi nu numai un
          tratament stomatologic corespunzător, de ultimă generație și eficient,
          ci și sprijinul psihologic de care are nevoie pentru a înțelege
          etapele tratamentului.
        </p>
        <p class="mt-6 text-justify font-mvl tracking-wide text-md">
          Mai mult decât atât, datorită experienței pluridisciplinare a echipei
          noastre și aparaturilor de cea mai nouă generație, clinica noastră se
          remarcă în peisajul clinicilor stomatologice din Aiud și Cluj datorită
          duratelor mai scurte a tratamentelor, nivelului redus de durere al
          procedurilor implicate, dar și prețurilor rezonabile menite să
          respecte bugetul fiecărui pacient.
        </p>
      </div>
    </div>

    <!-- Programare Online Form -->
    <div class="container py-24 px-12 md:flex md:flex-row">
      <div class="flex-shrink-0">
        <h1 class="text-center font-mwb tracking-wide text-2xl text-primary">
          Programare Online
        </h1>
        <form
          name="programare"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="mt-8 flex flex-col font-mvl text-gray text-sm">
            <input type="hidden" name="form-name" value="programare" />

            <label for="name">Nume</label>
            <input
              class="border border-primary rounded-sm text-lg"
              id="name"
              type="text"
              name="nume"
            />

            <label class="mt-4" for="phone">Telefon</label>
            <input
              class="border border-primary rounded-sm text-lg"
              id="phone"
              type="text"
              name="telefon"
            />

            <label class="mt-4" form="reason">Motiv</label>
            <select
              class="border border-primary rounded-sm text-lg"
              id="reason"
              name="motiv"
            >
              <option value="consultatie">Consultație</option>
              <option value="igienizare">Igienizare</option>
              <option value="urgenta">Urgență</option>
            </select>

            <div class="mt-8 md:mt-8 md:flex md:justify-start">
              <div class="rounded-md shadow">
                <button
                  type="submit"
                  disabled
                  class="w-full flex items-center justify-center px-10 py-2 border border-transparent font-mwsr text-sm rounded-md text-white bg-primary hover:bg-primary-light"
                >
                  Trimite
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="hidden md:block pl-16 pt-16">
        <h1 class="font-mwb text-gray text-xl lg:text-2xl">
          Ai nevoie de o consultație periodică sau un plan de tratament?
        </h1>
        <h2 class="mt-8 font-mwsr text-gray text-lg lg:text-xl">
          Folosește formularul online și te contactam noi!
        </h2>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex flex-col bg-gradient-to-br from-primary-001 to-pink-001">
      <div class="container px-12 flex flex-col md:flex-row md:justify-between">
        <div>
          <h2 class="mt-12 font-mwsb tracking-wide text-xl">Contact</h2>
          <div class="mt-1 font-mvr tracking-wide text-md">+40 358 405 272</div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            info@drtdentist.ro
          </div>
        </div>

        <div>
          <h2 class="mt-12 font-mwsb tracking-wide text-xl">Orar</h2>
          <div class="mt-4 font-mvr tracking-wide text-md">
            Marți - Miercuri: 09 - 14
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            Joi - Vineri: 09 - 18
          </div>
        </div>

        <div>
          <h2 class="mt-12 font-mwsb tracking-wide text-xl">Unde ne găsiți</h2>
          <div class="mt-1 font-mvr tracking-wide text-md">
            Strada Transilvania, BL. A6
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            515 200, Aiud, Alba
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">România</div>
        </div>
      </div>

      <div
        class="container px-12 mt-12 flex flex-col md:flex-row md:justify-between md:align-baseline"
      >
        <div class="mt-1 font-mvl tracking-wide text-sm text-primary-light">
          Copyright @2021 drtdentist.ro all rights reserved
        </div>
        <div class="mt-2 font-mvl tracking-wide text-sm text-primary-light">
          Termeni și condiții
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import VLink from "../components/VLink.vue";
import MainLayout from "../layouts/Main.vue";
import TCard from "../components/TCard.vue";

export default {
  components: {
    VLink,
    MainLayout,
    TCard,
  },
  data () {
    return {
      name: "Avram",
      showTeamId: 1,
      intervalid1: '',
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
      }
  },
  methods: {
    nextTeamMember() {
      if (this.showTeamId < this.team.length) {
        this.showTeamId += 1
      }
    },
    previousTeamMember() {
      if (this.showTeamId > 1) {
        this.showTeamId -= 1
      }
    },
    carouselInterval() {
      this.intervalid1 = setInterval(function(){
        if (this.rightArrowDisabled) {
          this.showTeamId = 1
        }
        else {
          this.nextTeamMember()
        }
    }.bind(this), this.interval);
    }
  },
  computed: {
    teamMember() {
      return this.team.find((x) => x.id === this.showTeamId)
    },
    teamMemberNameAndTitle() {
      return this.teamMember.name + ' - ' + this.teamMember.title
    },
    leftArrowDisabled() {
      return this.showTeamId === 1 ? true : false
    },
    rightArrowDisabled() {
      return this.showTeamId === this.team.length ? true : false
    },
    leftArrowColor() {
      return this.leftArrowDisabled ? 'gray' : 'black'
    },
    rightArrowColor() {
      return this.rightArrowDisabled ? 'gray' : 'black'
    }
  },
  mounted() {
      // this.carouselInterval()  
  },
  beforeUnmount() {
    clearInterval(this.intervalid1)
  },
};
</script>
