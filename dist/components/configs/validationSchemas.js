"use strict";
exports.__esModule = true;
exports.validationSchemas = exports.passwordErrors = void 0;
var zod_1 = require("zod");
var poBoxRegex = /^ *((#\d+)|((box|bin)[-. \/\\]?\d+)|(.*p[ \.]? ?(o|0)[-. \/\\]? *-?((box|bin)|b|(#|n|num|number)?\d+))|(p(ost|ostal)? *(o(ff(ice)?)?)? *((box|bin)|b)? *(#|n|num|number)*\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(#|n|num|number)? *\d+|(#|n|num|number) *\d+)/i;
exports.passwordErrors = {
    short: '8 or more characters',
    special: '1 or more special characters',
    number: '1 or more numbers',
    empty: 'Please enter your password',
    sameAsCurrent: 'Cannot use current password',
    mustMatch: 'Passwords must match'
};
var password = zod_1.z.string().min(1, exports.passwordErrors.empty);
var registerPassword = zod_1.z
    .string()
    .min(8, exports.passwordErrors.short)
    .refine(function (val) { return /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(val); }, {
    message: exports.passwordErrors.special
})
    .refine(function (val) { return /\d/.test(val); }, {
    message: exports.passwordErrors.number
});
var requiredCheckbox = zod_1.z
    .boolean()
    .refine(function (val) { return val === true; }, 'This field is required');
var optionalCheckbox = zod_1.z.boolean().optional();
exports.validationSchemas = {
    loginPassword: password,
    currentPassword: password,
    registerPassword: registerPassword,
    newPassword: registerPassword,
    verifyPassword: zod_1.z.string().min(1, exports.passwordErrors.empty),
    email: zod_1.z
        .string()
        .min(1, 'Email is required')
        .email('Email should match the following format: abc@de.com'),
    firstName: zod_1.z.string().min(1, 'First name is required'),
    lastName: zod_1.z.string().min(1, 'Last name is required'),
    streetAddress: zod_1.z
        .string()
        .min(1, 'Street Address is required')
        .refine(function (val) { return poBoxRegex.test(val) === false; }, {
        message: "Sorry but we can't deliver to a P.O. Box address"
    }),
    streetAddress2: zod_1.z.string().nullish(),
    city: zod_1.z.string().min(1, 'City is required'),
    state: zod_1.z.string().refine(function (val) { return val.length === 2; }, {
        message: 'Please choose a state'
    }),
    phone: zod_1.z
        .string()
        .min(14, 'Please enter a valid phone number')
        .refine(function (val) { return /\(\d{3}\) \d{3}-\d{4}/.test(val); }, {
        message: 'Phone Number can only contain numbers'
    }),
    zipCode: zod_1.z
        .string()
        .min(1, 'Zip Code is required')
        .max(5, 'Please enter a valid zip code'),
    zipOrCity: zod_1.z.string().min(4, 'Please enter a valid zip code or city & state'),
    name: zod_1.z.string().min(1, 'Full Name is required'),
    message: zod_1.z.string().min(1, 'Message is required'),
    salesOrderNumber: zod_1.z.string().optional(),
    inquiryType: zod_1.z.string().min(1, 'Reason is required'),
    store: zod_1.z.string().min(1, 'Store Location is required'),
    captcha: zod_1.z.string().min(1, 'Please verify the Captcha'),
    requiredCheckbox: zod_1.z
        .boolean()
        .refine(function (val) { return val === true; }, 'This field is required'),
    smsOptIn: optionalCheckbox,
    returnTerms: requiredCheckbox,
    registerTerms: requiredCheckbox,
    emailSignup: optionalCheckbox,
    defaultShipping: optionalCheckbox,
    defaultBilling: optionalCheckbox,
    defaultDelivery: optionalCheckbox,
    honeypot: zod_1.z.string().max(0, 'Please leave this field blank')
};
//# sourceMappingURL=validationSchemas.js.map