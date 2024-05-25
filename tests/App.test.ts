import { test, expect } from 'vitest';
import { ref } from '#imports'; // Импорт из vue для использования ref

// Импорт функций и переменных для тестирования
import { countUsd, countEth, convertToEth, convertToBit } from './pages/index';
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

test('convertToUSD function should convert rubAmount to usdAmount correctly', async () => {
  rubAmount.value = 100; // установка начального значения
  const oneDollar = 91.63; // установление курса доллара к рублю
  convertToUSD(oneDollar); // вызов функции конвертации
  expect(usdAmount.value).toEqual(rubAmount.value / oneDollar); // проверка правильности конвертации
});

test('convertToEth function should convert ethAmount to USD correctly', async () => {
  ethAmount.value = 1; // установка начального значения
  countUsd.value = { ethereum: { usd: 200 } }; // установление курса для эфириума к USD
  convertToEth(); // вызов функции конвертации
  expect(ethAmount.value).toEqual(1 / 200); // проверка правильности конвертации
});

test('convertToBit function should convert bitAmount to Eth correctly', async () => {
  bitAmount.value = 1; // установка начального значения
  countEth.value = { bitcoin: { eth: 0.005 } }; // установление курса для биткоина к Eth
  convertToBit(); // вызов функции конвертации
  // для вывода в консоль использовать
  // console.log(bitAmount.value);
  expect(bitAmount.value).toEqual(1 / 0.005); // проверка правильности конвертации
});
