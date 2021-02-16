<template>
  <main-layout>
    <div class="container w-160 px-12 md:px-0">
      <h1 class="text-center">Tratamente oferite de clinica noastră</h1>

      <h2 class="text-center">Tratamente de prevenție</h2>
      <p>
        Cea mai sigură metodă de prevenție împotriva cariilor și a afecțiunilor
        gingivale este igienizarea profesională. Dacă au trecut mai mult de 6
        luni de la ultima ta igienizare, flosește formularul de mai jos pentru a
        programa o nouă ședință.
      </p>
      <price-table :rows="tables.preventie"></price-table>

      <h2 class="text-center">Tratamente de salvare a dintelui</h2>
      <p>
        Păstrarea dintelui natural este deosebit de importantă. Tratamenele
        moderne pot salva dinții chiar și în cazul afecțiunilor în stare
        avansată. Folosește formularul de mai jos pentru o programare rapidă
        care îți poate salva dintele.
      </p>
      <price-table :rows="tables.endodontie"></price-table>

      <h2 class="text-center">Tratamente protetice</h2>
      <p>
        Pe lângă dificultăți de masticație si vorbire, lipsa unui dinte sau a
        unui grup de dinți duce și la afecțiuni ale cavitații bucale, ale
        articulației gurii sau afecțiuni digestive. Stabilește cu medicul tau
        stomatolog un plan de tratament folosind formularul de mai jos.
      </p>
      <price-table :rows="tables.protetica"></price-table>

      <h2 class="text-center">Tratamente chirurgicale</h2>
      <p>
        Obiectivul nostru este de a salva dinții recuperabili și rezolvarea
        complicațiilor dentare și gingivale în cel mai scurt timp posibil, ușor
        și fără durere. Folosește formularul de mai jos pentru o programare
        rapidă care îți poate salva dintele.
      </p>
      <price-table :rows="tables.chirurgie"></price-table>

      <h2 class="text-center">Tratamente de implantologie</h2>
      <p>
        Pe lângă dificultăți de masticație si vorbire, lipsa unui dinte sau a
        unui grup de dinți duce și la afecțiuni ale cavitații bucale, ale
        articulației gurii sau afecțiuni digestive. Stabilește cu medicul tau
        stomatolog un plan de tratament folosind formularul de mai jos.
      </p>
      <price-table :rows="tables.implantologie"></price-table>

      <h2 class="text-center">Tratamente ortodontice și aparate dentare</h2>
      <p>
        Procedura de corectare a dinților strâmbi sau înghesuiți folosind
        aparate dentare fixe sau mobile. Stabilește cu medicul tau ortodont un
        plan de tratament folosind formularul de mai jos.
      </p>
      <price-table :rows="tables.ortodentie"></price-table>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from "../layouts/Main.vue";
import PriceTable from "../components/PriceTable.vue";

export default {
  components: {
    MainLayout,
    PriceTable,
  },
  data() {
    return {
      tables: {
        preventie: [
          {
            name: "Tratament endodondic de urgenta în caz de absces dentar",
            price: "200 Lei",
          },
        ],
        endodontie: [
          {
            name:
              "Obturație (plombă) fotopolimerizabilă (1 perete/mai multi pereți)",
            price: "200 Lei",
          },
          {
            name:
              "Obturație (plombă) cu pivot de reconstrucție fibră de sticla",
            price: "200 Lei",
          },
          {
            name: "Tratament canal incisivi (monoradiculari)",
            price: "200 Lei",
          },
          {
            name: "Tratament canal premolari (include obturația finală)",
            price: "200 Lei",
          },
          {
            name: "Tratament canal molari M1, M2 (include obturația finală)",
            price: "200 Lei",
          },
        ],
        protetica: [
          {
            name: "Dispozitiv reconstrucție coronaridicular (DCR)",
            price: "200 Lei",
          },
          {
            name: "Ablație lucrare metalica (per dinte stâlp)",
            price: "200 Lei",
          },
          {
            name: "Coroană metaloceramică",
            price: "200 Lei",
          },
          {
            name: "Coroană zirconium",
            price: "200 Lei",
          },
        ],
        chirurgie: [
          {
            name: "Tratament endodondic de urgenta în caz de absces dentar",
            price: "200 Lei",
          },
          {
            name: "Extracție dentară (alveloplastică, separație interdiculară)",
            price: "200 Lei",
          },
          {
            name: "Extracție dentară chirurgicală (alvelotomie)",
            price: "200 Lei",
          },
          {
            name: "Extracție chirurgicală a dinților incluși (M3/C, PM)",
            price: "200 Lei",
          },
          {
            name: "Rezecție apicală dinți frontali (1, PM)",
            price: "200 Lei",
          },
          {
            name: "Rezecție apicală dinți laterali (M1, M2)",
            price: "200 Lei",
          },
          {
            name: "Chiuretaj parodontal in câmp deschis (per dinte)",
            price: "200 Lei",
          },
        ],
        implantologie: [
          {
            name: "Consulatație și plan de tratament",
            price: "Gratuit",
          },
          {
            name:
              "Implant dentar endoosos (partea chirurgicala, firma MISS/MEGAGEN)",
            price: "200 Lei",
          },
          {
            name: "Bont protectic implanter ( cilindric, conic)",
            price: "200 Lei",
          },
          {
            name: "Os mineral regenerativ (1gr)",
            price: "200 Lei",
          },
        ],
        ortodentie: [
          {
            name: "Consulatație și plan de tratament",
            price: "Gratuit",
          },
          {
            name: "Ortodontie, tratament ortodontic - aparat dentar fix",
            price: "200 Lei",
          },
          {
            name: "Aparat dentar mobil",
            price: "200 Lei",
          },
          {
            name: "Ședință de ajustare periodică ",
            price: "200 Lei",
          },
        ],
      },
    };
  },
};
</script>
