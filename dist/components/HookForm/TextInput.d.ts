import React, { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode } from 'react';
import { UseFormProps } from 'react-hook-form';
import { FieldNamesType, FieldValidationMethodType } from '../../types';
import { ButtonProps } from 'nwc-slimer/dist/components/Button/Button';
export interface TextInputProps {
    /**
     * Aria label for error messages if applicable
     */
    arialabel?: string | undefined;
    /**
     * If the input should allow autofilling from the browser. This is not always handled properly in Chrome, so we suggest to use a string like 'nope'.
     */
    autoComplete?: HTMLInputElement['autocomplete'];
    autoCorrect?: boolean;
    /**
     * The function to run when the input loses focus/blurred.
     */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * A function that will run after the input  has changed, it will return the value of the input for you to use in the parent component.
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Should the input be disabled or not. Use with a state var to determine when the input can be edited.
     */
    disabled?: boolean;
    /**
     * Pass a display method such as inline-block, inline, or bock.
     */
    display?: string;
    /**
     * An error message to be shown docked at the bottom of the input. If null, nothing will show.
     */
    error?: string;
    /**
     * An id to be added to the input itself, not the wrapping label.
     */
    id?: string;
    /**
     * Classes to be added to the input itself.
     */
    inputTheme?: string;
    /**
     * Callback when a key is released. To maintain typesafety, if accessing the element's value property, it is required to cast `event.target` as an `HTMLInputElement` in your function. For example: `alert((e.target as HTMLInputElement).value)`.
     */
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * Callback when key is down   */
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * The allowed max length of characters into the input.
     */
    maxLength?: number;
    /**
     * The allowed min lenght of characters into the input.
     */
    minLength?: number;
    /**
     * If true, will show an (optional) tag next to the title. If false or not supplied, nothing will show.
     */
    name: FieldNamesType;
    optional?: boolean;
    /**
     * Regex to match on the input.
     */
    pattern?: string;
    /**
     * Placeholder value to show on the input before any value is entered.
     */
    placeholder?: string;
    /**
     * The default value to be populated into the input on load.
     */
    populatedValue?: string;
    showPasswordButton?: boolean;
    /**
     * Size of the input, will effect length as how many chars will show
     */
    size?: number;
    /**
     * Classes to be added to the `<label>`.
     */
    labelTheme?: string;
    /**
     * Classes to be added to the `<div>`.
     */
    theme?: string;
    /**
     * The label text title of the input.
     */
    title: string | ReactNode;
    /**
     *
     */
    type?: string;
    /**
     * Classes to be added to the `<button>`.
     */
    buttonTheme?: string;
    /**
     * The roundedness of the button corners.
     */
    buttonRounded?: boolean;
    buttonSize?: ButtonProps['size'];
    buttonVariant?: ButtonProps['variant'];
    ariaDescribedby?: string;
    baseTheme?: string;
    register: Function;
    criteriaMode?: UseFormProps['criteriaMode'];
    mode?: UseFormProps['mode'];
    reValidateMode?: UseFormProps['reValidateMode'];
    shouldFocusError?: UseFormProps['shouldFocusError'];
    shouldUnregister?: UseFormProps['shouldUnregister'];
    delayError?: UseFormProps['delayError'];
    required?: boolean;
    resetButton?: boolean;
    resetCallback?: Function;
    submitIcon?: string;
    validation?: FieldValidationMethodType;
}
declare const TextInput: ({ ariaDescribedby, arialabel, autoComplete, autoCorrect, baseTheme, buttonRounded, buttonSize, buttonTheme, buttonVariant, criteriaMode, delayError, disabled, error, id, inputTheme, labelTheme, mode, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, optional, placeholder, register, required, resetButton, resetCallback, reValidateMode, shouldFocusError, shouldUnregister, showPasswordButton, size, theme, title, submitIcon, type, validation, }: TextInputProps) => React.JSX.Element;
export default TextInput;
