<template>
  <div class="my-2 flex flex-col">
    <div class="overflow-x-auto">
      <div class="align-middle inline-block min-w-full">
        <div class="shadow overflow-hidden sm:rounded-md">
          <table class="min-w-full divide-y divide-white">
            <thead
              class="bg-primary-50 font-mvl text-gray text-left text-sm uppercase tracking-wider"
            >
              <tr class="divide-x divide-white">
                <th scope="col" class="px-6 py-2">Tratament</th>
                <th scope="col" class="w-20 text-center">Preț</th>
              </tr>
            </thead>
            <tbody
              class="bg-primary-50 divide-y divide-x-2 divide-white font-mvr text-md text-black"
            >
              <tr class="divide-x divide-white" v-for="(row, index) in rows" :key="index">
                <td class="px-6 py-2">
                  <div class="">{{ row.name }}</div>
                </td>
                <td class="w-20 text-center">{{ row.price }}</td>
              </tr>

              <!-- More items... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceTable",
  props: {
    rows: Array,
  },
};
</script>