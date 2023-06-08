<script lang="ts">
  import RegisterForm from "../screen-components/Register/RegisterForm.vue"

  export default {
    name: "RegisterView",
    components: {
      RegisterForm
    }
  }
</script>

<template>
  <main class="flex justify-between min-h-screen">
    <div class="hidden flex-[0.95] flex-col items-center gap-4 bg-gradient-to-r from-slate-100 to-slate-200  md:flex md:visible">
      <img class="w-44 sticky top-72" src="/logo.svg" alt="">
    </div>

    <div class="bg-slate-100 flex flex-col flex-1 justify-center items-center py-16 px-4">
      <RegisterForm />
    </div>
  </main>
</template>
