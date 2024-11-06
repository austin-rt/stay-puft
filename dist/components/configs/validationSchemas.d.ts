import { z } from 'zod';
export declare const passwordErrors: {
    short: string;
    special: string;
    number: string;
    empty: string;
    sameAsCurrent: string;
    mustMatch: string;
};
export declare const validationSchemas: {
    loginPassword: z.ZodString;
    currentPassword: z.ZodString;
    registerPassword: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    newPassword: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    verifyPassword: z.ZodString;
    email: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
    streetAddress: z.ZodEffects<z.ZodString, string, string>;
    streetAddress2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    city: z.ZodString;
    state: z.ZodEffects<z.ZodString, string, string>;
    phone: z.ZodEffects<z.ZodString, string, string>;
    zipCode: z.ZodString;
    zipOrCity: z.ZodString;
    name: z.ZodString;
    message: z.ZodString;
    salesOrderNumber: z.ZodOptional<z.ZodString>;
    inquiryType: z.ZodString;
    store: z.ZodString;
    captcha: z.ZodString;
    requiredCheckbox: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
    smsOptIn: z.ZodOptional<z.ZodBoolean>;
    returnTerms: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
    registerTerms: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
    emailSignup: z.ZodOptional<z.ZodBoolean>;
    defaultShipping: z.ZodOptional<z.ZodBoolean>;
    defaultBilling: z.ZodOptional<z.ZodBoolean>;
    defaultDelivery: z.ZodOptional<z.ZodBoolean>;
    honeypot: z.ZodString;
};