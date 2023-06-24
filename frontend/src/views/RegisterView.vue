<script lang="ts">
import RegisterForm from '../screen-components/Register/RegisterForm.vue'

export default {
  name: 'RegisterView',
  components: {
    RegisterForm
  }
}
</script>

<template>
  <main class="flex justify-between min-h-screen">
    <div
      class="hidden flex-[0.95] flex-col items-center bg-gradient-to-br from-blue-700 to-gray-800 md:flex md:visible"
    >
      <img class="sticky w-44 top-[40%]" src="/logo.svg" alt="" />
    </div>

    <div class="bg-slate-100 flex flex-col flex-1 justify-center items-center py-16 px-4">
      <RegisterForm />
    </div>
  </main>
</template>
