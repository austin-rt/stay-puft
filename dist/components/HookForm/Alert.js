"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var alerts_1 = tslib_1.__importDefault(require("../configs/alerts"));
var Alert = function (_a) {
    var _b = _a.callback, callback = _b === void 0 ? function () { } : _b, children = _a.children, _c = _a.variant, variant = _c === void 0 ? 'default' : _c, id = _a.id, icon = _a.icon, close = _a.close, _d = _a.theme, theme = _d === void 0 ? 'w-full text-left' : _d;
    if (children === '' || !children)
        return react_1["default"].createElement(react_1["default"].Fragment, null);
    return (react_1["default"].createElement("section", { id: id, "data-c": "slmr--Alert", className: "flex justify-between py-2.5 px-4 border-l-4 font-semibold ".concat(alerts_1["default"][variant], " ").concat(theme) },
        icon && (react_1["default"].createElement("div", null,
            react_1["default"].createElement("i", { className: "".concat(icon, " pr-3") }))),
        react_1["default"].createElement("div", { className: "flex-grow", role: "alert" }, children),
        close && (react_1["default"].createElement("button", { onClick: callback },
            react_1["default"].createElement("i", { className: "fa-light fa-xmark" })))));
};
exports["default"] = Alert;
//# sourceMappingURL=Alert.js.map