import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/HookForm/HookFormCheckbox.tsx";
import InputError from '../Common/InputError';
import ReqOptIndicator from '../Common/ReqOptIndicator';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<Checkbox />` component?
 */
const HookFormCheckbox = ({ checkTheme = '', disabled, error, id, inputTheme = '', name, onBlur, onChange, onFocus, optional = false, register, theme = '', title, titleTheme = '', validation, }) => (_jsxDEV(_Fragment, { children: [_jsxDEV("label", Object.assign({ htmlFor: id, className: `flex items-center text-xs group rounded-md py-2 px-2 cursor-pointer border ${error
                ? 'border-_-states-error bg-_-states-errorLight hover:border-_-misc-selectedMedium hover:bg-white'
                : 'border-transparent'} ${theme}` }, { children: [_jsxDEV("input", Object.assign({}, register(name, {
                    required: {
                        value: validation === 'requiredOnly' && !optional,
                        message: 'Please accept',
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
                }), { className: "sr-only peer", type: "checkbox", "aria-invalid": error !== '' ? true : undefined, id: id, onFocus: (e) => {
                        if (onFocus)
                            onFocus(e);
                    } }), void 0, false, { fileName: _jsxFileName, lineNumber: 105, columnNumber: 7 }, this), _jsxDEV("div", Object.assign({ className: `relative flex justify-center w-6 h-6 border-2 ${error
                        ? 'border-_-states-error bg-_-states-errorLight text-_-states-errorLight'
                        : 'border-gray-400 bg-_-nib-legacyText text-white'} peer-focus:outline-black peer-focus:outline-dashed peer-focus:outline-1 peer-focus-visible:outline-black peer-focus-visible:outline-dashed peer-focus-visible:outline-1 peer-checked:bg-_-misc-selectedMedium peer-checked:border-_-misc-selectedDark group-hover:border-_-misc-selectedMedium group-hover:text-_-misc-selectedLight group-hover:bg-_-misc-selectedLight group-hover:peer-checked:text-_-states-accent group-hover:peer-checked:border-_-states-accent group-hover:peer-checked:bg-_-states-accentLight group-hover:peer-disabled:text-opacity-0 group-hover:peer-checked:peer-disabled:text-opacity-100 group-hover:peer-checked:peer-disabled:text-_-imperfect-400/20 group-hover:peer-disabled:bg-_-imperfect-400/20 group-hover:peer-disabled:border-_-imperfect-400/20 peer-disabled:bg-_-imperfect-400/20 peer-disabled:border-_-imperfect-400/20 peer-disabled:text-opacity-0 peer-checked:peer-disabled:text-opacity-100 peer-checked:peer-disabled:text-_-imperfect-400/20 ${inputTheme}` }, { children: _jsxDEV("div", { className: `fa fa-check p-1 aspect-square ${checkTheme}` }, void 0, false, { fileName: _jsxFileName, lineNumber: 134, columnNumber: 9 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 127, columnNumber: 7 }, this), title && (_jsxDEV("span", Object.assign({ className: `peer-disabled:text-_-imperfect-400/40 group-hover:peer-disabled:text-_-imperfect-400/40 group-hover:peer-checked:peer-disabled:text-_-imperfect-400/40 pl-3 ${titleTheme}` }, { children: [title, _jsxDEV(ReqOptIndicator, { optional: optional }, void 0, false, { fileName: _jsxFileName, lineNumber: 141, columnNumber: 11 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 136, columnNumber: 18 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 97, columnNumber: 5 }, this), error && _jsxDEV(InputError, { theme: "sr-only", error: error }, void 0, false, { fileName: _jsxFileName, lineNumber: 145, columnNumber: 14 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 95, columnNumber: 31 }, this));
export default HookFormCheckbox;
//# sourceMappingURL=HookFormCheckbox.js.map