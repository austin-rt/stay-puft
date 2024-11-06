const commonSolid = `font-bold shadow-xl focus:outline-dashed focus:outline-1 focus:outline-black disabled:cursor-not-allowed text-white border-transparent`;
const commonGhost = `font-bold border-2 bg-transparent`;
export const button = {
    variant: {
        default: `${commonSolid} bg-_-likeNew-400 hover:bg-_-imperfect-400/70 active:bg-_-imperfect-400 active:border-_-likeNew-400 focus:bg-_-imperfect-400 disabled:bg-_-imperfect-400/20`,
        primary: `${commonSolid} bg-_-obi-dark hover:bg-_-obi-dark/70 active:bg-_-nib-400 active:border-_-obi-dark disabled:bg-_-obi-dark/20 `,
        secondary: `${commonSolid} bg-_-secondary-0 hover:bg-_-secondary-0/70 active:bg-_-secondary-900 active:border-_-secondary-0 disabled:bg-_-secondary-0/20`,
        success: `${commonSolid} bg-_-states-success hover:bg-_-states-success/70 active:bg-_-states-successDark active:border-_-states-success disabled:bg-_-states-success/20`,
        accent: `${commonSolid} bg-_-states-accent hover:bg-_-states-accent/70 active:bg-_-fair-200 active:border-_-states-accent disabled:bg-_-states-accent/20`,
        selected: `${commonSolid} bg-_-misc-selectedDark hover:bg-_-misc-selectedDark/70 active:bg-_-likeNew-400 active:border-_-misc-selectedDark disabled:bg-_-misc-selectedDark/20`,
        custom: '',
    },
    size: {
        xs: `text-xs py-2 px-5`,
        sm: `text-sm py-2 px-5`,
        md: `text-md py-2 px-5`,
        lg: `text-lg py-3 px-7`,
        xl: `text-xl py-4 px-8`,
    },
    border: {
        xs: 'border',
        sm: 'border',
        md: 'border',
        lg: 'border-2',
        xl: 'border-2',
    },
    ghostBorder: {
        xs: 'border-2',
        sm: 'border-2',
        md: 'border-2',
        lg: 'border-2',
        xl: 'border-4',
    },
    ghost: {
        default: `${commonGhost} border-_-imperfect-400 text-_-imperfect-400 disabled:border-_-imperfect-400/40 disabled:text-_-imperfect-400/40`,
        primary: `${commonGhost} border-_-obi-dark text-_-obi-dark disabled:border-_-obi-dark/20 disabled:text-_-obi-dark/20`,
        secondary: `${commonGhost} border-_-secondary-0 text-_-secondary-0 disabled:border-_-secondary-0/20 disabled:text-_-secondary-0/20`,
        success: `${commonGhost} border-_-states-success text-_-states-success disabled:border-_-states-success/20 disabled:text-_-states-success/20`,
        accent: `${commonGhost} border-_-states-accent text-_-states-accent disabled:border-_-states-accent/20 disabled:text-_-states-accent/20`,
        selected: `${commonGhost} border-_-misc-selectedDark text-_-misc-selectedDark disabled:border-_-misc-selected/20 disabled:text-_-misc-selected/20`,
        custom: '',
    },
};
//# sourceMappingURL=buttons.js.map