"use strict";
exports.__esModule = true;
var UseMaskPhone = function (phone) {
    var x = phone
        .toString()
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    if (x) {
        var phone_1 = !x[2]
            ? x[1]
            : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        return phone_1;
    }
    else {
        return 'invalid phone number';
    }
};
exports["default"] = UseMaskPhone;
//# sourceMappingURL=maskPhone.js.map