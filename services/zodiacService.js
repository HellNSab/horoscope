import { getSign, getZodiac } from "horoscope";

export const getClassicZodiacSign = ({ day, month }) => {
  return getSign({
    month: Number(month),
    day: Number(day),
  });
};

export const getChineseZodiacSign = ({ year }) => {
  return getZodiac(Number(year));
};
