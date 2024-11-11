import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/Common/InputError.tsx";
const InputError = ({ error = '', theme = '', inputId = '', }) => {
    if (!error || error === '')
        return _jsxDEV("span", { className: "hidden" }, void 0, false, { fileName: _jsxFileName, lineNumber: 13, columnNumber: 37 }, this);
    return (_jsxDEV("div", Object.assign({ className: "flex justify-center" }, { children: _jsxDEV("span", Object.assign({ className: `bg-_-states-error  w-full first:box-shadow-md inline -bottom-6 text-white text-xs px-5 py-1 drop-shadow-md rounded-b  ${theme}` }, { children: _jsxDEV("span", Object.assign({ "aria-describedby": inputId, role: "alert" }, { children: ` ${error}` }), void 0, false, { fileName: _jsxFileName, lineNumber: 20, columnNumber: 9 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 17, columnNumber: 7 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 15, columnNumber: 11 }, this));
};
export default InputError;
//# sourceMappingURL=InputError.js.map