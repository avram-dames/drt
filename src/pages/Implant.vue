<template>
  <main-layout>
    <div class="container px-4">
      <!-- Hero -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Text -->
        <div class="md:max-w-sm lg:max-w-2xl order-last md:order-first">
          <h1 class="text-center md:text-left">Implanturi Dentare</h1>
          <p class="">
            Implantul dentar este o procedură medicală prin care se înlocuiește
            rădăcina unuia sau mai multor dinți cu o rădăcină din titan de
            înaltă puritate, înfiletată chirurgical în țesutul osos al
            maxilarului. Această rădăcină va servi ca fundație pentru montarea
            lucrării protetice.
          </p>
          <p class="mt-8">
            Materialul folosit pentru realizarea implantului este
            <strong class="font-mveb">100% biocompatibil</strong>, organismul
            nostru integrându-l astfel in osul mandibular prin
            <strong class="font-mveb"
              >procesul natural de osteointegrare.</strong
            >
          </p>
        </div>

        <!-- Image -->
        <div class="mt-16 lg:mt-24 md:max-w-xs lg:max-w-max">
          <img
            src="../assets/images/ProtHero.png"
            alt="Little girl having a toothache."
            class=""
          />
        </div>
      </div>

      <!-- Tratamente -->
      <div id="tratamente" class="mt-8 container flex flex-col">
        <h2
          class="text-center font-mwb tracking-wide text-xl md:text-2xl lg:text-3xl"
        >
          Care sunt beneficiile implantului dentar?
        </h2>
        <div class="mt-8 md:mt-12 lg:mt-16 grid grid-cols-1 md:grid-cols-2">
          <t-card
            class="lg:flex lg:justify-end lg:pr-8"
            title="Previne migrarea dinților"
            flink=""
            iconName="prosthesis"
          >
            Implantul unei rădăcini artificiale previne procesul de migrare a
            dinților învecinați spre spațiul gol rămas după extracție, păstrând
            astfel forma naturală a maxilarului și prevenind posibile
            complicații de vorbire sau masticație.
          </t-card>
          <t-card
            class="lg:flex lg:justify-start lg:pl-4"
            title="Nu restricționează masticația"
            flink=""
            iconName="endo"
          >
            Comparativ cu punțile sau protezele (backlink la proteze, daca
            există) clasice, un implant dentar este mai stabil și nu acoperă
            cerul gurii. De aceea, pacienții cu implanturi dentare se pot bucura
            de o gamă mai largă de produse alimentare.
          </t-card>
          <t-card
            class="lg:flex lg:justify-end lg:pr-8"
            title="Garantează o rezistență mai mare"
            flink="/protetica-dentara"
            iconName="prosthesis"
          >
            Implantele dentare au o durată de viață superioară altor lucrări
            protetice. Implantul de titan poate rezista pe durata întregii
            vieți, pentru că este asimilat de organism, spre deosebire de o
            coroană dentară, care are o durată de viață intre 5 și 15 ani.
          </t-card>
          <t-card
            class="lg:flex lg:justify-start lg:pl-4"
            title="Nu afectează dinții învecinați"
            flink="/tratamente-chirurgicale"
            iconName="syringe"
          >
            Pe lângă prevenirea migrării dinților, procedura de implant dentar
            nu compromite dinții adiacenți pentru construcția de punți.
          </t-card>
        </div>
      </div>

      <!-- Etapele Tratamentului -->
        <h2>Etapele Implantului Dentar</h2>
        <div class="flex flex-col md:flex-row justify-between">
          <div class="md:w-2/3 md:pr-4 flex flex-col justify-around">
            <div>
              <h3>Consultația și planul de tratament</h3>
              <img src="../assets/images/1.svg" alt="" class="p-4 float-left" />
              <p>
                Planul de tratament este stabilit de medicul specialist, pe baza
                unei radiografii panoramice. În unele cazuri, este nevoie și de
                o scanare CT, în special atunci când radiografia simplă nu
                reflectă clar volumul osului. Dacă pacientul suferă de afecțiuni
                cronice, medicul implantolog poate recomanda efectuarea unor
                analize suplimentare.
              </p>
              <p class="mt-4">
                De obicei, planul de tratament cuprinde procedura de inserarea a
                rădăcinii din titan și montarea bontului de prindere și a
                coroanei dentare. Acest plan va conține o estimare a costurilor
                și a programărilor calendaristice.
              </p>
              <p class="mt-4">
                Uneori, este necesar ca planul de tratament sa conțină și
                proceduri de creștere a volumului de os, prin adiție osoasă și,
                eventual, sinus lifting.
              </p>
            </div>
          </div>
          <img
            src="../assets/images/ImplantStep1.png"
            alt=""
            class="object-scale-down"
          />
        </div>

        <div class="mt-12 flex flex-col md:flex-row justify-between">
          <div class="md:w-2/3 md:pl-4 lg:pr-8 flex flex-col justify-around">
            <div>
              <h3>Inserarea chirurgicală a implantului</h3>
              <img src="../assets/images/2.svg" alt="" class="p-4 float-left" />
              <p>
                Inserarea unui implant dentar în os se face sub anestezie
                locală. Procedura nu este dureroasă și are o durată de
                aproximativ 30 de minute. În funcție de caz, după inserare,
                implantul poate fi acoperit cu gingia, pentru a facilita
                procesul de osteointegrare sau se poate continua cu montarea
                bontului și atașarea coroanei.
              </p>
            </div>
            <div>
              <h3>Perioada de osteointegrarea</h3>
              <img src="../assets/images/3.svg" alt="" class="p-4 float-left" />
              <p>
                De cele mai multe ori, implantul dentar presupune o perioadă de
                vindecare între inserarea implantului și montarea bontului și a
                coroanei dentare. Această perioadă poate dura de la 3 la 6 luni,
                în funcție de recomandarea medicul implantolog.
              </p>
            </div>
          </div>
          <img
            src="../assets/images/ImplantStep2.png"
            alt=""
            class="object-scale-down md:order-first"
          />
        </div>

        <div class="mt-12 flex flex-col md:flex-row justify-between">
          <div class="md:w-2/3 md:pr-4 flex flex-col justify-around">
            <div>
              <h3>Montarea bonturilor</h3>
              <img src="../assets/images/4.svg" alt="" class="p-4 float-left" />
              <p class="">
                La finalul perioadei de osteointegrare, se montează, pentru o
                perioadă de 2-3 săptămâni, un bont de vindecare, ce ajută gingia
                să capete o formă naturală. Apoi, se atașează o altă piesă,
                numită bont protetic, care va constitui suportul pentru coroana
                dentară ce va înlocui dintele lipsă.
              </p>
            </div>
            <div>
              <h3 class="mt-12">Atașarea Coroanei</h3>
              <img src="../assets/images/5.svg" alt="" class="p-4 float-left" />
              <p>
                Coroana este realizată de tehnicianul dentar, conform
                specificațiilor medicului implantolog. Aceasta urmează a fi
                cimentată pe bont, rezultând astfel un dinte perfect funcțional
                și estetic.
              </p>
            </div>
          </div>
          <img
            src="../assets/images/ImplantStep3.png"
            alt=""
            class="object-scale-down"
          />
        </div>

        <p>
          Implantul dentar este recomandat de medici din întreaga lume pentru
          că, spre deosebire de punțile sau protezele clasice, acesta este mai
          estetic, mai funcțional, mai rezistent și prezintă mai puține riscuri.
          Procedura de implant dentar este specialitatea clinicii noastre,
          echipa noastră oferind servicii de înaltă calitate la costuri sub
          nivelul celor din clinicile din marile orașe.
        </p>

      <!-- Price Table -->
      <price-table></price-table>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import PriceTable from "../components/PriceTable.vue";
import TCard from "../components/TCard.vue";

export default {
  components: {
    MainLayout,
    PriceTable,
    TCard,
  },
};
</script>