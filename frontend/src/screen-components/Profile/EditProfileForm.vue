<script lang="ts">
import { Form } from 'vee-validate'
import * as yup from 'yup'

import Input from '../../components/Input.vue'
import Button from '../../components/Button.vue'

type TEditProfileFormResult = Record<'name' | 'email' | 'password', string>

export default {
  name: 'EditProfileForm',
  components: {
    Form,
    Input,
    Button
  },
  setup() {
    const onEdit = (values: TEditProfileFormResult) => {
      alert(JSON.stringify(values))
    }

    const editProfileFormSchema = yup.object().shape({})

    return {
      editProfileFormSchema,
      onEdit
    }
  }
}
</script>

<template>
  <Form
    :validation-schema="editProfileFormSchema"
    @submit="onEdit as unknown"
    class="flex-1 flex flex-col gap-5"
  >
    <Input
      input-type="text"
      input-placeholder="Ex: Ramon Urubuzão"
      input-id="name"
      input-label="Novo nome"
    />

    <Input
      input-type="email"
      input-placeholder="Ex: ramontrov@gmail.com"
      input-id="email"
      input-label="Novo e-mail"
    />

    <Input
      input-type="phone"
      input-placeholder="Ex: 27 995785613"
      input-id="phone"
      input-label="Novo telefone"
    />

    <Input
      input-type="password"
      input-placeholder="Ex: urubuzaoDoMal123!"
      input-id="before-password"
      input-label="Senha antiga"
    />

    <Input
      input-type="password"
      input-placeholder="Ex: urubuzaoDoBem123!"
      input-id="after-password"
      input-label="Senha nova"
    />

    <Button>Salvar perfil</Button>
  </Form>
</template>
