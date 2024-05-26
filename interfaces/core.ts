import type About from './typeinter';

export default class CurrencyInfo implements About {
  titleUsd: string;
  titleEth: string;
  titleBit: string;
  constructor(titleUsd, titleEth, titleBit) {
    this.titleUsd = titleUsd;
    this.titleEth = titleEth;
    this.titleBit = titleBit;
  }
}
