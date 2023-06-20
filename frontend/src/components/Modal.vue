<script lang="ts">
import Button from './Button.vue'
import { PhX } from '@phosphor-icons/vue'

export default {
  name: 'Modal',
  components: {
    Button,
    PhX
  },
  props: {
    modalTitle: {
      type: String,
      required: true
    }
  },
  mounted() {
    document.addEventListener('keydown', this.closeModalOnPressEsc)
  },
  data() {
    return {
      modalIsOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalIsOpen = true
    },
    closeModal() {
      this.modalIsOpen = false
    },
    closeModalOnPressEsc(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.closeModal()
      }
    }
  }
}
</script>

<template>
  <Button :on-click="openModal">
    {{ modalTitle }}
  </Button>

  <div
    v-if="modalIsOpen"
    class="fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full min-h-screen flex justify-center items-center bg-black/50"
  >
    <main class="w-full max-w-[32rem] p-8 rounded-md bg-slate-100">
      <header class="mb-8 flex justify-between items-center">
        <h2 class="font-bold text-2xl">{{ modalTitle }}</h2>

        <button @click="closeModal">
          <PhX :size="24" />
        </button>
      </header>

      <main class="modal-content h-96 pb-4 pt-4 pr-4 overflow-y-scroll">
        <slot></slot>
      </main>
    </main>
  </div>
</template>

<style scoped>
.modal-content::-webkit-scrollbar {
  width: 2px;
  border-radius: 999px;
}

.modal-content::-webkit-scrollbar-track {
  background: #fafafa;
}

.modal-content::-webkit-scrollbar-thumb {
  background: #888;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
