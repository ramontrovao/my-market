<script lang="ts">
import { PhFunnel } from '@phosphor-icons/vue'

import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import PostCard from '../components/PostCard.vue'

export default {
  name: 'HomeView',
  components: {
    Input,
    Button,
    PhFunnel,
    PostCard
  }
}
</script>

<template>
  <main class="max-w-[1100px] m-auto flex flex-col gap-10 px-4 pt-40 pb-10">
    <div class="items-center">
      <strong class="text-gray-950 text-xl">Anúncios - Compre produtos variados</strong>

      <div class="mt-5 flex gap-2">
        <Input class="flex-1" input-type="text" input-placeholder="Pesquise um anúncio" />

        <Button> <PhFunnel :size="32" color="white" /> </Button>
      </div>
    </div>

    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  </main>
</template>
