<script lang="ts">
import { Form } from 'vee-validate'

import Modal from '../../components/Modal.vue'
import Checkbox from '../../components/Checkbox.vue'
import Radio from '../../components/Radio.vue'
import Button from '../../components/Button.vue'

export default {
  name: 'CreateAdvertise',
  components: {
    Modal,
    Form,
    Checkbox,
    Radio,
    Button
  }
}
</script>

<template>
  <Modal modal-title="Filtrar">
    <Form class="flex flex-col gap-4">
      <strong>Condição</strong>

      <div class="flex gap-4">
        <Checkbox check-box-id="new" check-box-label="Novo" />
        <Checkbox check-box-id="used" check-box-label="Usado" />
      </div>

      <strong>Meios de pagamento</strong>

      <div class="flex flex-col">
        <Checkbox check-box-id="ticket" check-box-label="Boleto" />
        <Checkbox check-box-id="pix" check-box-label="Pix" />
        <Checkbox check-box-id="currency" check-box-label="Dinheiro" />
        <Checkbox check-box-id="cred-card" check-box-label="Cartão de Crédito" />
        <Checkbox check-box-id="bank-deposit" check-box-label="Depósito Bancário" />
      </div>

      <Checkbox variant="toggle" check-box-label="Aceita troca?" check-box-id="accept-trade" />

      <div class="mt-5 flex gap-8 items-center">
        <Button type="submit" variant="black">Resetar filtros</Button>

        <Button type="submit"> Aplicar filtros </Button>
      </div>
    </Form>
  </Modal>
</template>
