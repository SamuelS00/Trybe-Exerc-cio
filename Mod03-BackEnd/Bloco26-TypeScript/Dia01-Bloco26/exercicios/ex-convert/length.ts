import { scale } from './type/scale';

const lengthScaleM: Array<scale> = [
  { symbol: 'Km', valueInMeter: 1000 }, // 1000m
  { symbol: 'Hm', valueInMeter: 100 },
  { symbol: 'Dam', valueInMeter: 10 },
  { symbol: 'M', valueInMeter: 1 },
  { symbol: 'Dm', valueInMeter: 0.1 },  // 0,01m
  { symbol: 'Cm', valueInMeter: 0.01 },
  { symbol: 'Mm', valueInMeter: 0.001 }
];

function findScale (unity: string): scale | undefined {
  return lengthScaleM.find((s) => s.symbol === unity);
};

function convert (value: number, unityBase: string, unityConv: string) {
  const scaleBase = findScale(unityBase);
  const scaleConv = findScale(unityConv);

  const valueBaseInM: number = scaleBase !== undefined ? scaleBase.valueInMeter * value : 0;

  const valueConverted: number = scaleConv !== undefined ? scaleConv.valueInMeter * valueBaseInM: 0;

  return valueConverted;
};