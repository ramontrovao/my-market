<script lang="ts">
    import Header from "../components/Header.vue"

    export default {
        name: "DefaultLayout",
        components: {
            Header
        }
    }
</script>

<template>
    <div class="min-h-screen bg-slate-200">
        <Header />
        <router-view />
    </div>
</template>