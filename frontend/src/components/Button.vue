<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name: "Button",
        props: {
            isLoading: {
                type: Boolean,
                required: false
            }
        }
    })
</script>

<template>
    <button v-if="isLoading" class="flex justify-center items-center h-14 bg-white border-blue-600 border-[1px] rounded-md transition-all duration-300">
        <img class="w-8 h-8" src="../assets/spinner.svg" alt="" />
    </button>

    <button v-else class="h-14 bg-blue-600 text-gray-200 rounded-md transition-all duration-300 hover:bg-blue-500">
        <slot></slot>
    </button>
</template>