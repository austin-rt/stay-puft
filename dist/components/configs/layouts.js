const layoutsTailwind = {
    container: 'px-2 md:px-0 md:w-11/12 md:max-w-screen-2xl mx-auto relative',
    alignMiddle: 'flex items-center',
    margins: {
        bottom: 'mb-10',
        left: 'ml-5',
        right: 'mr-5',
        top: 'mt-10',
    },
    columns: {
        2: 'md:grid grid-cols-2 gap-4',
        3: 'md:grid grid-cols-3 gap-4',
        4: 'md:grid grid-cols-4 gap-4',
        6: 'md:grid grid-cols-6 gap-4',
        grid: 'w-full md:flex gap-4',
        sidebar: 'w-full md:w-2/5',
        main: 'w-full: md:w-3/5',
    },
};
export const layouts = {
    '.container': {
        position: 'relative',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        margin: '0 auto', // mx-auto
    },
    '.alignMiddle': {
        display: 'flex',
        alignItems: 'center', // items-center
    },
    '.mb': {
        marginBottom: '2.5rem', // mb-10
    },
    '.mr': {
        marginRight: '1.25rem', // mr-5
    },
    '.ml': {
        marginLeft: '1.25rem', // ml-5
    },
    '.mt': {
        marginTop: '2.5rem', // mt-10
    },
    '.col-2': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '1rem', // gap-4
    },
    '.grid': {
        display: 'grid',
        width: '100%',
        gap: '1rem', // md:gap-4
    },
    '.sidebar': {
        width: '100%', // md:w-full
    },
    '.main': {
        width: '100%', // md:w-full
    },
    '@media (min-width: 768px)': {
        '.container': {
            paddingLeft: '0',
            paddingRight: '0',
            width: '91.666667%',
            maxWidth: '1536px', // md:max-w-screen-2xl
        },
        '.col-2': {
            display: 'grid', // md:grid
        },
        '.col-3': {
            display: 'grid', // md:grid
        },
        '.col-4': {
            display: 'grid', // md:grid
        },
        '.col-6': {
            display: 'grid', // md:grid
        },
        '.grid': {
            display: 'flex', // md:flex
        },
        '.sidebar': {
            width: '40%', // md:w-2/5
        },
        '.main': {
            width: '60%', // md:w-3/5
        },
    },
};
export default layoutsTailwind;
//# sourceMappingURL=layouts.js.map