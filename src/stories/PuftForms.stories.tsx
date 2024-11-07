import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ComponentProps } from 'react';
import {
  inquiryList,
  previousDetails,
  sampleOptions,
} from '../components/configs/consts';
import HookForm, { HookFormProps } from '../components/HookForm/HookForm';
import Button from '../components/Common/Button';
import scrollToElement from '../components/utils/scrollToElement';
import Tooltip from '../components/Common/Tooltip';
import UseMaskPhone from '../components/utils/maskPhone';

const HookFormWrapper = (args: HookFormProps) => {
  const [showForm, showFormSetter] = useState(true);
  const [errorMessage, errorMessageSetter] = useState('');
  const [successMessage, successMessageSetter] = useState('');
  const [disabled, disabledSetter] = useState(false);
  const [loading, loadingSetter] = useState(false);
  const [formValues, formValuesSetter] = useState(null);

  const onSubmit = (data: any) => {
    args.onSubmit(data);
    if (
      data?.registerPassword &&
      data?.verifyPassword &&
      data.registerPassword !== data.verifyPassword
    ) {
      errorMessageSetter('Passwords do not match');
      setTimeout(
        () => scrollToElement(`#HookForm--${args.id}--errorAlertRoot`),
        100
      );
    } else {
      loadingSetter(true);
      errorMessageSetter('');
      successMessageSetter('Thank you for filling out the form!');
      disabledSetter(true);
      formValuesSetter(data);
      setTimeout(() => {
        loadingSetter(false);
      }, 1000);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-center gap-4">
        <Button
          title={showForm ? 'Hide Form' : 'Show Form'}
          callback={() => showFormSetter(!showForm)}
          variant="primary"
        />
        {showForm && (
          <Button
            title={
              errorMessage === '' ? 'Simulate API Error' : 'Clear API Error'
            }
            variant="secondary"
            callback={() => {
              if (errorMessage === '') {
                errorMessageSetter('Simulated API error');
              } else {
                errorMessageSetter('');
              }
            }}
          />
        )}
        <Button
          title={'Reset Page'}
          variant="primary"
          ghost
          callback={() => window?.location?.reload()}
        />
      </div>
      <div className="p-4">
        <HookForm
          showForm={showForm}
          {...args}
          onSubmit={onSubmit}
          successMessage={successMessage}
          errorMessage={errorMessage}
          disableForm={disabled}
          submitButtonTitle={
            loading ? (
              <i className="fa-solid fa-spinner fa-spin text-xl" />
            ) : (
              args.submitButtonTitle
            )
          }
        />
      </div>
      <div className="p-4">
        <pre>{formValues && JSON.stringify(formValues, null, 2)}</pre>
      </div>
    </div>
  );
};

const render = (args: HookFormProps) => <HookFormWrapper {...args} />;

type StoryProps = ComponentProps<typeof HookForm>;

const meta: Meta<StoryProps> = {
  title: 'Stay Puft Forms',
  component: HookForm,
  tags: ['autodocs'],
  argTypes: {
    callbackOnBlur: {
      control: { type: 'boolean' },
      description: 'Should the handleSubmit callback run on blur',
      table: { category: 'Form' },
    },
    criteriaMode: {
      control: { type: 'select', options: ['all', 'any'] },
      description: 'Should the form collect all errors or only the first one',
      table: { category: 'Form' },
      defaultValue: 'all',
    },
    disableForm: {
      control: { type: 'boolean' },
      description: 'Should the form be disabled',
      table: { category: 'Form' },
    },
    delayError: {
      control: { type: 'number' },
      description: 'The delay for error messages',
      table: { category: 'Form' },
      defaultValue: 500,
    },
    disclaimer: {
      control: { type: 'text' },
      description: 'A disclaimer to be shown at the bottom of the form',
      table: { category: 'Form' },
    },
    errorMessage: {
      control: { type: 'text' },
      description: 'The error message for the form',
      table: { category: 'Form' },
    },
    fields: {
      control: { type: 'array' },
      description: 'The fields to be shown in the form',
      table: { category: 'Fields' },
    },
    fillValues: {
      control: { type: 'object' },
      description:
        'The fields with which to programmatically fill the form -- typically dev purposes only',
      table: { category: 'Form' },
    },
    fillValuesCallback: {
      control: { type: 'function' },
      description: 'A callback to run when form programmatically fills',
      table: { category: 'Form' },
    },
    hideRequiredLegend: {
      control: { type: 'boolean' },
      description: 'Should the required legend be hidden',
      table: { category: 'Form' },
      defaultValue: false,
    },
    id: {
      control: { type: 'text' },
      description: 'The id of the form',
      table: { category: 'Form' },
    },
    mode: {
      control: {
        type: 'select',
        options: ['onTouched', 'onChange', 'onSubmit'],
      },
      description: 'The validation mode for the form',
      table: { category: 'Form' },
      defaultValue: 'onTouched',
    },
    onError: {
      control: { type: 'function' },
      description: 'A function to run when there is an error',
      table: { category: 'Form' },
    },
    onSubmit: {
      control: { type: 'function' },
      description: 'A function to run when the form is submitted',
      table: { category: 'Form' },
    },
    resetButtonCallback: {
      control: { type: 'function' },
      description: 'A function to run when the reset button is clicked',
      table: { category: 'Form' },
    },
    resetButtonGhost: {
      control: { type: 'boolean' },
      description: 'Should the reset button have ghost styling',
      table: { category: 'Form' },
      defaultValue: false,
    },
    resetButtonShow: {
      control: { type: 'boolean' },
      description: 'Should the reset button show',
      table: { category: 'Form' },
      defaultValue: false,
    },
    resetButtonTheme: {
      control: { type: 'text' },
      description:
        'The theme for the reset button as a string of Tailwind classes',
      table: { category: 'Form' },
    },
    resetButtonTitle: {
      control: { type: 'text' },
      description: 'The title for the reset button',
      table: { category: 'Form' },
      defaultValue: 'Reset',
    },
    resetButtonVariant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'The variant for the reset button',
      table: { category: 'Form' },
      defaultValue: 'secondary',
    },
    resetOnSubmit: {
      control: { type: 'boolean' },
      description: 'Should the form reset on successful submit',
      table: { category: 'Form' },
      defaultValue: true,
    },
    reValidateMode: {
      control: { type: 'select', options: ['onBlur', 'onChange', 'onSubmit'] },
      description: 'The revalidate mode for the form',
      table: { category: 'Form' },
      defaultValue: 'onChange',
    },
    shouldFocusError: {
      control: { type: 'boolean' },
      description: 'Should the form focus on the first error',
      table: { category: 'Form' },
      defaultValue: true,
    },
    showForm: {
      control: { type: 'boolean' },
      description: 'Should the form show or hide',
      table: { category: 'Form' },
      defaultValue: true,
    },
    showSuccessMessage: {
      control: { type: 'boolean' },
      description:
        'Should the success message show after the form is submitted',
      table: { category: 'Form' },
      defaultValue: false,
    },
    spacing: {
      control: { type: 'text' },
      description: 'The spacing of the form as a Tailwind class',
      table: { category: 'Form' },
      defaultValue: 'gap-9',
    },
    submitButtonGhost: {
      control: { type: 'boolean' },
      description: 'Should the submit button have ghost styling',
      table: { category: 'Form' },
      defaultValue: false,
    },
    submitButtonRounded: {
      control: { type: 'boolean' },
      description: 'Should the button be rounded',
      table: { category: 'Form' },
    },
    submitButtonShow: {
      control: { type: 'boolean' },
      description: 'Should the submit button show',
      table: { category: 'Form' },
      defaultValue: true,
    },
    submitButtonTheme: {
      control: { type: 'text' },
      description:
        'The theme for the submit button as a string of Tailwind classes',
      table: { category: 'Form' },
    },
    submitButtonTitle: {
      control: { type: 'text' },
      description: 'The title for the submit button',
      table: { category: 'Form' },
      defaultValue: 'Submit',
    },
    submitButtonVariant: {
      control: { type: 'select', options: ['primary', 'secondary'] },
      description: 'The variant for the submit button',
      table: { category: 'Form' },
      defaultValue: 'primary',
    },
    successCallback: {
      control: { type: 'function' },
      description: 'A function to run when the form is successfully submitted',
      table: { category: 'Form' },
    },
    successMessage: {
      control: { type: 'text' },
      description: 'The success message for the form',
      table: { category: 'Form' },
    },
    theme: {
      control: { type: 'text' },
      description: 'The theme for the form as a string of Tailwind classes',
      table: { category: 'Form' },
    },
    title: {
      control: { type: 'text' },
      description: 'The title for the form',
      table: { category: 'Form' },
    },
    validation: {
      control: { type: 'select', options: ['all', 'requiredOnly', 'none'] },
      description: 'Custom validation strategy for the form fields',
      table: { category: 'Form' },
    },
  },
  args: {
    onSubmit: fn(),
  },
  render,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Demo: Story = {
  args: {
    fields: [
      {
        name: 'name',
        title: 'Your Name',
      },
      {
        name: 'addressLine2',
        title: 'Address Line 2',
        isToggle: true,
      },
      {
        name: 'registerPassword',
        title: 'Your Password',
        optional: true,
      },
      {
        name: 'state',
        title: 'State',
        optional: true,
      },
      {
        name: 'message',
        title: 'Your Message',
        type: 'textarea',
        optional: true,
      },
      {
        name: 'store',
        title: 'Your Store',
        type: 'radio',
        options: sampleOptions,
        optional: true,
      },
    ],
  },
};

export const Register: Story = {
  args: {
    id: 'Register',
    fields: [
      {
        name: 'email',
        title: 'Email',
        type: 'email',
      },
      {
        name: 'registerPassword',
        title: 'Password',
        type: 'password',
        showPasswordButton: true,
      },
      {
        name: 'verifyPassword',
        title: 'Verify Password',
        type: 'password',
        showPasswordButton: true,
      },
    ],
    resetOnSubmit: true,
    showSuccessMessage: true,
    resetButtonShow: true,
  },
};

export const ToggleField: Story = {
  args: {
    fields: [
      {
        name: 'addressLine1',
        title: 'Street Address',
      },
      {
        name: 'addressLine2',
        title: 'Address Line 2',
        optional: true,
        isToggle: true,
      },
    ],
    submitButtonGhost: true,
    submitButtonTitle: 'Confirm Address',
  },
};

export const SelectField: Story = {
  args: {
    fields: [
      {
        name: 'name',
        title: 'Your Full Name',
      },
      {
        name: 'inquiryType',
        title: 'Inquiry Type',
        type: 'select',
        options: inquiryList,
      },
      {
        name: 'message',
        title: 'Your Message',
        type: 'textarea',
      },
    ],
  },
};

export const AutoMaskFields: Story = {
  args: {
    fields: [
      {
        name: 'phone',
        title: 'Phone Number',
        type: 'tel',
        tooltip: (
          <Tooltip
            callback={() => null}
            content={
              <div role="tooltip">
                We will only use your phone number in the event it becomes
                necessary for shipping/delivery carriers to contact you to
                ensure proper delivery of your order.
              </div>
            }
            id="whyPhoneNumberTooltip"
            title={
              <div className="text-center mt-1">
                <i
                  className={`fa-sharp fa-regular fa-face-monocle text-_-primary-0 pr-1 pt-1 ml-2`}
                />
                <span className={`text-black text-xs links-bordered-xs `}>
                  {' Why do we need this?'}
                </span>
              </div>
            }
            width="w-[180px]"
            theme={`float-right mt-2 mr-3 block`}
            iconColor="text-_-states-accentDark"
            themeWrapper="underline"
            position={'top'}
            themeTooltip="z-9999 bg-white font-bold text-center border text-xxs text-black px-1 py-4 inline-block rounded-md"
          />
        ),
      },
      {
        name: 'zipCode',
        title: 'Zip Code',
      },
    ],
    resetButtonShow: false,
    submitButtonTitle: 'Sign In',
  },
};

export const Prefilled: Story = {
  args: {
    fields: [
      {
        name: 'firstName',
        title: 'First Name',
        defaultValue: previousDetails.firstName,
      },
      {
        name: 'lastName',
        title: 'Last Name',
        defaultValue: previousDetails.lastName,
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'tel',
        defaultValue: UseMaskPhone(previousDetails.phone),
      },
      {
        name: 'addressLine1',
        title: 'Street Address',
        defaultValue: previousDetails.streetAddress,
      },
      {
        name: 'addressLine2',
        title: 'Street Address Line 2',
        optional: true,
        isToggle: true,
        defaultValue: previousDetails.addressLine2,
      },
      {
        name: 'city',
        title: 'City',
        defaultValue: previousDetails.city,
      },
      {
        name: 'state',
        title: 'State',
        type: 'state',
        defaultValue: previousDetails.state,
      },
      {
        name: 'zipCode',
        title: 'Zip Code',
        defaultValue: previousDetails.zipCode,
      },
      {
        name: 'defaultShipping',
        title: 'Make this my default shipping address',
        type: 'checkbox',
        optional: true,
        defaultValue: previousDetails.defaultShipping ? 'true' : undefined,
      },
      {
        name: 'defaultBilling',
        title: 'Make this my default billing address',
        type: 'checkbox',
        optional: true,
        defaultValue: previousDetails.defaultBilling ? 'true' : undefined,
      },
    ],
    submitButtonTitle: 'Update Address',
    resetButtonShow: true,
    resetButtonTitle: 'Cancel',
  },
};

export const WithCaptcha: Story = {
  args: {
    fields: [
      {
        name: 'captcha',
        title: 'captcha',
        type: 'captcha',
        captchaKey: '6LeZh3cqAAAAAJM73_9LhWHGbgNO7MPawGjaznwk',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
      },
    ],
    resetButtonShow: false,
    submitButtonTitle: 'Confirm Email',
  },
};
