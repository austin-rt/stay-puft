import React, { useState, } from 'react';
import Button from '../slimer/Button';
import InputError from '../slimer/InputError';
import UseMaskPhone from '../utils/maskPhone';
import { errorMessages, passwordsWithValidator, } from './HookFormValidationSchemas';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextInput />` component?
 */
const HookFormTextInput = ({ ariaDescribedby, arialabel, autoComplete, autoCorrect = false, baseTheme = '', buttonRounded, buttonSize, buttonTheme, buttonVariant = 'default', disabled, error = '', id = '', inputTheme, labelTheme, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, optional, placeholder, register, required, resetButton = false, resetCallback, 
// setValueAs,
showPasswordButton = true, size = 50, submitIcon, theme, title = '', type = 'text', validation, criteriaMode, }) => {
    const [inputType, inputTypeSetter] = useState(((type.toLowerCase().includes('password') ||
        name.toLowerCase().includes('password')) &&
        'password') ||
        ((type.toLowerCase().includes('number') ||
            name.toLowerCase().includes('number') ||
            name.toLowerCase() === 'zipcode' ||
            name.toLowerCase().includes('phone')) &&
            'tel') ||
        ((name.toLowerCase().includes('email') ||
            type.toLowerCase().includes('email')) &&
            'email') ||
        type);
    const passwordErrorValues = Object.values(errorMessages.password).filter((value) => value !== errorMessages.password.sameAsCurrent);
    return (React.createElement("section", { "data-c": "puft--HookFormTextInput", className: `${baseTheme} relative ${name === 'honeypot' && 'sr-only'}` },
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { className: `relative flex items-center hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark hover:bg-white z-99 ${theme} border group ${error !== '' ? 'border-_-states-error' : 'border-_-neutrals-400'}` },
                React.createElement("input", Object.assign({ autoComplete: autoComplete, autoCorrect: autoCorrect ? 'on' : 'off', className: `peer inputClass placeholder:text-_-neutrals-900 bg-white active:border-none border-slate-300 h-11 px-2 focus:drop-shadow-lg focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ${inputTheme}`, id: id, placeholder: placeholder, size: size, type: inputType, "aria-invalid": error !== '' ? true : undefined, "aria-label": arialabel, "aria-describedby": ariaDescribedby, onFocus: (e) => {
                        if (onFocus)
                            onFocus(e);
                    }, onKeyUp: (e) => {
                        if (onKeyUp)
                            onKeyUp(e);
                    }, onKeyDown: (e) => {
                        if (onKeyDown)
                            onKeyDown(e);
                    } }, register(name, {
                    required: {
                        value: validation === 'requiredOnly' && required,
                        message: `Please include a ${toLowerCaseWithSpaces(name)}`,
                    },
                    disabled,
                    onChange: (e) => {
                        if (name.toLowerCase().includes('phone')) {
                            e.target.value = UseMaskPhone(e.target.value);
                        }
                        if (name.toLowerCase() === 'zipcode') {
                            e.target.value = e.target.value.replace(/\D/g, '');
                            if (e.target.value.length > 5) {
                                e.target.value = e.target.value.substring(0, 5);
                            }
                        }
                        if (onChange)
                            onChange(e);
                    },
                    onBlur: (e) => {
                        if (onBlur)
                            onBlur(e);
                    },
                    // setValueAs,
                    criteriaMode,
                }))),
                React.createElement("label", { className: `transition-all absolute left-2 leading-tight -top-2 peer-placeholder-shown:top-3 bg-white font-bold text-xs peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:text-[16px] group-focus-within:font-bold peer-focus-within:text-_-states-infoDark peer-focus-within:-top-2 peer-focus-within:font-bold peer-focus-within:text-xs ${title !== '' ? 'bg-white px-1' : ''} z-[999] ${labelTheme}`, htmlFor: id },
                    React.createElement("span", null, title),
                    React.createElement("span", null,
                        required === true &&
                            (optional === false || optional === undefined) && (React.createElement("sup", { className: `text-_-states-error font-bold text-xs ml-0.5` }, '*')),
                        optional === true &&
                            (required === false || required === undefined) && (React.createElement("sup", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)')))),
                React.createElement("div", { className: "flex" },
                    type.toLowerCase().includes('password') && showPasswordButton && (React.createElement(Button, { disabled: disabled, variant: buttonVariant, ghost: true, callback: () => {
                            inputTypeSetter(inputType === 'password' ? 'text' : 'password');
                        }, ariaControls: id, ariaExpanded: false, title: `${inputType === 'password' ? 'Show' : 'Hide'}`, rounded: buttonRounded, size: buttonSize, theme: `bg-transparent hover:bg-trasparent text-xs text-_-neutrals-900 border-0 border-none ${buttonTheme}` })),
                    !type.toLowerCase().includes('password') && submitIcon && (React.createElement(React.Fragment, null,
                        React.createElement(Button, { disabled: disabled, variant: "custom", theme: "group border-none", type: "submit", title: React.createElement("i", { className: "group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" }), trailingIcon: submitIcon }))),
                    !type.toLowerCase().includes('password') &&
                        resetButton &&
                        !submitIcon && (React.createElement(Button, { disabled: disabled, variant: "custom", theme: "group border-none", type: "reset", callback: (_e) => resetCallback && resetCallback(name), title: React.createElement("i", { className: "fa-solid fa-sharp fa-rotate-left group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" }) })))),
            React.createElement("div", { className: "w-full absolute px-2 z-[99]" },
                React.createElement(InputError, { error: passwordsWithValidator.includes(name) &&
                        passwordErrorValues.includes(error)
                        ? ''
                        : error })))));
};
export default HookFormTextInput;
//# sourceMappingURL=HookFormTextInput.js.map