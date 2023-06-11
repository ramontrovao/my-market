<script lang="ts">
export default {
  name: 'PostCard'
}
</script>

<template>
  <RouterLink
    to="/home"
    class="w-full flex flex-col gap-2 border-[1px] border-solid border-gray-400 rounded-md transition-all duration-300 hover:shadow-xl"
  >
    <div class="relative">
      <div class="absolute px-5 py-2 top-0 w-full flex justify-between">
        <img class="w-8 h-8 rounded-full" src="/userTeste.png" alt="" />

        <span
          class="px-3 py-1 flex justify-center items-center bg-gray-950 rounded-full text-sm text-white"
          >USADO</span
        >
      </div>

      <img class="w-full h-full" src="/postTeste.png" alt="" />
    </div>

    <div class="p-5">
      <p class="text-xl">Tênis vermelho</p>

      <strong class="text-xl"><span class="text-sm">R$</span> 59,90</strong>
    </div>
  </RouterLink>
</template>
