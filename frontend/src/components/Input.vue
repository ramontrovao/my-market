<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        name: "Input",
        props: {
            inputType: {
                type: String,
                required: true
            },
            inputPlaceholder: {
                type: String,
                required: true,
            },
            inputId: {
                type: String,
                required: true,
            },
            inputLabel: {
                type: String,
                required: false,
            }
        }
    })
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-gray-500" v-if="inputLabel" :for="inputId">
        {{ inputLabel }}
        </label>
        <input :id="inputId" class="max-h-18 p-4 outline-none bg-gray-200 border-[1px] border-solid border-gray-400 rounded-md transition-all duration-300 focus:border-blue-400" :type="inputType" :placeholder="inputPlaceholder" />
    </div>
</template>