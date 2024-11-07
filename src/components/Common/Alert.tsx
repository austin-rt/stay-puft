import React from 'react';
import alerts from '../configs/alerts';

export interface AlertProps {
  callback: () => void;
  children: React.ReactNode;
  variant?: keyof typeof alerts;
  icon?: string;
  id?: string;
  close?: boolean;
  theme?: string;
}

const Alert = ({
  callback = () => {},
  children,
  variant = 'default',
  id,
  icon,
  close,
  theme = 'w-full text-left',
}: AlertProps) => {
  if (children === '' || !children) return <></>;

  return (
    <section
      id={id}
      className={`flex justify-between py-2.5 px-4 border-l-4 font-semibold ${alerts[variant]} ${theme}`}
    >
      {icon && (
        <div>
          <i className={`${icon} pr-3`} />
        </div>
      )}
      <div className="flex-grow" role="alert">
        {children}
      </div>
      {close && (
        <button onClick={callback}>
          <i className="fa-light fa-xmark"></i>
        </button>
      )}
    </section>
  );
};

export default Alert;
