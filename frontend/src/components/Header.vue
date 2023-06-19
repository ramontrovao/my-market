<script lang="ts">
import { RouterLink } from 'vue-router'

import { PhPlus } from '@phosphor-icons/vue'

import Button from '../components/Button.vue'
import CreateAdvertise from '../screen-components/Home/CreateAdvertise.vue'

export default {
  name: 'Header',
  data() {
    return {
      profileInfosIsActive: false
    }
  },
  methods: {
    toggleProfileInfos() {
      this.profileInfosIsActive = !this.profileInfosIsActive
    },
    hideProfileInfos(event: MouseEvent) {
      if (!this.$el.contains(event.target)) {
        this.profileInfosIsActive = false
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.hideProfileInfos)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.hideProfileInfos)
  },
  components: { RouterLink, Button, PhPlus, CreateAdvertise }
}
</script>

<template>
  <header class="bg-slate-100 fixed w-full p-4 shadow-2xl z-20 md:px-16">
    <nav class="m-auto flex justify-between items-center max-w-[1100px] header-container">
      <RouterLink to="/home" class="flex items-center gap-1">
        <img class="w-16 h-16" src="/logo.svg" alt="" />
      </RouterLink>

      <div class="flex justify-center items-center gap-5">
        <CreateAdvertise />
        <button @click="toggleProfileInfos">
          <img class="w-14 h-14 rounded-full border-2 border-blue-700 border-solid" src="/eu.png" />
        </button>
      </div>

      <div
        v-show="profileInfosIsActive"
        class="fixed right-[8%] top-[5.5rem] w-full max-w-[12rem] p-4 bg-slate-100 rounded-md shadow-2xl"
      >
        <ul class="flex flex-col gap-2">
          <li>
            <RouterLink
              class="block w-full hover:opacity-75 transition-all duration-300"
              to="/profile"
              >Meu perfil</RouterLink
            >
          </li>
          <li>
            <RouterLink class="block w-full hover:opacity-75 transition-all duration-300" to="/home"
              >Meus anúncios</RouterLink
            >
          </li>
          <li>
            <RouterLink class="block w-full hover:opacity-75 transition-all duration-300" to="/"
              >Sair</RouterLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
