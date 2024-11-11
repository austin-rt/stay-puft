import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';
import { FieldNamesType, FieldValidationMethodType } from '../../types';
export interface HookFormStateDropDownProps {
    /**
     * Should the field be disabled?
     */
    disabled?: boolean;
    /**
     * The error message for the field as a string.
     */
    error?: string;
    /**
     * The form ID for the field.
     */
    formId: string;
    /**
     * The id of the field.
     */
    id?: string;
    /**
     * A string of Tailwind classes to apply to the label.
     */
    labelTheme?: string;
    /**
     * The name of the field. The name must match a key in the `validationSchema` object.
     */
    name: FieldNamesType;
    /**
     * The onBlur event handler for the field.
     */
    onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
    /**
     * The onChange event handler for the field.
     */
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    /**
     * The onFocus event handler for the field.
     */
    onFocus?: (e: FocusEvent<HTMLSelectElement>) => void;
    /**
     * Should the optional subtext be displayed?
     */
    optional: boolean;
    /**
     * The register function from the `useForm` hook.
     * @see https://react-hook-form.com/docs/useform/register
     */
    register: Function;
    /**
     * A string of Tailwind classes to apply to the `select` tag.
     */
    selectTheme?: string;
    /**
     * A string of Tailwind classes to apply to the `div` wrapping the `label` tag.
     */
    theme?: string;
    /**
     * The title of the field.
     */
    title: string | ReactNode;
    /**
     * Our custom validation strategy for the field. `all` will use zod validation, `requiredOnly` will only check if the field is required, `none` will skip validation.
     */
    validation?: FieldValidationMethodType;
}
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<StateDropdown />` component?
 */
declare const HookFormStateDropDown: ({ disabled, error, formId, labelTheme, name, onBlur, onChange, onFocus, optional, register, selectTheme, theme, title, validation, }: HookFormStateDropDownProps) => React.JSX.Element;
export default HookFormStateDropDown;
