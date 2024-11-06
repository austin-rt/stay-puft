import React, {
  useState,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ReactNode,
} from 'react';
import Button from '../slimer/Button';
import InputError from '../slimer/InputError';
import UseMaskPhone from '../utils/maskPhone';
import { ButtonProps } from '../slimer/Button';
import { UseFormProps } from 'react-hook-form';

import { FieldNamesType, FieldValidationMethodType } from '../../types';
import {
  errorMessages,
  passwordsWithValidator,
} from './HookFormValidationSchemas';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';

export interface HookFormTextInputProps {
  ariaDescribedby?: string;
  arialabel?: string | undefined;
  autoComplete?: HTMLInputElement['autocomplete'];
  autoCorrect?: boolean;
  baseTheme?: string;
  buttonRounded?: boolean;
  buttonSize?: ButtonProps['size'];
  buttonTheme?: string;
  buttonVariant?: ButtonProps['variant'];
  disabled?: boolean;
  display?: string;
  error?: string;
  id?: string;
  inputTheme?: string;
  labelTheme?: string;
  name: FieldNamesType;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
  optional?: boolean;
  placeholder?: string;
  register: Function;
  required?: boolean;
  resetButton?: boolean;
  resetCallback?: Function;
  /**
   * Run input value through this function before validation. Only valid on text inputs.
   */
  // setValueAs?: RegisterOptions['setValueAs'];
  showPasswordButton?: boolean;
  size?: number;
  submitIcon?: string;
  theme?: string;
  title: string | ReactNode;
  type?: string;
  validation?: FieldValidationMethodType;
  criteriaMode?: UseFormProps['criteriaMode'];
}

/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<TextInput />` component?
 */
const HookFormTextInput = ({
  ariaDescribedby,
  arialabel,
  autoComplete,
  autoCorrect = false,
  baseTheme = '',
  buttonRounded,
  buttonSize,
  buttonTheme,
  buttonVariant = 'default',
  disabled,
  error = '',
  id = '',
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
  required,
  resetButton = false,
  resetCallback,
  // setValueAs,
  showPasswordButton = true,
  size = 50,
  submitIcon,
  theme,
  title = '',
  type = 'text',
  validation,
  criteriaMode,
}: HookFormTextInputProps) => {
  const [inputType, inputTypeSetter] = useState(
    ((type.toLowerCase().includes('password') ||
      name.toLowerCase().includes('password')) &&
      'password') ||
      ((type.toLowerCase().includes('number') ||
        name.toLowerCase().includes('number') ||
        name.toLowerCase() === 'zipcode' ||
        name.toLowerCase().includes('phone')) &&
        'tel') ||
      ((name.toLowerCase().includes('email') ||
        type.toLowerCase().includes('email')) &&
        'email') ||
      type
  );

  const passwordErrorValues = Object.values(errorMessages.password).filter(
    (value) => value !== errorMessages.password.sameAsCurrent
  );

  return (
    <section
      data-c="puft--HookFormTextInput"
      className={`${baseTheme} relative ${name === 'honeypot' && 'sr-only'}`}
    >
      <div className="w-full">
        <div
          className={`relative flex items-center hover:border-_-misc-selectedMedium active:border-_-misc-selectedDark focus-within:border-_-misc-selectedDark hover:bg-white z-99 ${theme} border group ${
            error !== '' ? 'border-_-states-error' : 'border-_-neutrals-400'
          }`}
        >
          <input
            autoComplete={autoComplete}
            autoCorrect={autoCorrect ? 'on' : 'off'}
            className={`peer inputClass placeholder:text-_-neutrals-900 bg-white active:border-none border-slate-300 h-11 px-2 focus:drop-shadow-lg focus:rounded-none focus:outline-none focus:border-black focus:ring-black w-full ${inputTheme}`}
            id={id}
            placeholder={placeholder}
            size={size}
            type={inputType}
            aria-invalid={error !== '' ? true : undefined}
            aria-label={arialabel}
            aria-describedby={ariaDescribedby}
            onFocus={(e: FocusEvent<HTMLInputElement>) => {
              if (onFocus) onFocus(e);
            }}
            onKeyUp={(e: KeyboardEvent<HTMLInputElement>) => {
              if (onKeyUp) onKeyUp(e);
            }}
            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
              if (onKeyDown) onKeyDown(e);
            }}
            {...register(name, {
              required: {
                value: validation === 'requiredOnly' && required,
                message: `Please include a ${toLowerCaseWithSpaces(name)}`,
              },
              disabled,
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                if (name.toLowerCase().includes('phone')) {
                  e.target.value = UseMaskPhone(e.target.value);
                }
                if (name.toLowerCase() === 'zipcode') {
                  e.target.value = e.target.value.replace(/\D/g, '');
                  if (e.target.value.length > 5) {
                    e.target.value = e.target.value.substring(0, 5);
                  }
                }
                if (onChange) onChange(e);
              },
              onBlur: (e: FocusEvent<HTMLInputElement>) => {
                if (onBlur) onBlur(e);
              },
              // setValueAs,
              criteriaMode,
            })}
          />
          <label
            className={`transition-all absolute left-2 leading-tight -top-2 peer-placeholder-shown:top-3 bg-white font-bold text-xs peer-placeholder-shown:text-gray-600 peer-placeholder-shown:font-normal peer-placeholder-shown:text-[16px] group-focus-within:font-bold peer-focus-within:text-_-states-infoDark peer-focus-within:-top-2 peer-focus-within:font-bold peer-focus-within:text-xs ${
              title !== '' ? 'bg-white px-1' : ''
            } z-[999] ${labelTheme}`}
            htmlFor={id}
          >
            <span>{title}</span>
            <span>
              {required === true &&
                (optional === false || optional === undefined) && (
                  <sup
                    className={`text-_-states-error font-bold text-xs ml-0.5`}
                  >
                    {'*'}
                  </sup>
                )}
              {optional === true &&
                (required === false || required === undefined) && (
                  <sup className="text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1">
                    {'(optional)'}
                  </sup>
                )}
            </span>
          </label>
          <div className="flex">
            {type.toLowerCase().includes('password') && showPasswordButton && (
              <Button
                disabled={disabled}
                variant={buttonVariant}
                ghost
                callback={() => {
                  inputTypeSetter(
                    inputType === 'password' ? 'text' : 'password'
                  );
                }}
                ariaControls={id}
                ariaExpanded={false}
                title={`${inputType === 'password' ? 'Show' : 'Hide'}`}
                rounded={buttonRounded}
                size={buttonSize}
                theme={`bg-transparent hover:bg-trasparent text-xs text-_-neutrals-900 border-0 border-none ${buttonTheme}`}
              />
            )}
            {!type.toLowerCase().includes('password') && submitIcon && (
              <>
                {/* ignore button callback required prop */}
                {/* @ts-ignore-next-line */}
                <Button
                  disabled={disabled}
                  variant="custom"
                  theme="group border-none"
                  type="submit"
                  title={
                    <i className="group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" />
                  }
                  trailingIcon={submitIcon}
                />
              </>
            )}
            {!type.toLowerCase().includes('password') &&
              resetButton &&
              !submitIcon && (
                <Button
                  disabled={disabled}
                  variant="custom"
                  theme="group border-none"
                  type="reset"
                  callback={(_e: any) => resetCallback && resetCallback(name)}
                  title={
                    <i className="fa-solid fa-sharp fa-rotate-left group-disabled:text-_-imperfect-400/40 group-disabled:active:border-none" />
                  }
                />
              )}
          </div>
        </div>
        <div className="w-full absolute px-2 z-[99]">
          <InputError
            error={
              passwordsWithValidator.includes(name) &&
              passwordErrorValues.includes(error)
                ? ''
                : error
            }
          />
        </div>
      </div>
    </section>
  );
};

export default HookFormTextInput;
