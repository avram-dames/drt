<template>
  <main-layout>
    <div class="h-screen-adjusted bg-hero-image bg-cover md:container">
      <!-- Gradient step for mobile -->
      <div class="bg-gradient-to-b from-white via-white to-transparent h-16 md:hidden"></div>
      
      <!-- Container for hero secion, turns to white background on medium screens and larger -->
      <div
        class="h-full-adjusted md:h-full md:bg-white md:grid md:grid-cols-2 md:gap-4 md:justify-items-center md:items-center"
      >
        <!-- Hero Message -->
        <div
          class="flex flex-col justify-end h-full-adjusted md:justify-start md:h-auto md:pl-2 lg:pl-20"
        >
          <div class="pt-6 px-4 bg-primary-200 bg-opacity-60 md:bg-white" style="backdrop-filter: blur(20px);-webkit-backdrop-filter: blur(20px);">
          <h1 class="font-mwb text-center tracking-wide text-dark text-2xl md:text-left">
            Zâmbetul perfect începe cu o consultație gratuită
          </h1>
          <p class="mt-4 md:mt2 font-mvl tracking-wide text-justify text-dark text-sm md:text-md">
            Echipa noastră de dentiști din Aiud îți va reda zâmbetul și starea
            de bine! Profită de consultația ta gratuită!
          </p>
          <div class="m-6 md:mx-0 md:mt-8 md:flex md:justify-start">
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
    <div class="container flex flex-col">
      <h2 class="mt-16 px-16 text-center font-mwb tracking-wide text-2xl">
        Tratamente inovatoare
      </h2>
      <div class="mt-8 px-4 flex justify-center text-center font-mvl text-md">
        Descoperă gama noastră variată de tratamente stomatologice la prețuri
        surprinzător de avantajoase!
      </div>
      <div
        class="mt-8 grid grid-cols-1 justify-items-center md:grid-cols-2 md:gap-4"
      >
        <t-card
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
      <div class="mx-5 my-12 md:mx-0 md:mt-8 md:flex md:justify-start">
        <div class="rounded-md shadow">
          <a
            href="#"
            class="w-full flex items-center justify-center px-10 py-2 border border-transparent font-mwsr text-sm rounded-md text-white bg-secondary-300 hover:bg-primary-light"
          >
            DETALII ȘI PREȚURI
          </a>
        </div>
      </div>
    </div>

    <div class="px-4">
      <div class="max-w-3xl bg-red-200 rounded-lg mx-auto my-16 p-16">
        <h1 class="text-2xl font-mwb mb-2">Let's build with TailwindCSS</h1>
        <p class="uppercase tracking-wide">
          Misiunea noastră este redarea zâmbetului dumneavoastră, acesta fiind
          oglinda stării de bine a întregului organism.
        </p>
      </div>
    </div>

    <div class="flex flex-col">
      <h2 class="mt-16 px-16 text-center font-mwb tracking-wide text-2xl">
        Echipa Noastră
      </h2>
      <img
        class="mt-16 w-4/5 m-auto rounded-md"
        src="../assets/images/Emanuela.png"
        alt="Emanuela Breaz - Contabil clinica DRT Dentist"
      />
      <h3 class="mt-16 px-16 text-center font-mwsb tracking-wide text-xl">
        Emanuela Breaz
      </h3>
      <p class="mt-2 text-center font-mvl tracking-wide text-md">Contabil</p>
      <p class="mt-2 text-center font-mvl tracking-wide text-lg">
        Scurtă descriere
      </p>
    </div>

    <div class="mt-16 flex flex-col">
      <div class="h-screen bg-clinic-image bg-cover bg-right-bottom">
        <!-- <img class="h-full"
          src="../assets/images/clinica.jpg" 
          alt="Clinica DRT Dentist" /> -->
      </div>
      <div
        class="py-24 px-16 bg-gradient-to-br from-primary-100 to-primary-200"
      >
        <h2 class="text-center font-mwb tracking-wide text-2xl">
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
    <div class="pt-24 px-16">
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

          <div class="mt-8 md:mx-0 md:mt-8 md:flex md:justify-start">
            <div class="rounded-md shadow">
              <button
                type="submit"
                class="w-full flex items-center justify-center px-10 py-2 border border-transparent font-mwsr text-sm rounded-md text-white bg-primary hover:bg-primary-light"
              >
                Trimite
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="mt-20 py-16 px-16 flex flex-col bg-gradient-to-br from-primary-001 to-pink-001">
      <div class="flex flex-col">
        <div>
          <h2 class="mt-12 font-mwsb tracking-wide text-xl">Contact</h2>
          <div class="mt-1 font-mvr tracking-wide text-md">+40 358 405 272</div>
          <div class="mt-1 font-mvr tracking-wide text-md">info@drtdentist.ro</div>
        </div>

        <div>
          <h2 class="mt-12 font-mwsb tracking-wide text-xl">Orar</h2>
          <div class="mt-4 font-mvr tracking-wide text-md">Marți - Miercuri: 09 - 14</div>
          <div class="mt-1 font-mvr tracking-wide text-md">Joi - Vineri: 09 - 18</div>
        </div>

        <div>
          <h2 class="mt-12 font-mwsb tracking-wide text-xl">Unde ne găsiți</h2>
          <div class="mt-1 font-mvr tracking-wide text-md">Strada Transilvania, BL. A6</div>
          <div class="mt-1 font-mvr tracking-wide text-md">515 200, Aiud, Alba</div>
          <div class="mt-1 font-mvr tracking-wide text-md">România</div>
        </div>
      </div>
      <div class="mt-12 flex flex-col">
        <div class="mt-1 font-mvl tracking-wide text-sm text-primary-light">Copyright @2021 drtdentist.ro all rights reserved</div>
        <div class="mt-2 font-mvl tracking-wide text-sm text-primary-light">Politică de date</div>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import TCard from "../components/TCard.vue";

export default {
  components: {
    MainLayout,
    TCard,
  },
};
</script>
