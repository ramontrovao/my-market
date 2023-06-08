<script lang="ts">
    import Input from "../../components/Input.vue"
    import Button from "../../components/Button.vue"

    export default {
        name: "LoginForm",
        components: {
            Input,
            Button
        }
    }
</script>

<template>
    <form class="flex flex-col gap-8 w-full max-w-[25rem]">
        <h2 class="text-2xl">Bem vindo! Faça seu login. :)</h2>

          <div class="flex flex-col gap-4">
            <Input input-label="E-mail" input-id="e-mail" input-type="text" input-placeholder="urubudopix@teste.com" />
            <Input input-label="Senha" input-id="password" input-type="password" input-placeholder="123MinhaSenhaSuperSecreta!" />
          </div>

          <Button type="submit">
            Entrar
          </Button>

          <p>Não possui uma conta? <RouterLink to="/register" class="text-blue-700 transition-all duration-300 hover:text-blue-500">Registre-se aqui</RouterLink></p>
    </form>
</template>