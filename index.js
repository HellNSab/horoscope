import express from "express";
import { getSign, getZodiac } from "horoscope";
import { z } from "zod";

const app = express();

const classicQuerySchema = z.object({
  month: z.string().regex(/^0[1-9]|1[012]$/),
  day: z.string().regex(/^0[1-9]|1[0-9]|2[0-9]|3[01]$/),
});
export const getClassicZodiacSign = (req, res) => {
  const { success, data } = classicQuerySchema.safeParse(req.query);
  if (!success) {
    return res.status(400).send("Please enter a valid day and month.");
  }
  try {
    const sign = getSign({
      month: Number(data.month),
      day: Number(data.day),
    });
    return res.json({ data: `Your classic zodiac sign is ${sign}` });
  } catch (err) {
    return res.status(500).send(err);
  }
};
app.get("/classic-zodiac", getClassicZodiacSign);

const chineseQuerySchema = z.object({
  year: z.string().regex(/^\d+$/),
});
export const getChineseZodiacSign = (req, res) => {
  const { success, data } = chineseQuerySchema.safeParse(req.query);
  if (!success) {
    return res.status(400).send("Please enter a valid year.");
  }
  try {
    const sign = getZodiac(Number(data.year));
    return res.json({ data: `Your chinese zodiac sign is ${sign}` });
  } catch (err) {
    return res.status(500).send(err);
  }
};
app.get("/chinese-zodiac", getChineseZodiacSign);

if (process.env.NODE_ENV !== "test") {
  app.listen(3000, function () {
    console.log("Listening on port 3000");
  });
}
