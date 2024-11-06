import React, { useRef } from 'react';
import InputError from '../slimer/InputError';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextInput />` component?
 */
const HookFormSelect = ({ disabled, error, formId, id, labelTheme, name, onBlur, onChange, onFocus, optional, options, register, required, selectTheme, theme, title, validation, }) => {
    var _a;
    const selectRef = useRef(null);
    const wrapperRef = useRef(null);
    return (React.createElement("section", { "data-c": "puft--Select", className: "relative" },
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { ref: wrapperRef, className: `relative transition-all border  bg-white rounded-md hover:border-_-misc-selectedMedium focus-within:border-_-misc-selectedDark group ${error ? 'border-_-states-error' : 'border-black'} ${theme}` },
                React.createElement("label", { className: `absolute leading-tight -top-2.5 left-4 justify-center ${title !== '' ? 'bg-white px-1' : ''} ${labelTheme}`, htmlFor: id },
                    React.createElement("span", { className: "transition-all inline-block h-1 group-hover:font-bold group-hover-within:text-sm text-xs" }, title),
                    React.createElement("span", null,
                        required === true &&
                            (optional === false || optional === undefined) && (React.createElement("span", { className: `text-_-states-error font-bold text-[smaller] ml-0.5` }, '*')),
                        optional === true &&
                            (required === false || required === undefined) && (React.createElement("span", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)')))),
                React.createElement("div", { className: `flex justify-between items-center bg-transparent h-11 px-2 text-_-neutrals-900 group-focus:drop-shadow-lg group-focus-within:text-black w-full ${selectTheme}` },
                    React.createElement("select", Object.assign({ ref: selectRef, id: `${formId}--${name}`, className: "h-full w-full bg-transparent appearance-none active:border-none focus:outline-none puft--select", style: {
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            appearance: 'none',
                            paddingLeft: '8px',
                        }, onFocus: (e) => {
                            if (onFocus)
                                onFocus(e);
                        } }, register(name, {
                        required: {
                            value: validation === 'requiredOnly' && required,
                            message: `Please choose a ${toLowerCaseWithSpaces(name)}`,
                        },
                        disabled,
                        onChange: (e) => {
                            if (onChange)
                                onChange(e);
                        },
                        onBlur: (e) => {
                            if (onBlur)
                                onBlur(e);
                        },
                    }), { "aria-invalid": error !== '' ? true : undefined, defaultValue: (_a = options[0]) === null || _a === void 0 ? void 0 : _a.value }), options.map((option) => (React.createElement("option", { key: option === null || option === void 0 ? void 0 : option.value, value: option === null || option === void 0 ? void 0 : option.value, disabled: option === null || option === void 0 ? void 0 : option.disabled }, option.title)))),
                    React.createElement("i", { className: "fa-solid fa-light fa-chevron-down text-black group-hover:text-_-misc-selectedMedium group-focus-within:text-_-misc-selectedDark" }))),
            React.createElement("div", { className: "w-full absolute px-2" },
                React.createElement(InputError, { error: error })))));
};
export default HookFormSelect;
//# sourceMappingURL=HookFormSelect.js.map