<script lang="ts">
    import { Form, type SubmissionHandler } from "vee-validate"
    import * as yup from "yup"

    import Input from "../../components/Input.vue"
    import Button from "../../components/Button.vue"

    type TLoginFormResult = Record<"email" | "password", string>

    export default {
        name: "LoginForm",
        components: {
            Form,
            Input,
            Button
        },
        setup(){
          const onLogin = (values: TLoginFormResult) => {
            alert(JSON.stringify(values))
          }

          const loginFormSchema = yup.object().shape({
            email: yup.string().required("Esse campo é obrigatório"),
            password: yup.string().required("Esse campo é obrigatório")
          })

          return {
            loginFormSchema,
            onLogin
          }
        }
    }
</script>

<template>
    <Form :validation-schema="loginFormSchema" @submit="onLogin as unknown" class="flex flex-col gap-8 w-full max-w-[25rem]">
        <h2 class="text-2xl">Bem vindo! Faça seu login. :)</h2>

          <div class="flex flex-col gap-4">
            <Input input-label="E-mail" input-id="email" input-type="email" input-placeholder="urubudopix@teste.com" />
            <Input input-label="Senha" input-id="password" input-type="password" input-placeholder="123MinhaSenhaSuperSecreta!" />
          </div>

          <Button type="submit">
            Entrar
          </Button>

          <p>Não possui uma conta? <RouterLink to="/register" class="text-blue-700 transition-all duration-300 hover:text-blue-500">Registre-se aqui</RouterLink></p>
    </Form>
</template>