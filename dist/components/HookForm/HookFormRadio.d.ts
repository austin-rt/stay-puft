import { ChangeEvent, FocusEvent, ReactNode } from 'react';
import { FieldNamesType, FieldValidationMethodType, OptionType } from '../../types';
export interface HookFormRadioProps {
    /**
     * The aria-controls HTML attribute for the field.
     */
    ariaControls?: string;
    /**
     * The aria-expanded HTML attribute for the field.
     */
    ariaExpanded?: boolean;
    /**
     * Should the field be disabled?
     */
    disabled?: boolean;
    /**
     * The error message for the field as a string.
     */
    error?: string;
    /**
     * The name of the field. The name must match a key in the `validationSchema` object.
     */
    name: FieldNamesType;
    /**
     * The onBlur event for the field.
     */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * The onChange event for the field.
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * The onFocus event for the field.
     */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Should the optional subtext be displayed?
     */
    optional: boolean;
    /**
     * The options to display in the radio group.
     */
    options: OptionType[];
    /**
     * The register function from the `useForm` hook.
     * @see https://react-hook-form.com/docs/useform/register
     */
    register: Function;
    /**
     * Should the title be displayed?
     */
    showTitle?: boolean;
    /**
     * The spacing between the checked radio and the label.
     */
    checkSpacing?: string;
    /**
     * The theme to apply to the `label` tag.
     */
    theme?: string;
    /**
     * The title of the field.
     */
    title: string | ReactNode;
    /**
     * Our custom validation strategy for the field. `all` will use zod validation, `requiredOnly` will only check if the field is required, `none` will skip validation.
     */
    validation?: FieldValidationMethodType;
    /**
     * The vertical spacing between radio options.
     */
    verticalSpacing?: string;
}
/**
 * This is only to be consumed inside the HookForm component. You should not need to use this component directly. Did you mean to use `<Radio />` component?
 */
declare const HookFormRadio: ({ ariaControls, ariaExpanded, disabled, error, name, onBlur, onChange, onFocus, optional, options, register, showTitle, checkSpacing, theme, title, validation, verticalSpacing, }: HookFormRadioProps) => import("react/jsx-dev-runtime").JSX.Element;
export default HookFormRadio;
