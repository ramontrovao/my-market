<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { PhWhatsappLogo } from '@phosphor-icons/vue'

import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// @ts-ignore
import { FreeMode, Navigation, Thumbs } from 'swiper'

import Button from '../components/Button.vue'

export default {
  name: 'PostView',
  components: {
    Swiper,
    SwiperSlide,
    Button,
    PhWhatsappLogo
  },
  data() {
    return {
      thumbsSwiper: null,
      icon: PhWhatsappLogo,
      images: [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-7.jpg',
        'https://swiperjs.com/demos/images/nature-8.jpg',
        'https://swiperjs.com/demos/images/nature-9.jpg',
        'https://swiperjs.com/demos/images/nature-10.jpg'
      ]
    }
  },
  methods: {
    setThumbsSwiper(swiper: any) {
      this.thumbsSwiper = swiper
    }
  },
  setup() {
    return {
      modules: [FreeMode, Navigation, Thumbs],
      paymentMethods: [
        { name: 'Boleto', icon: '/boleto.svg' },
        { name: 'Pix', icon: '/pix.svg' },
        { name: 'Dinheiro', icon: '/dinheiro.svg' },
        { name: 'Cartão de crédito', icon: '/cartao-de-credito.svg' },
        { name: 'Depósito bancário', icon: '/deposito-bancario.svg' }
      ]
    }
  }
}
</script>

<template>
  <main class="max-w-[1100px] m-auto flex flex-col gap-10 px-4 pt-40 pb-10">
    <div>
      <swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff'
        }"
        :navigation="true"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="modules"
        class="cursor-grab"
      >
        <swiper-slide v-for="img in images">
          <img class="w-full max-h-[30rem]" :src="img" alt="" />
        </swiper-slide>
      </swiper>

      <swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="4"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="modules"
        class="mt-5"
      >
        <swiper-slide v-for="img in images" class="cursor-pointer">
          <img
            class="w-full max-h-[10rem] border-4 border-solid border-blue-600 transition-all duration-300 hover:opacity-80"
            :src="img"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </div>

    <div class="flex flex-col gap-8">
      <div class="flex items-center justify-between">
        <h1 class="text-6xl">Bicicleta</h1>

        <div class="flex items-end">
          <span class="text-lg">R$</span>

          <strong class="text-4xl text-blue-600">120,00</strong>
        </div>
      </div>

      <p class="text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis reprehenderit fuga at?
        Veritatis ea laborum nulla, labore iusto tenetur iste architecto similique fuga ab assumenda
        quisquam mollitia ducimus tempora dignissimos eos, voluptatem quasi minus recusandae
        voluptate quos repellendus quibusdam hic nostrum. Beatae quod molestias rerum quo vitae
        numquam, recusandae fugit? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        reprehenderit fuga at? Veritatis ea laborum nulla, labore iusto tenetur iste architecto
        similique fuga ab assumenda quisquam mollitia ducimus tempora dignissimos eos, voluptatem
        quasi minus recusandae voluptate quos repellendus quibusdam hic nostrum. Beatae quod
        molestias rerum quo vitae numquam, recusandae fugit?
      </p>

      <div class="flex gap-2">
        <strong class="text-xl">Aceita troca?</strong>

        <PhWhatsappLogo />

        <span class="text-xl">Sim</span>
      </div>

      <div class="flex flex-col gap-2">
        <strong class="text-xl">Meios de pagamento aceitos:</strong>

        <ul class="flex flex-col gap-2">
          <li v-for="paymentMethod in paymentMethods" class="flex items-center gap-2">
            <img class="w-full max-w-[2rem] max-h-2rem" :src="paymentMethod.icon" alt="" />

            <span>{{ paymentMethod.name }}</span>
          </li>
        </ul>
      </div>

      <div class="flex gap-4 flex-wrap justify-between items-center md:flex-nowrap">
        <div class="flex flex-wrap gap-2 align-center">
          <p class="text-lg">Vendido e entregue por Ramon Pinheiro</p>

          <img
            class="w-8 rounded-full border-2 border-solid border-blue-600"
            src="/eu.png"
            alt=""
          />
        </div>

        <Button><ph-whatsapp-logo :size="24" /> Entrar em contato via Whatsapp</Button>
      </div>
    </div>
  </main>
</template>
