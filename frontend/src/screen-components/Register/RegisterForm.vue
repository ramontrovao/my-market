<script lang="ts">
import { Form } from 'vee-validate'
import * as yup from 'yup'

import { createNewUser } from '../../services/api'

import Input from '../../components/Input.vue'
import Button from '../../components/Button.vue'

type TRegisterFormResult = Record<
  'phone' | 'username' | 'email' | 'password' | 'confirm-password',
  string
>
export default {
  name: 'RegisterForm',
  components: {
    Input,
    Button,
    Form
  },
  data() {
    return {
      isCreatingUser: false,
      errorMessage: ''
    }
  },
  methods: {
    toggleLoading() {
      this.isCreatingUser = !this.isCreatingUser
    },
    setErrorMessage(message: string) {
      this.errorMessage = message
    },
    async onRegister({ email, password, username, phone }: TRegisterFormResult) {
      try {
        this.toggleLoading()
        phone = phone.replace(/\D/g, '')

        await createNewUser({
          name: username,
          email,
          tel: phone,
          password
        })
      } catch (err: any) {
        this.setErrorMessage(err.response.data.message)
        console.log(err)
      } finally {
        this.toggleLoading()
      }
    }
  },
  setup() {
    const registerFormSchema = yup.object().shape({
      username: yup
        .string()
        .matches(/^[^0-9]*$/, 'Digite um nome válido')
        .required('Esse campo é obrigatório'),
      email: yup
        .string()
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Digite um email válido')
        .required('Esse campo é obrigatório'),
      phone: yup.string().min(13, 'Digite um telefone válido').required('Esse campo é obrigatório'),
      password: yup
        .string()
        .min(8, 'A senha precisa ter no mínimo 8 dígitos')
        .matches(/^(?=.*[a-zA-Z])(?=.*\d).+$/, 'A senha precisa ter letras e números')
        .required('Esse campo é obrigatório'),
      'confirm-password': yup
        .string()
        .required('Esse campo é obrigatório')
        .oneOf([yup.ref('password')], 'As senhas não coincidem')
    })

    return {
      registerFormSchema
    }
  }
}
</script>

<template>
  <Form
    @submit="onRegister as unknown"
    :validation-schema="registerFormSchema"
    class="flex flex-col gap-8 w-full max-w-[25rem]"
  >
    <h2 class="text-2xl">Registre-se no melhor marketplace do Brasil! :D</h2>

    <div class="flex flex-col gap-4">
      <Input
        input-label="Nome"
        input-id="username"
        input-type="text"
        input-placeholder="Ramon Quebra Códigos"
      />
      <Input
        input-label="E-mail"
        input-id="email"
        input-type="text"
        input-placeholder="ramonzito@ts.com"
      />
      <Input
        variant="phone"
        input-label="Telefone"
        input-id="phone"
        input-type="text"
        input-placeholder="27 99123-1234"
      />
      <Input
        input-label="Senha"
        input-id="password"
        input-type="password"
        input-placeholder="1EuQuebroCodigos!"
      />
      <Input
        input-label="Repita sua senha"
        input-id="confirm-password"
        input-type="password"
        input-placeholder="1EuQuebroCodigos!"
      />
    </div>

    <strong v-if="errorMessage.length > 0" class="text-red-500"> {{ errorMessage }} </strong>

    <Button :is-loading="isCreatingUser" type="submit"> Criar conta </Button>

    <p>
      Já possui uma conta?
      <RouterLink to="/" class="text-blue-700 transition-all duration-300 hover:text-blue-500"
        >Entre aqui</RouterLink
      >
    </p>
  </Form>
</template>
