import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';
import { UseFormProps } from 'react-hook-form';
import { FieldNamesType, FieldValidationMethodType, OptionType } from '../../types';
export interface RadioProps {
    /**
     * A function that will run after the input  has changed, it will return the value of the input for you to use in the parent component.
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Should the checkbox show as checked or not.
     */
    checked?: boolean;
    /**
     * A custom data attribute value you can pass to hook into the input if needed.
     */
    dataAttr?: string;
    /**
     * Should the input be disabled or not. Use with a state var to determine when the input can be edited.
     */
    disabled?: boolean;
    /**
     * the name of the group
     */
    name: FieldNamesType;
    /**
     * Classes to be added to the wrapping label.
     */
    theme?: string;
    options: OptionType[];
    /**
     * The spacing of the text as a tailwind class, e.g. `pl-3`.
     */
    spacing?: string;
    /**
     * Classes to be added to the input element.
     */
    inputTheme?: string;
    ariaExpanded?: boolean;
    ariaControls?: string;
    register: Function;
    criteriaMode?: UseFormProps['criteriaMode'];
    mode?: UseFormProps['mode'];
    reValidateMode?: UseFormProps['reValidateMode'];
    shouldFocusError?: UseFormProps['shouldFocusError'];
    shouldUnregister?: UseFormProps['shouldUnregister'];
    delayError?: UseFormProps['delayError'];
    error?: string;
    verticalSpacing?: string;
    title: string | ReactNode;
    showTitle?: boolean;
    required?: boolean;
    optional?: boolean;
    validation?: FieldValidationMethodType;
}
declare const Radio: ({ name, theme, spacing, ariaExpanded, ariaControls, register, criteriaMode, mode, reValidateMode, shouldFocusError, shouldUnregister, delayError, options, error, verticalSpacing, title, showTitle, optional, required, validation, disabled, onChange, onBlur, onFocus, }: RadioProps) => React.JSX.Element;
export default Radio;
