import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/HookForm/HookFormTextInput.tsx";
import { useState, } from 'react';
import Button from '../Common/Button';
import InputError from '../Common/InputError';
import UseMaskPhone from '../utils/maskPhone';
import { errorMessages, passwordsWithValidator } from '../configs/consts';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import ReqOptIndicator from '../Common/ReqOptIndicator';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextInput />` component?
 */
const HookFormTextInput = ({ ariaDescribedby, arialabel, autoComplete, autoCorrect = false, baseTheme = '', buttonRounded, buttonSize, buttonTheme, buttonVariant = 'default', disabled, error = '', id = '', inputTheme, labelTheme, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, optional, placeholder, register, resetButton = false, resetCallback, 
// setValueAs,
showPasswordButton = true, size = 50, submitIcon, theme, title = '', type = 'text', validation, criteriaMode, }) => {
    var _a, _b, _c, _d, _f, _g, _h;
    const [inputType, inputTypeSetter] = useState(((((_a = type === null || type === void 0 ? void 0 : type.toLowerCase()) === null || _a === void 0 ? void 0 : _a.includes('password')) ||
        ((_b = name === null || name === void 0 ? void 0 : name.toLowerCase()) === null || _b === void 0 ? void 0 : _b.includes('password'))) &&
        'password') ||
        ((((_c = type === null || type === void 0 ? void 0 : type.toLowerCase()) === null || _c === void 0 ? void 0 : _c.includes('number')) ||
            ((_d = name === null || name === void 0 ? void 0 : name.toLowerCase()) === null || _d === void 0 ? void 0 : _d.includes('number')) ||
            (name === null || name === void 0 ? void 0 : name.toLowerCase()) === 'zipcode' ||
            ((_f = name === null || name === void 0 ? void 0 : name.toLowerCase()) === null || _f === void 0 ? void 0 : _f.includes('phone'))) &&
            'tel') ||
        ((((_g = name === null || name === void 0 ? void 0 : name.toLowerCase()) === null || _g === void 0 ? void 0 : _g.includes('email')) ||
            ((_h = type === null || type === void 0 ? void 0 : type.toLowerCase()) === null || _h === void 0 ? void 0 : _h.includes('email'))) &&
            'email') ||
        type);
    const passwordErrorValues = Object.values(errorMessages.password).filter((value) => value !== errorMessages.password.sameAsCurrent);
    return (_jsxDEV("section", Object.assign({ className: `${baseTheme} relative ${name === 'honeypot' && 'sr-only'}` }, { children: _jsxDEV("div", Object.assign({ className: "w-full" }, { children: [_jsxDEV("div", Object.assign({ className: `relative flex items-center hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark hover:bg-white z-99 ${theme} border group ${error !== '' ? 'border-_-states-error' : 'border-_-neutrals-400'}` }, { children: [_jsxDEV("input", Object.assign({ autoComplete: autoComplete, autoCorrect: autoCorrect ? 'on' : 'off', className: `peer placeholder:text-_-neutrals-900 bg-white active:border-none border-slate-300 h-11 px-2 focus:drop-shadow-lg focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ${inputTheme}`, id: id, placeholder: placeholder, size: size, type: inputType, "aria-invalid": error !== '' ? true : undefined, "aria-label": arialabel, "aria-describedby": ariaDescribedby, onFocus: (e) => {
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
                                value: validation === 'requiredOnly' && !optional,
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
                        })), void 0, false, { fileName: _jsxFileName, lineNumber: 128, columnNumber: 11 }, this), _jsxDEV("label", Object.assign({ className: `transition-all absolute left-2 leading-tight -top-2 peer-placeholder-shown:top-3 bg-white font-bold text-xs peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:text-[16px] group-focus-within:font-bold peer-focus-within:text-_-states-infoDark peer-focus-within:-top-2 peer-focus-within:font-bold peer-focus-within:text-xs ${title !== '' ? 'bg-white px-1' : ''} z-[999] ${labelTheme}`, htmlFor: id }, { children: [_jsxDEV("span", { children: title }, void 0, false, { fileName: _jsxFileName, lineNumber: 179, columnNumber: 13 }, this), _jsxDEV(ReqOptIndicator, { optional: optional }, void 0, false, { fileName: _jsxFileName, lineNumber: 180, columnNumber: 13 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 173, columnNumber: 11 }, this), _jsxDEV("div", Object.assign({ className: "flex" }, { children: [type.toLowerCase().includes('password') && showPasswordButton && (_jsxDEV(Button, { disabled: disabled, variant: buttonVariant, ghost: true, callback: () => {
                                        inputTypeSetter(inputType === 'password' ? 'text' : 'password');
                                    }, ariaControls: id, ariaExpanded: false, title: inputType === 'password' ? (_jsxDEV("span", { children: [_jsxDEV("i", { className: "fa-solid fa-eye text-xl mr-0.5" }, void 0, false, { fileName: _jsxFileName, lineNumber: 198, columnNumber: 23 }, this), _jsxDEV("span", Object.assign({ className: "sr-only" }, { children: "Show Password" }), void 0, false, { fileName: _jsxFileName, lineNumber: 199, columnNumber: 23 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 196, columnNumber: 47 }, this)) : (_jsxDEV("span", { children: [_jsxDEV("i", { className: "fa-solid fa-eye-slash text-xl" }, void 0, false, { fileName: _jsxFileName, lineNumber: 203, columnNumber: 23 }, this), _jsxDEV("span", Object.assign({ className: "sr-only" }, { children: "Hide Password" }), void 0, false, { fileName: _jsxFileName, lineNumber: 204, columnNumber: 23 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 201, columnNumber: 24 }, this)), rounded: buttonRounded, size: buttonSize, theme: `bg-transparent hover:bg-trasparent text-xs text-_-neutrals-900 border-0 border-none ${buttonTheme}` }, void 0, false, { fileName: _jsxFileName, lineNumber: 183, columnNumber: 80 }, this)), !type.toLowerCase().includes('password') && submitIcon && (_jsxDEV(_Fragment, { children: _jsxDEV(Button, { disabled: disabled, variant: "custom", theme: "group border-none", type: "submit", title: _jsxDEV("i", { className: "group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" }, void 0, false, { fileName: _jsxFileName, lineNumber: 222, columnNumber: 26 }, this), trailingIcon: submitIcon }, void 0, false, { fileName: _jsxFileName, lineNumber: 217, columnNumber: 17 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 213, columnNumber: 73 }, this)), !type.toLowerCase().includes('password') &&
                                    resetButton &&
                                    !submitIcon && (_jsxDEV(Button, { disabled: disabled, variant: "custom", theme: "group border-none", type: "reset", callback: (_e) => resetCallback && resetCallback(name), title: _jsxDEV("i", { className: "fa-solid fa-sharp fa-rotate-left group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" }, void 0, false, { fileName: _jsxFileName, lineNumber: 238, columnNumber: 26 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 231, columnNumber: 31 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 182, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 123, columnNumber: 9 }, this), _jsxDEV("div", Object.assign({ className: "w-full absolute px-2 z-[99]" }, { children: _jsxDEV(InputError, { error: passwordsWithValidator.includes(name) &&
                            passwordErrorValues.includes(error)
                            ? ''
                            : error }, void 0, false, { fileName: _jsxFileName, lineNumber: 246, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 245, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 122, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 118, columnNumber: 11 }, this));
};
export default HookFormTextInput;
//# sourceMappingURL=HookFormTextInput.js.map