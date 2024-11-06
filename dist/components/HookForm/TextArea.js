"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var InputError_1 = tslib_1.__importDefault(require("./InputError"));
var react_1 = tslib_1.__importDefault(require("react"));
var toLowerCaseWithSpaces_1 = require("../utils/toLowerCaseWithSpaces");
var TextArea = function (_a) {
    var _b = _a.autoComplete, autoComplete = _b === void 0 ? '' : _b, _c = _a.autoCorrect, autoCorrect = _c === void 0 ? 'off' : _c, _d = _a.error, error = _d === void 0 ? '' : _d, _e = _a.name, name = _e === void 0 ? 'textAreaName' : _e, _f = _a.id, id = _f === void 0 ? 'textAreaId' : _f, inputTheme = _a.inputTheme, _g = _a.optional, optional = _g === void 0 ? false : _g, labelTheme = _a.labelTheme, placeholder = _a.placeholder, _h = _a.required, required = _h === void 0 ? false : _h, _j = _a.rows, rows = _j === void 0 ? 2 : _j, _k = _a.spellCheck, spellCheck = _k === void 0 ? false : _k, _l = _a.theme, theme = _l === void 0 ? 'border-_-neutrals-400 hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark' : _l, _m = _a.title, title = _m === void 0 ? 'TextArea Name' : _m, ariaDescribedby = _a.ariaDescribedby, register = _a.register, criteriaMode = _a.criteriaMode, mode = _a.mode, reValidateMode = _a.reValidateMode, shouldFocusError = _a.shouldFocusError, shouldUnregister = _a.shouldUnregister, delayError = _a.delayError, validation = _a.validation, disabled = _a.disabled, onChange = _a.onChange, onBlur = _a.onBlur, onKeyUp = _a.onKeyUp, onKeyDown = _a.onKeyDown, onFocus = _a.onFocus;
    return (react_1["default"].createElement("section", { "data-c": "puft--TextArea", className: "relative group" },
        react_1["default"].createElement("div", { className: "w-full" },
            react_1["default"].createElement("div", { className: "relative  hover:bg-white ".concat(theme, " border ").concat(error && error !== '' ? '!border-_-states-error' : null, " bg-white focus-within:drop-shadow-md") },
                react_1["default"].createElement("label", { className: "absolute leading-tight -top-2.5 left-4 justify-center bg-white px-1 z-[999] ".concat(labelTheme), htmlFor: id }, title && (react_1["default"].createElement("span", { className: "transition-all inline-block h-1 group-focus-within:font-bold group-focus-within:text-sm text-xs" },
                    title,
                    react_1["default"].createElement("span", null,
                        required === true &&
                            (optional === false || optional === undefined) && (react_1["default"].createElement("span", { className: "text-_-states-error font-bold text-[smaller] ml-0.5" }, '*')),
                        optional === true &&
                            (required === false || required === undefined) && (react_1["default"].createElement("span", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)')))))),
                react_1["default"].createElement("textarea", tslib_1.__assign({ autoCorrect: autoCorrect ? 'on' : 'off', autoComplete: autoComplete, className: "block bg-white active:border-none border-slate-300 h-12 p-2  focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ".concat(inputTheme), id: id, name: name, placeholder: placeholder, rows: rows, "aria-invalid": error !== '' ? true : undefined, "aria-describedby": ariaDescribedby, onKeyUp: function (e) {
                        return onKeyUp && onKeyUp(e);
                    }, onKeyDown: function (e) {
                        return onKeyDown && onKeyDown(e);
                    }, onFocus: function (e) {
                        return onFocus && onFocus(e);
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
                        onChange && onChange(e);
                    },
                    onBlur: function (e) {
                        onBlur && onBlur(e);
                    }
                }), { spellCheck: spellCheck })),
                react_1["default"].createElement("div", { className: "w-full absolute px-2 z-[9999]" },
                    react_1["default"].createElement(InputError_1["default"], { error: error }))))));
};
exports["default"] = TextArea;
//# sourceMappingURL=TextArea.js.map