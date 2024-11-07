import React, { ChangeEvent, FocusEvent, ReactNode } from 'react';

import InputError from '../Common/InputError';

import {
  FieldNamesType,
  FieldValidationMethodType,
  OptionType,
} from '../../types';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import ReqOptIndicator from '../Common/ReqOptIndicator';

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
  optional: boolean;
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
  showTitle = true,
  checkSpacing,
  theme,
  title,
  validation,
  verticalSpacing = 'gap-6',
}: HookFormRadioProps) => (
  <div>
    <div
      className={`relative  hover:bg-white ${theme} border ${
        error && error !== ''
          ? '!border-_-states-error'
          : 'border-_-neutrals-400'
      } bg-white focus-within:drop-shadow-md px-4 pb-4`}
    >
      <fieldset className={`flex flex-col mt-6 ${verticalSpacing}`}>
        <legend
          className={`${
            showTitle
              ? `transition-all absolute left-2 leading-tight -top-2 peer-placeholder-shown:top-3 bg-white font-bold text-xs peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:text-[16px] group-focus-within:font-bold peer-focus-within:text-_-states-infoDark peer-focus-within:-top-2 peer-focus-within:font-bold peer-focus-within:text-xs ${
                  title !== '' ? 'bg-white px-1' : ''
                } z-[999]`
              : 'sr-only'
          }`}
        >
          {title}
          {title && <ReqOptIndicator optional={optional} />}
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
          >
            <input
              {...register(name, {
                required: {
                  value: validation === 'requiredOnly' && !optional,
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
      </fieldset>
    </div>
    <InputError error={error} />
  </div>
);

export default HookFormRadio;
