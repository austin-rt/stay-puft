import { z } from 'zod';
export declare const maskedPhoneRegex: RegExp;
export declare const optionalEmail: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
export declare const numberRegex: RegExp;
export declare const poBoxRegex: RegExp;
export declare const specialCharRegex: RegExp;
export declare const zipCodeRegex: RegExp;
export declare const optionalCheckbox: z.ZodOptional<z.ZodBoolean>;
export declare const optionalString: z.ZodOptional<z.ZodString>;
export declare const password: z.ZodString;
export declare const registerPassword: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
export declare const requiredCheckbox: z.ZodEffects<z.ZodBoolean, boolean, boolean>;
/**
 * The keys of this object are the only valid values for the `name` prop in the `HookForm` component's `field` array elements. `name` is required, unique, cannot start with a number, and cannout contain special characters.
 */
export declare const validationSchemas: {
    addressLine1: z.ZodEffects<z.ZodString, string, string>;
    addressLine2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    billingAddressLine1: z.ZodString;
    captcha: z.ZodString;
    city: z.ZodString;
    currentPassword: z.ZodString;
    defaultBilling: z.ZodOptional<z.ZodBoolean>;
    defaultDelivery: z.ZodOptional<z.ZodBoolean>;
    defaultShipping: z.ZodOptional<z.ZodBoolean>;
    email: z.ZodString;
    emailSignup: z.ZodOptional<z.ZodBoolean>;
    firstName: z.ZodString;
    honeypot: z.ZodString;
    inquiryType: z.ZodString;
    lastName: z.ZodString;
    loginPassword: z.ZodString;
    message: z.ZodString;
    name: z.ZodString;
    newPassword: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    optionalEmail: z.ZodUnion<[z.ZodOptional<z.ZodString>, z.ZodLiteral<"">]>;
    phone: z.ZodEffects<z.ZodString, string, string>;
    registerPassword: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    sameAsBilling: z.ZodOptional<z.ZodBoolean>;
    salesOrderNumber: z.ZodOptional<z.ZodString>;
    smsOptIn: z.ZodOptional<z.ZodBoolean>;
    state: z.ZodEffects<z.ZodString, string, string>;
    store: z.ZodOptional<z.ZodString>;
    validStates: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    verifyPassword: z.ZodString;
    zipCode: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, number, string>;
    zipOrCity: z.ZodString;
};
