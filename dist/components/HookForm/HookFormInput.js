import React from 'react';
// import HookFormControlledCheckbox from './HookFormControlledCheckbox';
import HookFormCheckbox from './HookFormCheckbox';
import HookFormPasswordValidator from './HookFormPasswordValidator';
import HookFormRadio from './HookFormRadio';
import HookFormSelect from './HookFormSelect';
import StateDropDown from './HookFormStateDropDown';
import HookFormTextArea from './HookFormTextArea';
import HookFormTextInput from './HookFormTextInput';
import { passwordsWithValidator } from '../configs/consts';
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly.
 */
const HookFormInput = ({ dirtyFields, errors, field, formId, handleOnChange, register, resetField, spacing, 
// touchedFields,
validation, watch, }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const mapAutoComplete = (name) => {
        const autoCompleteMap = {
            addressLine1: 'address-line1',
            addressLine2: 'address-line2',
            billingAddressLine1: 'address-line1',
            captcha: 'off',
            city: 'address-level2',
            currentPassword: 'current-password',
            defaultBilling: 'off',
            defaultShipping: 'off',
            email: 'email',
            firstName: 'given-name',
            defaultDelivery: 'off',
            lastName: 'family-name',
            emailSignup: 'off',
            honeypot: 'off',
            inquiryType: 'off',
            loginPassword: 'current-password',
            message: 'off',
            newPassword: 'new-password',
            name: 'name',
            optionalEmail: 'email',
            phone: 'tel-national',
            state: 'address-level1',
            store: 'off',
            registerPassword: 'new-password',
            salesOrderNumber: 'off',
            sameAsBilling: 'off',
            smsOptIn: 'off',
            validStates: 'off',
            zipCode: 'postal-code',
            verifyPassword: 'new-password',
            zipOrCity: 'off',
        };
        return autoCompleteMap[name];
    };
    // set/evaluate some default values
    const fld = Object.assign(Object.assign({}, field), { type: field.type ||
            (field.name.toLowerCase().includes('password') && 'password') ||
            ((field.name.toLowerCase().includes('phone') ||
                field.name.toLowerCase().includes('zipCode')) &&
                'tel') ||
            (field.name.toLowerCase().includes('state') && 'state') ||
            (field.name.toLowerCase().includes('email') && 'email') ||
            (field.name.toLowerCase().includes('terms') && 'checkbox') ||
            'text', autoComplete: mapAutoComplete(field.name) || 'off', optional: (field === null || field === void 0 ? void 0 : field.optional) || (field === null || field === void 0 ? void 0 : field.isToggle) || false });
    const throwError = (message) => {
        throw new Error(message);
    };
    const password = fld.name.toLowerCase().includes('password')
        ? watch(fld.name)
        : undefined;
    const nonTextInputTypes = [
        'checkbox',
        'radio',
        'button',
        'range',
        'textarea',
        'select',
        'state',
        'captcha',
    ];
    if (fld.name === 'captcha' || (fld === null || fld === void 0 ? void 0 : fld.type) === 'captcha')
        return React.createElement(React.Fragment, null);
    return (React.createElement("div", { className: "relative" },
        fld.name === 'state' && (React.createElement(StateDropDown, { disabled: fld === null || fld === void 0 ? void 0 : fld.disabled, error: ((_a = errors[fld.name]) === null || _a === void 0 ? void 0 : _a.message) || '', formId: formId, name: fld.name, onBlur: fld === null || fld === void 0 ? void 0 : fld.onBlur, onChange: (e) => {
                if (fld === null || fld === void 0 ? void 0 : fld.onChange)
                    fld === null || fld === void 0 ? void 0 : fld.onChange(e);
                handleOnChange(e);
            }, onFocus: fld === null || fld === void 0 ? void 0 : fld.onFocus, optional: fld.optional, register: register, title: fld.title, validation: validation })),
        (fld === null || fld === void 0 ? void 0 : fld.type) === 'textarea' && (React.createElement(HookFormTextArea, { autoComplete: fld.autoComplete, autoCorrect: fld.autoCorrect || 'off', disabled: fld === null || fld === void 0 ? void 0 : fld.disabled, error: ((_b = errors[fld.name]) === null || _b === void 0 ? void 0 : _b.message) || '', id: `${formId}--${fld.name}`, name: fld.name, onBlur: fld === null || fld === void 0 ? void 0 : fld.onBlur, onChange: (e) => {
                if (fld === null || fld === void 0 ? void 0 : fld.onChange)
                    fld === null || fld === void 0 ? void 0 : fld.onChange(e);
                handleOnChange(e);
            }, onFocus: fld === null || fld === void 0 ? void 0 : fld.onFocus, onKeyDown: fld === null || fld === void 0 ? void 0 : fld.onKeyDown, onKeyUp: fld === null || fld === void 0 ? void 0 : fld.onKeyUp, optional: fld.optional, placeholder: fld.placeholder, register: register, spellCheck: fld.spellCheck || false, title: fld.title, validation: validation })),
        (fld === null || fld === void 0 ? void 0 : fld.type) === 'radio' &&
            (fld.options ? (React.createElement(HookFormRadio, { disabled: fld === null || fld === void 0 ? void 0 : fld.disabled, error: ((_c = errors[fld.name]) === null || _c === void 0 ? void 0 : _c.message) || '', name: fld.name, onBlur: fld === null || fld === void 0 ? void 0 : fld.onBlur, onChange: (e) => {
                    if (fld === null || fld === void 0 ? void 0 : fld.onChange)
                        fld === null || fld === void 0 ? void 0 : fld.onChange(e);
                    handleOnChange(e);
                }, onFocus: fld === null || fld === void 0 ? void 0 : fld.onFocus, optional: fld.optional, options: fld.options, register: register, title: fld.title, validation: validation, verticalSpacing: spacing })) : (throwError('Radio field must have options'))),
        (fld === null || fld === void 0 ? void 0 : fld.type) === 'checkbox' && (React.createElement(HookFormCheckbox, { checkTheme: fld.checkTheme, disabled: fld === null || fld === void 0 ? void 0 : fld.disabled, error: ((_d = errors[fld.name]) === null || _d === void 0 ? void 0 : _d.message) || '', id: `${formId}--${fld.name}`, name: fld.name, onBlur: fld === null || fld === void 0 ? void 0 : fld.onBlur, onChange: (e) => {
                if (fld === null || fld === void 0 ? void 0 : fld.onChange)
                    fld === null || fld === void 0 ? void 0 : fld.onChange(e);
                handleOnChange(e);
            }, onFocus: fld === null || fld === void 0 ? void 0 : fld.onFocus, optional: fld === null || fld === void 0 ? void 0 : fld.optional, register: register, theme: fld.theme, title: fld.title, titleTheme: fld.titleTheme, validation: validation }))
    // )
    ,
        (fld === null || fld === void 0 ? void 0 : fld.type) === 'select' &&
            (fld.options ? (React.createElement(HookFormSelect, { disabled: fld === null || fld === void 0 ? void 0 : fld.disabled, error: ((_e = errors[fld.name]) === null || _e === void 0 ? void 0 : _e.message) || '', formId: formId, id: `${formId}--${fld.name}`, labelTheme: fld.titleTheme, name: fld.name, onBlur: fld === null || fld === void 0 ? void 0 : fld.onBlur, onChange: (e) => {
                    if (fld === null || fld === void 0 ? void 0 : fld.onChange)
                        fld === null || fld === void 0 ? void 0 : fld.onChange(e);
                    handleOnChange(e);
                }, onFocus: fld === null || fld === void 0 ? void 0 : fld.onFocus, optional: fld === null || fld === void 0 ? void 0 : fld.optional, options: fld.options, register: register, selectTheme: fld.selectTheme, theme: fld.theme, title: fld.title, validation: validation })) : (throwError('Select field must have options'))),
        (fld === null || fld === void 0 ? void 0 : fld.type) && !nonTextInputTypes.includes(fld === null || fld === void 0 ? void 0 : fld.type) && (React.createElement(HookFormTextInput, { autoComplete: fld.autoComplete, disabled: fld === null || fld === void 0 ? void 0 : fld.disabled, error: ((_f = errors[fld.name]) === null || _f === void 0 ? void 0 : _f.message) || '', id: `${formId}--${fld.name}`, name: fld.name, onBlur: fld === null || fld === void 0 ? void 0 : fld.onBlur, onChange: (e) => {
                if (fld === null || fld === void 0 ? void 0 : fld.onChange)
                    fld === null || fld === void 0 ? void 0 : fld.onChange(e);
                handleOnChange(e);
            }, onFocus: fld === null || fld === void 0 ? void 0 : fld.onFocus, onKeyDown: fld === null || fld === void 0 ? void 0 : fld.onKeyDown, onKeyUp: fld === null || fld === void 0 ? void 0 : fld.onKeyUp, optional: fld === null || fld === void 0 ? void 0 : fld.optional, placeholder: ((_g = errors[fld.name]) === null || _g === void 0 ? void 0 : _g.message) ? '' : fld.placeholder, register: register, resetButton: fld.resetButton, resetCallback: resetField, 
            // setValueAs={fld?.setValueAs}
            showPasswordButton: fld === null || fld === void 0 ? void 0 : fld.showPasswordButton, submitIcon: fld.submitIcon, title: fld.title, type: fld === null || fld === void 0 ? void 0 : fld.type, validation: validation })),
        fld.tooltip && (React.createElement("div", { className: "absolute right-0 bottom-0 -mb-6 border rounded-b-lg border-_-neutrals-400 bg-white" }, fld.tooltip)),
        passwordsWithValidator.includes(fld.name) && !fld.disabled && (React.createElement(HookFormPasswordValidator, { password: password, fieldName: fld.name, errors: errors, dirtyFields: dirtyFields }))));
};
export default HookFormInput;
//# sourceMappingURL=HookFormInput.js.map