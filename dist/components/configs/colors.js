const colors = {
    neutrals: {
        100: '#F0F3F5',
        200: '#D9E3E9',
        300: '#C3D4DD',
        400: '#A4B7C1',
        500: '#859BA6',
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
        0: '#0E2A59',
        100: '#C3D4DD',
        200: '#B3C5CF',
        300: '#94A9B3',
        400: '#3E557A',
        500: '#859BA6',
        600: '#677E92',
        700: '#49627F',
        800: '#2B466C',
        900: '#0E2A59', // navy
    },
    secondary: {
        0: '#E31F26',
        100: '#EDD7BB',
        200: '#EAA995',
        300: '#E87B70',
        400: '#E54D4B',
        500: '#E31F26',
        600: '#D62227',
        700: '#C92227',
        800: '#BC2227',
        900: '#AF2227', // brick red
    },
    states: {
        successLight: '#D8EDDA',
        success: '#318538',
        successAlt: '#B2D235',
        successDark: '#256329',
        errorLight: '#FFD1D1',
        error: '#E31F26',
        errorDark: '#AF2227',
        clearance: '#FFE600',
        infoLight: '#89D0EF',
        info: '#009EDD',
        infoDark: '#0088C7',
        accentLight: '#FFEEBD',
        accent: '#F3AD1C',
        accentDark: '#F3AD1C',
        reviews: '#f4ad1c',
    },
    likeNew: {
        100: '#89D0EF',
        200: '#009EDD',
        300: '#0088C7',
        400: '#0E2A59', // navy
    },
    good: {
        100: '#D1E486',
        200: '#B2D235',
        300: '#3DA545',
        400: '#256329',
    },
    fair: {
        100: '#FFEEBD',
        200: '#F9CD6C',
        300: '#F3AD1C',
        400: '#F26522',
        500: '#c03f00',
    },
    imperfect: {
        100: '#DBE5EB',
        200: '#C3D4DD',
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
        300: '#009edd',
        400: '#008AC1',
        dark: '#009edd',
        accent: '#F26522', // tangarine
    },
    obi: {
        legacyBg: '#2034D2',
        legacyBorder: '#437CCD',
        legacyText: '#FFFFF',
        light: '#4A5F82',
        100: '#4A5F82',
        200: '#2C446D',
        300: '#0E2A59',
        400: '#0C244E',
        dark: '#0E2A59',
        accent: '#F3AD1C', // marigold
    },
    cta: {
        light: '#009EDD',
        links: '#2d5d95',
        dark: '#0E2A59',
        legacyBlue: '#2367c2',
        legacyRed: '#981818', // red
    },
    misc: {
        selectedLight: '#ECFAFB',
        selectedMedium: '#5AB3DA',
        selectedDark: '#2D5D95',
        blackFridayGreen: '#77C07D',
        cyberDealYellow: '#FFE600',
        lightgrey: '#A0AEC0',
    },
    socials: {
        facebook: '#3875EA',
        insta: '#FF045C',
        pinterest: '#BC281A',
        threads: '#000000',
        tiktok: '#000000',
        twitter: '#000000',
        youtube: '#FF0000', // rgb(255, 0, 0)
    },
    // the following is for reference only
    red: {
        'birch wood': '#EDD7BB',
        red: '#E31F26',
        'brick red': '#AF2227', // rgb(175, 34, 39)
    },
    navy: {
        hazy: '#C3D4DD',
        'slate gray': '#859BA6',
        navy: '#0E2A59', // rgb(14, 42, 89)
    },
    'sky blue': {
        chambray: '#89D0EF',
        'sky blue': '#009EDD',
        'true blue': '#0088C7', // rgb(0, 136, 199)
    },
    lime: {
        'leaf green': '#3DA545',
        lime: '#B2D235',
        'clearance yellow': '#FFE600', // rgb(255, 230, 0)
    },
    marigold: {
        sand: '#FFEEBD',
        marigold: '#F3AD1C',
        tangerine: '#F26522', // rgb(242, 101, 34)
    },
    checkout: {
        primary: '#003999',
    },
};
colors.misc = Object.assign(Object.assign({}, colors.misc), colors.red);
export default colors;
//# sourceMappingURL=colors.js.map