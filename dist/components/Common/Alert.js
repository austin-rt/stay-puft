import React from 'react';
import alerts from '../configs/alerts';
const Alert = ({ callback = () => { }, children, variant = 'default', id, icon, close, theme = 'w-full text-left', }) => {
    if (children === '' || !children)
        return React.createElement(React.Fragment, null);
    return (React.createElement("section", { id: id, className: `flex justify-between py-2.5 px-4 border-l-4 font-semibold ${alerts[variant]} ${theme}` },
        icon && (React.createElement("div", null,
            React.createElement("i", { className: `${icon} pr-3` }))),
        React.createElement("div", { className: "flex-grow", role: "alert" }, children),
        close && (React.createElement("button", { onClick: callback },
            React.createElement("i", { className: "fa-light fa-xmark" })))));
};
export default Alert;
//# sourceMappingURL=Alert.js.map