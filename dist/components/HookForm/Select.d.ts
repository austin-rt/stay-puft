import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';
import { UseFormProps } from 'react-hook-form';
import { FieldNamesType, FieldValidationMethodType, OptionType } from '../../types';
export interface SelectProps {
    /**
     * the text of the button or selected item
     */
    title: string | ReactNode;
    /**
     * the text of the error
     */
    error?: string;
    /**
     * if  the required should added or not
     */
    required?: boolean;
    /**
     * if  the optional text should be shown or not
     */
    optional?: boolean;
    /**
     * the list options of the button
     */
    options?: OptionType[];
    id?: string;
    name: FieldNamesType;
    theme?: string;
    /**
     * Classes to be added to the `<div>` wrapping the label and select.
     */
    labelTheme?: string;
    /**
     * Classes to be added to the `<label>`.
     */
    selectTheme?: string;
    /**
     * Classes to be added to the `<select>` element.
     */
    register: Function;
    criteriaMode?: UseFormProps['criteriaMode'];
    mode?: UseFormProps['mode'];
    reValidateMode?: UseFormProps['reValidateMode'];
    shouldFocusError?: UseFormProps['shouldFocusError'];
    shouldUnregister?: UseFormProps['shouldUnregister'];
    delayError?: UseFormProps['delayError'];
    validation?: FieldValidationMethodType;
    disabled?: boolean;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
    onFocus?: (e: FocusEvent<HTMLSelectElement>) => void;
}
declare const Select: ({ options, title, error, required, optional, id, theme, labelTheme, selectTheme, register, criteriaMode, mode, reValidateMode, shouldFocusError, shouldUnregister, delayError, name, validation, disabled, onChange, onBlur, onFocus, }: SelectProps) => React.JSX.Element;
export default Select;
