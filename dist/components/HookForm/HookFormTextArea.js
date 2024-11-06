import React from 'react';
import InputError from '../slimer/InputError';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextArea />` component?
 */
const HookFormTextArea = ({ ariaDescribedby, autoComplete, autoCorrect, disabled, error, id, inputTheme, labelTheme, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, optional, placeholder, register, required, rows = 2, spellCheck = false, 
// setValueAs,
theme = 'border-_-neutrals-400 hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark', title, validation, }) => (React.createElement("section", { "data-c": "puft--HookFormTextArea", className: "relative group" },
    React.createElement("div", { className: "w-full" },
        React.createElement("div", { className: `relative  hover:bg-white ${theme} border ${error && error !== '' ? '!border-_-states-error' : null} bg-white focus-within:drop-shadow-md` },
            React.createElement("label", { className: `transition-all absolute  bg-white leading-tight -top-2.5 left-2 justify-center z-[999] ${labelTheme}`, htmlFor: id }, title && (React.createElement("span", { className: "transition-all inline-block h-1 font-bold text-xs text-md group-focus-within:text-_-misc-selectedDark" },
                title,
                React.createElement("span", null,
                    required === true &&
                        (optional === false || optional === undefined) && (React.createElement("sup", { className: `text-_-states-error font-bold text-[smaller] ml-0.5` }, '*')),
                    optional === true &&
                        (required === false || required === undefined) && (React.createElement("sup", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)')))))),
            React.createElement("textarea", Object.assign({ autoCorrect: autoCorrect ? 'on' : 'off', autoComplete: autoComplete, className: `block bg-white active:border-none border-slate-300 h-12 p-2  focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ${inputTheme}`, id: id, name: name, placeholder: placeholder, rows: rows, "aria-invalid": error !== '' ? true : undefined, "aria-describedby": ariaDescribedby, onKeyUp: (e) => onKeyUp && onKeyUp(e), onKeyDown: (e) => onKeyDown && onKeyDown(e), onFocus: (e) => onFocus && onFocus(e) }, register(name, {
                required: {
                    value: validation === 'requiredOnly' && required,
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
            }), { spellCheck: spellCheck })),
            React.createElement("div", { className: "w-full absolute px-2 z-[9999]" },
                React.createElement(InputError, { error: error }))))));
export default HookFormTextArea;
//# sourceMappingURL=HookFormTextArea.js.map