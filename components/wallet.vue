<script setup lang="ts">
defineProps<{
  selected: string;
}>();

import { objEx } from './components/typeinter';

const objExchange = ref<objEx[]>([
  { title: 'From rub to usd' },
  { title: 'From usd to eth' },
  { title: 'exchangeBit' },
]);
</script>

<template>
  <select v-for="(item, index) in objExchange" :key="index" class="crypto" :v-model="selected">
    <option value="usd">
      <div>{{ item.title }}</div>
    </option>

    <option value="eth">{{ item.title }}</option>
    <option value="bit">{{ item.title }}</option>
  </select>
</template>
