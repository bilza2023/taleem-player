
lets plan visual future of this app

here are the rules by which we check each renderer

1: make sure that the top section/div exporting a slide-type must only have 2 css classes

"slide" and "the name of the slide type" which will be unique

2: Make a list and document this as visual contract and then give css as a default sample like katex etc.

3: review each slide and make sure it should not break on content which are not necessary -- not all items should be required --for example image-with-title should be able to show with out title as well with just image

4: for css lets start clean (leave taleem.css)
           a: make a top level css file which only contain the slide and css rules that apply to all
           b: make seperate css file for each slide type and in that css file we just target that class nothing more
           c: we may add mobile.css also if you like --

       my main requirements are non sphaggittee css

----------------
here are the slide types
export const SLIDE_TYPES_V1 = [
    "titleSlide",
    "titleAndSubtitle",
    "titleAndPara",
    "bulletList",
    "twoColumnText",
    "imageSlide",
    "imageWithTitle",
    "imageWithCaption",
    "imageLeftBulletsRight",
    "imageRightBulletsLeft",
    "table",
    "statistic",
    "donutChart",
    "bigNumber",
    "barChart",
    "quoteSlide",
    "quoteWithImage",
    "cornerWordsSlide",
    "contactSlide",
    "fillImage",
    "eq"
  ];
  
DISCUSS           