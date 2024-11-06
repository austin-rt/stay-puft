import React from 'react';
import InputError from '../slimer/InputError';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<Radio />` component?
 */
const HookFormRadio = ({ ariaControls, ariaExpanded = false, disabled, error, name, onBlur, onChange, onFocus, optional, options, register, required, showTitle = true, checkSpacing, theme, title, validation, verticalSpacing = 'gap-6', }) => (React.createElement("fieldset", { className: `flex flex-col ${verticalSpacing}` },
    React.createElement("legend", { className: `${showTitle ? 'block mb-2' : 'sr-only'}` },
        title,
        title && (React.createElement("span", null,
            required === true &&
                (optional === false || optional === undefined) && (React.createElement("sup", { className: `text-_-states-error font-bold` }, '*')),
            optional === true &&
                (required === false || required === undefined) && (React.createElement("span", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)'))))),
    options.map((option, index) => (React.createElement("label", { key: option.value, htmlFor: `${name}-option-${index}`, "aria-controls": ariaControls, "aria-expanded": ariaExpanded, className: `group flex w-full items-center cursor-pointer ${theme || ''}`, "data-test": "puft-checkbox-label", "data-c": "puft--HookFormRadio" },
        React.createElement("input", Object.assign({}, register(name, {
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
        }), { type: "radio", value: option.value, id: `${name}-option-${index}`, tabIndex: 0, className: "sr-only peer transition-all", onFocus: (e) => {
                if (onFocus)
                    onFocus(e);
            } })),
        React.createElement("span", { className: `mr-2 aspect-square flex justify-center items-center relative w-5 h-5 rounded-full transition-all border-2 border-white outline outline-2 outline-_-neutrals-500/40 peer-focus:ring-misc-selectedMedium/20 peer-focus:ring-offset-4 peer-focus:ring-1 peer-focus-visible:ring-misc-selectedMedium/20 peer-focus-visible:ring-offset-4 peer-focus-visible:ring-1 group-hover:outline-_-misc-selectedMedium group-hover:border-_-misc-selectedLight group-hover:bg-_-misc-selectedLight peer-checked:outline-_-misc-selectedDark peer-checked:bg-_-misc-selectedDark peer-checked:border-_-misc-selectedLight group-hover:peer-checked:bg-_-states-accent group-hover:peer-checked:outline-_-states-accent group-hover:peer-checked:border-white group-hover:peer-disabled:outline-_-neutrals-500/40 group-hover:peer-disabled:border-white group-hover:peer-disabled:bg-white peer-disabled:peer-checked:outline-_-neutrals-500/40 peer-disabled:peer-checked:bg-_-neutrals-500/40 group-hover:peer-disabled:peer-checked:bg-_-neutrals-500/40` }),
        React.createElement("span", { className: `grow ${checkSpacing || ''}` }, option.title)))),
    React.createElement(InputError, { error: error })));
export default HookFormRadio;
//# sourceMappingURL=HookFormRadio.js.map