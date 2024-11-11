import React from 'react';
import HookFormSelect from './HookFormSelect';
import { states } from '../configs/consts';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<StateDropdown />` component?
 */
const HookFormStateDropDown = ({ disabled, error, formId, labelTheme, name, onBlur, onChange, onFocus, optional, register, selectTheme, theme, title, validation, }) => {
    return (React.createElement("div", null,
        React.createElement(HookFormSelect, { disabled: disabled, error: error, formId: formId, labelTheme: labelTheme, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, optional: optional, options: states, register: register, selectTheme: selectTheme, theme: theme, title: title || 'State', validation: validation })));
};
export default HookFormStateDropDown;
//# sourceMappingURL=HookFormStateDropDown.js.map