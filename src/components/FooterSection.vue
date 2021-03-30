<template>
    <div class="flex flex-col bg-gradient-to-br from-primary-001 to-pink-001">
      <div class="px-6 md:container flex flex-col md:flex-row md:justify-between">
        <div>
          <h3 class="mt-12 font-mwsb tracking-wide text-xl">Contact</h3>
          <div class="mt-1 font-mvr tracking-wide text-md">
            <a href="tel:+40358405272">+40 358 405 272</a>
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            <a href="mailto:info@drtdentist.ro">info@drtdentist.ro</a>
          </div>
        </div>

        <div>
          <h3 class="mt-12 font-mwsb tracking-wide text-xl">Orar</h3>
          <div class="mt-4 font-mvr tracking-wide text-md">
            Marți - Miercuri: 09 - 14
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            Joi - Vineri: 09 - 18
          </div>
        </div>

        <div>
          <h3 class="mt-12 font-mwsb tracking-wide text-xl">Legal</h3>
          <div class="mt-4 font-mvr tracking-wide text-md">
            <router-link :to="{name: 'Terms'}">Termeni și condiții</router-link>
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            <router-link :to="{name: 'Legal'}">Politica de date</router-link>
          </div>
        </div>

        <div>
          <h3 class="mt-12 font-mwsb tracking-wide text-xl">Unde ne găsești</h3>
          <div class="mt-1 font-mvr tracking-wide text-md">
            <a href="https://goo.gl/maps/vDDJTyMD66uD84kF8">Strada Transilvania, BL. A6</a>
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            <a href="https://goo.gl/maps/vDDJTyMD66uD84kF8">515 200, Aiud, Alba</a>
          </div>
          <div class="mt-1 font-mvr tracking-wide text-md">
            <a href="https://goo.gl/maps/vDDJTyMD66uD84kF8">România</a></div>
        </div>
      </div>


        <div class="px-6 pb-4 md:container mt-8 font-mvl tracking-wide text-sm text-primary-light">
          @2021 DRT Dentist
        </div>
      </div>

</template>

<script>
export default {
    name: 'FooterSection'
}
</script>