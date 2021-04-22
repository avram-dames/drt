<template>
  <h1 class="text-center">Cazuri</h1>
  <div class="w-full flex flex-col items-center">
    
    <!-- Image -->
    <img
      class="px-6 max-w-full lg:max-w-2xl"
      :src="item.image" alt=""
    />

    <!-- Arrows -->
    <div class="flex flex-row pt-8 md:pt-20 space-x-6 items-center">
        <!-- Left Arrow -->
        <button
          class="w-8 h-8 md:w-6 md:h-6"
          @click="previousItem"
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

        <div class="font-mvr text-md">{{ item.id }} / {{ nbOfItems }}</div>
        <!-- Right Arrow -->
        <button
          class="w-8 h-8 md:w-6 md:h-6"
          @click="nextItem"
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
      showItemId: 1,
    };
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  methods: {
    nextItem() {
      if (this.showItemId < this.images.length) {
        this.showItemId += 1;
      }
    },
    previousItem() {
      if (this.showItemId > 1) {
        this.showItemId -= 1;
      }
    },
  },
  computed: {
    item() {
      return this.images.find((x) => x.id === this.showItemId);
    },
    leftArrowDisabled() {
      return this.showItemId === 1 ? true : false;
    },
    rightArrowDisabled() {
      return this.showItemId === this.images.length ? true : false;
    },
    leftArrowColor() {
      return this.leftArrowDisabled ? "gray" : "black";
    },
    rightArrowColor() {
      return this.rightArrowDisabled ? "gray" : "black";
    },
    nbOfItems() {
      return this.images.length;
    },
  },
};
</script>