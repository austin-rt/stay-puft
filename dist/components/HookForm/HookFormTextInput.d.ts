import React, { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode } from 'react';
import { ButtonProps } from '../slimer/Button';
import { UseFormProps } from 'react-hook-form';
import { FieldNamesType, FieldValidationMethodType } from '../../types';
export interface HookFormTextInputProps {
    ariaDescribedby?: string;
    arialabel?: string | undefined;
    autoComplete?: HTMLInputElement['autocomplete'];
    autoCorrect?: boolean;
    baseTheme?: string;
    buttonRounded?: boolean;
    buttonSize?: ButtonProps['size'];
    buttonTheme?: string;
    buttonVariant?: ButtonProps['variant'];
    disabled?: boolean;
    display?: string;
    error?: string;
    id?: string;
    inputTheme?: string;
    labelTheme?: string;
    name: FieldNamesType;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
    optional?: boolean;
    placeholder?: string;
    register: Function;
    required?: boolean;
    resetButton?: boolean;
    resetCallback?: Function;
    /**
     * Run input value through this function before validation. Only valid on text inputs.
     */
    showPasswordButton?: boolean;
    size?: number;
    submitIcon?: string;
    theme?: string;
    title: string | ReactNode;
    type?: string;
    validation?: FieldValidationMethodType;
    criteriaMode?: UseFormProps['criteriaMode'];
}
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextInput />` component?
 */
declare const HookFormTextInput: ({ ariaDescribedby, arialabel, autoComplete, autoCorrect, baseTheme, buttonRounded, buttonSize, buttonTheme, buttonVariant, disabled, error, id, inputTheme, labelTheme, name, onBlur, onChange, onFocus, onKeyDown, onKeyUp, optional, placeholder, register, required, resetButton, resetCallback, showPasswordButton, size, submitIcon, theme, title, type, validation, criteriaMode, }: HookFormTextInputProps) => React.JSX.Element;
export default HookFormTextInput;
