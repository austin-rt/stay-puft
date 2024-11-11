import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/HookForm/HookFormTextArea.tsx";
import InputError from '../Common/InputError';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import ReqOptIndicator from '../Common/ReqOptIndicator';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextArea />` component?
 */
const HookFormTextArea = ({ ariaDescribedby, autoComplete, autoCorrect, disabled, error, id, inputTheme, labelTheme, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, optional, placeholder, register, rows = 2, spellCheck = false, 
// setValueAs,
theme = 'border-_-neutrals-400 hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark', title, validation, }) => (_jsxDEV("section", Object.assign({ className: "relative group" }, { children: _jsxDEV("div", Object.assign({ className: "w-full" }, { children: _jsxDEV("div", Object.assign({ className: `relative  hover:bg-white ${theme} border ${error && error !== '' ? '!border-_-states-error' : null} bg-white focus-within:drop-shadow-md` }, { children: [_jsxDEV("label", Object.assign({ className: `transition-all absolute  bg-white leading-tight -top-2.5 left-2 justify-center z-[999] ${labelTheme}`, htmlFor: id }, { children: title && (_jsxDEV("span", Object.assign({ className: "transition-all inline-block h-1 font-bold text-xs text-md group-focus-within:text-_-misc-selectedDark" }, { children: [title, _jsxDEV(ReqOptIndicator, { optional: optional }, void 0, false, { fileName: _jsxFileName, lineNumber: 152, columnNumber: 15 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 149, columnNumber: 22 }, this)) }), void 0, false, { fileName: _jsxFileName, lineNumber: 145, columnNumber: 9 }, this), _jsxDEV("textarea", Object.assign({ autoCorrect: autoCorrect ? 'on' : 'off', autoComplete: autoComplete, className: `block bg-white active:border-none border-slate-300 h-12 p-2  focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ${inputTheme}`, id: id, name: name, placeholder: placeholder, rows: rows, "aria-invalid": error !== '' ? true : undefined, "aria-describedby": ariaDescribedby, onKeyUp: (e) => onKeyUp && onKeyUp(e), onKeyDown: (e) => onKeyDown && onKeyDown(e), onFocus: (e) => onFocus && onFocus(e) }, register(name, {
                    required: {
                        value: validation === 'requiredOnly' && !optional,
                        message: `Please include a ${toLowerCaseWithSpaces(name)}`,
                    },
                    disabled,
                    onChange: (e) => {
                        if (onChange)
                            onChange(e);
                    },
                    onBlur: (e) => {
                        if (onBlur)
                            onBlur(e);
                    },
                    // setValueAs: (value: any) => {
                    //   if (setValueAs) setValueAs(value);
                    // },
                }), { spellCheck: spellCheck }), void 0, false, { fileName: _jsxFileName, lineNumber: 156, columnNumber: 9 }, this), _jsxDEV("div", Object.assign({ className: "w-full absolute px-2 z-[9999]" }, { children: _jsxDEV(InputError, { error: error }, void 0, false, { fileName: _jsxFileName, lineNumber: 194, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 193, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 140, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 139, columnNumber: 5 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 137, columnNumber: 31 }, this));
export default HookFormTextArea;
//# sourceMappingURL=HookFormTextArea.js.map