import React from 'react';
export interface InputErrorType {
    error?: string;
    theme?: string;
    inputId?: string;
}
declare const InputError: ({ error, theme, inputId, }: InputErrorType) => React.JSX.Element;
export default InputError;
