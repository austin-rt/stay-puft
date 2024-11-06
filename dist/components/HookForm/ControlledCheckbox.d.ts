import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';
import { Control, UseFormProps } from 'react-hook-form';
import { FieldNamesType, FieldsType, FieldValidationMethodType } from '../../types';
export interface ControlledCheckboxProps {
    /**
     * A custom data attribute value you can pass to hook into the input if needed.
     */
    dataAttr?: string;
    /**
     * An id to be added to the input itself, not the wrapping label.
     */
    id: string;
    /**
     * Classes to be added to the wrapping label.
     */
    theme?: string;
    /**
     * The label text title of the input.
     */
    title: string | ReactNode;
    /**
     * The value of the checkbox, will be accessible as part of "e" in the callback
     */
    /**
     * The spacing of the text as a tailwind class, defaults to `pl-3`.
     */
    titleTheme?: string;
    /**
     * Classes to be added to the input element.
     */
    inputTheme?: string;
    /**
     * Classes to be added to the checkmark element.
     */
    checkTheme?: string;
    /**
     * Is the checkbox controlled or not. If so, this should be true. If not, leave it undefined.
     */
    required?: boolean;
    optional?: boolean;
    register: Function;
    criteriaMode?: UseFormProps['criteriaMode'];
    mode?: UseFormProps['mode'];
    reValidateMode?: UseFormProps['reValidateMode'];
    shouldFocusError?: UseFormProps['shouldFocusError'];
    shouldUnregister?: UseFormProps['shouldUnregister'];
    delayError?: UseFormProps['delayError'];
    error?: string;
    name: FieldNamesType;
    validation?: FieldValidationMethodType;
    control: Control<FieldsType>;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
}
declare const ControlledCheckbox: ({ id, theme, title, name, titleTheme, inputTheme, checkTheme, required, optional, register, criteriaMode, mode, reValidateMode, shouldFocusError, shouldUnregister, delayError, error, validation, control, disabled, onChange, onBlur, onFocus, }: ControlledCheckboxProps) => React.JSX.Element;
export default ControlledCheckbox;
