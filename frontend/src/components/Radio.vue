<script lang="ts">
export default {
  name: 'Radio',
  props: {
    radioName: {
      type: String,
      required: true
    },
    radioId: {
      type: String,
      required: true
    },
    radioLabel: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <div class="flex items-center mb-4">
    <input
      :id="radioId"
      type="radio"
      value=""
      :name="radioName"
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label :for="radioId" class="ml-2 text-gray-500">{{ radioLabel }}</label>
  </div>
</template>
