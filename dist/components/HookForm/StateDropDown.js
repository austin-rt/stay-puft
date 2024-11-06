"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var Select_1 = tslib_1.__importDefault(require("./Select"));
var states = [
    {
        title: '---Select a  State ---',
        value: '',
        disabled: true
    },
    {
        title: 'AE',
        value: 'AE'
    },
    {
        title: 'AL',
        value: 'AL'
    },
    {
        title: 'AP',
        value: 'AP'
    },
    {
        title: 'AR',
        value: 'AR'
    },
    {
        title: 'AZ',
        value: 'AZ'
    },
    {
        title: 'CA',
        value: 'CA'
    },
    {
        title: 'CO',
        value: 'CO'
    },
    {
        title: 'CT',
        value: 'CT'
    },
    {
        title: 'DC',
        value: 'DC'
    },
    {
        title: 'DE',
        value: 'DE'
    },
    {
        title: 'FL',
        value: 'FL'
    },
    {
        title: 'GA',
        value: 'GA'
    },
    {
        title: 'HI',
        value: 'HI'
    },
    {
        title: 'IA',
        value: 'IA'
    },
    {
        title: 'ID',
        value: 'ID'
    },
    {
        title: 'IL',
        value: 'IL'
    },
    {
        title: 'IN',
        value: 'IN'
    },
    {
        title: 'KS',
        value: 'KS'
    },
    {
        title: 'KY',
        value: 'KY'
    },
    {
        title: 'LA',
        value: 'LA'
    },
    {
        title: 'MA',
        value: 'MA'
    },
    {
        title: 'MD',
        value: 'MD'
    },
    {
        title: 'ME',
        value: 'ME'
    },
    {
        title: 'MI',
        value: 'MI'
    },
    {
        title: 'MN',
        value: 'MN'
    },
    {
        title: 'MO',
        value: 'MO'
    },
    {
        title: 'MS',
        value: 'MS'
    },
    {
        title: 'MT',
        value: 'MT'
    },
    {
        title: 'NC',
        value: 'NC'
    },
    {
        title: 'ND',
        value: 'ND'
    },
    {
        title: 'NE',
        value: 'NE'
    },
    {
        title: 'NH',
        value: 'NH'
    },
    {
        title: 'NJ',
        value: 'NJ'
    },
    {
        title: 'NM',
        value: 'NM'
    },
    {
        title: 'NV',
        value: 'NV'
    },
    {
        title: 'NY',
        value: 'NY'
    },
    {
        title: 'OH',
        value: 'OH'
    },
    {
        title: 'OK',
        value: 'OK'
    },
    {
        title: 'OR',
        value: 'OR'
    },
    {
        title: 'PA',
        value: 'PA'
    },
    {
        title: 'PR',
        value: 'PR'
    },
    {
        title: 'RI',
        value: 'RI'
    },
    {
        title: 'SC',
        value: 'SC'
    },
    {
        title: 'SD',
        value: 'SD'
    },
    {
        title: 'TN',
        value: 'TN'
    },
    {
        title: 'TX',
        value: 'TX'
    },
    {
        title: 'UT',
        value: 'UT'
    },
    {
        title: 'VA',
        value: 'VA'
    },
    {
        title: 'VI',
        value: 'VI'
    },
    {
        title: 'VT',
        value: 'VT'
    },
    {
        title: 'WA',
        value: 'WA'
    },
    {
        title: 'WV',
        value: 'WV'
    },
    {
        title: 'WI',
        value: 'WI'
    },
    {
        title: 'WY',
        value: 'WY'
    },
];
var StateDropDown = function (_a) {
    var register = _a.register, error = _a.error, theme = _a.theme, selectTheme = _a.selectTheme, labelTheme = _a.labelTheme, required = _a.required, optional = _a.optional, validation = _a.validation, criteriaMode = _a.criteriaMode, mode = _a.mode, reValidateMode = _a.reValidateMode, shouldFocusError = _a.shouldFocusError, shouldUnregister = _a.shouldUnregister, delayError = _a.delayError, disabled = _a.disabled, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Select_1["default"], { register: register, options: states, error: error, id: "StateDropDown", name: 'state', title: "State", theme: theme, selectTheme: selectTheme, labelTheme: labelTheme, required: required, optional: optional, validation: validation, criteriaMode: criteriaMode, mode: mode, reValidateMode: reValidateMode, shouldFocusError: shouldFocusError, shouldUnregister: shouldUnregister, delayError: delayError, disabled: disabled, onChange: onChange, onBlur: onBlur, onFocus: onFocus })));
};
exports["default"] = StateDropDown;
//# sourceMappingURL=StateDropDown.js.map