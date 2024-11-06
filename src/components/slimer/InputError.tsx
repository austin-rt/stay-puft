import React from 'react';

export interface InputErrorType {
  error?: string;
  theme?: string;
  inputId?: string;
}
const InputError = ({
  error = '',
  theme = '',
  inputId = '',
}: InputErrorType) => {
  if (!error || error === '')
    return <span data-id="slmr--InputError--empty" className="hidden" />;

  return (
    <div className="flex justify-center">
      <span
        data-c="slmr--InputError"
        className={`bg-_-states-error  w-full first:box-shadow-md inline -bottom-6 text-white text-xs px-5 py-1 drop-shadow-md rounded-b  ${theme}`}
      >
        <span aria-describedby={inputId} role="alert">{` ${error}`}</span>
      </span>
    </div>
  );
};

export default InputError;
