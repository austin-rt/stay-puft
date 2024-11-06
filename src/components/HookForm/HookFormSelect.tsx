import React, { ChangeEvent, FocusEvent, ReactNode, useRef } from 'react';

import InputError from '../slimer/InputError';

import {
  FieldNamesType,
  FieldValidationMethodType,
  OptionType,
} from '../../types';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';

export interface SelectProps {
  /**
   * Should the field be disabled?
   */
  disabled?: boolean;
  /**
   * The error message for the field as a string.
   */
  error?: string;
  /**
   * The form ID for the field.
   */
  formId: string;
  /**
   * The id of the field.
   */
  id?: string;
  /**
   * A string of Tailwind classes to apply to the label.
   */
  labelTheme?: string;
  /**
   * The name of the field. The name must match a key in the `validationSchema` object.
   */
  name: FieldNamesType;
  /**
   * The onBlur event handler for the field.
   */
  onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
  /**
   * The onChange event handler for the field.
   */
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  /**
   * The onFocus event handler for the field.
   */
  onFocus?: (e: FocusEvent<HTMLSelectElement>) => void;
  /**
   * Should the optional subtext be displayed?
   */
  optional?: boolean;
  /**
   * The options to display in the select dropdown.
   */
  options: OptionType[];
  /**
   * The register function from the `useForm` hook.
   * @see https://react-hook-form.com/docs/useform/register
   */
  register: Function;
  /**
   * Should the field be required
   */
  required?: boolean;
  /**
   * A string of Tailwind classes to apply to the `select` tag.
   */
  selectTheme?: string;
  /**
   * A string of Tailwind classes to apply to the `div` wrapping the `label` tag.
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
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextInput />` component?
 */
const HookFormSelect = ({
  disabled,
  error,
  formId,
  id,
  labelTheme,
  name,
  onBlur,
  onChange,
  onFocus,
  optional,
  options,
  register,
  required,
  selectTheme,
  theme,
  title,
  validation,
}: SelectProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <section data-c="puft--Select" className="relative">
      <div className="w-full">
        <div
          ref={wrapperRef}
          className={`relative transition-all border  bg-white rounded-md hover:border-_-misc-selectedMedium focus-within:border-_-misc-selectedDark group ${
            error ? 'border-_-states-error' : 'border-black'
          } ${theme}`}
        >
          <label
            className={`absolute leading-tight -top-2.5 left-4 justify-center ${
              title !== '' ? 'bg-white px-1' : ''
            } ${labelTheme}`}
            htmlFor={id}
          >
            <span className="transition-all inline-block h-1 group-hover:font-bold group-hover-within:text-sm text-xs">
              {title}
            </span>
            <span>
              {required === true &&
                (optional === false || optional === undefined) && (
                  <span
                    className={`text-_-states-error font-bold text-[smaller] ml-0.5`}
                  >
                    {'*'}
                  </span>
                )}
              {optional === true &&
                (required === false || required === undefined) && (
                  <span className="text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1">
                    {'(optional)'}
                  </span>
                )}
            </span>
          </label>
          <div
            className={`flex justify-between items-center bg-transparent h-11 px-2 text-_-neutrals-900 group-focus:drop-shadow-lg group-focus-within:text-black w-full ${selectTheme}`}
          >
            <select
              ref={selectRef}
              id={`${formId}--${name}`}
              className="h-full w-full bg-transparent appearance-none active:border-none focus:outline-none puft--select"
              style={{
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                appearance: 'none',
                paddingLeft: '8px',
              }}
              onFocus={(e: FocusEvent<HTMLSelectElement>) => {
                if (onFocus) onFocus(e);
              }}
              {...register(name, {
                required: {
                  value: validation === 'requiredOnly' && required,
                  message: `Please choose a ${toLowerCaseWithSpaces(name)}`,
                },
                disabled,
                onChange: (e: ChangeEvent<HTMLSelectElement>) => {
                  if (onChange) onChange(e);
                },
                onBlur: (e: FocusEvent<HTMLSelectElement>) => {
                  if (onBlur) onBlur(e);
                },
              })}
              aria-invalid={error !== '' ? true : undefined}
              defaultValue={options[0]?.value}
            >
              {options.map((option) => (
                <option
                  key={option?.value}
                  value={option?.value}
                  disabled={option?.disabled}
                >
                  {option.title}
                </option>
              ))}
            </select>
            <i className="fa-solid fa-light fa-chevron-down text-black group-hover:text-_-misc-selectedMedium group-focus-within:text-_-misc-selectedDark" />
          </div>
        </div>
        <div className="w-full absolute px-2">
          <InputError error={error} />
        </div>
      </div>
    </section>
  );
};

export default HookFormSelect;
