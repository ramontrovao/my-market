<script lang="ts">
import { defineComponent, type PropType } from 'vue'

type TButtonVariants = 'blue' | 'black'

export default defineComponent({
  name: 'Button',
  props: {
    isLoading: {
      type: Boolean,
      required: false
    },
    variant: {
      type: String as PropType<TButtonVariants>,
      default: 'blue',
      required: false
    },
    height: {
      type: Number,
      required: false,
      default: 14
    },
    onClick: {
      type: Function,
      required: false
    }
  },
  setup() {
    const variants = {
      blue: 'bg-blue-600',
      black: 'bg-gray-950'
    }

    return {
      variants
    }
  }
})
</script>

<template>
  <button
    v-if="isLoading"
    :class="`h-${height} flex justify-center items-center bg-white border-blue-600 border-[1px] rounded-md transition-all duration-300`"
  >
    <img class="w-8 h-8" src="../assets/spinner.svg" alt="" />
  </button>

  <button
    v-else
    @click="(e: MouseEvent) => onClick!(e)"
    :class="`h-${height} p-4 ${variants[variant]} flex justify-center items-center gap-2 text-gray-200 rounded-md transition-all duration-300 hover:opacity-80`"
  >
    <slot></slot>
  </button>
</template>
