import React, { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode } from 'react';
import { FieldNamesType, FieldValidationMethodType } from '../../types';
export interface HookFormTextAreaProps {
    /**
     * The aria-describedby HTML attribute for the field.
     */
    ariaDescribedby?: string;
    /**
     * The autocomplete HTML attribute for the field.
     */
    autoComplete?: string;
    /**
     * Should the field be auto-corrected?
     */
    autoCorrect?: 'on' | 'off';
    /**
     * Should the field be disabled?
     */
    disabled?: boolean;
    /**
     * The error message for the field as a string.
     */
    error?: string;
    /**
     * The id of the field.
     */
    id: string;
    /**
     * A string of Tailwind classes to apply to the `textarea` tag.
     */
    inputTheme?: string;
    /**
     * A string of Tailwind classes to apply to the `label` tag.
     */
    labelTheme?: string;
    /**
     * The name of the field. The name must match a key in the `validationSchema` object.
     */
    name: FieldNamesType;
    /**
     * The onBlur event handler for the field.
     */
    onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * The onChange event handler for the field.
     */
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * The onFocus event handler for the field.
     */
    onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * The onKeyDown event handler for the field.
     */
    onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * The onKeyUp event handler for the field.
     */
    onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * Should the optional subtext be displayed?
     */
    optional?: boolean;
    /**
     * The placeholder text to display in the field.
     */
    placeholder?: string;
    /**
     * The register function from the `useForm` hook.
     * @see https://react-hook-form.com/docs/useform/register
     */
    register: Function;
    /**
     * Should the field be required?
     */
    required?: boolean;
    /**
     * The number of rows to display in the textarea.
     */
    rows?: number;
    /**
     * Run input value through this function before validation. Only valid on text inputs.
     */
    /**
     * Should the field be spell-checked?
     */
    spellCheck?: boolean;
    /**
     * A string of Tailwind classes to apply to the `div` tag wrapping the component.
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
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextArea />` component?
 */
declare const HookFormTextArea: ({ ariaDescribedby, autoComplete, autoCorrect, disabled, error, id, inputTheme, labelTheme, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, optional, placeholder, register, required, rows, spellCheck, theme, title, validation, }: HookFormTextAreaProps) => React.JSX.Element;
export default HookFormTextArea;
