import { z } from 'zod';

/* consts */
export const invalidStates = [''];
export const states = [
  {
    title: '---Select a  State ---',
    value: '',
    disabled: true,
  },
  {
    title: 'AE',
    value: 'AE',
  },
  {
    title: 'AL',
    value: 'AL',
  },
  {
    title: 'AP',
    value: 'AP',
  },
  {
    title: 'AR',
    value: 'AR',
  },
  {
    title: 'AZ',
    value: 'AZ',
  },
  {
    title: 'CA',
    value: 'CA',
  },
  {
    title: 'CO',
    value: 'CO',
  },
  {
    title: 'CT',
    value: 'CT',
  },
  {
    title: 'DC',
    value: 'DC',
  },
  {
    title: 'DE',
    value: 'DE',
  },
  {
    title: 'FL',
    value: 'FL',
  },
  {
    title: 'GA',
    value: 'GA',
  },
  {
    title: 'HI',
    value: 'HI',
  },
  {
    title: 'IA',
    value: 'IA',
  },
  {
    title: 'ID',
    value: 'ID',
  },
  {
    title: 'IL',
    value: 'IL',
  },
  {
    title: 'IN',
    value: 'IN',
  },
  {
    title: 'KS',
    value: 'KS',
  },
  {
    title: 'KY',
    value: 'KY',
  },
  {
    title: 'LA',
    value: 'LA',
  },
  {
    title: 'MA',
    value: 'MA',
  },
  {
    title: 'MD',
    value: 'MD',
  },
  {
    title: 'ME',
    value: 'ME',
  },
  {
    title: 'MI',
    value: 'MI',
  },
  {
    title: 'MN',
    value: 'MN',
  },
  {
    title: 'MO',
    value: 'MO',
  },
  {
    title: 'MS',
    value: 'MS',
  },
  {
    title: 'MT',
    value: 'MT',
  },
  {
    title: 'NC',
    value: 'NC',
  },
  {
    title: 'ND',
    value: 'ND',
  },
  {
    title: 'NE',
    value: 'NE',
  },
  {
    title: 'NH',
    value: 'NH',
  },
  {
    title: 'NJ',
    value: 'NJ',
  },
  {
    title: 'NM',
    value: 'NM',
  },
  {
    title: 'NV',
    value: 'NV',
  },
  {
    title: 'NY',
    value: 'NY',
  },
  {
    title: 'OH',
    value: 'OH',
  },
  {
    title: 'OK',
    value: 'OK',
  },
  {
    title: 'OR',
    value: 'OR',
  },
  {
    title: 'PA',
    value: 'PA',
  },
  {
    title: 'PR',
    value: 'PR',
  },
  {
    title: 'RI',
    value: 'RI',
  },
  {
    title: 'SC',
    value: 'SC',
  },
  {
    title: 'SD',
    value: 'SD',
  },
  {
    title: 'TN',
    value: 'TN',
  },
  {
    title: 'TX',
    value: 'TX',
  },
  {
    title: 'UT',
    value: 'UT',
  },
  {
    title: 'VA',
    value: 'VA',
  },
  {
    title: 'VI',
    value: 'VI',
  },
  {
    title: 'VT',
    value: 'VT',
  },
  {
    title: 'WA',
    value: 'WA',
  },
  {
    title: 'WV',
    value: 'WV',
  },
  {
    title: 'WI',
    value: 'WI',
  },
  {
    title: 'WY',
    value: 'WY',
  },
];

export const errorMessages = {
  password: {
    current: 'Please enter your current password',
    missing: 'Please enter your password',
    mustMatch: 'Passwords must match',
    number: '1 or more numbers',
    sameAsCurrent: 'Cannot use current password',
    short: '8 or more characters',
    special: '1 or more special characters',
    verify: 'Please re-enter your password',
  },
};

export const maskedPhoneRegex = /\(\d{3}\) \d{3}-\d{4}/;
export const optionalEmail = z
  .string()
  .email('Email should match the following format: abc@def.com')
  .optional()
  .or(z.literal(''));
export const numberRegex = /\d/;
export const passwordsWithValidator = [
  'registerPassword',
  'newPassword',
  'loginPassword',
];
export const poBoxRegex =
  /^ *((#\d+)|((box|bin)[-. /\\]?\d+)|(.*p[ .]? ?(o|0)[-. /\\]? *-?((box|bin)|b|(#|n|num|number)?\d+))|(p(ost|ostal)? *(o(ff(ice)?)?)? *((box|bin)|b)? *(#|n|num|number)*\d+)|(p *-?\/?(o)? *-?box)|post office box|((box|bin)|b) *(#|n|num|number)? *\d+|(#|n|num|number) *\d+)/i;
export const specialCharRegex = /[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/;
export const zipCodeRegex = /^\d{5}$/;

/* reusable zod schemas */
export const optionalCheckbox = z.boolean().optional();
export const optionalString = z.string().optional();
export const password = z.string().min(1, errorMessages.password.missing);
export const registerPassword = z
  .string()
  .min(8, errorMessages.password.short)
  .refine((val) => specialCharRegex.test(val), {
    message: errorMessages.password.special,
  })
  .refine((val) => numberRegex.test(val), {
    message: errorMessages.password.number,
  });
export const requiredCheckbox = z
  .boolean()
  .refine((val) => val === true, 'This field is required');
const state = z
  .string()
  .refine((val) => val.length === 2, { message: 'Please choose a state' });

/**
 * The keys of this object are the only valid values for the `name` prop in the `HookForm` component's `field` array elements. `name` is required, unique, cannot start with a number, and cannout contain special characters.
 */
export const validationSchemas = {
  addressLine1: z
    .string()
    .min(2, 'Please enter a street address longer than two characters')
    .refine((val) => poBoxRegex.test(val) === false, {
      message: "Sorry, but we can't deliver to a P.O. Box",
    }),
  addressLine2: z.string().nullish(),
  billingAddressLine1: z
    .string()
    .min(2, 'Please enter a street address longer than two characters'),
  captcha: z.string().min(1, 'Please verify the Captcha'),
  city: z.string().min(2, 'Please enter a city longer than two characters'),
  currentPassword: z.string().min(1, 'Please enter your current password'),
  defaultBilling: optionalCheckbox,
  defaultDelivery: optionalCheckbox,
  defaultShipping: optionalCheckbox,
  email: z
    .string()
    .min(2, 'Please enter an email longer than two characters')
    .email('Email should match the following format: abc@def.com'),
  emailSignup: optionalCheckbox,
  firstName: z
    .string()
    .min(2, 'Please enter a first name longer than two characters'),
  honeypot: z.string().max(0, 'Please leave this field blank'),
  inquiryType: z.string().min(1, 'Please choose a reason for your inquiry'),
  lastName: z
    .string()
    .min(2, 'Please enter a last name longer than two characters'),
  loginPassword: password,
  message: z.string().min(1, 'Please include a message'),
  name: z
    .string()
    .min(2, 'Please enter a full name longer than two characters'),
  newPassword: registerPassword,
  optionalEmail,
  phone: z
    .string()
    .min(14, 'Please enter a valid phone number')
    .refine((val) => maskedPhoneRegex.test(val), {
      message: 'Phone number can only contain numbers',
    }),
  registerPassword,
  sameAsBilling: optionalCheckbox,
  salesOrderNumber: optionalString,
  smsOptIn: optionalCheckbox,
  state,
  store: optionalString,
  validStates: state.refine((val) => invalidStates.includes(val) === false, {
    message: `Sorry, ${
      invalidStates.length > 1
        ? `${invalidStates.slice(0, -1).join(', ')} and ${invalidStates.slice(
            -1
          )}`
        : invalidStates[0]
    } are not allowed. Please choose a valid state.`,
  }),
  verifyPassword: z.string().min(1, 'Please re-enter your password'),
  zipCode: z
    .string()
    .refine((val) => zipCodeRegex.test(val), 'Please enter a valid zip code')
    .transform((val) => parseInt(val, 10)),
  zipOrCity: z.string().min(4, 'Please enter a valid zip code or city & state'),
};
