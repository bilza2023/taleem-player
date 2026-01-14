// src/registry.js

import { TitleSlide } from "./slides/TitleSlide.js";
import { TitleAndSubtitleSlide } from "./slides/TitleAndSubtitleSlide.js";
import { TitleAndParaSlide } from "./slides/TitleAndParaSlide.js";
import { BulletListSlide } from "./slides/BulletListSlide.js";
import { TwoColumnTextSlide } from "./slides/TwoColumnTextSlide.js";

import { ImageSlide } from "./slides/ImageSlide.js";
import { FillImageSlide } from "./slides/FillImageSlide.js";
import { ImageWithTitleSlide } from "./slides/ImageWithTitleSlide.js";
import { ImageWithCaptionSlide } from "./slides/ImageWithCaptionSlide.js";
import { ImageLeftBulletsRightSlide } from "./slides/ImageLeftBulletsRightSlide.js";
import { ImageRightBulletsLeftSlide } from "./slides/ImageRightBulletsLeftSlide.js";

import { TableSlide } from "./slides/TableSlide.js";
import { StatisticSlide } from "./slides/StatisticSlide.js";
import { BigNumberSlide } from "./slides/BigNumberSlide.js";
import { BarChartSlide } from "./slides/BarChartSlide.js";
import { DonutChartSlide } from "./slides/DonutChartSlide.js";

import { QuoteSlide } from "./slides/QuoteSlide.js";
import { QuoteWithImageSlide } from "./slides/QuoteWithImageSlide.js";
import { CornerWordsSlide } from "./slides/CornerWordsSlide.js";
import { ContactSlide } from "./slides/ContactSlide.js";

import { EqSlide } from "./slides/EqSlide.js";
import { SvgPointerSlide } from "./slides/SvgPointerSlide.js";

export const SlideTemplates = {
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
  svgPointer: SvgPointerSlide
};
