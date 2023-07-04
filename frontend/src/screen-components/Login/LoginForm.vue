<script lang="ts">
import { Form } from 'vee-validate'
import { useRouter } from 'vue-router'
import * as yup from 'yup'

import { loginUser } from '../../services/api'
import { useAuthStore } from '../../stores/auth'

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
      isLogging: false,
      errorMessage: ''
    }
  },
  methods: {
    toggleIsLoading() {
      this.isLogging = !this.isLogging
    },
    setErrorMessage(message: string) {
      this.errorMessage = message
    },
    async onLogin({ email, password }: TLoginFormResult) {
      try {
        this.toggleIsLoading()

        const loginSession = await loginUser(email, password)
        this.auth.setToken(loginSession.data.token)
        this.auth.setUser(loginSession.data.user)

        this.router.push('/home')
      } catch (err: any) {
        this.setErrorMessage(err.response?.data.message)
        console.log(err)
      } finally {
        this.toggleIsLoading()
      }
    }
  },
  setup() {
    const auth = useAuthStore()
    const router = useRouter()

    const loginFormSchema = yup.object().shape({
      email: yup.string().required('Esse campo é obrigatório'),
      password: yup.string().required('Esse campo é obrigatório')
    })

    return {
      router,
      auth,
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

    <strong v-if="errorMessage && errorMessage.length > 0" class="text-red-500">
      {{ errorMessage }}
    </strong>

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
