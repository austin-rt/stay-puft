import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FieldNamesType, FieldsType } from '../../types';
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
declare const HookFormPasswordValidator: ({ password, errors, fieldName, }: HookFormPasswordValidatorProps) => React.JSX.Element;
export default HookFormPasswordValidator;
