<script lang="ts">
import { PhUpload } from '@phosphor-icons/vue'

import Button from '../components/Button.vue'
import EditProfileForm from '../screen-components/Profile/EditProfileForm.vue'

export default {
  name: 'ProfileView',
  components: { Button, EditProfileForm, PhUpload },
  data() {
    return {
      isEditting: false
    }
  },
  methods: {
    handleEditUserPhoto() {
      alert('Editou')
    },
    handleEditProfile() {
      this.isEditting = true
    }
  },
  setup() {
    const userInfos = {
      name: {
        fieldName: 'Nome',
        value: 'Ramon Pinheiro :)'
      },
      email: {
        fieldName: 'E-mail',
        value: 'ramontrov@gmail.com'
      },
      phone: {
        fieldName: 'Telefone',
        value: '27 99578-5613'
      }
    }

    return {
      userInfos
    }
  }
}
</script>

<template>
  <main
    class="w-full px-4 pt-40 m-auto max-w-[1100px] min-h-[90vh] flex flex-wrap justify-center gap-10 md:gap-24 md:flex-nowrap"
  >
    <div
      class="relative flex justify-center align-center max-w-[15rem] max-h-[15rem] overflow-hidden"
    >
      <img src="/eu.png" class="w-full h-auto rounded-full border-2 border-blue-600 border-solid" />
      <Button :on-click="handleEditUserPhoto" variant="black" class="absolute bottom-2 right-5">
        <PhUpload :size="24" />
      </Button>
    </div>

    <div v-if="!isEditting" class="flex-1 flex flex-col gap-10">
      <div v-for="user in userInfos">
        <p class="text-lg">{{ user.fieldName }}</p>

        <strong class="text-xl">{{ user.value }}</strong>
      </div>

      <Button @click="handleEditProfile">Editar perfil</Button>
    </div>

    <EditProfileForm v-else />
  </main>
</template>
