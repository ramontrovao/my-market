<script lang="ts">
    import { defineComponent } from 'vue';
    import { Field, ErrorMessage } from "vee-validate"

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
            },
            inputValidationRules: {
                type: Function as () => {},
                required: false
            }
        },
        components: {
            Field,
            ErrorMessage
        }
    })
</script>

<template>
    <div class="flex flex-col gap-1">
        <label class="text-gray-500" v-if="inputLabel" :for="inputId">
        {{ inputLabel }}
        </label>
        <Field :name="inputId" :id="inputId" :rules="inputValidationRules" :type="inputType" :placeholder="inputPlaceholder" class="max-h-18 p-4 outline-none bg-gray-200 border-[1px] border-solid border-gray-400 rounded-md transition-all duration-300 focus:border-blue-400" />
        <ErrorMessage class="text-red-400" :name="inputId" />
    </div>
</template>