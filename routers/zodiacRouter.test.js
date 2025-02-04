import { mockRequest, mockResponse } from "jest-mock-req-res";
import {
  fetchClassicZodiacSign,
  fetchChineseZodiacSign,
} from "./zodiacRouter.js";

describe("Getting my horoscope", () => {
  it("gets accurate classic zodiac sign when given accurate query params", () => {
    const req = mockRequest({ query: { day: "11", month: "11" } });
    const res = mockResponse();
    fetchClassicZodiacSign(req, res);
    expect(res.json).toBeCalledWith({
      data: "Your classic zodiac sign is Scorpio",
    });
  });

  it("fails on classic zodiac sign when given invalid query params", () => {
    const req = mockRequest({ query: { year: "1993" } });
    const res = mockResponse();
    fetchClassicZodiacSign(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.send).toBeCalledWith("Please enter a valid day and month.");
  });

  it("gets accurate chinese zodiac sign when given accurate query params", () => {
    const req = mockRequest({ query: { year: "1993" } });
    const res = mockResponse();
    fetchChineseZodiacSign(req, res);
    expect(res.json).toBeCalledWith({
      data: "Your chinese zodiac sign is Rooster",
    });
  });

  it("fails on chinese zodiac sign when given invalid query params", () => {
    const req = mockRequest({ query: { day: "11", month: "11" } });
    const res = mockResponse();
    fetchChineseZodiacSign(req, res);
    expect(res.status).toBeCalledWith(400);
    expect(res.send).toBeCalledWith("Please enter a valid year.");
  });
});
