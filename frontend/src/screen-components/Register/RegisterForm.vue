<script lang="ts">
    import Input from "../../components/Input.vue"
    import Button from "../../components/Button.vue"

    export default {
        name: "RegisterForm",
        components: {
            Input,
            Button
        }
    }
</script>

<template>
    <form class="flex flex-col gap-8 w-full max-w-[25rem]">
        <h2 class="text-2xl">Registre-se no melhor marketplace do Brasil! :D</h2>
 
          <div class="flex flex-col gap-4">
            <Input input-label="Nome" input-id="name" input-type="text" input-placeholder="Ramon Quebra Códigos" />
            <Input input-label="E-mail" input-id="email" input-type="text" input-placeholder="ramonzito@ts.com" />
            <Input input-label="Telefone" input-id="phone" input-type="text" input-placeholder="27 99123-1234" />
            <Input input-label="Senha" input-id="password" input-type="password" input-placeholder="1EuQuebroCodigos!" />
            <Input input-label="Repita sua senha" input-id="repeat-password" input-type="password" input-placeholder="1EuQuebroCodigos!" />
          </div>

          <Button type="submit">
            Criar conta
          </Button>

          <p>Já possui uma conta? <RouterLink to="/" class="text-blue-700 transition-all duration-300 hover:text-blue-500">Entre aqui</RouterLink></p>
    </form>
</template>