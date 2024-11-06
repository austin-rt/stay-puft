declare const layoutsTailwind: {
    container: string;
    alignMiddle: string;
    margins: {
        bottom: string;
        left: string;
        right: string;
        top: string;
    };
    columns: {
        2: string;
        3: string;
        4: string;
        6: string;
        grid: string;
        sidebar: string;
        main: string;
    };
};
export declare const layouts: {
    '.container': {
        position: string;
        paddingLeft: string;
        paddingRight: string;
        margin: string;
    };
    '.alignMiddle': {
        display: string;
        alignItems: string;
    };
    '.mb': {
        marginBottom: string;
    };
    '.mr': {
        marginRight: string;
    };
    '.ml': {
        marginLeft: string;
    };
    '.mt': {
        marginTop: string;
    };
    '.col-2': {
        gridTemplateColumns: string;
        gap: string;
    };
    '.grid': {
        display: string;
        width: string;
        gap: string;
    };
    '.sidebar': {
        width: string;
    };
    '.main': {
        width: string;
    };
    '@media (min-width: 768px)': {
        '.container': {
            paddingLeft: string;
            paddingRight: string;
            width: string;
            maxWidth: string;
        };
        '.col-2': {
            display: string;
        };
        '.col-3': {
            display: string;
        };
        '.col-4': {
            display: string;
        };
        '.col-6': {
            display: string;
        };
        '.grid': {
            display: string;
        };
        '.sidebar': {
            width: string;
        };
        '.main': {
            width: string;
        };
    };
};
export default layoutsTailwind;
