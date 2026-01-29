// src/registry.js

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
import { BarChartSlide } from "./templates/BarChartSlide.js";
import { Progressbar } from "./templates/Progressbar.js";
import { QuoteSlide } from "./templates/QuoteSlide.js";
import { KeyIdeasSlide } from "./templates/KeyIdeasSlide.js";
import { EqSlide } from "./templates/EqSlide.js";

export const SlideRegistry = {
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
  barChart: BarChartSlide,
  progressbar: Progressbar,

  quoteSlide: QuoteSlide,
  keyIdeasSlide: KeyIdeasSlide,

  eq: EqSlide,
};
