<script setup>
const { data: countEth } = await useFetch(
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eth',
);

const { data: countUsd } = await useFetch(
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
);

const oneDollar = 91.63;
const ethR = await countUsd.value['ethereum'].usd;
const bitR = await countEth.value['bitcoin'].eth;

const massInfo = [
  { text: 'Курс $ к рублю', money: oneDollar },
  { text: 'Курс ETH к $', money: ethR },
  { text: 'Курс BIT к ETH', money: bitR },
];
</script>

<template>
  <div v-for="(item, index) in massInfo" :key="index" class="text-wallet">
    <p class="text">{{ item.text }} {{ item.money }}</p>
  </div>
  <p><NuxtLink class="link" to="/">Вернуться на главную</NuxtLink></p>
</template>
<style>
.link {
  border: 1px solid #000;
  padding: 10px;
  border-radius: 5px;
  background-color: aquamarine;
  text-decoration: none;
}
.link:hover {
  text-decoration: underline;
}
.text-wallet {
  display: flex;
  margin: 0 auto;
}
.comeback {
  border: 1px solid #000;

  border-radius: 5px;
  background-color: aquamarine;
}
.text {
  border: 1px solid #000;
  margin-left: 20px;
  padding: 20px;
  border-radius: 5px;
  background-color: aquamarine;
}
</style>
