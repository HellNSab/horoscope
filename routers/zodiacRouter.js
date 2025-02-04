import { Router } from "express";
import {
  getClassicZodiacSign,
  getChineseZodiacSign,
} from "../services/zodiacService.js";
import { classicQuerySchema } from "../schemas/classicZodiacSchema.js";
import { chineseQuerySchema } from "../schemas/chineseZodiacSchema.js";

const zodiacRouter = Router();

export const fetchClassicZodiacSign = (req, res) => {
  const { success, data } = classicQuerySchema.safeParse(req.query);
  if (!success) {
    return res.status(400).send("Please enter a valid day and month.");
  }
  try {
    const sign = getClassicZodiacSign(data);
    return res.json({ data: `Your classic zodiac sign is ${sign}` });
  } catch (err) {
    return res.status(500).send(err);
  }
};
zodiacRouter.get("/classic-zodiac", fetchClassicZodiacSign);

export const fetchChineseZodiacSign = (req, res) => {
  const { success, data } = chineseQuerySchema.safeParse(req.query);
  if (!success) {
    return res.status(400).send("Please enter a valid year.");
  }
  try {
    const sign = getChineseZodiacSign(data);
    return res.json({ data: `Your chinese zodiac sign is ${sign}` });
  } catch (err) {
    return res.status(500).send(err);
  }
};
zodiacRouter.get("/chinese-zodiac", fetchChineseZodiacSign);

export { zodiacRouter };
