"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var InputError_1 = tslib_1.__importDefault(require("./InputError"));
var react_1 = tslib_1.__importStar(require("react"));
var toLowerCaseWithSpaces_1 = require("../utils/toLowerCaseWithSpaces");
var Select = function (_a) {
    var _b;
    var _c = _a.options, options = _c === void 0 ? [
        { title: 'Select here', value: '0' },
        { title: 'some heres', value: '1' },
    ] : _c, _d = _a.title, title = _d === void 0 ? 'Title' : _d, error = _a.error, _e = _a.required, required = _e === void 0 ? true : _e, _f = _a.optional, optional = _f === void 0 ? false : _f, _g = _a.id, id = _g === void 0 ? '' : _g, theme = _a.theme, labelTheme = _a.labelTheme, selectTheme = _a.selectTheme, register = _a.register, criteriaMode = _a.criteriaMode, mode = _a.mode, reValidateMode = _a.reValidateMode, shouldFocusError = _a.shouldFocusError, shouldUnregister = _a.shouldUnregister, delayError = _a.delayError, name = _a.name, validation = _a.validation, disabled = _a.disabled, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus;
    var selectRef = (0, react_1.useRef)(null);
    var wrapperRef = (0, react_1.useRef)(null);
    return (react_1["default"].createElement("section", { "data-c": "puft--Select", className: "relative" },
        react_1["default"].createElement("div", { className: "w-full" },
            react_1["default"].createElement("div", { ref: wrapperRef, className: "relative transition-all border  bg-white rounded-md hover:border-_-misc-selectedMedium focus-within:border-_-misc-selectedDark group ".concat(error ? 'border-_-states-error' : 'border-black', " ").concat(theme) },
                react_1["default"].createElement("label", { className: "absolute leading-tight -top-2.5 left-4 justify-center ".concat(title !== '' ? 'bg-white px-1' : '', " ").concat(labelTheme), htmlFor: id },
                    react_1["default"].createElement("span", { className: "transition-all inline-block h-1 group-hover:font-bold group-hover-within:text-sm text-xs" },
                        title,
                        react_1["default"].createElement("span", null,
                            required === true &&
                                (optional === false || optional === undefined) && (react_1["default"].createElement("span", { className: "text-_-states-error font-bold text-[smaller] ml-0.5" }, '*')),
                            optional === true &&
                                (required === false || required === undefined) && (react_1["default"].createElement("span", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)'))))),
                react_1["default"].createElement("div", { className: "flex justify-between items-center bg-transparent h-11 px-2 text-_-neutrals-900 group-focus:drop-shadow-lg group-focus-within:text-black w-full ".concat(selectTheme) },
                    react_1["default"].createElement("select", tslib_1.__assign({ ref: selectRef, id: id, className: "h-full w-full bg-transparent appearance-none active:border-none focus:outline-none puft--select", style: {
                            WebkitAppearance: 'none',
                            MozAppearance: 'none',
                            appearance: 'none',
                            paddingLeft: '8px'
                        }, onFocus: function (e) {
                            onFocus && onFocus(e);
                        } }, register(name, {
                        required: {
                            value: validation === 'requiredOnly' && required,
                            message: "Please choose a ".concat((0, toLowerCaseWithSpaces_1.toLowerCaseWithSpaces)(name))
                        },
                        criteriaMode: criteriaMode,
                        mode: mode,
                        reValidateMode: reValidateMode,
                        shouldFocusError: shouldFocusError,
                        shouldUnregister: shouldUnregister,
                        delayError: delayError,
                        disabled: disabled,
                        onChange: function (e) {
                            return onChange && onChange(e);
                        },
                        onBlur: function (e) {
                            onBlur && onBlur(e);
                        }
                    }), { "aria-invalid": error !== '' ? true : undefined, defaultValue: (_b = options[0]) === null || _b === void 0 ? void 0 : _b.value }), options.map(function (option) { return (react_1["default"].createElement("option", { key: option === null || option === void 0 ? void 0 : option.value, value: option === null || option === void 0 ? void 0 : option.value, disabled: option === null || option === void 0 ? void 0 : option.disabled }, option.title)); })),
                    react_1["default"].createElement("i", { className: "fa-solid fa-light fa-chevron-down text-black group-hover:text-_-misc-selectedMedium group-focus-within:text-_-misc-selectedDark" }))),
            react_1["default"].createElement("div", { className: "w-full absolute px-2" },
                react_1["default"].createElement(InputError_1["default"], { error: error })))));
};
exports["default"] = Select;
//# sourceMappingURL=Select.js.map