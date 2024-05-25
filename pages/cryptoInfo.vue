<script setup>
const { data: countEth } = await useFetch(
  'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eth',
);

const { data: countUsd } = await useFetch(
  'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd',
);

const oneDollar = 91.63;
const ethR = countUsd.value['ethereum'].usd;
const bitR = countEth.value['bitcoin'].eth;
</script>

<template>
  <div class="text-wallet">
    <p class="text">Курс $ к рублю {{ oneDollar }}</p>
    <p class="text">Курс ETH к $ {{ ethR }}</p>
    <p class="text">Курс BIT к ETH {{ bitR }}</p>
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
