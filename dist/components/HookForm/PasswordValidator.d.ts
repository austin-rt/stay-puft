import React from 'react';
import { FieldsType } from '../../types';
import { UseFormReturn } from 'react-hook-form';
export interface PasswordValidatorProps {
    errors: UseFormReturn<FieldsType>['formState']['errors'];
    dirtyFields: UseFormReturn<FieldsType>['formState']['dirtyFields'];
    touchedFields: UseFormReturn<FieldsType>['formState']['touchedFields'];
}
declare const PasswordValidator: ({ errors, touchedFields, }: PasswordValidatorProps) => React.JSX.Element;
export default PasswordValidator;
