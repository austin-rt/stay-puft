import React, { ReactNode, useEffect, useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import Alert from '../slimer/Alert';
import Button, { ButtonProps } from '../slimer/Button';
import ReCAPTCHA from 'react-google-recaptcha-enterprise';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  UseFormProps,
} from 'react-hook-form';
import { z } from 'zod';

import HookFormInput from './HookFormInput';
import {
  ChangeEventTypes,
  FieldNamesType,
  FieldsType,
  FieldType,
  FieldValidationMethodType,
} from '../../types';
import { validationSchemas } from './HookFormValidationSchemas';
import { toLowerCaseWithSpaces } from '../utils/toLowerCaseWithSpaces';
import scrollToElement from '../utils/scrollToElement';

export interface HookFormProps {
  /**
   * Should the submit button be disabled?
   */
  disableSubmit?: boolean;
  /**
   * Should the handleSubmit callback run on blur?
   */
  callbackOnBlur?: boolean;
  /**
   * Should the form collect all errors or only the first one?
   * @default 'all'
   * @see https://react-hook-form.com/docs/useform#criteriaMode
   * */
  criteriaMode?: UseFormProps['criteriaMode'];
  /**
   * The delay for error messages
   * @default 500
   * @see https://react-hook-form.com/docs/useform#delayError
   * */
  delayError?: UseFormProps['delayError'];
  /**
   * A disclaimer to be shown at the bottom of the form
   * */
  disclaimer?: string | ReactNode;
  /**
   * The error message for the form
   */
  errorMessage?: string;
  /**
   * The fields to be shown in the form
   * */
  fields: FieldType[];
  /**
   * The fields to programaticlly fill the form with
   * */
  fillValues?: { title: string; data: { [key in FieldNamesType]?: string } }[];
  /**
   * A callback to run when form programatically fills
   * */
  fillValuesCallback?: (values: any) => void;
  /**
   * Should the required legend be hidden
   * @default false
   * */
  hideRequiredLegend?: boolean;
  /**
   * The id of the form
   * */
  id: string;
  /**
   * The mode for the form
   * @default 'onTouched'
   * @see https://react-hook-form.com/docs/useform#mode
   * */
  mode?: UseFormProps['mode'];
  /**
   * A function to run when there is an error
   * @see https://react-hook-form.com/docs/useform#onError
   * */
  onError?: SubmitErrorHandler<FieldsType>;
  /**
   * A function to run when the form is submitted
   * @see https://react-hook-form.com/docs/useform#onSubmit
   * */
  onSubmit: SubmitHandler<FieldsType>;
  /**
   * A function to run when the reset button is clicked
   * */
  resetButtonCallback?: () => void;
  /**
   * Should the reset button have the ghost styling
   * @default false
   * */
  resetButtonGhost?: boolean;
  /**
   * Should the reset button show
   * @default false
   * */
  resetButtonShow?: boolean;
  /**
   * The theme for the reset button as a string of tailwind classes
   * */
  resetButtonTheme?: string;
  /**
   * The title for the reset button
   * @default 'Reset'
   * */
  resetButtonTitle?: string;
  /**
   * The variant for the reset button
   * @default 'secondary'
   *
   * */
  resetButtonVariant?: ButtonProps['variant'];
  /**
   * Should the form reset on successful submit?
   * @default true
   * */
  resetOnSubmit?: boolean;
  /**
   * The revalidate mode for the form
   * @default 'onChange'
   * @see https://react-hook-form.com/docs/useform#reValidateMode
   * */
  reValidateMode?: UseFormProps['reValidateMode'];
  /**
   * Should the form focus on the first error
   * @default true
   * @see https://react-hook-form.com/docs/useform#shouldFocusError
   * */
  shouldFocusError?: UseFormProps['shouldFocusError'];
  /**
   * Pass in a boolean to show or hide the form
   * @default true
   * */
  showForm?: boolean;
  /**
   * Should the success message show after the form is submitted?
   * @default false
   * */
  showSuccessMessage?: boolean;
  /**
   * The spacing of the form as a tailwind class
   * @default 'gap-9'
   * */
  spacing?: string;
  /**
   * Should the submit button have the ghost styling
   * @default false
   * */
  submitButtonGhost?: boolean;
  /**
   * Should the button be rounded
   * */
  submitButtonRounded?: ButtonProps['rounded'];
  /**
   * Should the submit button show
   * @default true
   * */
  submitButtonShow?: boolean;
  /**
   * The theme for the submit button as a string of tailwind classes
   * */
  submitButtonTheme?: string;
  /**
   * The title for the submit button
   * @default 'Submit'
   * */
  submitButtonTitle?: string;
  /**
   * The variant for the submit button
   * @default 'primary'
   * */
  submitButtonVariant?: ButtonProps['variant'];
  /**
   * A function to run when the form is successfully submitted
   */
  successCallback?: Function;
  /**
   * The success message for the form
   */
  successMessage?: string;
  /**
   * The theme for the form as a string of tailwind classes
   * */
  theme?: string;
  /**
   * The title for the form
   */
  title?: string | ReactNode;
  /**
   * Our custom validation strategy for the field. `all` will use zod validation, `requiredOnly` will only check if the field is required, `none` will skip validation.
   */
  validation?: FieldValidationMethodType;
}

/**
 * This is a form component that uses react-hook-form with zod validation under the hood. The styling is dependant on Tailwindcss as well as some prebuilt components and tailwind variables from  the nwc-slimer library.
 * @see https://americanfreight.atlassian.net/wiki/spaces/AC/pages/2510028805/Hook+Forms+Component+Usage
 */
const HookForm = ({
  callbackOnBlur,
  criteriaMode = 'all',
  delayError = 500,
  disclaimer,
  disableSubmit,
  errorMessage,
  fields,
  fillValues,
  fillValuesCallback,
  hideRequiredLegend = false,
  id,
  mode = 'onTouched',
  onError,
  onSubmit,
  resetButtonCallback,
  resetButtonGhost = false,
  resetButtonShow = false,
  resetButtonTheme,
  resetButtonTitle = 'Reset',
  resetButtonVariant = 'secondary',
  resetOnSubmit = false,
  reValidateMode = 'onChange',
  shouldFocusError = true,
  showForm = true,
  showSuccessMessage = false,
  spacing = 'gap-9',
  submitButtonGhost = false,
  submitButtonRounded = false,
  submitButtonShow = true,
  submitButtonTheme,
  submitButtonTitle = 'Submit',
  submitButtonVariant = 'primary',
  successCallback,
  successMessage,
  title,
  theme = 'p-4',
  validation = 'full',
}: HookFormProps) => {
  if (!fields) {
    throw new Error('Fields are required for the HookForm component');
  }
  // make sure all fields have a validation schema
  fields.forEach((field) => {
    if (!validationSchemas[field.name])
      throw new Error(
        `Validation schema for field '${field.name}' is missing
        in validationSchemas.ts`
      );
  });

  // remove hidden fields
  const visibleFields = fields.filter((f) => !f.hidden);

  // sort fields so that the captcha field is always last
  // eslint-disable-next-line no-param-reassign
  const sortedFields = visibleFields.sort((a, b) => {
    if (a.name === 'captcha') return 1;
    if (b.name === 'captcha') return -1;
    return 0;
  });

  // set default values
  const defaultValues = {
    ...sortedFields.reduce(
      (acc, f) => ({ ...acc, [f.name]: f.defaultValue }),
      {}
    ),
    captcha: undefined,
  };

  // fetch validation schema
  const schema = z.object({
    ...sortedFields.reduce(
      (acc, f) => ({
        ...acc,
        [f.name]: validationSchemas[f.name],
      }),
      {}
    ),
  });

  const {
    // clearErrors,
    control,
    getValues,
    handleSubmit,
    register,
    reset,
    resetField,
    setError,
    setValue,
    unregister,
    watch,
    formState: {
      dirtyFields,
      disabled,
      errors,
      // isDirty,
      // isSubmitSuccessful,
      isValid,
      touchedFields,
      submitCount,
    },
  } = useForm<FieldsType>({
    criteriaMode,
    defaultValues,
    delayError,
    mode,
    resolver: validation === 'full' ? zodResolver(schema) : undefined,
    reValidateMode,
    shouldFocusError,
  });

  const [hiddenFields, setHiddenFields] = useState<FieldNamesType[]>([
    ...sortedFields
      .filter((f) => f.isToggle && !f.defaultValue)
      .map((f) => f.name),
  ]);

  const [submitSuccessMessage, setSubmitSuccessMessage] = useState<string>('');

  const successAlertId = `HookForm--${id}--successAlert`;
  const errorAlertRootId = `HookForm--${id}--errorAlertRoot`;
  const errorAlertFieldsId = `HookForm--${id}--errorAlertFields`;

  const handleOnChange = (e: ChangeEventTypes) => {
    const typesToSkip = ['checkbox', 'captcha'];
    if (typesToSkip.includes(e.target.type)) return;
    const { value } = e.target;
    const name = e.target.name as FieldNamesType;
    setValue(name, value);
  };

  const submitHandler = async (data: FieldsType) => {
    try {
      await onSubmit(data);
    } catch (err: any) {
      console.error(`Error submitting ${id}. Error: ${err.message}`);
      if (err.message) {
        setError('root', {
          message: err.message,
        });
        setTimeout(() => {
          scrollToElement(`#${errorAlertRootId}`);
        }, 100);
      }
    }
  };

  const errorFields = [
    ...new Set(
      Object.keys(errors).map(
        (field) =>
          (field.toLowerCase().includes('password') && 'password') ||
          (field.toLowerCase().includes('address') && 'address') ||
          field
      )
    ),
  ];

  const prettifyErrorFields = () => {
    const flds = Object.keys(errors).filter(
      (field) =>
        !field.toLowerCase().includes('optional') &&
        !field.toLowerCase().includes('terms')
    );
    if (flds.length === 0) return undefined;
    if (flds.length > 3) {
      return 'Please fill out all required fields.';
    }
    const fieldsSet = [
      ...new Set(
        Object.keys(errors).map((field) => {
          if (field.toLowerCase().includes('password')) return 'password';

          if (field.toLowerCase().includes('address')) return 'address';
          if (field.toLowerCase().includes('phone')) return 'phone number';
          if (field.toLowerCase().includes('terms')) return undefined;
          return field;
        })
      ),
    ];
    return `Please fill out your ${fieldsSet
      .map((field, index) => {
        if (!field) return '';
        if (index === 0) {
          return ` ${toLowerCaseWithSpaces(field)}`;
        }
        if (flds.length > 2 && index === flds.length - 1) {
          return ` and ${toLowerCaseWithSpaces(field)}`;
        }
        if (flds.length === 2 && index === 1) {
          return ` and ${toLowerCaseWithSpaces(field)}`;
        }
        return `, ${toLowerCaseWithSpaces(field)}`;
      })
      .filter((field) => !!field !== false)
      .join('')}.`;
  };

  useEffect(() => {
    scrollToElement(`#${errorAlertFieldsId}`);
  }, [errorFields?.length, errorAlertFieldsId]);

  useEffect(() => {
    if (errorMessage)
      setError('root', {
        message: errorMessage,
      });
  }, [errorMessage, setError]);

  useEffect(() => {
    if (errorMessage) {
      setError('root', {
        message: errorMessage,
      });
    } else {
      if (showSuccessMessage && successMessage)
        setSubmitSuccessMessage(successMessage);
      if (successCallback) successCallback();
      if (resetOnSubmit) reset();
      // give browser time to paint before scrolling
      setTimeout(() => {
        scrollToElement(`#${successAlertId}`);
      }, 100);
      setTimeout(() => {
        if (showSuccessMessage) setSubmitSuccessMessage('');
      }, 5000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitCount]);

  return showForm === false ? (
    <div id={`HookForm--${id}--empty`} className="hidden" />
  ) : (
    <form
      id={`HookForm--${id}`}
      onSubmit={handleSubmit(submitHandler, onError)}
      onBlur={
        callbackOnBlur === true && isValid === true
          ? handleSubmit(submitHandler, onError)
          : undefined
      }
      noValidate
      className={` bg-white ${theme || ''}`}
      aria-hidden={theme?.includes('hidden') ? true : undefined}
    >
      {fillValues && (
        <span className="flex justify-evenly mb-8">
          {fillValues.map((fillValue) => (
            <Button
              key={fillValue.title}
              variant="secondary"
              title={fillValue.title}
              callback={() => {
                Object.entries(fillValue.data).forEach(([key, value]) => {
                  setValue(key as FieldNamesType, value, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                  });
                });
                if (fillValuesCallback) fillValuesCallback(fillValue.data);
              }}
            />
          ))}
        </span>
      )}
      <div
        className={`w-full flex mb-3 ${
          errorFields?.length > 0 || errors?.root || successMessage !== ''
            ? 'flex-col gap-2'
            : 'flex-row'
        }`}
      >
        {title && <div className="mr-auto w-full">{title}</div>}
        {errors?.root &&
          errors?.root?.message &&
          errors?.root?.message !== '' && (
            <Alert
              id={errorAlertRootId}
              close={false}
              callback={() => null}
              variant="error"
            >
              <span>
                <div>{errors?.root?.message as string}</div>
              </span>
            </Alert>
          )}
        {!errors?.root && prettifyErrorFields() && (
          <Alert
            callback={() => null}
            variant="error"
            id={errorAlertFieldsId}
            close={false}
          >
            <span>{prettifyErrorFields()}</span>
          </Alert>
        )}

        {showSuccessMessage && submitSuccessMessage && (
          <Alert
            close={false}
            callback={() => null}
            variant="success"
            id={successAlertId}
          >
            <span>{submitSuccessMessage}</span>
          </Alert>
        )}

        {sortedFields.some((field) => field.required) &&
          !hideRequiredLegend && (
            <div
              className={`w-full text-xxs flex items-center justify-end -mb-3`}
            >
              <span className="text-_-secondary-0 text-base">*</span>
              <span>indicates a required field</span>
            </div>
          )}
      </div>
      <div className="flex flex-col gap-12 mt-2">
        {sortedFields.map((field) => {
          if (field.hidden) return null;
          if (field.isToggle) {
            if (hiddenFields.includes(field.name)) {
              return (
                <div className="w-full text-[smaller] -my-6" key={field.name}>
                  <button
                    type="button"
                    id={`${field.name}--add`}
                    className="block w-max ml-auto cursor-pointer underline border border-transparent"
                    onClick={() => {
                      setValue(field.name, field.defaultValue as string);
                      setHiddenFields([
                        ...hiddenFields.filter((f) => f !== field.name),
                      ]);
                    }}
                  >
                    Add {field.title}
                  </button>
                </div>
              );
            }
            if (
              !hiddenFields.includes(field.name) &&
              getValues(field.name) === field.defaultValue
            ) {
              return (
                <span key={field.name} className="-mt-6">
                  <div className={`w-full text-[smaller] mb-3`}>
                    <button
                      type="button"
                      id={`${field.name}--remove`}
                      className="block w-max ml-auto cursor-pointer underline border border-transparent"
                      onClick={() => {
                        setValue(field.name, undefined);
                        if (!hiddenFields.includes(field.name)) {
                          setHiddenFields([...hiddenFields, field.name]);
                        }
                        unregister(field.name);
                      }}
                    >
                      Remove {field.title}
                    </button>
                  </div>
                  <HookFormInput
                    handleOnChange={handleOnChange}
                    control={control}
                    watch={watch}
                    dirtyFields={dirtyFields}
                    errors={errors}
                    field={field}
                    formId={id}
                    register={register}
                    resetField={resetField}
                    spacing={spacing}
                    touchedFields={touchedFields}
                    validation={validation}
                  />
                </span>
              );
            }
          }
          if (field.type === 'captcha' || field.name === 'captcha') {
            if (!field.captchaKey) {
              throw new Error('captchaKey is required for captcha field');
            }
            return (
              <div className="flex flex-col items-center" key={field.name}>
                <span
                  className={`border-2
                  ${
                    errors?.captcha
                      ? 'border-_-states-error'
                      : 'border-transparent'
                  }
                `}
                >
                  <ReCAPTCHA
                    sitekey={field.captchaKey}
                    onChange={(value) => {
                      if (value) setValue('captcha', value);
                    }}
                  />
                </span>
              </div>
            );
          }

          if (
            id === 'checkoutAddressDeliveryForm' &&
            field.name === 'addressLine1'
          ) {
            return (
              <Controller
                key={field.name}
                name={field.name}
                control={control}
                render={(args) => (
                  <>
                    <div className="sr-only" id="GoogleAddressAutoFill">
                      Use the up and down arrow keys to navigate the
                      suggestions. Press enter to select a suggestion. Pressing
                      enter will not submit the form.
                    </div>
                    <HookFormInput
                      aria-describedby="GoogleAddressAutoFill"
                      {...args.field}
                      handleOnChange={handleOnChange}
                      control={control}
                      watch={watch}
                      dirtyFields={dirtyFields}
                      errors={errors}
                      field={field}
                      formId={id}
                      register={register}
                      resetField={resetField}
                      spacing={spacing}
                      touchedFields={touchedFields}
                      validation={validation}
                    />
                  </>
                )}
              />
            );
          }
          return (
            <HookFormInput
              handleOnChange={handleOnChange}
              control={control}
              watch={watch}
              dirtyFields={dirtyFields}
              errors={errors}
              field={field}
              formId={id}
              key={field.name}
              register={register}
              resetField={resetField}
              spacing={spacing}
              touchedFields={touchedFields}
              validation={validation}
            />
          );
        })}
        <div className="flex justify-between">
          {resetButtonShow && (
            <Button
              type="reset"
              callback={() => {
                if (resetButtonCallback) resetButtonCallback();
                reset();
              }}
              title={resetButtonTitle}
              theme={resetButtonTheme}
              ghost={resetButtonGhost}
              variant={resetButtonVariant}
            />
          )}
          {submitButtonShow && (
            <>
              {/* ignore button callback required prop */}
              {/* @ts-ignore-next-line */}
              <Button
                disabled={disabled || disableSubmit}
                ghost={submitButtonGhost}
                rounded={submitButtonRounded}
                theme={`ml-auto ${
                  resetButtonShow !== true && 'w-full'
                } ${submitButtonTheme}`}
                title={submitButtonTitle}
                type="submit"
                variant={submitButtonVariant}
              />
            </>
          )}
        </div>
        {disclaimer && <div className="text-xs">{disclaimer}</div>}
      </div>
    </form>
  );
};

export default HookForm;
