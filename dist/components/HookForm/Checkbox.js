"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var InputError_1 = tslib_1.__importDefault(require("./InputError"));
var react_1 = tslib_1.__importDefault(require("react"));
var Checkbox = function (_a) {
    var _b = _a.checkTheme, checkTheme = _b === void 0 ? '' : _b, 
    // controlled,
    criteriaMode = _a.criteriaMode, _c = _a.dataAttr, dataAttr = _c === void 0 ? '' : _c, delayError = _a.delayError, disabled = _a.disabled, error = _a.error, id = _a.id, _d = _a.inputTheme, inputTheme = _d === void 0 ? '' : _d, mode = _a.mode, name = _a.name, onBlur = _a.onBlur, onChange = _a.onChange, onFocus = _a.onFocus, optional = _a.optional, register = _a.register, required = _a.required, reValidateMode = _a.reValidateMode, shouldFocusError = _a.shouldFocusError, shouldUnregister = _a.shouldUnregister, _e = _a.theme, theme = _e === void 0 ? '' : _e, title = _a.title, _f = _a.titleTheme, titleTheme = _f === void 0 ? '' : _f, validation = _a.validation;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("label", { htmlFor: id, className: "flex items-center text-xs group rounded-md px-4 py-2 cursor-pointer border ".concat(error
                ? 'border-_-states-error bg-_-states-errorLight hover:border-_-misc-selectedMedium hover:bg-white'
                : 'border-transparent', " ").concat(theme), "data-c": "puft--Checkbox" },
            react_1["default"].createElement("input", tslib_1.__assign({}, register(name, {
                required: {
                    value: validation === 'requiredOnly' && required,
                    message: 'Please accept'
                },
                criteriaMode: criteriaMode,
                mode: mode,
                reValidateMode: reValidateMode,
                shouldFocusError: shouldFocusError,
                shouldUnregister: shouldUnregister,
                delayError: delayError,
                disabled: disabled,
                onChange: function (e) {
                    onChange && onChange(e);
                },
                onBlur: function (e) {
                    onBlur && onBlur(e);
                }
            }), { className: "sr-only peer", "data-attr": dataAttr, type: "checkbox", "aria-invalid": error !== '' ? true : undefined, id: id, onFocus: function (e) {
                    onFocus && onFocus(e);
                } })),
            react_1["default"].createElement("div", { className: "relative flex justify-center w-6 h-6 border-2 ".concat(error
                    ? 'border-_-states-error bg-_-states-errorLight text-_-states-errorLight'
                    : 'border-gray-400 bg-_-nib-legacyText text-white', "    peer-focus:outline-black peer-focus:outline-dashed peer-focus:outline-1 peer-focus-visible:outline-black peer-focus-visible:outline-dashed peer-focus-visible:outline-1 peer-checked:bg-_-misc-selectedMedium peer-checked:border-_-misc-selectedDark group-hover:border-_-misc-selectedMedium group-hover:text-_-misc-selectedLight group-hover:bg-_-misc-selectedLight group-hover:peer-checked:text-_-states-accent group-hover:peer-checked:border-_-states-accent group-hover:peer-checked:bg-_-states-accentLight group-hover:peer-disabled:text-opacity-0 group-hover:peer-checked:peer-disabled:text-opacity-100 group-hover:peer-checked:peer-disabled:text-_-imperfect-400/20 group-hover:peer-disabled:bg-_-imperfect-400/20 group-hover:peer-disabled:border-_-imperfect-400/20 peer-disabled:bg-_-imperfect-400/20 peer-disabled:border-_-imperfect-400/20 peer-disabled:text-opacity-0 peer-checked:peer-disabled:text-opacity-100 peer-checked:peer-disabled:text-_-imperfect-400/20 ").concat(inputTheme) },
                react_1["default"].createElement("div", { className: "fa fa-check p-1 aspect-square ".concat(checkTheme) })),
            title && (react_1["default"].createElement("span", { className: "peer-disabled:text-_-imperfect-400/40 group-hover:peer-disabled:text-_-imperfect-400/40 group-hover:peer-checked:peer-disabled:text-_-imperfect-400/40 pl-3 ".concat(titleTheme) },
                title,
                react_1["default"].createElement("span", null,
                    required === true &&
                        (optional === false || optional === undefined) && (react_1["default"].createElement("span", { className: "text-_-states-error font-bold text-[smaller] ml-0.5" }, '*')),
                    optional === true &&
                        (required === false || required === undefined) && (react_1["default"].createElement("span", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)')))))),
        error && react_1["default"].createElement(InputError_1["default"], { theme: "sr-only", error: error })));
};
exports["default"] = Checkbox;
//# sourceMappingURL=Checkbox.js.map