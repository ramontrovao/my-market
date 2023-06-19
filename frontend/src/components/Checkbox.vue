<script lang="ts">
export default {
  name: 'Checkbox',
  props: {
    checkBoxLabel: {
      type: String,
      required: false
    },
    checkBoxId: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      required: false
    }
  }
}
</script>

<template>
  <label v-if="variant === 'toggle'" class="relative inline-flex items-center cursor-pointer">
    <input :id="checkBoxId" type="checkbox" value="" class="sr-only peer" />
    <div
      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
    ></div>
    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{{
      checkBoxLabel
    }}</span>
  </label>

  <div v-else class="flex items-center mb-4">
    <input
      :id="checkBoxId"
      type="checkbox"
      value=""
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label :for="checkBoxId" class="ml-2 text-gray-500">{{ checkBoxLabel }}</label>
  </div>
</template>
