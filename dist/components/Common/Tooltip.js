import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const _jsxFileName = "/Users/austin/code/af/stay-puft/src/components/Common/Tooltip.tsx";
import { useEffect, useRef, useState } from 'react';
// automatically activated tooltip
const Tooltip = ({ callback = () => null, focusCb = () => null, blurCb = () => null, content, id = 'tooltip', position = 'bottom', showQuestion = false, showInfo = false, showOnHover = true, theme = 'cursor-pointer px-0.5 transition-all', themeTooltip = `bg-white border text-black px-3 py-2 inline-block rounded-md text-xs text-center shadow-md`, themeWrapper = ``, title, width = 'w-80', buttonComponent, iconColor = 'text-_-misc-selectedDark', }) => {
    const [show, showSetter] = useState(false);
    const [focus, focusSetter] = useState(false);
    const wrapperRef = useRef(null);
    const [positionClass, positionClassSetter] = useState('absolute translate-x-1/2 top-0 ml-2');
    useEffect(() => {
        switch (position) {
            case 'right':
                positionClassSetter('absolute left-full top-full');
                break;
            case 'left':
                positionClassSetter('absolute top-0 mr-2 right-full');
                break;
            case 'top':
                positionClassSetter('absolute -bottom-5 mb-2 -left-2');
                break;
            default:
                positionClassSetter('absolute top-full mt-2 -ml-10  top-full translate-x-1/2');
        }
        document.addEventListener('click', handleClickOutside, false);
        return () => {
            document.removeEventListener('click', handleClickOutside, false);
        };
    }, [position]);
    const handleButtonClick = () => {
        callback();
        showSetter(!show);
    };
    const handleClickOutside = (event) => {
        var _a;
        if (!((_a = wrapperRef === null || wrapperRef === void 0 ? void 0 : wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)))
            showSetter(false);
    };
    return (_jsxDEV("span", Object.assign({ id: `tooltip--${id}--container`, className: `slmr--tooltip cursor-pointer relative ${themeWrapper}`, ref: wrapperRef }, { children: [_jsxDEV("span", Object.assign({ "aria-controls": `tooltip--${id}`, className: theme, onBlur: () => {
                    blurCb();
                    setTimeout(() => {
                        showSetter(false);
                    }, 200);
                    focusSetter(false);
                }, onFocus: () => {
                    focusCb();
                    showSetter(true);
                    focusSetter(true);
                }, onClick: () => {
                    callback();
                    showSetter(!show);
                }, onMouseEnter: () => {
                    showOnHover && showSetter(true);
                }, onMouseLeave: () => {
                    !focus && showOnHover && showSetter(false);
                }, tabIndex: 0, onKeyDown: (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        handleButtonClick();
                    }
                } }, { children: [buttonComponent || _jsxDEV("span", { children: title }, void 0, false, { fileName: _jsxFileName, lineNumber: 121, columnNumber: 28 }, this), ' ', (showQuestion || showInfo) && (_jsxDEV("sup", Object.assign({ className: "text-[11px]" }, { children: [showQuestion && (_jsxDEV("i", { className: `fas fa-question-circle ${iconColor}`, "aria-label": "click to see tooltip", "aria-hidden": "true" }, void 0, false, { fileName: _jsxFileName, lineNumber: 124, columnNumber: 31 }, this)), showInfo && (_jsxDEV("i", { className: `fas fa-circle-info ${iconColor}`, "aria-label": "click to see tooltip", "aria-hidden": "true" }, void 0, false, { fileName: _jsxFileName, lineNumber: 131, columnNumber: 27 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 122, columnNumber: 41 }, this)), _jsxDEV("span", Object.assign({ className: "sr-only" }, { children: `View ${id} tooltip` }), void 0, false, { fileName: _jsxFileName, lineNumber: 140, columnNumber: 9 }, this)] }), void 0, true, { fileName: _jsxFileName, lineNumber: 88, columnNumber: 7 }, this), _jsxDEV("div", Object.assign({ id: `tooltip--${id}`, className: `${positionClass} ${width} ${themeTooltip} slmr--tooltip-${position} ${show !== true ? 'sr-only' : 'not-sr-only'}`, role: "tooltip", "aria-describedby": id }, { children: content }), void 0, false, { fileName: _jsxFileName, lineNumber: 142, columnNumber: 7 }, this), show === true && (_jsxDEV("button", Object.assign({ className: "sr-only", "aria-label": "close tooltip", onClick: () => showSetter(false) }, { children: "Close tooltip" }), void 0, false, { fileName: _jsxFileName, lineNumber: 152, columnNumber: 26 }, this))] }), void 0, true, { fileName: _jsxFileName, lineNumber: 82, columnNumber: 11 }, this));
};
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map