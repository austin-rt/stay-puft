/* eslint-disable jsx-a11y/anchor-is-valid */

import { Story } from '@storybook/react';
import React, { useState } from 'react';
import HookForm, { HookFormProps } from '../components/HookForm/HookForm';
import Button from '../components/slimer/Button';
import UseMaskPhone from '../components/utils/maskPhone';
import Tooltip from '../components/slimer/Tooltip';
import scrollToElement from '../components/utils/scrollToElement';

export default {
  title: 'Forms / HookForm',
  component: HookForm,
};

const Template: Story<HookFormProps> = (args) => {
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  const onSubmit = (data: any) => {
    if (
      data?.registerPassword &&
      data?.verifyPassword &&
      data.registerPassword !== data.verifyPassword
    ) {
      setErrorMessage('Passwords do not match');
      setTimeout(
        () => scrollToElement(`#HookForm--${args.id}--errorAlertRoot`),
        100
      );
    } else {
      setErrorMessage('');
      setSuccessMessage('Thank you for filling out the form!');
      setDisabled(true);
      console.log(data);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-center gap-4">
        <Button
          title={showForm ? 'Hide Form' : 'Show Form'}
          callback={() => setShowForm(!showForm)}
          variant="primary"
        />
        {showForm && (
          <Button
            title="Simulate API Error"
            callback={() => setErrorMessage('Simulated API error')}
          />
        )}
      </div>
      <div className="p-4">
        <HookForm
          showForm={showForm}
          {...args}
          onSubmit={onSubmit}
          successMessage={successMessage}
          errorMessage={errorMessage}
          disableForm={disabled}
        />
      </div>
    </div>
  );
};

const previousDetails = {
  firstName: 'John',
  lastName: 'Doe',
  phone: '1234567890',
  streetAddress: '123 Main St',
  addressLine2: 'Apt 123',
  city: 'Anytown',
  state: 'CA',
  zipCode: '12345',
  defaultShipping: true,
  defaultBilling: false,
  email: 'e@mail.com',
  smsOptIn: true,
};

const inquiryList = [
  {
    title: 'General Inquiry',
    value: 'General Inquiry',
  },
  {
    title: 'Status of Existing Order',
    value: 'Status of Existing Order',
  },
  {
    title: 'Product Questions',
    value: 'Product Questions',
  },
  {
    title: 'Warranty Questions',
    value: 'Warranty Questions',
  },
  {
    title: 'Staff Issues',
    value: 'Staff Issues',
  },
  {
    title: 'Delivery Concerns',
    value: 'Delivery Concerns',
  },
  {
    title: 'Refund, Return, & Cancellation Questions',
    value: 'Refund, Return, & Cancellation Questions',
  },
];

export const Register = Template.bind({});

Register.args = {
  id: 'Register',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'registerPassword',
      title: 'Password',
      type: 'password',
      required: true,
      showPasswordButton: true,
    },
    {
      name: 'verifyPassword',
      title: 'Verify Password',
      type: 'password',
      required: true,
      showPasswordButton: true,
    },
  ],
  resetOnSubmit: true,
  showSuccessMessage: true,
  resetButtonShow: true,
};

export const ToggleField = Template.bind({});
ToggleField.args = {
  fields: [
    {
      name: 'addressLine1',
      title: 'Street Address',
      required: true,
    },
    {
      name: 'addressLine2',
      title: 'Address Line 2',
      required: false,
      isToggle: true,
    },
  ],
  submitButtonGhost: true,
  submitButtonTitle: 'Confirm Address',
};

export const SelectField = Template.bind({});
SelectField.args = {
  fields: [
    {
      name: 'name',
      title: 'Your Full Name',
      required: true,
    },
    {
      name: 'inquiryType',
      title: 'Inquiry Type',
      type: 'select',
      options: inquiryList,
      required: true,
    },
    {
      name: 'message',
      title: 'Your Message',
      type: 'textarea',
      required: true,
    },
  ],
};

export const MaskFields = Template.bind({});
MaskFields.args = {
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'tel',
      required: true,
      tooltip: (
        <Tooltip
          callback={() => null}
          content={
            <div role="tooltip">
              We will only use your phone number in the event it becomes
              necessary for shipping/delivery carriers to contact you to ensure
              proper delivery of your order.
            </div>
          }
          id="whyPhoneNumberTooltip"
          title={
            <div className="text-center mt-1">
              <i
                className={`fa-sharp fa-regular fa-face-monocle text-_-states-accentDark pr-1 pt-1 ml-2`}
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
          themeTooltip="z-9999 bg-white font-bold text-center border text-xxs text-black  px-1 py-4 inline-block rounded-md "
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
};

export const Prefilled = Template.bind({});
Prefilled.args = {
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      required: true,
      defaultValue: previousDetails.firstName,
    },
    {
      name: 'lastName',
      title: 'Last Name',
      required: true,
      defaultValue: previousDetails.lastName,
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'tel',
      required: true,
      defaultValue: UseMaskPhone(previousDetails.phone),
    },
    {
      name: 'addressLine1',
      title: 'Street Address',
      required: true,
      defaultValue: previousDetails.streetAddress,
    },
    {
      name: 'addressLine2',
      title: 'Street Address Line 2',
      required: false,
      isToggle: true,
      defaultValue: previousDetails.addressLine2,
    },
    {
      name: 'city',
      title: 'City',
      required: true,
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
      required: true,
      defaultValue: previousDetails.zipCode,
    },
    {
      name: 'defaultShipping',
      title: 'Make this my default shipping address',
      type: 'checkbox',
      required: false,
      defaultValue: previousDetails.defaultShipping ? 'true' : undefined,
    },
    {
      name: 'defaultBilling',
      title: 'Make this my default billing address',
      type: 'checkbox',
      required: false,
      defaultValue: previousDetails.defaultBilling ? 'true' : undefined,
    },
  ],
  submitButtonTitle: 'Update Address',
  resetButtonShow: true,
  resetButtonTitle: 'Cancel',
};

export const WithCaptcha = Template.bind({});
WithCaptcha.args = {
  fields: [
    {
      name: 'captcha',
      title: 'captcha',
      type: 'captcha',
      captchaKey: '6LcZNT0pAAAAAFmcz2fIIqs1FGRywaPWCe2ESDec',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
    },
  ],
  resetButtonShow: false,
  submitButtonTitle: 'Confirm Email',
};
