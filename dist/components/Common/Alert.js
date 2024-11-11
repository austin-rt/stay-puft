import { Fragment as _Fragment, jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/Common/Alert.tsx";
import alerts from '../configs/alerts';
const Alert = ({ callback = () => { }, children, variant = 'default', id, icon, close, theme = 'w-full text-left', }) => {
    if (children === '' || !children)
        return _jsxDEV(_Fragment, {}, void 0, false, { fileName: _jsxFileName, lineNumber: 23, columnNumber: 43 }, this);
    return (_jsxDEV("section", Object.assign({ id: id, className: `flex justify-between py-2.5 px-4 border-l-4 font-semibold ${alerts[variant]} ${theme}` }, { children: [icon && (_jsxDEV("div", { children: _jsxDEV("i", { className: `${icon} pr-3` }, void 0, false, { fileName: _jsxFileName, lineNumber: 32, columnNumber: 11 }, this) }, void 0, false, { fileName: _jsxFileName, lineNumber: 30, columnNumber: 17 }, this)), _jsxDEV("div", Object.assign({ className: "flex-grow", role: "alert" }, { children: children }), void 0, false, { fileName: _jsxFileName, lineNumber: 35, columnNumber: 7 }, this), close && (_jsxDEV("button", Object.assign({ onClick: callback }, { children: _jsxDEV("i", { className: "fa-light fa-xmark" }, void 0, false, { fileName: _jsxFileName, lineNumber: 40, columnNumber: 11 }, this) }), void 0, false, { fileName: _jsxFileName, lineNumber: 38, columnNumber: 18 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 25, columnNumber: 11 }, this));
};
export default Alert;
//# sourceMappingURL=Alert.js.map