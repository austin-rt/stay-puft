import React, { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode } from 'react';
import { UseFormProps } from 'react-hook-form';
import { FieldValidationMethodType } from '../../types';
export interface TextAreaProps {
    /**
     * If the input should allow autofilling from the browser. This is not always handled properly in Chrome, so we suggest to use a string like 'nope'.
     */
    autoComplete?: string;
    /**
     * The function to run when the input loses focus/blurred.
     */
    onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * A function that will run after the input  has changed, it will return the value of the input for you to use in the parent component.
     */
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Should the input be disabled or not. Use with a state var to determine when the input can be edited.
     */
    disabled?: boolean;
    /**
     * An error message to be shown docked at the bottom of the input. If null, nothing will show.
     */
    error?: string;
    /**
     * An id to be added to the input itself, not the wrapping label.
     */
    id: string;
    /**
     * Classes to be added to the `<textarea>`.
     */
    inputTheme?: string;
    /**
     * Callback when a key is pressed
     */
    onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * Callback when a key is released
     */
    onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    /**
     * The allowed max length of characters into the input.
     */
    maxLength?: number;
    /**
     * The allowed min length of characters into the input.
     */
    minLength?: number;
    /**
     * If true, will show an (optional) tag next to the title. If false or not supplied, nothing will show.
     */
    optional?: boolean;
    /**
     * Placeholder value to show on the input before any value is entered.
     */
    placeholder?: string;
    /**
     * The default value to be populated into the input on load.
     */
    populatedValue?: string;
    /**
     * If true, will show a required *'s. If false or not supplied, nothing will show.
     */
    required?: boolean;
    /**
     * How many rows the input should  have
     */
    rows?: number;
    /**
     * Classes to be added to the `<label>`.
     */
    theme?: string;
    /**
     * The label text title of the input.
     */
    title: string | ReactNode;
    ariaDescribedby?: string;
    autoCorrect?: 'on' | 'off';
    name?: string;
    labelTheme?: string;
    register: Function;
    criteriaMode?: UseFormProps['criteriaMode'];
    mode?: UseFormProps['mode'];
    reValidateMode?: UseFormProps['reValidateMode'];
    shouldFocusError?: UseFormProps['shouldFocusError'];
    shouldUnregister?: UseFormProps['shouldUnregister'];
    delayError?: UseFormProps['delayError'];
    spellCheck?: boolean;
    validation?: FieldValidationMethodType;
}
declare const TextArea: ({ autoComplete, autoCorrect, error, name, id, inputTheme, optional, labelTheme, placeholder, required, rows, spellCheck, theme, title, ariaDescribedby, register, criteriaMode, mode, reValidateMode, shouldFocusError, shouldUnregister, delayError, validation, disabled, onChange, onBlur, onKeyUp, onKeyDown, onFocus, }: TextAreaProps) => React.JSX.Element;
export default TextArea;
