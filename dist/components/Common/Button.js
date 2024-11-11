import React from 'react';
import { button } from '../configs/buttons';
const Button = ({ id = undefined, callback, ariaControls, ariaExpanded, disabled = false, loading = false, ghost = false, title = '', theme = '', rounded = false, size = 'md', variant = 'default', leadingIcon, trailingIcon, loadingText = 'Loading...', loadingIcon = 'fa-solid fa-circle-notch fa-spin', ariaLabel, type = 'button', srDesc = '', }) => {
    return (React.createElement("button", { id: id, type: type, disabled: loading || disabled, "aria-label": ariaLabel, "aria-controls": ariaControls, "aria-expanded": ariaExpanded, onClick: callback, className: `${rounded ? 'rounded-full' : 'rounded-md'} ${button.size[size]} ${disabled === true && loading !== true ? disabled : ''} ${ghost
            ? `${button.ghostBorder[size]} ${button.ghost[variant]}`
            : `${button.border[size]} ${button.variant[variant]}`} ${theme}` },
        srDesc && srDesc.length > 0 && React.createElement("span", { className: "sr-only" }, srDesc),
        leadingIcon && React.createElement("i", { className: `mr-2 ${leadingIcon}` }),
        loading ? loadingText : title || variant.toUpperCase(),
        trailingIcon && React.createElement("i", { className: `ml-2 ${trailingIcon}` }),
        loading === true && React.createElement("i", { className: loadingIcon })));
};
export default Button;
//# sourceMappingURL=Button.js.map