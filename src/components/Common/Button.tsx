import React, { ReactElement, ReactNode } from 'react';
import { button } from '../configs/buttons';

export interface ButtonProps {
  id?: string | undefined;
  callback?: any;
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

const Button = ({
  id = undefined,
  callback,
  ariaControls,
  ariaExpanded,
  disabled = false,
  loading = false,
  ghost = false,
  title = '',
  theme = '',
  rounded = false,
  size = 'md',
  variant = 'default',
  leadingIcon,
  trailingIcon,
  loadingText = 'Loading...',
  loadingIcon = 'fa-solid fa-circle-notch fa-spin',
  ariaLabel,
  type = 'button',
  srDesc = '',
}: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      disabled={loading || disabled}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      onClick={callback}
      className={`${rounded ? 'rounded-full' : 'rounded-md'} ${
        button.size[size]
      } ${disabled === true && loading !== true ? disabled : ''} ${
        ghost
          ? `${button.ghostBorder[size]} ${button.ghost[variant]}`
          : `${button.border[size]} ${button.variant[variant]}`
      } ${theme}`}
    >
      {srDesc && srDesc.length > 0 && <span className="sr-only">{srDesc}</span>}
      {leadingIcon && <i className={`mr-2 ${leadingIcon}`} />}
      {loading ? loadingText : title || variant.toUpperCase()}
      {trailingIcon && <i className={`ml-2 ${trailingIcon}`} />}
      {loading === true && <i className={loadingIcon} />}
    </button>
  );
};

export default Button;
