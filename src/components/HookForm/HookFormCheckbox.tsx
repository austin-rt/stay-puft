import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';

import InputError from '../Common/InputError';

import { FieldNamesType, FieldValidationMethodType } from '../../types';
import ReqOptIndicator from '../Common/ReqOptIndicator';

export interface HookFormCheckboxProps {
  /**
   * A string of Tailwind classes to apply to the custom checkbox.
   */
  checkTheme?: string;
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
  optional: boolean;
  /**
   * The register function from the `useForm` hook.
   * @see https://react-hook-form.com/docs/useform/register
   */
  register: Function;
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
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<Checkbox />` component?
 */
const HookFormCheckbox = ({
  checkTheme = '',
  disabled,
  error,
  id,
  inputTheme = '',
  name,
  onBlur,
  onChange,
  onFocus,
  optional = false,
  register,
  theme = '',
  title,
  titleTheme = '',
  validation,
}: HookFormCheckboxProps) => (
  <>
    <label
      htmlFor={id}
      className={`flex items-center text-xs group rounded-md py-2 px-2 cursor-pointer border ${
        error
          ? 'border-_-states-error bg-_-states-errorLight hover:border-_-misc-selectedMedium hover:bg-white'
          : 'border-transparent'
      } ${theme}`}
    >
      <input
        {...register(name, {
          required: {
            value: validation === 'requiredOnly' && !optional,
            message: 'Please accept',
          },
          disabled,
          onChange: (e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
          },
          onBlur: (e: FocusEvent<HTMLInputElement>) => {
            if (onBlur) onBlur(e);
          },
        })}
        className="sr-only peer"
        type="checkbox"
        aria-invalid={error !== '' ? true : undefined}
        id={id}
        onFocus={(e: FocusEvent<HTMLInputElement>) => {
          if (onFocus) onFocus(e);
        }}
      />
      <div
        className={`relative flex justify-center w-6 h-6 border-2 ${
          error
            ? 'border-_-states-error bg-_-states-errorLight text-_-states-errorLight'
            : 'border-gray-400 bg-_-nib-legacyText text-white'
        } peer-focus:outline-black peer-focus:outline-dashed peer-focus:outline-1 peer-focus-visible:outline-black peer-focus-visible:outline-dashed peer-focus-visible:outline-1 peer-checked:bg-_-misc-selectedMedium peer-checked:border-_-misc-selectedDark group-hover:border-_-misc-selectedMedium group-hover:text-_-misc-selectedLight group-hover:bg-_-misc-selectedLight group-hover:peer-checked:text-_-states-accent group-hover:peer-checked:border-_-states-accent group-hover:peer-checked:bg-_-states-accentLight group-hover:peer-disabled:text-opacity-0 group-hover:peer-checked:peer-disabled:text-opacity-100 group-hover:peer-checked:peer-disabled:text-_-imperfect-400/20 group-hover:peer-disabled:bg-_-imperfect-400/20 group-hover:peer-disabled:border-_-imperfect-400/20 peer-disabled:bg-_-imperfect-400/20 peer-disabled:border-_-imperfect-400/20 peer-disabled:text-opacity-0 peer-checked:peer-disabled:text-opacity-100 peer-checked:peer-disabled:text-_-imperfect-400/20 ${inputTheme}`}
      >
        <div className={`fa fa-check p-1 aspect-square ${checkTheme}`} />
      </div>
      {title && (
        <span
          className={`peer-disabled:text-_-imperfect-400/40 group-hover:peer-disabled:text-_-imperfect-400/40 group-hover:peer-checked:peer-disabled:text-_-imperfect-400/40 pl-3 ${titleTheme}`}
        >
          {title}
          <ReqOptIndicator optional={optional} />
        </span>
      )}
    </label>
    {error && <InputError theme="sr-only" error={error} />}
  </>
);

export default HookFormCheckbox;
