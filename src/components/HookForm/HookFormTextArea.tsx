import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
} from 'react';

import InputError from '../Common/InputError';

import { FieldNamesType, FieldValidationMethodType } from '../../types';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import ReqOptIndicator from '../Common/ReqOptIndicator';

export interface HookFormTextAreaProps {
  /**
   * The aria-describedby HTML attribute for the field.
   */
  ariaDescribedby?: string;
  /**
   * The autocomplete HTML attribute for the field.
   */
  autoComplete?: string;
  /**
   * Should the field be auto-corrected?
   */
  autoCorrect?: 'on' | 'off';
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
   * A string of Tailwind classes to apply to the `textarea` tag.
   */
  inputTheme?: string;
  /**
   * A string of Tailwind classes to apply to the `label` tag.
   */
  labelTheme?: string;
  /**
   * The name of the field. The name must match a key in the `validationSchema` object.
   */
  name: FieldNamesType;
  /**
   * The onBlur event handler for the field.
   */
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * The onChange event handler for the field.
   */
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  /**
   * The onFocus event handler for the field.
   */
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  /**
   * The onKeyDown event handler for the field.
   */
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  /**
   * The onKeyUp event handler for the field.
   */
  onKeyUp?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  /**
   * Should the optional subtext be displayed?
   */
  optional: boolean;
  /**
   * The placeholder text to display in the field.
   */
  placeholder?: string;
  /**
   * The register function from the `useForm` hook.
   * @see https://react-hook-form.com/docs/useform/register
   */
  register: Function;
  /**
   * The number of rows to display in the textarea.
   */
  rows?: number;
  /**
   * Run input value through this function before validation. Only valid on text inputs.
   */
  // setValueAs?: RegisterOptions['setValueAs'];
  /**
   * Should the field be spell-checked?
   */
  spellCheck?: boolean;
  /**
   * A string of Tailwind classes to apply to the `div` tag wrapping the component.
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
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextArea />` component?
 */
const HookFormTextArea = ({
  ariaDescribedby,
  autoComplete,
  autoCorrect,
  disabled,
  error,
  id,
  inputTheme,
  labelTheme,
  name,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onKeyUp,
  optional,
  placeholder,
  register,
  rows = 2,
  spellCheck = false,
  // setValueAs,
  theme = 'border-_-neutrals-400 hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark',
  title,
  validation,
}: HookFormTextAreaProps) => (
  <section className="relative group">
    <div className="w-full">
      <div
        className={`relative  hover:bg-white ${theme} border ${
          error && error !== '' ? '!border-_-states-error' : null
        } bg-white focus-within:drop-shadow-md`}
      >
        <label
          className={`transition-all absolute  bg-white leading-tight -top-2.5 left-2 justify-center z-[999] ${labelTheme}`}
          htmlFor={id}
        >
          {title && (
            <span className="transition-all inline-block h-1 font-bold text-xs text-md group-focus-within:text-_-misc-selectedDark">
              {title}
              <ReqOptIndicator optional={optional} />
            </span>
          )}
        </label>
        <textarea
          autoCorrect={autoCorrect ? 'on' : 'off'}
          autoComplete={autoComplete}
          className={`block bg-white active:border-none border-slate-300 h-12 p-2  focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ${inputTheme}`}
          id={id}
          name={name}
          placeholder={placeholder}
          rows={rows}
          aria-invalid={error !== '' ? true : undefined}
          aria-describedby={ariaDescribedby}
          onKeyUp={(e: KeyboardEvent<HTMLTextAreaElement>) =>
            onKeyUp && onKeyUp(e)
          }
          onKeyDown={(e: KeyboardEvent<HTMLTextAreaElement>) =>
            onKeyDown && onKeyDown(e)
          }
          onFocus={(e: FocusEvent<HTMLTextAreaElement>) =>
            onFocus && onFocus(e)
          }
          {...register(name, {
            required: {
              value: validation === 'requiredOnly' && !optional,
              message: `Please include a ${toLowerCaseWithSpaces(name)}`,
            },
            disabled,
            onChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
              if (onChange) onChange(e);
            },
            onBlur: (e: FocusEvent<HTMLTextAreaElement>) => {
              if (onBlur) onBlur(e);
            },
            // setValueAs: (value: any) => {
            //   if (setValueAs) setValueAs(value);
            // },
          })}
          spellCheck={spellCheck}
        />
        <div className="w-full absolute px-2 z-[9999]">
          <InputError error={error} />
        </div>
      </div>
    </div>
  </section>
);

export default HookFormTextArea;
