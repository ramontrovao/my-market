<script lang="ts">
import { defineComponent, ref, type Directive } from 'vue'
import { Field, ErrorMessage, useField } from 'vee-validate'
import { mask } from 'vue-the-mask'

export default defineComponent({
  name: 'Input',
  directives: {
    mask: mask as Directive
  },
  setup(props) {
    const { value, errorMessage } = useField(props.inputId)

    const inputValueState = ref('')

    return {
      value,
      errorMessage,
      inputValueState
    }
  },
  props: {
    inputType: {
      type: String,
      required: true
    },
    inputPlaceholder: {
      type: String,
      required: true
    },
    inputId: {
      type: String,
      required: true
    },
    inputLabel: {
      type: String,
      required: false
    },
    variant: {
      type: String,
      required: false
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
  <div v-if="variant === 'phone'" class="flex flex-col gap-1">
    <label class="text-gray-500" v-if="inputLabel" :for="inputId">
      {{ inputLabel }}
    </label>
    <Field
      v-model="inputValueState"
      v-mask="'## #####-####'"
      :name="inputId"
      :id="inputId"
      :rules="inputValidationRules"
      :type="inputType"
      :placeholder="inputPlaceholder"
      class="max-h-18 p-4 outline-none bg-gray-100 border-[1px] border-solid border-gray-400 rounded-md transition-all duration-300 focus:border-blue-400"
    />
    <span class="text-red-600">{{ errorMessage }}</span>
  </div>

  <div v-else-if="variant === 'brl'" class="flex flex-col gap-1">
    <label class="text-gray-500" v-if="inputLabel" :for="inputId">
      {{ inputLabel }}
    </label>
    <Field
      v-model="inputValueState"
      v-mask="'R$ '.padEnd(inputValueState.length + 3, '#')"
      :name="inputId"
      :id="inputId"
      :rules="inputValidationRules"
      :type="inputType"
      :placeholder="inputPlaceholder"
      class="max-h-18 p-4 outline-none bg-gray-100 border-[1px] border-solid border-gray-400 rounded-md transition-all duration-300 focus:border-blue-400"
    />
    <span class="text-red-600">{{ errorMessage }}</span>
  </div>

  <div v-else class="flex flex-col gap-1">
    <label class="text-gray-500" v-if="inputLabel" :for="inputId">
      {{ inputLabel }}
    </label>
    <Field
      :name="inputId"
      :id="inputId"
      :rules="inputValidationRules"
      :type="inputType"
      :placeholder="inputPlaceholder"
      class="max-h-18 p-4 outline-none bg-gray-100 border-[1px] border-solid border-gray-400 rounded-md transition-all duration-300 focus:border-blue-400"
    />
    <ErrorMessage class="text-red-600" :name="inputId" />
  </div>
</template>
