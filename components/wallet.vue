<template>
  <select class="crypto" v-model="selectedCoin">
    <option value="usd">
      <div>{{ massInfo.titleUsd }}</div>
    </option>
    <option value="eth">
      <div>{{ massInfo.titleEth }}</div>
    </option>
    <option value="bit">
      <div>{{ massInfo.titleBit }}</div>
    </option>
  </select>
  <div v-if="selectedCoin === 'usd'">
    <input type="number" v-model="rubAmount" /> RUB
    <button @click="convertToUSD()">Convert to USD</button>
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
</template>
<script setup lang="ts">
import { ref } from '#imports';

import CurrencyInfo from '/interfaces/core';

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

const ethRate: number = countUsd.value['ethereum'].usd;
const bitRate: number = countEth.value['bitcoin'].eth;
const oneDollar: number = 91.63;

const convertToUSD = (): void => {
  usdAmount.value = rubAmount.value / oneDollar;
};
function convertToEth(): void {
  ethAmount.value = ethAmount.value / ethRate;
}

function convertToBit(): void {
  bitAmount.value = bitAmount.value / bitRate;
}

// Установите курс доллара к рублю

const selectedCoin = ref<string>('usd');

const massInfo = new CurrencyInfo('From rub to usd', 'From usd to eth', 'From eth to bit');

//console.log(info.value['bitcoin'].usd);
</script>
