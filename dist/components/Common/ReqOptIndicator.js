import React from 'react';
const ReqOptIndicator = ({ optional }) => {
    return (React.createElement(React.Fragment, null, optional ? (React.createElement("sup", { className: "text-[10px] text-_-neutrals-900 float-right relative top-[4px] ml-1" }, '(optional)')) : (React.createElement("sup", { className: `text-_-states-error font-bold text-xs ml-0.5` }, '*'))));
};
export default ReqOptIndicator;
//# sourceMappingURL=ReqOptIndicator.js.map