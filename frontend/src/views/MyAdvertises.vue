<script lang="ts">
import { PhFunnel } from '@phosphor-icons/vue'

import PostCard from '../components/PostCard.vue'
import CreateEditAdvertise from '../components/CreateEditAdvertise.vue'

export default {
  name: 'MyAdvertises',
  components: {
    PhFunnel,
    PostCard,
    CreateEditAdvertise
  }
}
</script>

<template>
  <main class="max-w-[1100px] m-auto flex flex-col gap-10 px-4 pt-40 pb-10">
    <div class="flex justify-between items-center">
      <strong class="text-gray-950 text-xl">Meus anúncios - 7 anúncios encontrados</strong>

      <CreateEditAdvertise variant="create" />
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
