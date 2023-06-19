<script lang="ts">
import { Form } from 'vee-validate'

import Modal from '../../components/Modal.vue'
import Input from '../../components/Input.vue'
import Checkbox from '../../components/Checkbox.vue'
import Radio from '../../components/Radio.vue'
import Button from '../../components/Button.vue'

export default {
  name: 'CreateAdvertise',
  components: {
    Modal,
    Form,
    Input,
    Checkbox,
    Radio,
    Button
  }
}
</script>

<template>
  <Modal modal-title="Filtrar">
    <Form class="flex flex-col gap-4">
      <strong>Sobre o produto</strong>

      <Input
        input-id="title"
        input-label="Título do anúncio"
        input-placeholder="Ex: Tabuleiro de xadrez"
        input-type="text"
      />

      <Input
        input-id="description"
        input-label="Descrição do anúncio"
        input-placeholder="Ex: Tabuleiro em ótimo estado bem massa"
        input-type="text"
      />

      <Input
        input-id="brl"
        input-label="Valor do produto"
        input-placeholder="Ex: R$ 69,99"
        variant="brl"
        input-type="text"
      />

      <div class="flex gap-8 items-center">
        <Radio radio-name="new-or-old" radio-id="new" radio-label="Produto Novo" />
        <Radio radio-name="new-or-old" radio-id="old" radio-label="Produto Usado" />
      </div>

      <strong>Meios de pagamentos aceitos</strong>

      <div class="flex flex-col">
        <Checkbox check-box-id="ticket" check-box-label="Boleto" />
        <Checkbox check-box-id="pix" check-box-label="Pix" />
        <Checkbox check-box-id="currency" check-box-label="Dinheiro" />
        <Checkbox check-box-id="cred-card" check-box-label="Cartão de Crédito" />
        <Checkbox check-box-id="bank-deposit" check-box-label="Depósito Bancário" />
      </div>

      <div class="mb-8 flex align-center gap-2">
        <label for="accept-trade">Aceita troca?</label>

        <Checkbox variant="toggle" check-box-id="accept-trade" />
      </div>

      <Button type="submit"> Criar anúncio </Button>
    </Form>
  </Modal>
</template>
