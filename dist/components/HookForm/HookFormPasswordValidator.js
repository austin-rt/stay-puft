import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/HookForm/HookFormPasswordValidator.tsx";
import { numberRegex, specialCharRegex, } from '../configs/HookFormValidationSchemas';
import { errorMessages } from '../configs/consts';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<PasswordValidator />` component?
 */
const HookFormPasswordValidator = ({ dirtyFields, errors, fieldName, password, }) => {
    const isTouched = dirtyFields[fieldName];
    const hasError = errors[fieldName];
    const tooShort = password ? password.length < 8 : true;
    const missingSpecialChar = !specialCharRegex.test(password || '');
    const missingNum = !numberRegex.test(password || '');
    const isInvalid = (_jsxDEV("i", { className: "transition-all fa-sharp fa-regular fa-circle-xmark text-_-states-error", "aria-hidden": "true" }, void 0, false, { fileName: _jsxFileName, lineNumber: 44, columnNumber: 22 }, this));
    const isValid = (_jsxDEV("i", { className: "transition-all fa-sharp fa-solid fa-circle-check text-_-states-success", "aria-hidden": "true" }, void 0, false, { fileName: _jsxFileName, lineNumber: 51, columnNumber: 20 }, this));
    const isNotTouched = (_jsxDEV("i", { className: "transition-all fa-sharp fa-regular fa-circle-question text-_-neutrals-400", "aria-hidden": "true" }, void 0, false, { fileName: _jsxFileName, lineNumber: 58, columnNumber: 25 }, this));
    return (_jsxDEV("section", Object.assign({ id: "PasswordValidator", className: `bg-white -mt-1 border ${hasError ? 'border-_-states-error' : 'border-_-neutrals-400'}  border-t-0 rounded-b-md p-3 text-xs text-left` }, { children: [_jsxDEV("div", Object.assign({ className: "mb-2" }, { children: _jsxDEV("strong", { children: "Remember, your password should contain:" }, void 0, false, { fileName: _jsxFileName, lineNumber: 73, columnNumber: 9 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 72, columnNumber: 7 }, this), _jsxDEV("ul", Object.assign({ className: "text-_-neutrals-700" }, { children: [_jsxDEV("li", { children: [isTouched ? (tooShort ? isInvalid : isValid) : isNotTouched, "\u00A0 ", errorMessages.password.short] }, void 0, true, { fileName: _jsxFileName, lineNumber: 76, columnNumber: 9 }, this), _jsxDEV("li", { children: [isTouched
                                ? missingSpecialChar
                                    ? isInvalid
                                    : isValid
                                : isNotTouched, "\u00A0 ", errorMessages.password.special] }, void 0, true, { fileName: _jsxFileName, lineNumber: 80, columnNumber: 9 }, this), _jsxDEV("li", { children: [isTouched ? (missingNum ? isInvalid : isValid) : isNotTouched, "\u00A0 ", errorMessages.password.number] }, void 0, true, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 75, columnNumber: 7 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 65, columnNumber: 11 }, this));
};
export default HookFormPasswordValidator;
//# sourceMappingURL=HookFormPasswordValidator.js.map