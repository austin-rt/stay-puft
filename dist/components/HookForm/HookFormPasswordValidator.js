import React from 'react';
import { numberRegex, specialCharRegex } from './HookFormValidationSchemas';
import { errorMessages } from './HookFormValidationSchemas';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<PasswordValidator />` component?
 */
const HookFormPasswordValidator = ({ dirtyFields, errors, fieldName, password, }) => {
    const isTouched = dirtyFields[fieldName];
    const hasError = errors[fieldName];
    const tooShort = password ? password.length < 8 : true;
    const missingSpecialChar = !specialCharRegex.test(password || '');
    const missingNum = !numberRegex.test(password || '');
    const isInvalid = (React.createElement("i", { className: "transition-all fa-sharp fa-regular fa-circle-xmark text-_-states-error", "aria-hidden": "true" }));
    const isValid = (React.createElement("i", { className: "transition-all fa-sharp fa-solid fa-circle-check text-_-states-success", "aria-hidden": "true" }));
    const isNotTouched = (React.createElement("i", { className: "transition-all fa-sharp fa-regular fa-circle-question text-_-neutrals-400", "aria-hidden": "true" }));
    return (React.createElement("section", { id: "PasswordValidator", className: `bg-white -mt-1 border ${hasError ? 'border-_-states-error' : 'border-_-neutrals-400'}  border-t-0 rounded-b-md p-3 text-xs text-left` },
        React.createElement("div", { className: "mb-2" },
            React.createElement("strong", null, "Remember, your password should contain:")),
        React.createElement("ul", { className: "text-_-neutrals-700" },
            React.createElement("li", null,
                isTouched ? (tooShort ? isInvalid : isValid) : isNotTouched,
                "\u00A0 ",
                errorMessages.password.short),
            React.createElement("li", null,
                isTouched
                    ? missingSpecialChar
                        ? isInvalid
                        : isValid
                    : isNotTouched,
                "\u00A0 ",
                errorMessages.password.special),
            React.createElement("li", null,
                isTouched ? (missingNum ? isInvalid : isValid) : isNotTouched,
                "\u00A0 ",
                errorMessages.password.number))));
};
export default HookFormPasswordValidator;
//# sourceMappingURL=HookFormPasswordValidator.js.map