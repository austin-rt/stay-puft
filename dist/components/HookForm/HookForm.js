import { __awaiter } from "tslib";
import React, { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '../slimer/Alert';
import Button from '../slimer/Button';
import ReCAPTCHA from 'react-google-recaptcha-enterprise';
import { Controller, useForm, } from 'react-hook-form';
import { z } from 'zod';
import HookFormInput from './HookFormInput';
import { validationSchemas } from './HookFormValidationSchemas';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import scrollToElement from '../utils/scrollToElement';
/**
 * This is a form component that uses react-hook-form with zod validation under the hood. The styling is dependant on Tailwindcss as well as some prebuilt components and tailwind variables from  the nwc-slimer library.
 * @see https://americanfreight.atlassian.net/wiki/spaces/AC/pages/2510028805/Hook+Forms+Component+Usage
 */
const HookForm = ({ callbackOnBlur, criteriaMode = 'all', delayError = 500, disclaimer, disableSubmit, errorMessage, fields, fillValues, fillValuesCallback, hideRequiredLegend = false, id, mode = 'onTouched', onError, onSubmit, resetButtonCallback, resetButtonGhost = false, resetButtonShow = false, resetButtonTheme, resetButtonTitle = 'Reset', resetButtonVariant = 'secondary', resetOnSubmit = false, reValidateMode = 'onChange', shouldFocusError = true, showForm = true, showSuccessMessage = false, spacing = 'gap-9', submitButtonGhost = false, submitButtonRounded = false, submitButtonShow = true, submitButtonTheme, submitButtonTitle = 'Submit', submitButtonVariant = 'primary', successCallback, successMessage, title, theme = 'p-4', validation = 'full', }) => {
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
    const defaultValues = Object.assign(Object.assign({}, sortedFields.reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f.name]: f.defaultValue })), {})), { captcha: undefined });
    // fetch validation schema
    const schema = z.object(Object.assign({}, sortedFields.reduce((acc, f) => (Object.assign(Object.assign({}, acc), { [f.name]: validationSchemas[f.name] })), {})));
    const { 
    // clearErrors,
    control, getValues, handleSubmit, register, reset, resetField, setError, setValue, unregister, watch, formState: { dirtyFields, disabled, errors, 
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
            setTimeout(() => {
                if (showSuccessMessage)
                    setSubmitSuccessMessage('');
            }, 5000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [submitCount]);
    return showForm === false ? (React.createElement("div", { id: `HookForm--${id}--empty`, className: "hidden" })) : (React.createElement("form", { id: `HookForm--${id}`, onSubmit: handleSubmit(submitHandler, onError), onBlur: callbackOnBlur === true && isValid === true
            ? handleSubmit(submitHandler, onError)
            : undefined, noValidate: true, className: ` bg-white ${theme || ''}`, "aria-hidden": (theme === null || theme === void 0 ? void 0 : theme.includes('hidden')) ? true : undefined },
        fillValues && (React.createElement("span", { className: "flex justify-evenly mb-8" }, fillValues.map((fillValue) => (React.createElement(Button, { key: fillValue.title, variant: "secondary", title: fillValue.title, callback: () => {
                Object.entries(fillValue.data).forEach(([key, value]) => {
                    setValue(key, value, {
                        shouldDirty: true,
                        shouldTouch: true,
                        shouldValidate: true,
                    });
                });
                if (fillValuesCallback)
                    fillValuesCallback(fillValue.data);
            } }))))),
        React.createElement("div", { className: `w-full flex mb-3 ${(errorFields === null || errorFields === void 0 ? void 0 : errorFields.length) > 0 || (errors === null || errors === void 0 ? void 0 : errors.root) || successMessage !== ''
                ? 'flex-col gap-2'
                : 'flex-row'}` },
            title && React.createElement("div", { className: "mr-auto w-full" }, title),
            (errors === null || errors === void 0 ? void 0 : errors.root) &&
                ((_a = errors === null || errors === void 0 ? void 0 : errors.root) === null || _a === void 0 ? void 0 : _a.message) &&
                ((_b = errors === null || errors === void 0 ? void 0 : errors.root) === null || _b === void 0 ? void 0 : _b.message) !== '' && (React.createElement(Alert, { id: errorAlertRootId, close: false, callback: () => null, variant: "error" },
                React.createElement("span", null,
                    React.createElement("div", null, (_c = errors === null || errors === void 0 ? void 0 : errors.root) === null || _c === void 0 ? void 0 : _c.message)))),
            !(errors === null || errors === void 0 ? void 0 : errors.root) && prettifyErrorFields() && (React.createElement(Alert, { callback: () => null, variant: "error", id: errorAlertFieldsId, close: false },
                React.createElement("span", null, prettifyErrorFields()))),
            showSuccessMessage && submitSuccessMessage && (React.createElement(Alert, { close: false, callback: () => null, variant: "success", id: successAlertId },
                React.createElement("span", null, submitSuccessMessage))),
            sortedFields.some((field) => field.required) &&
                !hideRequiredLegend && (React.createElement("div", { className: `w-full text-xxs flex items-center justify-end -mb-3` },
                React.createElement("span", { className: "text-_-secondary-0 text-base" }, "*"),
                React.createElement("span", null, "indicates a required field")))),
        React.createElement("div", { className: "flex flex-col gap-12 mt-2" },
            sortedFields.map((field) => {
                if (field.hidden)
                    return null;
                if (field.isToggle) {
                    if (hiddenFields.includes(field.name)) {
                        return (React.createElement("div", { className: "w-full text-[smaller] -my-6", key: field.name },
                            React.createElement("button", { type: "button", id: `${field.name}--add`, className: "block w-max ml-auto cursor-pointer underline border border-transparent", onClick: () => {
                                    setValue(field.name, field.defaultValue);
                                    setHiddenFields([
                                        ...hiddenFields.filter((f) => f !== field.name),
                                    ]);
                                } },
                                "Add ",
                                field.title)));
                    }
                    if (!hiddenFields.includes(field.name) &&
                        getValues(field.name) === field.defaultValue) {
                        return (React.createElement("span", { key: field.name, className: "-mt-6" },
                            React.createElement("div", { className: `w-full text-[smaller] mb-3` },
                                React.createElement("button", { type: "button", id: `${field.name}--remove`, className: "block w-max ml-auto cursor-pointer underline border border-transparent", onClick: () => {
                                        setValue(field.name, undefined);
                                        if (!hiddenFields.includes(field.name)) {
                                            setHiddenFields([...hiddenFields, field.name]);
                                        }
                                        unregister(field.name);
                                    } },
                                    "Remove ",
                                    field.title)),
                            React.createElement(HookFormInput, { handleOnChange: handleOnChange, control: control, watch: watch, dirtyFields: dirtyFields, errors: errors, field: field, formId: id, register: register, resetField: resetField, spacing: spacing, touchedFields: touchedFields, validation: validation })));
                    }
                }
                if (field.type === 'captcha' || field.name === 'captcha') {
                    if (!field.captchaKey) {
                        throw new Error('captchaKey is required for captcha field');
                    }
                    return (React.createElement("div", { className: "flex flex-col items-center", key: field.name },
                        React.createElement("span", { className: `border-2
                  ${(errors === null || errors === void 0 ? void 0 : errors.captcha)
                                ? 'border-_-states-error'
                                : 'border-transparent'}
                ` },
                            React.createElement(ReCAPTCHA, { sitekey: field.captchaKey, onChange: (value) => {
                                    if (value)
                                        setValue('captcha', value);
                                } }))));
                }
                if (id === 'checkoutAddressDeliveryForm' &&
                    field.name === 'addressLine1') {
                    return (React.createElement(Controller, { key: field.name, name: field.name, control: control, render: (args) => (React.createElement(React.Fragment, null,
                            React.createElement("div", { className: "sr-only", id: "GoogleAddressAutoFill" }, "Use the up and down arrow keys to navigate the suggestions. Press enter to select a suggestion. Pressing enter will not submit the form."),
                            React.createElement(HookFormInput, Object.assign({ "aria-describedby": "GoogleAddressAutoFill" }, args.field, { handleOnChange: handleOnChange, control: control, watch: watch, dirtyFields: dirtyFields, errors: errors, field: field, formId: id, register: register, resetField: resetField, spacing: spacing, touchedFields: touchedFields, validation: validation })))) }));
                }
                return (React.createElement(HookFormInput, { handleOnChange: handleOnChange, control: control, watch: watch, dirtyFields: dirtyFields, errors: errors, field: field, formId: id, key: field.name, register: register, resetField: resetField, spacing: spacing, touchedFields: touchedFields, validation: validation }));
            }),
            React.createElement("div", { className: "flex justify-between" },
                resetButtonShow && (React.createElement(Button, { type: "reset", callback: () => {
                        if (resetButtonCallback)
                            resetButtonCallback();
                        reset();
                    }, title: resetButtonTitle, theme: resetButtonTheme, ghost: resetButtonGhost, variant: resetButtonVariant })),
                submitButtonShow && (React.createElement(React.Fragment, null,
                    React.createElement(Button, { disabled: disabled || disableSubmit, ghost: submitButtonGhost, rounded: submitButtonRounded, theme: `ml-auto ${resetButtonShow !== true && 'w-full'} ${submitButtonTheme}`, title: submitButtonTitle, type: "submit", variant: submitButtonVariant })))),
            disclaimer && React.createElement("div", { className: "text-xs" }, disclaimer))));
};
export default HookForm;
//# sourceMappingURL=HookForm.js.map