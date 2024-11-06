import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';

import { Control, Controller } from 'react-hook-form';

import Checkbox from './HookFormCheckbox';
import {
  FieldNamesType,
  FieldsType,
  FieldValidationMethodType,
} from '../../types';

export interface HookFormControlledCheckboxProps {
  /**
   * A string of Tailwind classes to apply to the custom checkbox.
   */
  checkTheme?: string;
  /**
   * The control object from the useForm hook.
   * @see https://react-hook-form.com/docs/useform/control
   */
  control: Control<FieldsType>;
  /**
   * The data attribute for the field.
   */
  dataAttr?: string;
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
   * A string of Tailwind classes to apply to the `input` tag.
   */
  inputTheme?: string;
  /**
   * The name of the field. The name must match a key in the `validationSchema` object.
   */
  name: FieldNamesType;
  /**
   * The onBlur event handler for the field.
   */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /**
   * The onChange event handler for the field.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The onFocus event handler for the field.
   */
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  /**
   * Should the optional subtext be displayed?
   */
  optional?: boolean;
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
   * A string of Tailwind classes to apply to the field's label.
   */
  theme?: string;
  /**
   * The title of the field.
   */
  title: string | ReactNode;
  /**
   * A string of Tailwind classes to apply to the title.
   */
  titleTheme?: string;
  /**
   * Our custom validation strategy for the field. `all` will use zod validation, `requiredOnly` will only check if the field is required, `none` will skip validation.
   */
  validation?: FieldValidationMethodType;
}

/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<ControlledCheckbox />` component?
 */
const HookFormControlledCheckbox = ({
  checkTheme = '',
  control,
  disabled,
  error,
  id,
  inputTheme = '',
  name,
  onBlur,
  onChange,
  onFocus,
  optional,
  register,
  required,
  theme = '',
  title,
  titleTheme = '',
  validation,
}: HookFormControlledCheckboxProps) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <Checkbox
        id={id}
        theme={theme}
        title={title}
        titleTheme={titleTheme}
        inputTheme={inputTheme}
        checkTheme={checkTheme}
        required={required}
        optional={optional}
        register={register}
        error={error}
        validation={validation}
        disabled={disabled}
        {...field}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    )}
  />
);

export default HookFormControlledCheckbox;
