import React, { ChangeEvent, FocusEvent } from 'react';
import { UseFormProps } from 'react-hook-form';
import { FieldValidationMethodType } from '../../types';
export interface StateDropDownProps {
    register: Function;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
    onFocus?: (e: FocusEvent<HTMLSelectElement>) => void;
    criteriaMode?: UseFormProps['criteriaMode'];
    mode?: UseFormProps['mode'];
    reValidateMode?: UseFormProps['reValidateMode'];
    shouldFocusError?: UseFormProps['shouldFocusError'];
    shouldUnregister?: UseFormProps['shouldUnregister'];
    delayError?: UseFormProps['delayError'];
    error: string;
    invalidStates?: Array<string>;
    invalidStateErrorMessage?: string;
    theme?: string;
    selectTheme?: string;
    labelTheme?: string;
    required?: boolean;
    optional?: boolean;
    validation?: FieldValidationMethodType;
    disabled?: boolean;
}
declare const StateDropDown: ({ register, error, theme, selectTheme, labelTheme, required, optional, validation, criteriaMode, mode, reValidateMode, shouldFocusError, shouldUnregister, delayError, disabled, onChange, onBlur, onFocus, }: StateDropDownProps) => React.JSX.Element;
export default StateDropDown;
