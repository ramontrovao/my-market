<script lang="ts">
import { RouterLink } from 'vue-router'

import { PhPlus } from '@phosphor-icons/vue'

import Button from '../components/Button.vue'

export default {
  name: 'Header',
  components: { RouterLink, Button, PhPlus }
}
</script>

<template>
  <header class="bg-slate-100 fixed w-full p-4 shadow-2xl z-20 md:px-16">
    <nav class="m-auto flex justify-between items-center max-w-[1100px] header-container">
      <RouterLink to="/home" class="flex items-center gap-1">
        <img class="w-20 h-20" src="/logo.svg" alt="" />
      </RouterLink>

      <Button variant="black"><PhPlus :size="18" color="white" /> Criar anúncio</Button>
    </nav>
  </header>
</template>
