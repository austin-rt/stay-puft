import React from 'react';
const InputError = ({ error = '', theme = '', inputId = '', }) => {
    if (!error || error === '')
        return React.createElement("span", { className: "hidden" });
    return (React.createElement("div", { className: "flex justify-center" },
        React.createElement("span", { className: `bg-_-states-error  w-full first:box-shadow-md inline -bottom-6 text-white text-xs px-5 py-1 drop-shadow-md rounded-b  ${theme}` },
            React.createElement("span", { "aria-describedby": inputId, role: "alert" }, ` ${error}`))));
};
export default InputError;
//# sourceMappingURL=InputError.js.map