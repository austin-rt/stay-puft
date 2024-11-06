"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var InputError = function (_a) {
    var _b = _a.error, error = _b === void 0 ? '' : _b, _c = _a.theme, theme = _c === void 0 ? '' : _c, _d = _a.inputId, inputId = _d === void 0 ? '' : _d;
    if (!error || error === '')
        return react_1["default"].createElement("span", { "data-id": "puft--InputError--empty", className: "hidden" });
    return (react_1["default"].createElement("div", { className: "flex justify-center" },
        react_1["default"].createElement("span", { "data-c": "puft--InputError", className: "bg-_-states-error  w-full first:box-shadow-md inline -bottom-6 text-white text-xs px-5 py-1 drop-shadow-md rounded-b  ".concat(theme) },
            react_1["default"].createElement("span", { "aria-describedby": inputId, role: "alert" }, " ".concat(error)))));
};
exports["default"] = InputError;
//# sourceMappingURL=InputError.js.map