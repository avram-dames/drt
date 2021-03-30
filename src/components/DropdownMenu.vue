<template>
  <div
    id="dropdow-menu"
    class="relative z-10"
    @mouseover="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <div>
      <div
        id="options-menu"
        type="button"
        class="navbar-link cursor-default"
        :aria-haspopup="isOpen"
        :aria-expanded="isOpen"
      >
        Tratamente
      </div>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpen"
        @click="toggleOff"
        class="origin-top-right absolute -right-1/2 text-center rounded-md w-52 shadow-lg bg-white"
      >
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <router-link
            v-for="service in services"
            :key="service.id"
            :to="{
              name: service.name,
              params: { serviceName: service.name }
            }"
            role="menuitem"
            class="navbar-link"
            >{{ service.title.ro }}
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "DropdownMenu",
  data() {
    return {
      isOpen: false,
      services: store.services,
    };
  },
  methods: {
    toggleOff() {
      this.isOpen = false;
    },
  },
  components: {},
};
</script>

<style scoped>
#dropdown-menu a.router-link-exact-active {
  color: #D4A45B;
}
</style>