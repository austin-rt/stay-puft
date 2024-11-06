import React from 'react';
import { UseFormRegister, UseFormResetField, UseFormReturn } from 'react-hook-form';
import { ChangeEventTypes, FieldsType, FieldType, FieldValidationMethodType } from '../../types';
export interface HookFormInputProps {
    /**
     * The control object from the useForm hook.
     * @see https://react-hook-form.com/docs/useform/control
     */
    control: UseFormReturn<FieldsType>['control'];
    /**
     * An object with the user-modified fields. Make sure to provide all inputs' defaultValues via useForm, so the library can compare against the defaultValues.
     * - Important: Make sure to provide defaultValues at the useForm, so hook form can have a single source of truth to compare each field's dirtiness.
     * - Dirty fields will not represent as isDirty formState, because dirty fields are marked field dirty at field level rather the entire form. If you want to determine the entire form state use isDirty instead.
     * @see https://react-hook-form.com/api/useform/formstate `touchedFields` entry
     */
    dirtyFields: UseFormReturn<FieldsType>['formState']['dirtyFields'];
    /**
     * An object with field errors.
     * @see https://react-hook-form.com/docs/useform/formstate `errors` entry
     */
    errors: UseFormReturn<FieldsType>['formState']['errors'];
    /**
     * The field object.
     */
    field: FieldType;
    /**
     * The form's id attribute.
     */
    formId: string;
    /**
     * A function required to assist in browser autofill setting form values.
     */
    handleOnChange: (e: ChangeEventTypes) => void;
    /**
     * The register function from the useForm hook.
     * @see https://react-hook-form.com/docs/useform/register
     */
    register: UseFormRegister<FieldsType>;
    /**
     * The resetField function from the useForm hook.
     * @see https://react-hook-form.com/docs/useform/resetfield
     */
    resetField: UseFormResetField<FieldsType>;
    /**
     * The vertical spacing between radio buttons or checkboxes, the `spacing` prop in the `HookForm` component should be passed here.
     */
    spacing?: string;
    /**
     * An object containing all the inputs the user has interacted with.
     * @see https://react-hook-form.com/api/useform/formstate `touchedFields` entry
     */
    touchedFields: UseFormReturn<FieldsType>['formState']['touchedFields'];
    /**
     * Our custom validation strategy for the field. `all` will use zod validation, `requiredOnly` will only check if the field is required, `none` will skip validation.
     */
    validation: FieldValidationMethodType;
    /**
     * The watch function from the useForm hook.
     * @see https://react-hook-form.com/docs/useform/watch
     */
    watch: UseFormReturn<FieldsType>['watch'];
}
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly.
 */
declare const HookFormInput: ({ errors, field, formId, handleOnChange, register, resetField, spacing, validation, watch, }: HookFormInputProps) => React.JSX.Element;
export default HookFormInput;
