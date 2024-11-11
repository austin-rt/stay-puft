import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/HookForm/HookFormSelect.tsx";
import { useRef } from 'react';
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
    return (_jsxDEV("section", Object.assign({ className: "relative" }, { children: _jsxDEV("div", Object.assign({ className: "w-full" }, { children: [_jsxDEV("div", Object.assign({ ref: wrapperRef, className: `relative flex items-center hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark hover:bg-white z-99 ${theme} border group ${error !== '' ? 'border-_-states-error' : 'border-_-neutrals-400'}` }, { children: [_jsxDEV("label", Object.assign({ className: `transition-all absolute left-2 leading-tight -top-2 peer-placeholder-shown:top-3 bg-white font-bold text-xs peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:text-[16px] group-focus-within:font-bold peer-focus-within:text-_-states-infoDark peer-focus-within:-top-2 peer-focus-within:font-bold peer-focus-within:text-xs ${title !== '' ? 'bg-white px-1' : ''} z-[999] ${labelTheme}`, htmlFor: id }, { children: [_jsxDEV("span", { children: title }, void 0, false, { fileName: _jsxFileName, lineNumber: 120, columnNumber: 13 }, this), _jsxDEV(ReqOptIndicator, { optional: optional }, void 0, false, { fileName: _jsxFileName, lineNumber: 121, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 114, columnNumber: 11 }, this), _jsxDEV("div", Object.assign({ className: `flex justify-between items-center bg-transparent h-11 px-2 text-_-neutrals-900 group-focus:drop-shadow-lg group-focus-within:text-black w-full ${selectTheme}` }, { children: [_jsxDEV("select", Object.assign({ ref: selectRef, id: `${formId}--${name}`, className: "h-full w-full bg-transparent appearance-none active:border-none focus:outline-none puft--select", style: {
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
                                }), { "aria-invalid": error !== '' ? true : undefined, defaultValue: (_a = options[0]) === null || _a === void 0 ? void 0 : _a.value }, { children: options.map((option) => (_jsxDEV("option", Object.assign({ value: option === null || option === void 0 ? void 0 : option.value, disabled: option === null || option === void 0 ? void 0 : option.disabled }, { children: option.title }), option === null || option === void 0 ? void 0 : option.value, false, { fileName: _jsxFileName, lineNumber: 155, columnNumber: 41 }, this))) }), void 0, false, { fileName: _jsxFileName, lineNumber: 126, columnNumber: 13 }, this), _jsxDEV("i", { className: "fa-solid fa-light fa-chevron-down text-black group-hover:text-_-misc-selectedMedium group-focus-within:text-_-misc-selectedDark" }, void 0, false, { fileName: _jsxFileName, lineNumber: 165, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 123, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 108, columnNumber: 9 }, this), _jsxDEV("div", Object.assign({ className: "w-full absolute px-2" }, { children: _jsxDEV(InputError, { error: error }, void 0, false, { fileName: _jsxFileName, lineNumber: 169, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 168, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 107, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 105, columnNumber: 11 }, this));
};
export default HookFormSelect;
//# sourceMappingURL=HookFormSelect.js.map