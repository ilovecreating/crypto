<script setup lang="ts">
import { ref } from '#imports';

const { data: countEth } = await useFetch<any>(
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eth',
);

const { data: countUsd } = await useFetch<any>(
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
);

const rubAmount = ref<number>(0);
const usdAmount = ref<number>(0);
const ethAmount = ref<number>(0);
const bitAmount = ref<number>(0);

const convertToUSD = (oneDollar: number): void => {
  usdAmount.value = rubAmount.value / oneDollar;
};

function convertToEth(): void {
  const ethRate: number = countUsd.value['ethereum'].usd;
  ethAmount.value = ethAmount.value / ethRate;
}

function convertToBit(): void {
  const bitRate: number = countEth.value['bitcoin'].eth;
  console.log(bitRate);
  bitAmount.value = bitAmount.value / bitRate;
}

const oneDollar: number = 91.63; // Установите курс доллара к рублю

// Вызываем функцию конвертации
const selectedCoin = ref<string>('usd');
//console.log(info.value['bitcoin'].usd);
</script>

<template>
  <div>
    <div class="info">
      <NuxtLink to="/cryptoInfo">Курсы валют</NuxtLink>
    </div>
    <wallet :selected="selectedCoin" />
    <div v-if="selectedCoin === 'usd'">
      <input type="number" v-model="rubAmount" /> RUB
      <button @click="convertToUSD(oneDollar)">Convert to USD</button>
      <p>1 $: {{ oneDollar }}</p>
      <p>1 ETH: {{ countUsd['ethereum'].usd }}</p>
      <p>1 BTN: {{ countEth['bitcoin'].eth }}</p>

      <div>Количество рублей: {{ rubAmount }} в долларах {{ usdAmount }}</div>
    </div>

    <div v-if="selectedCoin === 'eth'">
      <input type="number" v-model="ethAmount" /> RUB
      <button @click="convertToEth()">Convert to ETH</button>
      <p>1 $: {{ oneDollar }}</p>
      <p>1 ETH: {{ countUsd['ethereum'].usd }}</p>
      <p>1 BTN: {{ countEth['bitcoin'].eth }}</p>

      <div>Количество $: {{ rubAmount }} в ETH {{ ethAmount }}</div>
    </div>

    <div v-if="selectedCoin === 'bit'">
      <input type="number" v-model="bitAmount" /> RUB
      <button @click="convertToBit()">Convert to BIT</button>
      <p>1 $: {{ oneDollar }}</p>
      <p>1 ETH: {{ countUsd['ethereum'].usd }}</p>
      <p>1 BTN: {{ countEth['bitcoin'].eth }}</p>

      <div>Количество ETH: {{ rubAmount }} в BIT {{ bitAmount }}</div>
    </div>
  </div>
</template>
<style scoped>
.info {
  display: inline-block;
  border: 1px solid #000;
  margin-bottom: 10px;
  margin-right: 15px;
  border-radius: 5px;
  background-color: aquamarine;
  text-decoration: none;
}

.info:hover {
  text-decoration: underline;
}
.crypto {
  margin-bottom: 10px;
}
</style>
