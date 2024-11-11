import React from 'react';
import InputError from '../Common/InputError';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import ReqOptIndicator from '../Common/ReqOptIndicator';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<Radio />` component?
 */
const HookFormRadio = ({ ariaControls, ariaExpanded = false, disabled, error, name, onBlur, onChange, onFocus, optional, options, register, showTitle = true, checkSpacing, theme, title, validation, verticalSpacing = 'gap-6', }) => (React.createElement("div", null,
    React.createElement("div", { className: `relative  hover:bg-white ${theme} border ${error && error !== ''
            ? '!border-_-states-error'
            : 'border-_-neutrals-400'} bg-white focus-within:drop-shadow-md px-4 pb-4` },
        React.createElement("fieldset", { className: `flex flex-col mt-6 ${verticalSpacing}` },
            React.createElement("legend", { className: `${showTitle
                    ? `transition-all absolute left-2 leading-tight -top-2 peer-placeholder-shown:top-3 bg-white font-bold text-xs peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:text-[16px] group-focus-within:font-bold peer-focus-within:text-_-states-infoDark peer-focus-within:-top-2 peer-focus-within:font-bold peer-focus-within:text-xs ${title !== '' ? 'bg-white px-1' : ''} z-[999]`
                    : 'sr-only'}` },
                title,
                title && React.createElement(ReqOptIndicator, { optional: optional })),
            options.map((option, index) => (React.createElement("label", { key: option.value, htmlFor: `${name}-option-${index}`, "aria-controls": ariaControls, "aria-expanded": ariaExpanded, className: `group flex w-full items-center cursor-pointer ${theme || ''}` },
                React.createElement("input", Object.assign({}, register(name, {
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
                }), { type: "radio", value: option.value, id: `${name}-option-${index}`, tabIndex: 0, className: "sr-only peer transition-all", onFocus: (e) => {
                        if (onFocus)
                            onFocus(e);
                    } })),
                React.createElement("span", { className: `mr-2 aspect-square flex justify-center items-center relative w-5 h-5 rounded-full transition-all border-2 border-white outline outline-2 outline-_-neutrals-500/40 peer-focus:ring-misc-selectedMedium/20 peer-focus:ring-offset-4 peer-focus:ring-1 peer-focus-visible:ring-misc-selectedMedium/20 peer-focus-visible:ring-offset-4 peer-focus-visible:ring-1 group-hover:outline-_-misc-selectedMedium group-hover:border-_-misc-selectedLight group-hover:bg-_-misc-selectedLight peer-checked:outline-_-misc-selectedDark peer-checked:bg-_-misc-selectedDark peer-checked:border-_-misc-selectedLight group-hover:peer-checked:bg-_-states-accent group-hover:peer-checked:outline-_-states-accent group-hover:peer-checked:border-white group-hover:peer-disabled:outline-_-neutrals-500/40 group-hover:peer-disabled:border-white group-hover:peer-disabled:bg-white peer-disabled:peer-checked:outline-_-neutrals-500/40 peer-disabled:peer-checked:bg-_-neutrals-500/40 group-hover:peer-disabled:peer-checked:bg-_-neutrals-500/40` }),
                React.createElement("span", { className: `grow ${checkSpacing || ''}` }, option.title)))))),
    React.createElement(InputError, { error: error })));
export default HookFormRadio;
//# sourceMappingURL=HookFormRadio.js.map