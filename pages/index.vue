<script setup lang="ts"></script>

<template>
  <div class="info">
    <NuxtLink to="/cryptoInfo">Курсы валют</NuxtLink>
  </div>
  <Wallet />
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
