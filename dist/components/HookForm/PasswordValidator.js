"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var validationSchemas_1 = require("../configs/validationSchemas");
var PasswordValidator = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    var errors = _a.errors, touchedFields = _a.touchedFields;
    var hasError = (errors === null || errors === void 0 ? void 0 : errors.newPassword) || (errors === null || errors === void 0 ? void 0 : errors.registerPassword);
    var isTouched = (touchedFields === null || touchedFields === void 0 ? void 0 : touchedFields.newPassword) === true ||
        (touchedFields === null || touchedFields === void 0 ? void 0 : touchedFields.registerPassword) === true;
    var tooShort = ((_c = (_b = errors === null || errors === void 0 ? void 0 : errors.registerPassword) === null || _b === void 0 ? void 0 : _b.types) === null || _c === void 0 ? void 0 : _c.too_small) ||
        ((_e = (_d = errors === null || errors === void 0 ? void 0 : errors.newPassword) === null || _d === void 0 ? void 0 : _d.types) === null || _e === void 0 ? void 0 : _e.too_small);
    var missingSpecialChar = (typeof ((_g = (_f = errors === null || errors === void 0 ? void 0 : errors.registerPassword) === null || _f === void 0 ? void 0 : _f.types) === null || _g === void 0 ? void 0 : _g.custom) !== 'boolean' &&
        ((_k = (_j = (_h = errors === null || errors === void 0 ? void 0 : errors.registerPassword) === null || _h === void 0 ? void 0 : _h.types) === null || _j === void 0 ? void 0 : _j.custom) === null || _k === void 0 ? void 0 : _k.includes(validationSchemas_1.passwordErrors.special))) ||
        (typeof ((_m = (_l = errors === null || errors === void 0 ? void 0 : errors.newPassword) === null || _l === void 0 ? void 0 : _l.types) === null || _m === void 0 ? void 0 : _m.custom) !== 'boolean' &&
            ((_q = (_p = (_o = errors === null || errors === void 0 ? void 0 : errors.newPassword) === null || _o === void 0 ? void 0 : _o.types) === null || _p === void 0 ? void 0 : _p.custom) === null || _q === void 0 ? void 0 : _q.includes(validationSchemas_1.passwordErrors.special)));
    var missingNum = (typeof ((_s = (_r = errors === null || errors === void 0 ? void 0 : errors.registerPassword) === null || _r === void 0 ? void 0 : _r.types) === null || _s === void 0 ? void 0 : _s.custom) !== 'boolean' &&
        ((_v = (_u = (_t = errors === null || errors === void 0 ? void 0 : errors.registerPassword) === null || _t === void 0 ? void 0 : _t.types) === null || _u === void 0 ? void 0 : _u.custom) === null || _v === void 0 ? void 0 : _v.includes(validationSchemas_1.passwordErrors.number))) ||
        (typeof ((_x = (_w = errors === null || errors === void 0 ? void 0 : errors.newPassword) === null || _w === void 0 ? void 0 : _w.types) === null || _x === void 0 ? void 0 : _x.custom) !== 'boolean' &&
            ((_0 = (_z = (_y = errors === null || errors === void 0 ? void 0 : errors.newPassword) === null || _y === void 0 ? void 0 : _y.types) === null || _z === void 0 ? void 0 : _z.custom) === null || _0 === void 0 ? void 0 : _0.includes(validationSchemas_1.passwordErrors.number)));
    var error = (react_1["default"].createElement("i", { className: "transition-all fa-sharp fa-regular fa-circle-xmark text-_-states-error", "aria-hidden": "true" }));
    var success = (react_1["default"].createElement("i", { className: "transition-all fa-sharp fa-regular fa-circle-check text-_-states-success", "aria-hidden": "true" }));
    return (react_1["default"].createElement("section", { id: "PasswordValidator", className: "bg-white -mt-1 border ".concat(hasError ? 'border-_-states-error' : 'border-_-neutrals-400', "  border-t-0 rounded-b-md p-3 text-xs") },
        react_1["default"].createElement("div", { className: "mb-2" },
            react_1["default"].createElement("strong", null, "Your password must contain:")),
        react_1["default"].createElement("ul", { className: "text-_-neutrals-700" },
            react_1["default"].createElement("li", null,
                isTouched && (tooShort ? error : success),
                "\u00A0 ",
                validationSchemas_1.passwordErrors.short),
            react_1["default"].createElement("li", null,
                isTouched && (missingSpecialChar ? error : success),
                "\u00A0 ",
                validationSchemas_1.passwordErrors.special),
            react_1["default"].createElement("li", null,
                isTouched && (missingNum ? error : success),
                "\u00A0 ",
                validationSchemas_1.passwordErrors.number))));
};
exports["default"] = PasswordValidator;
//# sourceMappingURL=PasswordValidator.js.map