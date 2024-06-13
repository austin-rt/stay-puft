"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var UsePasswordValidator = function (_a) {
    var password = _a.password, _b = _a.length, length = _b === void 0 ? 6 : _b, _c = _a.shouldHaveNumber, shouldHaveNumber = _c === void 0 ? true : _c, _d = _a.shouldHaveCapital, shouldHaveCapital = _d === void 0 ? true : _d, _e = _a.invalidChars, invalidChars = _e === void 0 ? '?!' : _e, _f = _a.shouldHaveSpecialChars, shouldHaveSpecialChars = _f === void 0 ? true : _f;
    var result = {
        error: false,
        message: "Password is valid"
    };
    if (!password)
        return result;
    // test length
    if (password.length >= length) {
        for (var loop = 0; loop < password.length; loop += 1) {
            // cannot have spaces
            if (password.charCodeAt(loop) === 32) {
                // does not, throw an error
                result = {
                    error: true,
                    message: "Spaces are not allowed"
                };
            }
        }
    }
    else {
        // does not, throw an error
        result = {
            error: true,
            message: "Your password must be at least ".concat(length, " characters long")
        };
    }
    // test if it should have a number
    if (shouldHaveNumber === true && !/\d/.test(password)) {
        // does not, throw an error
        result = {
            error: true,
            message: "Passwords must have a number"
        };
    }
    // test if there are  any invalid characters
    if (invalidChars.length > 0) {
        for (var loop = 0; loop < password.length; loop += 1) {
            if (invalidChars.indexOf(password.charAt(loop)) !== -1) {
                // has invalid char, throw error
                result = {
                    error: true,
                    message: "Password cannot contain ".concat(invalidChars)
                };
            }
        }
    }
    // test if it has a capital letter
    if (shouldHaveCapital === true && !/[A-Z]/.test(password)) {
        // does not, throw an error
        result = {
            error: true,
            message: "Password must have a capital letter"
        };
    }
    // test if it has a special character
    if (shouldHaveSpecialChars === true &&
        !/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password)) {
        // does not, throw an error
        result = {
            error: true,
            message: "Password must have a special character"
        };
    }
    return tslib_1.__assign({}, result);
};
exports["default"] = UsePasswordValidator;
//# sourceMappingURL=passwordValidator.js.map