"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_hook_form_1 = require("react-hook-form");
var Checkbox_1 = tslib_1.__importDefault(require("./Checkbox"));
var ControlledCheckbox = function (_a) {
    var id = _a.id, _b = _a.theme, theme = _b === void 0 ? '' : _b, title = _a.title, name = _a.name, _c = _a.titleTheme, titleTheme = _c === void 0 ? '' : _c, _d = _a.inputTheme, inputTheme = _d === void 0 ? '' : _d, _e = _a.checkTheme, checkTheme = _e === void 0 ? '' : _e, required = _a.required, optional = _a.optional, register = _a.register, criteriaMode = _a.criteriaMode, mode = _a.mode, reValidateMode = _a.reValidateMode, shouldFocusError = _a.shouldFocusError, shouldUnregister = _a.shouldUnregister, delayError = _a.delayError, error = _a.error, validation = _a.validation, control = _a.control, disabled = _a.disabled, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus;
    return (react_1["default"].createElement(react_hook_form_1.Controller, { name: name, control: control, render: function (_a) {
            var field = _a.field;
            return (react_1["default"].createElement(Checkbox_1["default"], tslib_1.__assign({ id: id, theme: theme, title: title, titleTheme: titleTheme, inputTheme: inputTheme, checkTheme: checkTheme, required: required, optional: optional, register: register, criteriaMode: criteriaMode, mode: mode, reValidateMode: reValidateMode, shouldFocusError: shouldFocusError, shouldUnregister: shouldUnregister, delayError: delayError, error: error, validation: validation, disabled: disabled }, field, { onChange: onChange, onBlur: onBlur, onFocus: onFocus })));
        } }));
};
exports["default"] = ControlledCheckbox;
//# sourceMappingURL=ControlledCheckbox.js.map