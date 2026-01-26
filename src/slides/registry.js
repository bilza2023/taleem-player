// src/registry.js

import { TitleSlide } from "./templates/TitleSlide.js";
import { TitleAndSubtitleSlide } from "./templates/TitleAndSubtitleSlide.js";
import { TitleAndParaSlide } from "./templates/TitleAndParaSlide.js";
import { BulletListSlide } from "./templates/BulletListSlide.js";
import { TwoColumnTextSlide } from "./templates/TwoColumnTextSlide.js";

import { ImageSlide } from "./templates/ImageSlide.js";
import { FillImageSlide } from "./templates/FillImageSlide.js";
import { ImageWithTitleSlide } from "./templates/ImageWithTitleSlide.js";
import { ImageWithCaptionSlide } from "./templates/ImageWithCaptionSlide.js";
import { ImageLeftBulletsRightSlide } from "./templates/ImageLeftBulletsRightSlide.js";
import { ImageRightBulletsLeftSlide } from "./templates/ImageRightBulletsLeftSlide.js";

import { TableSlide } from "./templates/TableSlide.js";
import { StatisticSlide } from "./templates/StatisticSlide.js";
import { BigNumberSlide } from "./templates/BigNumberSlide.js";
import { BarChartSlide } from "./templates/BarChartSlide.js";
import { DonutChartSlide } from "./templates/DonutChartSlide.js";

import { QuoteSlide } from "./templates/QuoteSlide.js";
import { QuoteWithImageSlide } from "./templates/QuoteWithImageSlide.js";
import { CornerWordsSlide } from "./templates/CornerWordsSlide.js";
import { ContactSlide } from "./templates/ContactSlide.js";

import { EqSlide } from "./templates/EqSlide.js";
// import { SvgPointerSlide } from "./templates/SvgPointerSlide.js";

export const SlideRegistry = {
  titleSlide: TitleSlide,
  titleAndSubtitle: TitleAndSubtitleSlide,
  titleAndPara: TitleAndParaSlide,
  bulletList: BulletListSlide,
  twoColumnText: TwoColumnTextSlide,

  imageSlide: ImageSlide,
  fillImage: FillImageSlide,
  imageWithTitle: ImageWithTitleSlide,
  imageWithCaption: ImageWithCaptionSlide,
  imageLeftBulletsRight: ImageLeftBulletsRightSlide,
  imageRightBulletsLeft: ImageRightBulletsLeftSlide,

  table: TableSlide,
  statistic: StatisticSlide,
  bigNumber: BigNumberSlide,
  barChart: BarChartSlide,
  donutChart: DonutChartSlide,

  quoteSlide: QuoteSlide,
  quoteWithImage: QuoteWithImageSlide,
  cornerWordsSlide: CornerWordsSlide,
  contactSlide: ContactSlide,

  eq: EqSlide,
};


export function registerSlide(type, renderer) {
  if (SlideRegistry[type]) {
    throw new Error(`Slide type "${type}" is already registered`);
  }

  SlideRegistry[type] = renderer;
}
