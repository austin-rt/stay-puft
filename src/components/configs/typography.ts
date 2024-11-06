export const fontWeights = {
  normal: 'font-[400]',
  semi: 'font-[600]',
  bold: 'font-[700]',
};

export const fontSizes = {
  h1: 'text-[27px]',
  h2: 'text-[19px]',
  h3: 'text-[18px]',
  h4: 'text-[16px]',
  h5: 'text-[23px]',
  h6: 'text-[12px]',
  pBig: 'text-[18px]',
  pMid: 'text-[16px]',
  pSmall: 'text-[14px]',
};

const lineHeights = {
  h1: 'leading-[37px]',
  h2: 'leading-[27px]',
  h3: 'leading-[24px]',
  h4: 'leading-[21px]',
  h5: 'leading-[18px]',
  h6: 'leading-[16px]',
  pBig: 'leading-[25px]',
  pMid: 'leading-[23px]',
  pSmall: 'leading-[20px]',
};

/**
 * @description This object represents the attributes from the typography object applied with Tailwind syntax using arbitrary values.
 */

export const typographyTailwind = {
  'h1-normal': `${fontSizes.h1} ${lineHeights.h1} ${fontWeights.normal}`,
  h1: `${fontSizes.h1} ${lineHeights.h1} ${fontWeights.normal}`,
  'h1-semi': `${fontSizes.h1} ${lineHeights.h1} ${fontWeights.semi}`,
  'h1-bold': `${fontSizes.h1} ${lineHeights.h1} ${fontWeights.bold}`,
  'h2-normal': `${fontSizes.h2} ${lineHeights.h2} ${fontWeights.normal}`,
  h2: `${fontSizes.h2} ${lineHeights.h2} ${fontWeights.normal}`,
  'h2-semi': `${fontSizes.h2} ${lineHeights.h2} ${fontWeights.semi}`,
  'h2-bold': `${fontSizes.h2} ${lineHeights.h2} ${fontWeights.bold}`,
  'h3-normal': `${fontSizes.h3} ${lineHeights.h3} ${fontWeights.normal}`,
  h3: `${fontSizes.h3} ${lineHeights.h3} ${fontWeights.normal}`,
  'h3-semi': `${fontSizes.h3} ${lineHeights.h3} ${fontWeights.semi}`,
  'h3-bold': `${fontSizes.h3} ${lineHeights.h3} ${fontWeights.bold}`,
  'h4-normal': `${fontSizes.h4} ${lineHeights.h4} ${fontWeights.normal}`,
  h4: `${fontSizes.h4} ${lineHeights.h4} ${fontWeights.normal}`,
  'h4-semi': `${fontSizes.h4} ${lineHeights.h4} ${fontWeights.semi}`,
  'h4-bold': `${fontSizes.h4} ${lineHeights.h4} ${fontWeights.bold}`,
  'h5-normal': `${fontSizes.h5} ${lineHeights.h5} ${fontWeights.normal}`,
  h5: `${fontSizes.h5} ${lineHeights.h5} ${fontWeights.normal}`,
  'h5-semi': `${fontSizes.h5} ${lineHeights.h5} ${fontWeights.semi}`,
  'h5-bold': `${fontSizes.h5} ${lineHeights.h5} ${fontWeights.bold}`,
  'h6-normal': `${fontSizes.h6} ${lineHeights.h6} ${fontWeights.normal}`,
  h6: `${fontSizes.h6} ${lineHeights.h6} ${fontWeights.normal}`,
  'h6-semi': `${fontSizes.h6} ${lineHeights.h6} ${fontWeights.semi}`,
  'h6-bold': `${fontSizes.h6} ${lineHeights.h6} ${fontWeights.bold}`,
  'pBig-normal': `${fontSizes.pBig} ${lineHeights.pBig} ${fontWeights.normal}`,
  pBig: `${fontSizes.pBig} ${lineHeights.pBig} ${fontWeights.normal}`,
  'pBig-semi': `${fontSizes.pBig} ${lineHeights.pBig} ${fontWeights.semi}`,
  'pBig-bold': `${fontSizes.pBig} ${lineHeights.pBig} ${fontWeights.bold}`,
  'pMid-normal': `${fontSizes.pMid} ${lineHeights.pMid} ${fontWeights.normal}`,
  pMid: `${fontSizes.pMid} ${lineHeights.pMid} ${fontWeights.normal}`,
  'pMid-semi': `${fontSizes.pMid} ${lineHeights.pMid} ${fontWeights.semi}`,
  'pMid-bold': `${fontSizes.pMid} ${lineHeights.pMid} ${fontWeights.bold}`,
  'pSmall-normal': `${fontSizes.pSmall} ${lineHeights.pSmall} ${fontWeights.normal}`,
  pSmall: `${fontSizes.pSmall} ${lineHeights.pSmall} ${fontWeights.normal}`,
  'pSmall-semi': `${fontSizes.pSmall} ${lineHeights.pSmall} ${fontWeights.semi}`,
  'pSmall-bold': `${fontSizes.pSmall} ${lineHeights.pSmall} ${fontWeights.bold}`,
};

/**
 * @description This object represents a mapping of Tailwind classes. The keys should be
 * used as class names without the '.' prefix. For example, to apply the h1-normal class,
 * use className="h1-normal" instead of className=".h1-normal".
 */

const generateTypography = (tailwindClasses: typeof typographyTailwind) => {
  return Object.fromEntries(
    Object.entries(tailwindClasses).map(([key, value]) => [
      `.${key}` as const,
      {
        fontSize: value.split(' ')[0].replace('text-[', '').replace(']', ''),
        lineHeight: value
          .split(' ')[1]
          .replace('leading-[', '')
          .replace(']', ''),
        fontWeight: value.split(' ')[2].replace('font-[', '').replace(']', ''),
      },
    ])
  );
};

const typography = generateTypography(typographyTailwind);

export default typography;
