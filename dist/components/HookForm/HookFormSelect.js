import React, { useRef } from 'react';
import InputError from '../Common/InputError';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import ReqOptIndicator from '../Common/ReqOptIndicator';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextInput />` component?
 */
const HookFormSelect = ({ disabled, error, formId, id, labelTheme, name, onBlur, onChange, onFocus, optional, options, register, selectTheme, theme, title, validation, }) => {
    var _a;
    const selectRef = useRef(null);
    const wrapperRef = useRef(null);
    return (React.createElement("section", { className: "relative" },
        React.createElement("div", { className: "w-full" },
            React.createElement("div", { ref: wrapperRef, className: `relative flex items-center hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark hover:bg-white z-99 ${theme} border group ${error !== '' ? 'border-_-states-error' : 'border-_-neutrals-400'}` },
                React.createElement("label", { className: `transition-all absolute left-2 leading-tight -top-2 peer-placeholder-shown:top-3 bg-white font-bold text-xs peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:text-[16px] group-focus-within:font-bold peer-focus-within:text-_-states-infoDark peer-focus-within:-top-2 peer-focus-within:font-bold peer-focus-within:text-xs ${title !== '' ? 'bg-white px-1' : ''} z-[999] ${labelTheme}`, htmlFor: id },
                    React.createElement("span", null, title),
                    React.createElement(ReqOptIndicator, { optional: optional })),
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
                            value: validation === 'requiredOnly' && !optional,
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