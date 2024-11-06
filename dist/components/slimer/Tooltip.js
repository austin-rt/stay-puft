import React, { useEffect, useRef, useState } from 'react';
// automatically activated tooltip
const Tooltip = ({ callback = () => null, focusCb = () => null, blurCb = () => null, content, id = 'tooltip', position = 'bottom', showQuestion = false, showInfo = false, showOnHover = true, theme = 'cursor-pointer px-0.5 transition-all', themeTooltip = `bg-white border  text-black px-3 py-2 inline-block rounded-md text-xs text-center shadow-md`, themeWrapper = ``, title, width = 'w-80', buttonComponent, iconColor = 'text-_-misc-selectedDark', }) => {
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
                positionClassSetter('absolute bottom-full mb-2 -left-1/2');
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
    return (React.createElement("span", { "data-test": "component-tooltip", id: `tooltip--${id}--container`, className: `slmr--tooltip cursor-pointer relative ${themeWrapper}`, ref: wrapperRef },
        React.createElement("span", { "aria-controls": `tooltip--${id}`, className: theme, onBlur: () => {
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
            } },
            buttonComponent || React.createElement("span", null, title),
            ' ',
            (showQuestion || showInfo) && (React.createElement("sup", { className: "text-[11px]" },
                showQuestion && (React.createElement("i", { className: `fas fa-question-circle ${iconColor}`, "aria-label": "click to see tooltip", "aria-hidden": "true" })),
                showInfo && (React.createElement("i", { className: `fas fa-circle-info ${iconColor}`, "aria-label": "click to see tooltip", "aria-hidden": "true" })))),
            React.createElement("span", { className: "sr-only" }, `View ${id} tooltip`)),
        React.createElement("div", { id: `tooltip--${id}`, className: `${positionClass} ${width} ${themeTooltip} slmr--tooltip-${position} ${show !== true ? 'sr-only' : 'not-sr-only'}`, role: "tooltip", "aria-describedby": id }, content),
        show === true && (React.createElement("button", { className: "sr-only", "aria-label": "close tooltip", onClick: () => showSetter(false) }, "Close tooltip"))));
};
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map