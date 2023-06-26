<script lang="ts">
import { Form } from 'vee-validate'
import * as yup from 'yup'

import { loginUser } from '../../services/api'

import Input from '../../components/Input.vue'
import Button from '../../components/Button.vue'

type TLoginFormResult = Record<'email' | 'password', string>

export default {
  name: 'LoginForm',
  components: {
    Form,
    Input,
    Button
  },
  data() {
    return {
      isLogging: false
    }
  },
  methods: {
    toggleIsLoading() {
      this.isLogging = !this.isLogging
    },
    async onLogin({ email, password }: TLoginFormResult) {
      try {
        this.toggleIsLoading()
        const loginToken = await loginUser(email, password)

        localStorage.setItem('@my-market-1.0.0/token', JSON.stringify(loginToken))
        alert(loginToken)
      } catch (err) {
        alert('Algo deu errado. :C')
        console.log(err)
      } finally {
        this.toggleIsLoading()
      }
    }
  },
  setup() {
    const loginFormSchema = yup.object().shape({
      email: yup.string().required('Esse campo é obrigatório'),
      password: yup.string().required('Esse campo é obrigatório')
    })

    return {
      loginFormSchema
    }
  }
}
</script>

<template>
  <Form
    :validation-schema="loginFormSchema"
    @submit="onLogin as unknown"
    class="flex flex-col gap-8 w-full max-w-[25rem]"
  >
    <h2 class="text-2xl">Bem vindo! Faça seu login. :)</h2>

    <div class="flex flex-col gap-4">
      <Input
        input-label="E-mail"
        input-id="email"
        input-type="email"
        input-placeholder="urubudopix@teste.com"
      />
      <Input
        input-label="Senha"
        input-id="password"
        input-type="password"
        input-placeholder="123MinhaSenhaSuperSecreta!"
      />
    </div>

    <Button :is-loading="isLogging" type="submit"> Entrar </Button>

    <p>
      Não possui uma conta?
      <RouterLink
        to="/register"
        class="text-blue-700 transition-all duration-300 hover:text-blue-500"
        >Registre-se aqui</RouterLink
      >
    </p>
  </Form>
</template>
