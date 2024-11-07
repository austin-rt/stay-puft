import React, { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

import {
  UseFormRegister,
  UseFormResetField,
  UseFormReturn,
} from 'react-hook-form';

// import HookFormControlledCheckbox from './HookFormControlledCheckbox';
import HookFormCheckbox from './HookFormCheckbox';
import HookFormPasswordValidator from './HookFormPasswordValidator';
import HookFormRadio from './HookFormRadio';
import HookFormSelect from './HookFormSelect';
import StateDropDown from './HookFormStateDropDown';
import HookFormTextArea from './HookFormTextArea';
import HookFormTextInput from './HookFormTextInput';
import {
  ChangeEventTypes,
  FieldNamesType,
  FieldsType,
  FieldType,
  FieldValidationMethodType,
  ModifiedFieldType,
} from '../../types';
import { passwordsWithValidator } from '../configs/consts';

export interface HookFormInputProps {
  /**
   * The control object from the useForm hook.
   * @see https://react-hook-form.com/docs/useform/control
   */
  control: UseFormReturn<FieldsType>['control'];
  /**
   * An object with the user-modified fields. Make sure to provide all inputs' defaultValues via useForm, so the library can compare against the defaultValues.
   * - Important: Make sure to provide defaultValues at the useForm, so hook form can have a single source of truth to compare each field's dirtiness.
   * - Dirty fields will not represent as isDirty formState, because dirty fields are marked field dirty at field level rather the entire form. If you want to determine the entire form state use isDirty instead.
   * @see https://react-hook-form.com/api/useform/formstate `touchedFields` entry
   */
  dirtyFields: UseFormReturn<FieldsType>['formState']['dirtyFields'];
  /**
   * An object with field errors.
   * @see https://react-hook-form.com/docs/useform/formstate `errors` entry
   */
  errors: UseFormReturn<FieldsType>['formState']['errors'];
  /**
   * The field object.
   */
  field: FieldType;
  /**
   * The form's id attribute.
   */
  formId: string;
  /**
   * A function required to assist in browser autofill setting form values.
   */
  handleOnChange: (e: ChangeEventTypes) => void;
  /**
   * The register function from the useForm hook.
   * @see https://react-hook-form.com/docs/useform/register
   */
  register: UseFormRegister<FieldsType>;
  /**
   * The resetField function from the useForm hook.
   * @see https://react-hook-form.com/docs/useform/resetfield
   */
  resetField: UseFormResetField<FieldsType>;
  /**
   * The vertical spacing between radio buttons or checkboxes, the `spacing` prop in the `HookForm` component should be passed here.
   */
  spacing?: string;
  /**
   * An object containing all the inputs the user has interacted with.
   * @see https://react-hook-form.com/api/useform/formstate `touchedFields` entry
   */
  touchedFields: UseFormReturn<FieldsType>['formState']['touchedFields'];
  /**
   * Our custom validation strategy for the field. `all` will use zod validation, `requiredOnly` will only check if the field is required, `none` will skip validation.
   */
  validation: FieldValidationMethodType;
  /**
   * The watch function from the useForm hook.
   * @see https://react-hook-form.com/docs/useform/watch
   */
  watch: UseFormReturn<FieldsType>['watch'];
}

/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly.
 */
const HookFormInput = ({
  dirtyFields,
  errors,
  field,
  formId,
  handleOnChange,
  register,
  resetField,
  spacing,
  // touchedFields,
  validation,
  watch,
}: HookFormInputProps) => {
  const mapAutoComplete = (name: string) => {
    const autoCompleteMap: Record<
      FieldNamesType,
      HTMLInputElement['autocomplete']
    > = {
      addressLine1: 'address-line1',
      addressLine2: 'address-line2',
      billingAddressLine1: 'address-line1',
      captcha: 'off',
      city: 'address-level2',
      currentPassword: 'current-password',
      defaultBilling: 'off',
      defaultShipping: 'off',
      email: 'email',
      firstName: 'given-name',
      defaultDelivery: 'off',
      lastName: 'family-name',
      emailSignup: 'off',
      honeypot: 'off',
      inquiryType: 'off',
      loginPassword: 'current-password',
      message: 'off',
      newPassword: 'new-password',
      name: 'name',
      optionalEmail: 'email',
      phone: 'tel-national',
      state: 'address-level1',
      store: 'off',
      registerPassword: 'new-password',
      salesOrderNumber: 'off',
      sameAsBilling: 'off',
      smsOptIn: 'off',
      validStates: 'off',
      zipCode: 'postal-code',
      verifyPassword: 'new-password',
      zipOrCity: 'off',
    };
    return autoCompleteMap[name as FieldNamesType];
  };

  // set/evaluate some default values
  const fld: ModifiedFieldType = {
    ...field,
    type:
      field.type ||
      (field.name.toLowerCase().includes('password') && 'password') ||
      ((field.name.toLowerCase().includes('phone') ||
        field.name.toLowerCase().includes('zipCode')) &&
        'tel') ||
      (field.name.toLowerCase().includes('state') && 'state') ||
      (field.name.toLowerCase().includes('email') && 'email') ||
      (field.name.toLowerCase().includes('terms') && 'checkbox') ||
      'text',
    autoComplete: mapAutoComplete(field.name) || 'off',
    optional: field?.optional || field?.isToggle || false,
  };

  const throwError = (message: string) => {
    throw new Error(message);
  };

  const password = fld.name.toLowerCase().includes('password')
    ? watch(fld.name)
    : undefined;

  const nonTextInputTypes = [
    'checkbox',
    'radio',
    'button',
    'range',
    'textarea',
    'select',
    'state',
    'captcha',
  ];

  if (fld.name === 'captcha' || fld?.type === 'captcha') return <></>;
  return (
    <div className="relative">
      {fld.name === 'state' && (
        <StateDropDown
          disabled={fld?.disabled}
          error={(errors[fld.name]?.message as string) || ''}
          formId={formId}
          name={fld.name}
          onBlur={fld?.onBlur as (e: FocusEvent<HTMLSelectElement>) => void}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            if (fld?.onChange) fld?.onChange(e);
            handleOnChange(e);
          }}
          onFocus={fld?.onFocus as (e: FocusEvent<HTMLSelectElement>) => void}
          optional={fld.optional}
          register={register}
          title={fld.title}
          validation={validation}
        />
      )}
      {fld?.type === 'textarea' && (
        <HookFormTextArea
          autoComplete={fld.autoComplete}
          autoCorrect={fld.autoCorrect || 'off'}
          disabled={fld?.disabled}
          error={(errors[fld.name]?.message as string) || ''}
          id={`${formId}--${fld.name}`}
          name={fld.name}
          onBlur={fld?.onBlur as (e: FocusEvent<HTMLTextAreaElement>) => void}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            if (fld?.onChange) fld?.onChange(e);
            handleOnChange(e);
          }}
          onFocus={fld?.onFocus as (e: FocusEvent<HTMLTextAreaElement>) => void}
          onKeyDown={
            fld?.onKeyDown as (e: KeyboardEvent<HTMLTextAreaElement>) => void
          }
          onKeyUp={
            fld?.onKeyUp as (e: KeyboardEvent<HTMLTextAreaElement>) => void
          }
          optional={fld.optional}
          placeholder={fld.placeholder}
          register={register}
          spellCheck={fld.spellCheck || false}
          title={fld.title}
          validation={validation}
        />
      )}
      {fld?.type === 'radio' &&
        (fld.options ? (
          <HookFormRadio
            disabled={fld?.disabled}
            error={(errors[fld.name]?.message as string) || ''}
            name={fld.name}
            onBlur={fld?.onBlur as (e: FocusEvent<HTMLInputElement>) => void}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (fld?.onChange) fld?.onChange(e);
              handleOnChange(e);
            }}
            onFocus={fld?.onFocus as (e: FocusEvent<HTMLInputElement>) => void}
            optional={fld.optional}
            options={fld.options}
            register={register}
            title={fld.title}
            validation={validation}
            verticalSpacing={spacing}
          />
        ) : (
          throwError('Radio field must have options')
        ))}
      {
        fld?.type === 'checkbox' && (
          <HookFormCheckbox
            checkTheme={fld.checkTheme}
            disabled={fld?.disabled}
            error={(errors[fld.name]?.message as string) || ''}
            id={`${formId}--${fld.name}`}
            name={fld.name}
            onBlur={fld?.onBlur as (e: FocusEvent<HTMLInputElement>) => void}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (fld?.onChange) fld?.onChange(e);
              handleOnChange(e);
            }}
            onFocus={fld?.onFocus as (e: FocusEvent<HTMLInputElement>) => void}
            optional={fld?.optional}
            register={register}
            theme={fld.theme}
            title={fld.title}
            titleTheme={fld.titleTheme}
            validation={validation}
          />
        )
        // )
      }
      {fld?.type === 'select' &&
        (fld.options ? (
          <HookFormSelect
            disabled={fld?.disabled}
            error={(errors[fld.name]?.message as string) || ''}
            formId={formId}
            id={`${formId}--${fld.name}`}
            labelTheme={fld.titleTheme}
            name={fld.name}
            onBlur={fld?.onBlur as (e: FocusEvent<HTMLSelectElement>) => void}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              if (fld?.onChange) fld?.onChange(e);
              handleOnChange(e);
            }}
            onFocus={fld?.onFocus as (e: FocusEvent<HTMLSelectElement>) => void}
            optional={fld?.optional}
            options={fld.options}
            register={register}
            selectTheme={fld.selectTheme}
            theme={fld.theme}
            title={fld.title}
            validation={validation}
          />
        ) : (
          throwError('Select field must have options')
        ))}
      {fld?.type && !nonTextInputTypes.includes(fld?.type) && (
        <HookFormTextInput
          autoComplete={fld.autoComplete}
          disabled={fld?.disabled}
          error={(errors[fld.name]?.message as string) || ''}
          id={`${formId}--${fld.name}`}
          name={fld.name}
          onBlur={fld?.onBlur as (e: FocusEvent<HTMLInputElement>) => void}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (fld?.onChange) fld?.onChange(e);
            handleOnChange(e);
          }}
          onFocus={fld?.onFocus as (e: FocusEvent<HTMLInputElement>) => void}
          onKeyDown={
            fld?.onKeyDown as (e: KeyboardEvent<HTMLInputElement>) => void
          }
          onKeyUp={fld?.onKeyUp as (e: KeyboardEvent<HTMLInputElement>) => void}
          optional={fld?.optional}
          placeholder={errors[fld.name]?.message ? '' : fld.placeholder}
          register={register}
          resetButton={fld.resetButton}
          resetCallback={resetField}
          // setValueAs={fld?.setValueAs}
          showPasswordButton={fld?.showPasswordButton}
          submitIcon={fld.submitIcon}
          title={fld.title}
          type={fld?.type}
          validation={validation}
        />
      )}
      {fld.tooltip && (
        <div className="absolute right-0 bottom-0 -mb-6 border rounded-b-lg border-_-neutrals-400 bg-white">
          {fld.tooltip}
        </div>
      )}
      {passwordsWithValidator.includes(fld.name) && !fld.disabled && (
        <HookFormPasswordValidator
          password={password}
          fieldName={fld.name}
          errors={errors}
          dirtyFields={dirtyFields}
        />
      )}
    </div>
  );
};

export default HookFormInput;
