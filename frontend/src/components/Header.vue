<script lang="ts">
    export default {
       name: "Header"
    }
</script>

<template>
    <header class="fixed w-full m-auto p-4 shadow-2xl z-20 md:px-16">
        <nav class="max-w-[1100px] header-container">
            <div class="flex items-center gap-1">
                <img class="w-20 h-20" src="/logo.svg" alt="">
                <h1 class="text-2xl font-bold">My Market</h1>
            </div>
        </nav>
    </header>
</template>