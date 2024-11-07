import React, { ReactNode } from 'react';
import { ButtonProps } from '../slimer/Button';
import { SubmitErrorHandler, SubmitHandler, UseFormProps } from 'react-hook-form';
import { FieldNamesType, FieldsType, FieldType, FieldValidationMethodType } from '../../types';
export interface HookFormProps {
    /**
     * Should the submit button be disabled?
     */
    disableForm?: boolean;
    /**
     * Should the handleSubmit callback run on blur?
     */
    callbackOnBlur?: boolean;
    /**
     * Should the form collect all errors or only the first one?
     * @default 'all'
     * @see https://react-hook-form.com/docs/useform#criteriaMode
     * */
    criteriaMode?: UseFormProps['criteriaMode'];
    /**
     * The delay for error messages
     * @default 500
     * @see https://react-hook-form.com/docs/useform#delayError
     * */
    delayError?: UseFormProps['delayError'];
    /**
     * A disclaimer to be shown at the bottom of the form
     * */
    disclaimer?: string | ReactNode;
    /**
     * The error message for the form
     */
    errorMessage?: string;
    /**
     * The fields to be shown in the form
     * */
    fields: FieldType[];
    /**
     * The fields to programaticlly fill the form with
     * */
    fillValues?: {
        title: string;
        data: {
            [key in FieldNamesType]?: string;
        };
    }[];
    /**
     * A callback to run when form programatically fills
     * */
    fillValuesCallback?: (values: any) => void;
    /**
     * Should the required legend be hidden
     * @default false
     * */
    hideRequiredLegend?: boolean;
    /**
     * The id of the form
     * */
    id: string;
    /**
     * The mode for the form
     * @default 'onTouched'
     * @see https://react-hook-form.com/docs/useform#mode
     * */
    mode?: UseFormProps['mode'];
    /**
     * A function to run when there is an error
     * @see https://react-hook-form.com/docs/useform#onError
     * */
    onError?: SubmitErrorHandler<FieldsType>;
    /**
     * A function to run when the form is submitted
     * @see https://react-hook-form.com/docs/useform#onSubmit
     * */
    onSubmit: SubmitHandler<FieldsType>;
    /**
     * A function to run when the reset button is clicked
     * */
    resetButtonCallback?: () => void;
    /**
     * Should the reset button have the ghost styling
     * @default false
     * */
    resetButtonGhost?: boolean;
    /**
     * Should the reset button show
     * @default false
     * */
    resetButtonShow?: boolean;
    /**
     * The theme for the reset button as a string of tailwind classes
     * */
    resetButtonTheme?: string;
    /**
     * The title for the reset button
     * @default 'Reset'
     * */
    resetButtonTitle?: string;
    /**
     * The variant for the reset button
     * @default 'secondary'
     *
     * */
    resetButtonVariant?: ButtonProps['variant'];
    /**
     * Should the form reset on successful submit?
     * @default true
     * */
    resetOnSubmit?: boolean;
    /**
     * The revalidate mode for the form
     * @default 'onChange'
     * @see https://react-hook-form.com/docs/useform#reValidateMode
     * */
    reValidateMode?: UseFormProps['reValidateMode'];
    /**
     * Should the form focus on the first error
     * @default true
     * @see https://react-hook-form.com/docs/useform#shouldFocusError
     * */
    shouldFocusError?: UseFormProps['shouldFocusError'];
    /**
     * Pass in a boolean to show or hide the form
     * @default true
     * */
    showForm?: boolean;
    /**
     * Should the success message show after the form is submitted?
     * @default false
     * */
    showSuccessMessage?: boolean;
    /**
     * The spacing of the form as a tailwind class
     * @default 'gap-9'
     * */
    spacing?: string;
    /**
     * Should the submit button have the ghost styling
     * @default false
     * */
    submitButtonGhost?: boolean;
    /**
     * Should the button be rounded
     * */
    submitButtonRounded?: ButtonProps['rounded'];
    /**
     * Should the submit button show
     * @default true
     * */
    submitButtonShow?: boolean;
    /**
     * The theme for the submit button as a string of tailwind classes
     * */
    submitButtonTheme?: string;
    /**
     * The title for the submit button
     * @default 'Submit'
     * */
    submitButtonTitle?: string;
    /**
     * The variant for the submit button
     * @default 'primary'
     * */
    submitButtonVariant?: ButtonProps['variant'];
    /**
     * A function to run when the form is successfully submitted
     */
    successCallback?: Function;
    /**
     * The success message for the form
     */
    successMessage?: string;
    /**
     * The theme for the form as a string of tailwind classes
     * */
    theme?: string;
    /**
     * The title for the form
     */
    title?: string | ReactNode;
    /**
     * Our custom validation strategy for the field. `all` will use zod validation, `requiredOnly` will only check if the field is required, `none` will skip validation.
     */
    validation?: FieldValidationMethodType;
}
/**
 * This is a form component that uses react-hook-form with zod validation under the hood. The styling is dependant on Tailwindcss as well as some prebuilt components and tailwind variables from  the nwc-slimer library.
 * @see https://americanfreight.atlassian.net/wiki/spaces/AC/pages/2510028805/Hook+Forms+Component+Usage
 */
declare const HookForm: ({ callbackOnBlur, criteriaMode, delayError, disclaimer, disableForm, errorMessage, fields, fillValues, fillValuesCallback, hideRequiredLegend, id, mode, onError, onSubmit, resetButtonCallback, resetButtonGhost, resetButtonShow, resetButtonTheme, resetButtonTitle, resetButtonVariant, resetOnSubmit, reValidateMode, shouldFocusError, showForm, showSuccessMessage, spacing, submitButtonGhost, submitButtonRounded, submitButtonShow, submitButtonTheme, submitButtonTitle, submitButtonVariant, successCallback, successMessage, title, theme, validation, }: HookFormProps) => React.JSX.Element;
export default HookForm;
