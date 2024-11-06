import React, { ReactElement, ReactNode } from 'react';
import { button } from '../configs/buttons';
export interface ButtonProps {
    id?: string | undefined;
    callback: any;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    title: ReactElement | ReactNode | string;
    rounded?: boolean;
    size?: keyof (typeof button)['size'];
    variant?: keyof (typeof button)['variant'];
    theme?: string;
    ariaControls?: string;
    ariaExpanded?: boolean;
    ariaLabel?: string;
    ghost?: boolean;
    leadingIcon?: string;
    trailingIcon?: string;
    loadingIcon?: string;
    type?: 'button' | 'submit' | 'reset';
    srDesc?: string;
}
declare const Button: ({ id, callback, ariaControls, ariaExpanded, disabled, loading, ghost, title, theme, rounded, size, variant, leadingIcon, trailingIcon, loadingText, loadingIcon, ariaLabel, type, srDesc, }: ButtonProps) => React.JSX.Element;
export default Button;
