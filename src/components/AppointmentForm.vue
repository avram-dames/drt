<template>
  <div id="appointment-form"></div>
  <div
    class="my-24 flex items-center justify-center"
  >
     <div class="px-6 max-w-screen-sm lg:max-w-screen-md">
    <div class="lg:hidden">
      <h1 class="mt-0 font-mwb tracking-wide text-2xl">
        Programare Telefonică
      </h1>
      <p>
        Sună direct la clinică, disponibil zilnic între orele 10:00 și 16:00.
      </p>
      <a
        class="mt-4 w-full md:w-1/2 flex items-center tracking-wide justify-center px-6 py-3 border border-transparent font-mwr text-md rounded-sm text-white bg-primary hover:bg-primary-light"
        href="tel:+40358405272"
        >+40 358 405 272
      </a>
    </div>

   
      <h1 class="mt-12 font-mwb tracking-wide text-2x lg:text-center">
        Programare Online
      </h1>
      <p class="lg:text-center">Lasă-ne datele tale de contact și te vom suna noi în cel mai scurt timp posibil.</p>
      <form
        name="programare"
        method="post"
        action="/succes"
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
            required
          />

          <label class="mt-4" for="phone">Telefon</label>
          <input
            class="border border-primary rounded-sm text-xl px-2 py-1"
            id="phone"
            type="tel"
            name="telefon"
            required
          />

          <label class="mt-4" form="reason">Motiv</label>
          <!-- Select input needs padding y 0 to keep in line with the otthers -->
          <select
            class="border border-primary rounded-sm text-xl px-2 py-0"
            id="reason"
            name="motiv"
            required
          >
            <option value="consultatie">Consultație</option>
            <option value="igienizare">Igienizare</option>
            <option value="urgenta">Urgență</option>
          </select>

          <div class="mt-8 md:mt-8 lg:flex lg:justify-center">
              <button
                type="submit"
                class="w-full md:w-1/2 flex items-center tracking-wide justify-center px-6 py-3 border border-transparent font-mwsr text-md rounded-sm text-white bg-primary hover:bg-primary-light"
              >
                Trimite
              </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "AppointmentForm",
};
</script>