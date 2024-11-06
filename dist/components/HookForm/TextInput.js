"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var nwc_slimer_1 = require("nwc-slimer");
var nwc_slimer_2 = require("nwc-slimer");
var toLowerCaseWithSpaces_1 = require("../utils/toLowerCaseWithSpaces");
var validationSchemas_1 = require("../configs/validationSchemas");
var TextInput = function (_a) {
    var ariaDescribedby = _a.ariaDescribedby, arialabel = _a.arialabel, autoComplete = _a.autoComplete, _b = _a.autoCorrect, autoCorrect = _b === void 0 ? false : _b, _c = _a.baseTheme, baseTheme = _c === void 0 ? '' : _c, buttonRounded = _a.buttonRounded, buttonSize = _a.buttonSize, buttonTheme = _a.buttonTheme, _d = _a.buttonVariant, buttonVariant = _d === void 0 ? 'default' : _d, criteriaMode = _a.criteriaMode, delayError = _a.delayError, disabled = _a.disabled, _f = _a.error, error = _f === void 0 ? '' : _f, _g = _a.id, id = _g === void 0 ? '' : _g, inputTheme = _a.inputTheme, labelTheme = _a.labelTheme, mode = _a.mode, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, onKeyDown = _a.onKeyDown, onKeyUp = _a.onKeyUp, optional = _a.optional, placeholder = _a.placeholder, register = _a.register, required = _a.required, _h = _a.resetButton, resetButton = _h === void 0 ? false : _h, resetCallback = _a.resetCallback, reValidateMode = _a.reValidateMode, shouldFocusError = _a.shouldFocusError, shouldUnregister = _a.shouldUnregister, _j = _a.showPasswordButton, showPasswordButton = _j === void 0 ? true : _j, _k = _a.size, size = _k === void 0 ? 50 : _k, theme = _a.theme, _l = _a.title, title = _l === void 0 ? 'Input Name' : _l, submitIcon = _a.submitIcon, _m = _a.type, type = _m === void 0 ? 'text' : _m, validation = _a.validation;
    var _o = (0, react_1.useState)(type.toLowerCase().includes('password') ? 'password' : type), inputType = _o[0], inputTypeSetter = _o[1];
    var passwordErrorValues = Object.values(validationSchemas_1.passwordErrors).filter(function (value) { return value !== validationSchemas_1.passwordErrors.sameAsCurrent; });
    return (react_1["default"].createElement("section", { "data-c": "puft--TextInput", className: "".concat(baseTheme, " relative ").concat(name === 'honeypot' && 'sr-only') },
        react_1["default"].createElement("div", { className: "w-full" },
            react_1["default"].createElement("div", { className: "relative flex items-center hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark hover:bg-white z-99 ".concat(theme, " border group ").concat(error !== '' ? 'border-_-states-error' : 'border-_-neutrals-400') },
                react_1["default"].createElement("label", { className: "absolute leading-tight -top-2.5 left-4 justify-center ".concat(title !== '' ? 'bg-white px-1' : '', " z-[999] ").concat(labelTheme), htmlFor: id },
                    react_1["default"].createElement("span", { className: "transition-all inline-block h-1 group-focus-within:font-bold group-focus-within:text-sm text-xs" }, title),
                    react_1["default"].createElement("span", null,
                        required === true &&
                            (optional === false || optional === undefined) && (react_1["default"].createElement("span", { className: "text-_-states-error font-bold text-[smaller] ml-0.5" }, '*')),
                        optional === true &&
                            (required === false || required === undefined) && (react_1["default"].createElement("span", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)')))),
                react_1["default"].createElement("input", tslib_1.__assign({ autoComplete: autoComplete, autoCorrect: autoCorrect ? 'on' : 'off', className: "inputClass placeholder:text-_-neutrals-900 bg-white active:border-none border-slate-300 h-11 px-2 focus:drop-shadow-lg focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ".concat(inputTheme), id: id, placeholder: placeholder, size: size, type: inputType, "aria-invalid": error !== '' ? true : undefined, "aria-label": arialabel, "aria-describedby": ariaDescribedby, onFocus: function (e) {
                        onFocus && onFocus(e);
                    }, onKeyUp: function (e) {
                        onKeyUp && onKeyUp(e);
                    }, onKeyDown: function (e) {
                        onKeyDown && onKeyDown(e);
                    } }, register(name, {
                    required: {
                        value: validation === 'requiredOnly' && required,
                        message: "Please include a ".concat((0, toLowerCaseWithSpaces_1.toLowerCaseWithSpaces)(name))
                    },
                    criteriaMode: criteriaMode,
                    mode: mode,
                    reValidateMode: reValidateMode,
                    shouldFocusError: shouldFocusError,
                    shouldUnregister: shouldUnregister,
                    delayError: delayError,
                    disabled: disabled,
                    onChange: function (e) {
                        if (type === 'tel') {
                            e.target.value = (0, nwc_slimer_2.UseMaskPhone)(e.target.value);
                        }
                        onChange && onChange(e);
                    },
                    onBlur: function (e) {
                        onBlur && onBlur(e);
                    }
                }))),
                react_1["default"].createElement("div", { className: "flex" },
                    type.toLowerCase().includes('password') && showPasswordButton && (react_1["default"].createElement(nwc_slimer_1.Button, { disabled: disabled, variant: buttonVariant, ghost: true, callback: function () {
                            inputTypeSetter(inputType === 'password' ? 'text' : 'password');
                        }, ariaControls: id, ariaExpanded: false, title: "".concat(inputType === 'password' ? 'Show' : 'Hide'), rounded: buttonRounded, size: buttonSize, theme: "bg-transparent hover:bg-trasparent text-xs text-_-neutrals-900 border-0 border-none ".concat(buttonTheme) })),
                    !type.toLowerCase().includes('password') && submitIcon && (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(nwc_slimer_1.Button, { disabled: disabled, variant: "custom", theme: "group border-none", type: "submit", title: react_1["default"].createElement("i", { className: "group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" }), trailingIcon: submitIcon }))),
                    !type.toLowerCase().includes('password') &&
                        resetButton &&
                        !submitIcon && (react_1["default"].createElement(nwc_slimer_1.Button, { disabled: disabled, variant: "custom", theme: "group border-none", type: "reset", callback: function (_e) { return resetCallback && resetCallback(name); }, title: react_1["default"].createElement("i", { className: "fa-solid fa-sharp fa-rotate-left group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" }) })))),
            react_1["default"].createElement("div", { className: "w-full absolute px-2 z-[99]" },
                react_1["default"].createElement(nwc_slimer_1.InputError, { error: (name === 'registerPassword' || name === 'newPassword') &&
                        passwordErrorValues.includes(error)
                        ? ''
                        : error })))));
};
exports["default"] = TextInput;
//# sourceMappingURL=TextInput.js.map