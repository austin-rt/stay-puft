import React from 'react';
export interface Props {
    callback: () => void;
    focusCb?: () => void;
    blurCb?: () => void;
    content: React.ReactNode;
    id: string;
    position: 'bottom' | 'left' | 'right' | 'top';
    showQuestion?: boolean;
    showInfo?: boolean;
    theme: string;
    themeTooltip?: string;
    themeWrapper?: string;
    title: string | React.ReactNode;
    width: string;
    showOnHover?: boolean;
    buttonComponent?: React.ReactNode;
    iconColor?: string;
    ariaControls?: string;
}
declare const Tooltip: ({ callback, focusCb, blurCb, content, id, position, showQuestion, showInfo, showOnHover, theme, themeTooltip, themeWrapper, title, width, buttonComponent, iconColor, }: Props) => import("react/jsx-dev-runtime").JSX.Element;
export default Tooltip;
