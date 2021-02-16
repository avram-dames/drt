<template>
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
                  class="w-full flex items-center justify-center px-10 py-2 border border-transparent font-mwsr text-sm rounded-md text-white bg-primary hover:bg-primary-light shadow-md focus:shadow-none"
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
</template>

<script>
export default {
    name: 'AppointmentForm',
}
</script>