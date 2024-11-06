const colors = {
  neutrals: {
    100: '#F0F3F5',
    200: '#D9E3E9',
    300: '#C3D4DD', // hazy
    400: '#A4B7C1',
    500: '#859BA6', // slate gray
    600: '#788C95',
    700: '#6A7C85',
    800: '#5D6D74',
    900: '#505D64',
  },
  darks: {
    100: '#363636',
    200: '#313131',
    300: '#2C2C2C',
    400: '#282828',
    500: '#232323',
    600: '#202020',
    700: '#1E1E1E',
    800: '#191919',
    900: '#0D0D0D',
  },
  primary: {
    0: '#0E2A59', // navy
    100: '#C3D4DD', // hazy
    200: '#B3C5CF',
    300: '#94A9B3',
    400: '#3E557A',
    500: '#859BA6', // slate gray
    600: '#677E92',
    700: '#49627F',
    800: '#2B466C',
    900: '#0E2A59', // navy
  },
  secondary: {
    0: '#E31F26', // red
    100: '#EDD7BB', // birch wood
    200: '#EAA995',
    300: '#E87B70',
    400: '#E54D4B',
    500: '#E31F26', // red
    600: '#D62227',
    700: '#C92227',
    800: '#BC2227',
    900: '#AF2227', // brick red
  },
  states: {
    successLight: '#D8EDDA',
    success: '#318538', // leaf green
    successAlt: '#B2D235', // lime
    successDark: '#256329',
    errorLight: '#FFD1D1',
    error: '#E31F26', // red
    errorDark: '#AF2227', // brick red
    clearance: '#FFE600', // clearance yellow
    infoLight: '#89D0EF', // chambray
    info: '#009EDD', // sky blue
    infoDark: '#0088C7', // true blue
    accentLight: '#FFEEBD', // sand -- if changing also change misc.selectedLight
    accent: '#F3AD1C', // marigold
    accentDark: '#F3AD1C', // marigold
    reviews: '#f4ad1c',
  },
  likeNew: {
    100: '#89D0EF', // chambray
    200: '#009EDD', // sky blue
    300: '#0088C7', // true blue
    400: '#0E2A59', // navy
  },
  good: {
    100: '#D1E486',
    200: '#B2D235', // lime
    300: '#3DA545', // leaf green
    400: '#256329',
  },
  fair: {
    100: '#FFEEBD', // sand
    200: '#F9CD6C',
    300: '#F3AD1C', // marigold
    400: '#F26522', // tangarine
    500: '#c03f00',
  },
  imperfect: {
    100: '#DBE5EB',
    200: '#C3D4DD', // hazy
    300: '#A4B7C1',
    400: '#859BA6', // slate gray
  },
  nib: {
    legacyBg: '#F99E17',
    legacyBorder: '#FFD171',
    legacyText: '#FFFFFF',
    light: '#40B6E5',
    100: '#40B6E5',
    200: '#20AAE1',
    300: '#009edd', // sky blue
    400: '#008AC1',
    dark: '#009edd', // sky blue
    accent: '#F26522', // tangarine
  },
  obi: {
    legacyBg: '#2034D2',
    legacyBorder: '#437CCD',
    legacyText: '#FFFFF',
    light: '#4A5F82',
    100: '#4A5F82',
    200: '#2C446D',
    300: '#0E2A59', // navy
    400: '#0C244E',
    dark: '#0E2A59', // navy
    accent: '#F3AD1C', // marigold
  },
  cta: {
    light: '#009EDD', // sky blue
    links: '#2d5d95',
    dark: '#0E2A59', // navy
    legacyBlue: '#2367c2',
    legacyRed: '#981818', // red
  },
  misc: {
    selectedLight: '#ECFAFB',
    selectedMedium: '#5AB3DA',
    selectedDark: '#2D5D95',
    blackFridayGreen: '#77C07D',
    cyberDealYellow: '#FFE600', // clearance yellow
    lightgrey: '#A0AEC0',
  },
  socials: {
    facebook: '#3875EA', // rgb(56, 117, 234)
    insta: '#FF045C', // rgb(255, 4, 92)
    pinterest: '#BC281A', // rgb(188, 40, 26)
    threads: '#000000', // rgb(0, 0, 0)
    tiktok: '#000000', // rgb(0, 0, 0)
    twitter: '#000000', // rgb(0, 0, 0)
    youtube: '#FF0000', // rgb(255, 0, 0)
  },
  // the following is for reference only
  red: {
    'birch wood': '#EDD7BB', // rgb(237, 215, 187)
    red: '#E31F26', // rgb(227, 31, 38)
    'brick red': '#AF2227', // rgb(175, 34, 39)
  },
  navy: {
    hazy: '#C3D4DD', // rgb(195, 212, 221)
    'slate gray': '#859BA6', // rgb(133, 155, 166)
    navy: '#0E2A59', // rgb(14, 42, 89)
  },
  'sky blue': {
    chambray: '#89D0EF', // rgb(137, 208, 239)
    'sky blue': '#009EDD', // rgb(0, 158, 221)
    'true blue': '#0088C7', // rgb(0, 136, 199)
  },
  lime: {
    'leaf green': '#3DA545', // rgb(61, 165, 69)
    lime: '#B2D235', // rgb(178, 210, 53)
    'clearance yellow': '#FFE600', // rgb(255, 230, 0)
  },
  marigold: {
    sand: '#FFEEBD', // rgb(255, 238, 189)
    marigold: '#F3AD1C', // rgb(243, 173, 28)
    tangerine: '#F26522', // rgb(242, 101, 34)
  },
  checkout: {
    primary: '#003999',
  },
};

colors.misc = {
  ...colors.misc,
  ...colors.red,
};

export default colors;
