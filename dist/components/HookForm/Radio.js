"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var InputError_1 = tslib_1.__importDefault(require("./InputError"));
var react_1 = tslib_1.__importDefault(require("react"));
var toLowerCaseWithSpaces_1 = require("../utils/toLowerCaseWithSpaces");
var Radio = function (_a) {
    var name = _a.name, theme = _a.theme, spacing = _a.spacing, _b = _a.ariaExpanded, ariaExpanded = _b === void 0 ? false : _b, ariaControls = _a.ariaControls, register = _a.register, criteriaMode = _a.criteriaMode, mode = _a.mode, reValidateMode = _a.reValidateMode, shouldFocusError = _a.shouldFocusError, shouldUnregister = _a.shouldUnregister, delayError = _a.delayError, options = _a.options, error = _a.error, _c = _a.verticalSpacing, verticalSpacing = _c === void 0 ? 'gap-6' : _c, title = _a.title, _d = _a.showTitle, showTitle = _d === void 0 ? true : _d, optional = _a.optional, required = _a.required, validation = _a.validation, disabled = _a.disabled, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus;
    return (react_1["default"].createElement("fieldset", { className: "flex flex-col ".concat(verticalSpacing) },
        react_1["default"].createElement("legend", { className: "".concat(showTitle ? 'block mb-2' : 'sr-only') },
            title,
            title && (react_1["default"].createElement("span", null,
                required === true &&
                    (optional === false || optional === undefined) && (react_1["default"].createElement("sup", { className: "text-_-states-error font-bold" }, '*')),
                optional === true &&
                    (required === false || required === undefined) && (react_1["default"].createElement("span", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)'))))),
        options.map(function (option, index) { return (react_1["default"].createElement("label", { key: option.value, htmlFor: "".concat(name, "-option-").concat(index), "aria-controls": ariaControls, "aria-expanded": ariaExpanded, className: "group flex w-full items-center cursor-pointer ".concat(theme ? theme : ''), "data-test": "puft-checkbox-label", "data-c": "puft--Radio" },
            react_1["default"].createElement("input", tslib_1.__assign({}, register(name, {
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
            }), { type: "radio", value: option.value, id: "".concat(name, "-option-").concat(index), tabIndex: 0, className: "sr-only peer transition-all", onFocus: function (e) {
                    onFocus && onFocus(e);
                } })),
            react_1["default"].createElement("span", { className: "mr-2 aspect-square flex justify-center items-center relative w-5 h-5 rounded-full transition-all border-2 border-white outline outline-2 outline-_-neutrals-500/40 peer-focus:ring-misc-selectedMedium/20 peer-focus:ring-offset-4 peer-focus:ring-1 peer-focus-visible:ring-misc-selectedMedium/20 peer-focus-visible:ring-offset-4 peer-focus-visible:ring-1 group-hover:outline-_-misc-selectedMedium group-hover:border-_-misc-selectedLight group-hover:bg-_-misc-selectedLight peer-checked:outline-_-misc-selectedDark peer-checked:bg-_-misc-selectedDark peer-checked:border-_-misc-selectedLight group-hover:peer-checked:bg-_-states-accent group-hover:peer-checked:outline-_-states-accent group-hover:peer-checked:border-white group-hover:peer-disabled:outline-_-neutrals-500/40 group-hover:peer-disabled:border-white group-hover:peer-disabled:bg-white peer-disabled:peer-checked:outline-_-neutrals-500/40 peer-disabled:peer-checked:bg-_-neutrals-500/40 group-hover:peer-disabled:peer-checked:bg-_-neutrals-500/40" }),
            react_1["default"].createElement("span", { className: "grow ".concat(spacing ? spacing : '') }, option.title))); }),
        react_1["default"].createElement(InputError_1["default"], { error: error })));
};
exports["default"] = Radio;
//# sourceMappingURL=Radio.js.map