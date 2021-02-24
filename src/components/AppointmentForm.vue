<template> 
    <div class="my-24 px-6 md:container md:flex md:flex-row items-center space-x-12">
      <div class="flex-shrink-0">
        <h2 class="mt-0 text-center font-mwb tracking-wide text-2xl text-primary">
          Programare Online
        </h2>
        <form
          name="programare"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <div class="mt-8 flex flex-col font-mvl text-gray text-md">
            <input type="hidden" name="form-name" value="programare" />

            <label for="name">Nume</label>
            <input
              class="border border-primary rounded-sm text-xl px-2 py-1"
              id="name"
              type="text"
              name="nume"
            />

            <label class="mt-4" for="phone">Telefon</label>
            <input
              class="border border-primary rounded-sm text-xl px-2 py-1"
              id="phone"
              type="tel"
              name="telefon"
            />

            <label class="mt-4" form="reason">Motiv</label>
            <!-- Select input needs padding y 0 to keep in line with the otthers -->
            <select
              class="border border-primary rounded-sm text-xl px-2 py-0"
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
                  class="w-full flex items-center tracking-wide justify-center px-6 py-3 border border-transparent font-mwsr text-md rounded-md text-white bg-primary hover:bg-primary-light shadow-md focus:shadow-none"
                >
                  Trimite
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="hidden md:block">
        <h3 class="mt-0 font-mwb text-gray text-xl lg:text-2xl">
          Ai nevoie de o consultație periodică sau un plan de tratament?
        </h3>
        <h3 class="font-mwsr text-gray text-lg lg:text-xl">
          Folosește formularul online și te contactam noi!
        </h3>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AppointmentForm',
}
</script>