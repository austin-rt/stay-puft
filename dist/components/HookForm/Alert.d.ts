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
declare const Alert: ({ callback, children, variant, id, icon, close, theme, }: AlertProps) => React.JSX.Element;
export default Alert;
