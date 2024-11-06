import React from 'react';

import { UseFormReturn } from 'react-hook-form';

import { FieldNamesType, FieldsType } from '../../types';
import { numberRegex, specialCharRegex } from './HookFormValidationSchemas';
import { errorMessages } from './HookFormValidationSchemas';

export interface HookFormPasswordValidatorProps {
  /**
   * An object with field errors.
   * @see https://react-hook-form.com/docs/useform/formstate `errors` entry
   */
  errors: UseFormReturn<FieldsType>['formState']['errors'];
  /**
   * The name of the field to validate.
   */
  fieldName: FieldNamesType;
  /**
   * The value of the password field to validate.
   */
  password?: string;
}

/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<PasswordValidator />` component?
 */
const HookFormPasswordValidator = ({
  password,
  errors,
  fieldName,
}: HookFormPasswordValidatorProps) => {
  const hasError = errors[fieldName];
  const tooShort = password ? password.length < 8 : true;
  const missingSpecialChar = !specialCharRegex.test(password || '');
  const missingNum = !numberRegex.test(password || '');

  const isInvalid = (
    <i
      className="transition-all fa-sharp fa-regular fa-circle-xmark text-_-states-error"
      aria-hidden="true"
    />
  );

  const isValid = (
    <i
      className="transition-all fa-sharp fa-solid fa-circle-check text-_-states-success"
      aria-hidden="true"
    />
  );

  return (
    <section
      id="PasswordValidator"
      className={`bg-white -mt-1 border ${
        hasError ? 'border-_-states-error' : 'border-_-neutrals-400'
      }  border-t-0 rounded-b-md p-3 text-xs text-left`}
    >
      <div className="mb-2">
        <strong>Remember, your password should contain:</strong>
      </div>
      <ul className="text-_-neutrals-700">
        <li>
          {tooShort ? isInvalid : isValid}
          &nbsp; {errorMessages.password.short}
        </li>
        <li>
          {missingSpecialChar ? isInvalid : isValid}
          &nbsp; {errorMessages.password.special}
        </li>
        <li>
          {missingNum ? isInvalid : isValid}
          &nbsp; {errorMessages.password.number}
        </li>
      </ul>
    </section>
  );
};

export default HookFormPasswordValidator;
