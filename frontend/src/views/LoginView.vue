<script lang="ts">
  import LoginForm from "../screen-components/Login/LoginForm.vue"

  export default {
    name: "LoginView",
    components: {
      LoginForm
    }
  }
</script>

<template>
  <main class="flex justify-between min-h-screen">
    <div class="hidden flex-[0.95] flex-col justify-center items-center gap-4 bg-gradient-to-r from-slate-100 to-slate-200  md:flex md:visible">
      <img class="w-44" src="/logo.svg" alt="">
    </div>

    <div class="bg-slate-100 flex flex-col flex-1 justify-center items-center p-4">
      <LoginForm />
    </div>
  </main>
</template>
