/* eslint-disable jsx-a11y/anchor-is-valid */

import { Story } from '@storybook/react';
import React, { useState } from 'react';
import HookForm, { HookFormProps } from '../components/HookForm/HookForm';
import Button from '../components/slimer/Button';
import UseMaskPhone from '../components/utils/maskPhone';
import Tooltip from '../components/slimer/Tooltip';

export default {
  title: 'Forms / HookForm',
  component: HookForm,
};

const Template: Story<HookFormProps> = (args) => {
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

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
        <HookForm showForm={showForm} {...args} errorMessage={errorMessage} />
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

const storeList = [
  {
    title: 'Store 1',
    value: 'store1',
  },
  {
    title: 'Store 2',
    value: 'store2',
  },
  {
    title: 'Store 3',
    value: 'store3',
  },
];

export const Default = Template.bind({});

Default.args = {
  fields: [
    {
      name: 'name',
      title: 'Your Full Name',
      required: false,
      autoComplete: 'given-name',
      // placeholder: 'John',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
      autoComplete: 'email',
      // placeholder: 'johndoe@email.com',
      resetButton: true,
    },
    {
      name: 'message',
      title: 'Message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'registerPassword',
      title: 'Password',
      type: 'password',
      required: true,
      autoComplete: 'new-password',
    },
    {
      name: 'addressLine1',
      title: 'Street Address',
      required: true,
      autoComplete: 'street-address',
      // placeholder: '123 Main St',
    },
    {
      name: 'addressLine2',
      title: 'Street Address Line 2',
      required: false,
      optional: true,
      autoComplete: 'address-line2',
      // placeholder: 'Apt 123',
      isToggle: true,
    },
    {
      name: 'state',
      title: 'State',
      type: 'state',
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      required: true,
      autoComplete: 'postal-code',
      // placeholder: '12345',
    },
    {
      name: 'phone',
      title: 'Phone',
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
  ],
  onSubmit: (data: any) => {
    console.log('xxx', data);
  },
  resetButtonShow: true,
};

export const Register = Template.bind({});

Register.args = {
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
      autoComplete: 'email',
      // placeholder: 'abc@def.com',
    },
    {
      name: 'registerPassword',
      title: 'Password',
      type: 'password',
      required: true,
      autoComplete: 'new-password',
      showPasswordButton: true,
    },
    {
      name: 'verifyPassword',
      title: 'Verify Password',
      type: 'password',
      required: true,
      autoComplete: 'new-password',
      showPasswordButton: true,
    },
    {
      name: 'firstName',
      title: 'First Name',
      required: true,
      autoComplete: 'given-name',
      // placeholder: 'John',
      showPasswordButton: true,
      resetButton: true,
      submitIcon: 'fa-light fa-sharp fa-eye',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      required: true,
      autoComplete: 'family-name',
      // placeholder: 'Doe',
    },
    {
      name: 'addressLine1',
      title: 'Street Address',
      required: true,
      autoComplete: 'address-line1',
      // placeholder: '123 Main St',
    },
    {
      name: 'addressLine2',
      title: 'Street Address Line 2',
      required: false,
      optional: true,
      autoComplete: 'address-line2',
      // placeholder: 'Apt 123',
      isToggle: true,
    },
    {
      name: 'city',
      title: 'City',
      required: true,
      autoComplete: 'address-level2',
      // placeholder: 'Anytown',
    },
    {
      name: 'state',
      title: 'State',
      type: 'state',
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      required: true,
      autoComplete: 'postal-code',
      // placeholder: '12345',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'tel',
      // placeholder: '(555) 555-5555',
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
      name: 'smsOptIn',
      title: (
        <span>
          By checking this box, you agree to receive recurring automated
          promotional and personalized marketing text messages (e.g. cart
          reminders) from American Freight at the cell number used when signing
          up. Consent is not a condition of any purchase. Reply HELP for help
          and STOP to cancel. Msg frequency varies. Msg & data rates may apply.{' '}
          <a href="#">View Terms</a> & <a href="#">Privacy</a>.
        </span>
      ),
      type: 'checkbox',
      required: false,
    },
    {
      name: 'emailSignup',
      title:
        'Yes, please send me email about American Freight promotions and information',
      required: false,
      type: 'checkbox',
    },
    {
      name: 'honeypot',
      title: 'Please leave this field blank',
      required: false,
    },
  ],
  onSubmit: (data: any) => {
    console.log(data);
  },
  onError: (error: any) => {
    console.error('error in onError', error);
  },
};

export const Spp = Template.bind({});
Spp.args = {
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      required: true,
    },
    {
      name: 'lastName',
      title: 'Last Name',
      required: true,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'tel',
      required: true,
    },
  ],
  submitButtonGhost: true,
  submitButtonTitle: 'Add',
  resetButtonTitle: 'Remove',
  resetButtonGhost: true,
  disclaimer: 'Remember to bring a photo ID when picking up the order.',
};

export const Billing = Template.bind({});
Billing.args = {
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      required: true,
      autoComplete: 'given-name',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      required: true,
      autoComplete: 'family-name',
    },
    {
      name: 'addressLine1',
      title: 'Street Address',
      required: true,
      autoComplete: 'address-line1',
    },
    {
      name: 'addressLine2',
      title: 'Street Address Line 2',
      required: false,
      isToggle: true,
      autoComplete: 'address-line2',
    },
    {
      name: 'city',
      title: 'City',
      required: true,
      autoComplete: 'address-level2',
    },
    {
      name: 'state',
      title: 'State',
      type: 'state',
    },
    {
      name: 'zipCode',
      title: 'Zip Code',
      required: true,
      autoComplete: 'postal-code',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'tel',
      required: true,
      autoComplete: 'tel',
    },
  ],
};

export const Login = Template.bind({});
Login.args = {
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
    },
    {
      name: 'loginPassword',
      title: 'Password',
      type: 'password',
      required: true,
      showPasswordButton: true,
    },
  ],
  resetButtonShow: false,
  submitButtonTitle: 'Sign In',
};

export const EditAddress = Template.bind({});
EditAddress.args = {
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      required: true,
      autoComplete: 'given-name',
      defaultValue: previousDetails.firstName,
    },
    {
      name: 'lastName',
      title: 'Last Name',
      required: true,
      autoComplete: 'family-name',
      defaultValue: previousDetails.lastName,
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'tel',
      required: true,
      autoComplete: 'tel',
      defaultValue: UseMaskPhone(previousDetails.phone),
    },
    {
      name: 'addressLine1',
      title: 'Street Address',
      required: true,
      autoComplete: 'address-line1',
      defaultValue: previousDetails.streetAddress,
    },
    {
      name: 'addressLine2',
      title: 'Street Address Line 2',
      required: false,
      isToggle: true,
      autoComplete: 'address-line2',
      defaultValue: previousDetails.addressLine2,
    },
    {
      name: 'city',
      title: 'City',
      required: true,
      autoComplete: 'address-level2',
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
      autoComplete: 'postal-code',
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

export const UpdateProfile = Template.bind({});
UpdateProfile.args = {
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      required: true,
      autoComplete: 'given-name',
      defaultValue: previousDetails.firstName,
    },
    {
      name: 'lastName',
      title: 'Last Name',
      required: true,
      autoComplete: 'family-name',
      defaultValue: previousDetails.lastName,
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'tel',
      required: true,
      autoComplete: 'tel',
      defaultValue: UseMaskPhone(previousDetails.phone),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      required: true,
      defaultValue: previousDetails.email,
    },
    {
      name: 'smsOptIn',
      title: (
        <span>
          By checking this box, you agree to receive recurring automated
          promotional and personalized marketing text messages (e.g. cart
          reminders) from American Freight at the cell number used when signing
          up. Consent is not a condition of any purchase. Reply HELP for help
          and STOP to cancel. Msg frequency varies. Msg & data rates may apply.{' '}
          <a href="#">View Terms</a> & <a href="#">Privacy</a>
        </span>
      ),
      type: 'checkbox',
      required: false,
    },
  ],
  resetButtonShow: false,
  submitButtonTitle: 'Update Profile',
};

export const UpdatePassword = Template.bind({});
UpdatePassword.args = {
  fields: [
    {
      name: 'currentPassword',
      title: 'Current Password',
      type: 'password',
      required: true,
      showPasswordButton: true,
    },
    {
      name: 'newPassword',
      title: 'New Password',
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
  resetButtonShow: false,
  submitButtonTitle: 'Update Password',
};

export const ForgotPassword = Template.bind({});
ForgotPassword.args = {
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

export const CustomerService = Template.bind({});
CustomerService.args = {
  fields: [
    {
      name: 'name',
      title: 'Your Full Name',
      // placeholder: '',
      required: true,
    },
    {
      name: 'email',
      title: 'Your Email',
      type: 'email',
      // placeholder: '',
      required: true,
    },
    {
      name: 'phone',
      title: 'Your Phone Number',
      type: 'tel',
      // placeholder: '(555) 555-5555',
      required: true,
    },
    {
      name: 'salesOrderNumber',
      title: 'Sales Order Number',
      // placeholder: '',
      required: false,
    },
    {
      name: 'inquiryType',
      title: 'Inquiry Type',
      type: 'select',
      options: inquiryList,
      required: true,
    },
    {
      name: 'store',
      title: 'Select Your Store',
      type: 'select',
      options: storeList,
      required: false,
    },
    {
      name: 'message',
      title: 'Your Message',
      type: 'textarea',
      // placeholder: '',
      required: true,
    },
  ],
};

export const StoreFinder = Template.bind({});
StoreFinder.args = {
  fields: [
    {
      name: 'zipOrCity',
      title: 'Enter Zip Code or City & State',
      required: false,
      submitIcon: 'fa-light fa-sharp fa-magnifying-glass',
    },
  ],
  submitButtonShow: false,
  theme: 'flex-row',
};
