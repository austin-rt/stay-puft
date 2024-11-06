export const boxShadowsTailwindInline = {
    none: 'shadow-[0_0_rgba(0,0,0,0)]',
    xs: 'shadow-[0_4px_8px_rgba(0,0,0,.1)]',
    sm: 'shadow-[0_6px_12px_rgba(0,0,0,.1)]',
    md: 'shadow-[0_8px_16px_rgba(0,0,0,.1)]',
    lg: 'shadow-[0_10px_20px_rgba(0,0,0,.1)]',
    xl: 'shadow-[0_12px_24px_rgba(0,0,0,.1)]',
    '2xl': 'shadow-[0_14px_28px_rgba(0,0,0,.1)]',
};
const boxToTailwindConfig = (boxShadowsObj) => {
    return Object.fromEntries(Object.entries(boxShadowsObj).map(([key, value]) => [
        key,
        `${value
            .replace(/shadow-\[/, '')
            .replace(/_/g, ' ')
            .replace(/\]/, ';')}`,
    ]));
};
export const boxShadows = boxToTailwindConfig(boxShadowsTailwindInline);
export const dropShadowsTailwindInline = {
    none: 'drop-shadow-[0_0_rgba(0,0,0,0)]',
    xs: 'drop-shadow-[0_4px_8px_rgba(0,0,0,.1)]',
    sm: 'drop-shadow-[0_6px_12px_rgba(0,0,0,.1)]',
    md: 'drop-shadow-[0_8px_16px_rgba(0,0,0,.1)]',
    lg: 'drop-shadow-[0_10px_20px_rgba(0,0,0,.1)]',
    xl: 'drop-shadow-[0_12px_24px_rgba(0,0,0,.1)]',
    '2xl': 'drop-shadow-[0_14px_28px_rgba(0,0,0,.1)]',
};
const dropToTailwindConfig = (dropShadowsObj) => {
    return Object.fromEntries(Object.entries(dropShadowsObj).map(([key, value]) => [
        key,
        `${value
            .replace(/drop-shadow-\[/, '')
            .replace(/_/g, ' ')
            .replace(/\]/, ';')}`,
    ]));
};
export const dropShadows = dropToTailwindConfig(dropShadowsTailwindInline);
//# sourceMappingURL=shadows.js.map