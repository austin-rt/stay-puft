import { __awaiter } from "tslib";
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/HookForm/HookForm.tsx";
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '../Common/Alert';
import Button from '../Common/Button';
import ReCAPTCHA from 'react-google-recaptcha-enterprise';
import { Controller, useForm, } from 'react-hook-form';
import { z } from 'zod';
import HookFormInput from './HookFormInput';
import { validationSchemas } from '../configs/HookFormValidationSchemas';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import scrollToElement from '../utils/scrollToElement';
const HookForm = ({ callbackOnBlur, criteriaMode = 'all', delayError = 500, disclaimer, disableForm, errorMessage, fields, fillValues, fillValuesCallback, hideRequiredLegend = false, id, mode = 'onTouched', onError, onSubmit, resetButtonCallback, resetButtonGhost = false, resetButtonShow = false, resetButtonTheme, resetButtonTitle = 'Reset', resetButtonVariant = 'secondary', resetOnSubmit = false, reValidateMode = 'onChange', shouldFocusError = true, showForm = true, showSuccessMessage = false, spacing = 'gap-9', submitButtonGhost = false, submitButtonRounded = false, submitButtonShow = true, submitButtonTheme, submitButtonTitle = 'Submit', submitButtonVariant = 'primary', successCallback, successMessage, title, theme = 'p-4', validation = 'full', }) => {
    var _a, _b, _c;
    if (!fields) {
        throw new Error('Fields are required for the HookForm component');
    }
    // make sure all fields have a validation schema
    fields.forEach((field) => {
        if (!validationSchemas[field.name])
            throw new Error(`Validation schema for field '${field.name}' is missing
        in validationSchemas.ts`);
    });
    // remove hidden fields
    const visibleFields = fields.filter((f) => !f.hidden);
    // sort fields so that the captcha field is always last
    // eslint-disable-next-line no-param-reassign
    const sortedFields = visibleFields.sort((a, b) => {
        if (a.name === 'captcha')
            return 1;
        if (b.name === 'captcha')
            return -1;
        return 0;
    });
    // set default values
    const defaultValues = Object.assign(Object.assign({}, sortedFields.reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f.name]: f.defaultValue || '' })), {})), { captcha: undefined });
    // fetch validation schema
    const schema = z.object(Object.assign({}, sortedFields.reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f.name]: !f.optional
            ? validationSchemas[f.name]
            : validationSchemas[f.name].optional().nullish().or(z.literal('')) })), {})));
    const { clearErrors, control, getValues, handleSubmit, register, reset, resetField, setError, setValue, unregister, watch, formState: { dirtyFields, disabled, errors, 
    // isDirty,
    // isSubmitSuccessful,
    isValid, touchedFields, submitCount, }, } = useForm({
        criteriaMode,
        defaultValues,
        delayError,
        mode,
        resolver: validation === 'full' ? zodResolver(schema) : undefined,
        reValidateMode,
        shouldFocusError,
    });
    const [hiddenFields, setHiddenFields] = useState([
        ...sortedFields
            .filter((f) => f.isToggle && !f.defaultValue)
            .map((f) => f.name),
    ]);
    const [submitSuccessMessage, setSubmitSuccessMessage] = useState('');
    const successAlertId = `HookForm--${id}--successAlert`;
    const errorAlertRootId = `HookForm--${id}--errorAlertRoot`;
    const errorAlertFieldsId = `HookForm--${id}--errorAlertFields`;
    const handleOnChange = (e) => {
        const typesToSkip = ['checkbox', 'captcha'];
        if (typesToSkip.includes(e.target.type))
            return;
        const { value } = e.target;
        const name = e.target.name;
        setValue(name, value);
    };
    const submitHandler = (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield onSubmit(data);
        }
        catch (err) {
            console.error(`Error submitting ${id}. Error: ${err.message}`);
            if (err.message) {
                setError('root', {
                    message: err.message,
                });
                setTimeout(() => {
                    scrollToElement(`#${errorAlertRootId}`);
                }, 100);
            }
        }
    });
    const errorFields = [
        ...new Set(Object.keys(errors).map((field) => (field.toLowerCase().includes('password') && 'password') ||
            (field.toLowerCase().includes('address') && 'address') ||
            field)),
    ];
    const prettifyErrorFields = () => {
        const flds = Object.keys(errors).filter((field) => !field.toLowerCase().includes('optional') &&
            !field.toLowerCase().includes('terms'));
        if (flds.length === 0)
            return undefined;
        if (flds.length > 3) {
            return 'Please fill out all required fields.';
        }
        const fieldsSet = [
            ...new Set(Object.keys(errors).map((field) => {
                if (field.toLowerCase().includes('password'))
                    return 'password';
                if (field.toLowerCase().includes('address'))
                    return 'address';
                if (field.toLowerCase().includes('phone'))
                    return 'phone number';
                if (field.toLowerCase().includes('terms'))
                    return undefined;
                return field;
            })),
        ];
        return `Please fill out your ${fieldsSet
            .map((field, index) => {
            if (!field)
                return '';
            if (index === 0) {
                return ` ${toLowerCaseWithSpaces(field)}`;
            }
            if (flds.length > 2 && index === flds.length - 1) {
                return ` and ${toLowerCaseWithSpaces(field)}`;
            }
            if (flds.length === 2 && index === 1) {
                return ` and ${toLowerCaseWithSpaces(field)}`;
            }
            return `, ${toLowerCaseWithSpaces(field)}`;
        })
            .filter((field) => !!field !== false)
            .join('')}.`;
    };
    useEffect(() => {
        scrollToElement(`#${errorAlertFieldsId}`);
    }, [errorFields === null || errorFields === void 0 ? void 0 : errorFields.length, errorAlertFieldsId]);
    useEffect(() => {
        if (errorMessage)
            setError('root', {
                message: errorMessage,
            });
    }, [errorMessage, setError]);
    useEffect(() => {
        if (errorMessage) {
            setError('root', {
                message: errorMessage,
            });
        }
        else {
            clearErrors('root');
            if (submitCount > 0 && isValid) {
                if (showSuccessMessage && successMessage)
                    setSubmitSuccessMessage(successMessage);
                if (successCallback)
                    successCallback();
                if (resetOnSubmit)
                    reset();
                // give browser time to paint before scrolling
                setTimeout(() => {
                    scrollToElement(`#${successAlertId}`);
                }, 100);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitCount, errorMessage]);
    return showForm === false ? (_jsxDEV("div", { id: `HookForm--${id}--empty`, className: "hidden" }, void 0, false, { fileName: _jsxFileName, lineNumber: 440, columnNumber: 32 }, this)) : (_jsxDEV("form", Object.assign({ id: `HookForm--${id}`, onSubmit: handleSubmit(submitHandler, onError), onBlur: callbackOnBlur === true && isValid === true
            ? handleSubmit(submitHandler, onError)
            : undefined, noValidate: true, className: ` bg-white ${theme || ''}`, "aria-hidden": (theme === null || theme === void 0 ? void 0 : theme.includes('hidden')) ? true : undefined }, { children: _jsxDEV("fieldset", Object.assign({ disabled: disableForm }, { children: [fillValues && (_jsxDEV("span", Object.assign({ className: "flex justify-evenly mb-8" }, { children: fillValues.map((fillValue) => (_jsxDEV(Button, { variant: "secondary", title: fillValue.title, callback: () => {
                            Object.entries(fillValue.data).forEach(([key, value]) => {
                                setValue(key, value, {
                                    shouldDirty: true,
                                    shouldTouch: true,
                                    shouldValidate: true,
                                });
                            });
                            if (fillValuesCallback)
                                fillValuesCallback(fillValue.data);
                        } }, fillValue.title, false, { fileName: _jsxFileName, lineNumber: 458, columnNumber: 45 }, this))) }), void 0, false, { fileName: _jsxFileName, lineNumber: 456, columnNumber: 25 }, this)), _jsxDEV("div", Object.assign({ className: `w-full flex mb-3 ${(errorFields === null || errorFields === void 0 ? void 0 : errorFields.length) > 0 || (errors === null || errors === void 0 ? void 0 : errors.root) || successMessage !== ''
                        ? 'flex-col gap-2'
                        : 'flex-row'}` }, { children: [title && _jsxDEV("div", Object.assign({ className: "mr-auto w-full" }, { children: title }), void 0, false, { fileName: _jsxFileName, lineNumber: 484, columnNumber: 20 }, this), (errors === null || errors === void 0 ? void 0 : errors.root) &&
                            ((_a = errors === null || errors === void 0 ? void 0 : errors.root) === null || _a === void 0 ? void 0 : _a.message) &&
                            ((_b = errors === null || errors === void 0 ? void 0 : errors.root) === null || _b === void 0 ? void 0 : _b.message) !== '' && (_jsxDEV(Alert, Object.assign({ id: errorAlertRootId, close: false, callback: () => null, variant: "error" }, { children: _jsxDEV("span", { children: _jsxDEV("div", { children: (_c = errors === null || errors === void 0 ? void 0 : errors.root) === null || _c === void 0 ? void 0 : _c.message }, void 0, false, { fileName: _jsxFileName, lineNumber: 495, columnNumber: 19 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 494, columnNumber: 17 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 487, columnNumber: 46 }, this)), !(errors === null || errors === void 0 ? void 0 : errors.root) && prettifyErrorFields() && (_jsxDEV(Alert, Object.assign({ callback: () => null, variant: "error", id: errorAlertFieldsId, close: false }, { children: _jsxDEV("span", { children: prettifyErrorFields() }, void 0, false, { fileName: _jsxFileName, lineNumber: 506, columnNumber: 15 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 499, columnNumber: 55 }, this)), showSuccessMessage && submitSuccessMessage && (_jsxDEV(Alert, Object.assign({ close: false, callback: () => null, variant: "success", id: successAlertId }, { children: _jsxDEV("span", { children: submitSuccessMessage }, void 0, false, { fileName: _jsxFileName, lineNumber: 517, columnNumber: 15 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 510, columnNumber: 59 }, this)), (sortedFields.every((field) => field === null || field === void 0 ? void 0 : field.optional) ||
                            !hideRequiredLegend) && (_jsxDEV("div", Object.assign({ className: `w-full text-xxs flex items-center justify-end -mb-2` }, { children: [_jsxDEV("span", Object.assign({ className: "text-_-secondary-0 text-base" }, { children: "*" }), void 0, false, { fileName: _jsxFileName, lineNumber: 526, columnNumber: 15 }, this), _jsxDEV("span", { children: [_jsxDEV("span", Object.assign({ className: "hidden sm:inline" }, { children: "indicates " }), void 0, false, { fileName: _jsxFileName, lineNumber: 528, columnNumber: 17 }, this), "required field"] }, void 0, true, { fileName: _jsxFileName, lineNumber: 527, columnNumber: 15 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 522, columnNumber: 38 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 477, columnNumber: 9 }, this), _jsxDEV("div", Object.assign({ className: "flex flex-col gap-12 mt-2" }, { children: [sortedFields.map((field) => {
                            if (field.hidden)
                                return null;
                            if (field.isToggle) {
                                if (hiddenFields.includes(field.name)) {
                                    return (_jsxDEV("div", Object.assign({ className: "w-full text-[smaller] -my-6" }, { children: _jsxDEV("button", Object.assign({ type: "button", id: `${field.name}--add`, className: "block w-max ml-auto cursor-pointer underline border border-transparent", onClick: () => {
                                                setValue(field.name, field.defaultValue);
                                                setHiddenFields([
                                                    ...hiddenFields.filter((f) => f !== field.name),
                                                ]);
                                            } }, { children: ["Add ", field.title] }), void 0, true, { fileName: _jsxFileName, lineNumber: 541, columnNumber: 21 }, this) }), field.name, false, { fileName: _jsxFileName, lineNumber: 539, columnNumber: 25 }, this));
                                }
                                if (!hiddenFields.includes(field.name) &&
                                    getValues(field.name) === field.defaultValue) {
                                    return (_jsxDEV("span", Object.assign({ className: "-mt-6" }, { children: [_jsxDEV("div", Object.assign({ className: `w-full text-[smaller] mb-3` }, { children: _jsxDEV("button", Object.assign({ type: "button", id: `${field.name}--remove`, className: "block w-max ml-auto cursor-pointer underline border border-transparent", onClick: () => {
                                                        setValue(field.name, undefined);
                                                        if (!hiddenFields.includes(field.name)) {
                                                            setHiddenFields([...hiddenFields, field.name]);
                                                        }
                                                        unregister(field.name);
                                                    } }, { children: ["Remove ", field.title] }), void 0, true, { fileName: _jsxFileName, lineNumber: 564, columnNumber: 23 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 563, columnNumber: 21 }, this), _jsxDEV(HookFormInput, { handleOnChange: handleOnChange, control: control, watch: watch, dirtyFields: dirtyFields, errors: errors, field: field, formId: id, register: register, resetField: resetField, spacing: spacing, touchedFields: touchedFields, validation: validation }, void 0, false, { fileName: _jsxFileName, lineNumber: 579, columnNumber: 21 }, this)] }), field.name, true, { fileName: _jsxFileName, lineNumber: 561, columnNumber: 25 }, this));
                                }
                            }
                            if (field.type === 'captcha' || field.name === 'captcha') {
                                if (!field.captchaKey) {
                                    throw new Error('captchaKey is required for captcha field');
                                }
                                return (_jsxDEV("div", Object.assign({ className: "flex flex-col items-center" }, { children: _jsxDEV("span", Object.assign({ className: `border-2
                  ${(errors === null || errors === void 0 ? void 0 : errors.captcha)
                                            ? 'border-_-states-error'
                                            : 'border-transparent'}
                ` }, { children: _jsxDEV(ReCAPTCHA, { sitekey: field.captchaKey, onChange: (value) => {
                                                if (value)
                                                    setValue('captcha', value);
                                            } }, void 0, false, { fileName: _jsxFileName, lineNumber: 612, columnNumber: 21 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 603, columnNumber: 19 }, this) }), field.name, false, { fileName: _jsxFileName, lineNumber: 601, columnNumber: 23 }, this));
                            }
                            if (id === 'checkoutAddressDeliveryForm' &&
                                field.name === 'addressLine1') {
                                return (_jsxDEV(Controller, { name: field.name, control: control, render: (args) => (_jsxDEV(_Fragment, { children: [_jsxDEV("div", Object.assign({ className: "sr-only", id: "GoogleAddressAutoFill" }, { children: "Use the up and down arrow keys to navigate the suggestions. Press enter to select a suggestion. Pressing enter will not submit the form." }), void 0, false, { fileName: _jsxFileName, lineNumber: 634, columnNumber: 23 }, this), _jsxDEV(HookFormInput, Object.assign({ "aria-describedby": "GoogleAddressAutoFill" }, args.field, { handleOnChange: handleOnChange, control: control, watch: watch, dirtyFields: dirtyFields, errors: errors, field: field, formId: id, register: register, resetField: resetField, spacing: spacing, touchedFields: touchedFields, validation: validation }), void 0, false, { fileName: _jsxFileName, lineNumber: 639, columnNumber: 23 }, this)] }, void 0, true, { fileName: _jsxFileName, lineNumber: 632, columnNumber: 38 }, this)) }, field.name, false, { fileName: _jsxFileName, lineNumber: 627, columnNumber: 23 }, this));
                            }
                            return (_jsxDEV(HookFormInput, { handleOnChange: handleOnChange, control: control, watch: watch, dirtyFields: dirtyFields, errors: errors, field: field, formId: id, register: register, resetField: resetField, spacing: spacing, touchedFields: touchedFields, validation: validation }, field.name, false, { fileName: _jsxFileName, lineNumber: 660, columnNumber: 21 }, this));
                        }), _jsxDEV("div", Object.assign({ className: "flex justify-between" }, { children: [resetButtonShow && (_jsxDEV(Button, { type: "reset", callback: () => {
                                        if (resetButtonCallback)
                                            resetButtonCallback();
                                        reset();
                                    }, title: resetButtonTitle, theme: resetButtonTheme, ghost: resetButtonGhost, variant: resetButtonVariant }, void 0, false, { fileName: _jsxFileName, lineNumber: 679, columnNumber: 34 }, this)), submitButtonShow && (_jsxDEV(_Fragment, { children: _jsxDEV(Button, { disabled: disabled || disableForm, ghost: submitButtonGhost, rounded: submitButtonRounded, theme: `ml-auto ${resetButtonShow !== true && 'w-full'} ${submitButtonTheme}`, title: submitButtonTitle, type: "submit", variant: submitButtonVariant }, void 0, false, { fileName: _jsxFileName, lineNumber: 694, columnNumber: 17 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 692, columnNumber: 35 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 678, columnNumber: 11 }, this), disclaimer && _jsxDEV("div", Object.assign({ className: "text-xs" }, { children: disclaimer }), void 0, false, { fileName: _jsxFileName, lineNumber: 708, columnNumber: 25 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 534, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 455, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 442, columnNumber: 8 }, this));
};
export default HookForm;
//# sourceMappingURL=HookForm.js.map