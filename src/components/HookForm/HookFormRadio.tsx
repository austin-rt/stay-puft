import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';

import InputError from '../slimer/InputError';

import {
  FieldNamesType,
  FieldValidationMethodType,
  OptionType,
} from '../../types';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';

export interface HookFormRadioProps {
  /**
   * The aria-controls HTML attribute for the field.
   */
  ariaControls?: string;
  /**
   * The aria-expanded HTML attribute for the field.
   */
  ariaExpanded?: boolean;
  /**
   * Should the field be disabled?
   */
  disabled?: boolean;
  /**
   * The error message for the field as a string.
   */
  error?: string;
  /**
   * The name of the field. The name must match a key in the `validationSchema` object.
   */
  name: FieldNamesType;
  /**
   * The onBlur event for the field.
   */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /**
   * The onChange event for the field.
   */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  /**
   * The onFocus event for the field.
   */
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  /**
   * Should the optional subtext be displayed?
   */
  optional?: boolean;
  /**
   * The options to display in the radio group.
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
   * Should the title be displayed?
   */
  showTitle?: boolean;
  /**
   * The spacing between the checked radio and the label.
   */
  checkSpacing?: string;
  /**
   * The theme to apply to the `label` tag.
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
  /**
   * The vertical spacing between radio options.
   */
  verticalSpacing?: string;
}

/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<Radio />` component?
 */
const HookFormRadio = ({
  ariaControls,
  ariaExpanded = false,
  disabled,
  error,
  name,
  onBlur,
  onChange,
  onFocus,
  optional,
  options,
  register,
  required,
  showTitle = true,
  checkSpacing,
  theme,
  title,
  validation,
  verticalSpacing = 'gap-6',
}: HookFormRadioProps) => (
  <fieldset className={`flex flex-col ${verticalSpacing}`}>
    <legend className={`${showTitle ? 'block mb-2' : 'sr-only'}`}>
      {title}
      {title && (
        <span>
          {required === true &&
            (optional === false || optional === undefined) && (
              <sup className={`text-_-states-error font-bold`}>{'*'}</sup>
            )}
          {optional === true &&
            (required === false || required === undefined) && (
              <span className="text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1">
                {'(optional)'}
              </span>
            )}
        </span>
      )}
    </legend>
    {options.map((option, index) => (
      <label
        key={option.value}
        htmlFor={`${name}-option-${index}`}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
        className={`group flex w-full items-center cursor-pointer ${
          theme || ''
        }`}
        data-test="puft-checkbox-label"
        data-c="puft--HookFormRadio"
      >
        <input
          {...register(name, {
            required: {
              value: validation === 'requiredOnly' && required,
              message: `Please include a ${toLowerCaseWithSpaces(name)}`,
            },
            disabled,
            onChange: (e: ChangeEvent<HTMLInputElement>) => {
              if (onChange) onChange(e);
            },
            onBlur: (e: FocusEvent<HTMLInputElement>) => {
              if (onBlur) onBlur(e);
            },
          })}
          type="radio"
          value={option.value}
          id={`${name}-option-${index}`}
          tabIndex={0}
          className="sr-only peer transition-all"
          onFocus={(e: FocusEvent<HTMLInputElement>) => {
            if (onFocus) onFocus(e);
          }}
        />
        <span
          className={`mr-2 aspect-square flex justify-center items-center relative w-5 h-5 rounded-full transition-all border-2 border-white outline outline-2 outline-_-neutrals-500/40 peer-focus:ring-misc-selectedMedium/20 peer-focus:ring-offset-4 peer-focus:ring-1 peer-focus-visible:ring-misc-selectedMedium/20 peer-focus-visible:ring-offset-4 peer-focus-visible:ring-1 group-hover:outline-_-misc-selectedMedium group-hover:border-_-misc-selectedLight group-hover:bg-_-misc-selectedLight peer-checked:outline-_-misc-selectedDark peer-checked:bg-_-misc-selectedDark peer-checked:border-_-misc-selectedLight group-hover:peer-checked:bg-_-states-accent group-hover:peer-checked:outline-_-states-accent group-hover:peer-checked:border-white group-hover:peer-disabled:outline-_-neutrals-500/40 group-hover:peer-disabled:border-white group-hover:peer-disabled:bg-white peer-disabled:peer-checked:outline-_-neutrals-500/40 peer-disabled:peer-checked:bg-_-neutrals-500/40 group-hover:peer-disabled:peer-checked:bg-_-neutrals-500/40`}
        />
        <span className={`grow ${checkSpacing || ''}`}>{option.title}</span>
      </label>
    ))}
    <InputError error={error} />
  </fieldset>
);

export default HookFormRadio;
