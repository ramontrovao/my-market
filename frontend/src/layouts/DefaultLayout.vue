<script lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Header,
    Footer
  }
}
</script>

<template>
  <div class="min-h-screen bg-slate-200">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
