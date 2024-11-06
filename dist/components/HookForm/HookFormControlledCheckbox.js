import React from 'react';
import { Controller } from 'react-hook-form';
import Checkbox from './HookFormCheckbox';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<ControlledCheckbox />` component?
 */
const HookFormControlledCheckbox = ({ checkTheme = '', control, disabled, error, id, inputTheme = '', name, onBlur, onChange, onFocus, optional, register, required, theme = '', title, titleTheme = '', validation, }) => (React.createElement(Controller, { name: name, control: control, render: ({ field }) => (React.createElement(Checkbox, Object.assign({ id: id, theme: theme, title: title, titleTheme: titleTheme, inputTheme: inputTheme, checkTheme: checkTheme, required: required, optional: optional, register: register, error: error, validation: validation, disabled: disabled }, field, { onChange: onChange, onBlur: onBlur, onFocus: onFocus }))) }));
export default HookFormControlledCheckbox;
//# sourceMappingURL=HookFormControlledCheckbox.js.map