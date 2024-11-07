import { ChangeEvent, FocusEvent, KeyboardEvent, ReactNode } from 'react';

import { ButtonProps } from '../components/Common/Button';

import { validationSchemas } from '../components/configs/HookFormValidationSchemas';

export type HTMLInputElementAutoComplete = 'off' | 'on';

export type FieldValidationMethodType = 'full' | 'none' | 'requiredOnly';

export type ChangeEventTypes =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>
  | ChangeEvent<HTMLSelectElement>;

export type FocusEventTypes =
  | FocusEvent<HTMLInputElement>
  | FocusEvent<HTMLTextAreaElement>
  | FocusEvent<HTMLSelectElement>;

export type KeyboardEventTypes =
  | KeyboardEvent<HTMLInputElement>
  | KeyboardEvent<HTMLTextAreaElement>
  | KeyboardEvent<HTMLSelectElement>;

export interface FieldType {
  /**
   * The HTMLInputElement autocomplete attribute.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
   */
  autoComplete?: HTMLInputElement['autocomplete'];
  /**
   * The HTMLInputElement autocorrect attribute. Safari only.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocorrect
   */
  autoCorrect?: HTMLInputElementAutoComplete;
  /**
   * Should the button be rounded?
   */
  buttonRounded?: boolean;
  /**
   * The size of the button.
   */
  buttonSize?: ButtonProps['size'];
  /**
   * A string of tailwind classes to apply to the button.
   */
  buttonTheme?: string;
  /**
   * The variant of the button.
   */
  buttonVariant?: ButtonProps['variant'];
  /**
   * The app key of the captcha. This is required if the field is a captcha.
   */
  captchaKey?: string;
  /**
   * A string of Tailwind classes to apply to the custom checkbox.
   */
  checkTheme?: string;
  /**
   * The default value of the field.
   */
  defaultValue?: string | boolean;
  /**
   * Should the field be disabled?
   */
  disabled?: boolean;
  /**
   * Should the  field be hidden?
   * @default false
   */
  hidden?: boolean;
  /**
   * A string of tailwind classes to apply to the `input` tag.
   */
  inputTheme?: string;
  // isControlled?: boolean;
  /**
   * Should the field value be converted to a date?
   */
  isDate?: boolean;
  /**
   * Should the field value be converted to a number?
   */
  isNumber?: boolean;
  /**
   * Should the user be able to toggle the field on/off?
   */
  isToggle?: boolean;
  /**
   * A string of tailwind classes to apply to the `label` tag.
   */
  labelTheme?: string;
  /**
   * The leading icon to display on the field.
   */
  leadingIcon?: string;
  /**
   * The name of the field. This value must match a key in the `validationSchemas` object. `name` is required, unique, cannot start with a number, and cannout contain special characters.
   * @see https://react-hook-form.com/docs/useform/register Rules entry.
   */
  name: FieldNamesType;
  /**
   * The onBlur event handler.
   */
  onBlur?: (e: FocusEventTypes) => void;
  /**
   * The onChange event handler.
   */
  onChange?: (e: ChangeEventTypes) => void;
  /**
   * The onFocus event handler.
   */
  onFocus?: (e: FocusEventTypes) => void;
  /**
   * The onKeyDown event handler.
   */
  onKeyDown?: (e: KeyboardEventTypes) => void;
  /**
   * The onKeyUp event handler.
   */
  onKeyUp?: (e: KeyboardEventTypes) => void;
  /**
   * Should the optional label be displayed?
   */
  optional?: boolean;
  /**
   * The options to display in the select dropdown or as radio options.
   */
  options?: OptionType[];
  /**
   * The placeholder text to display in the field.
   */
  placeholder?: string;
  /**
   * Should a reset button be displayed inline?
   */
  resetButton?: boolean;
  /**
   * A string of tailwind classes to apply to the `select` tag.
   */
  selectTheme?: string;
  /**
   * Run input value through this function before validation. Only valid on text inputs.
   */
  // setValueAs?: RegisterOptions['setValueAs'];
  /**
   * Should the show/hide password button be displayed?
   */
  showPasswordButton?: boolean;
  /**
   * Should the field be shown even when the form is hidden?
   */
  showWhenHidden?: boolean;
  /**
   * Should the field be spell checked?
   */
  spellCheck?: boolean;
  /**
   * A font awesome icon to display on the inline submit button. On click the onSubmit function will run.
   */
  submitIcon?: string;
  /**
   * A string of tailwind classes to apply to the `input` tag.
   */
  theme?: string;
  /**
   * The title of the field.
   */
  title: string | React.ReactNode;
  /**
   * A string of tailwind classes to apply to the `label` tag.
   */
  titleTheme?: string;
  /**
   * The tooltip to be attached to the field.
   */
  tooltip?: ReactNode;
  /**
   * The field type to be passed to the `input` tag.
   */
  type?:
    | 'captcha'
    | 'checkbox'
    | 'email'
    | 'password'
    | 'radio'
    | 'select'
    | 'state'
    | 'tel'
    | 'text'
    | 'textarea';
}

export type ModifiedFieldType = FieldType & {
  optional: boolean;
};

export interface OptionType {
  disabled?: boolean;
  title: string;
  value: string;
}

export type FieldNamesType = keyof typeof validationSchemas;

export type FieldsType = {
  [key in FieldNamesType]?: string;
};
