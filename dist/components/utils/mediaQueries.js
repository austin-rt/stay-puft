"use strict";
exports.__esModule = true;
var UseMediaQueries = function () {
    var mq = 'xs';
    if (window) {
        var mediaQuery = window.innerWidth;
        switch (true) {
            case mediaQuery <= 575:
                mq = 'xs';
                break;
            case 576 <= mediaQuery && mediaQuery <= 767:
                mq = 'sm';
                break;
            case 768 <= mediaQuery && mediaQuery <= 991:
                mq = 'md';
                break;
            case 992 <= mediaQuery && mediaQuery <= 1600:
                mq = 'lg';
                break;
            case mediaQuery >= 1601:
                mq = 'xl';
                break;
        }
    }
    return mq;
};
exports["default"] = UseMediaQueries;
//# sourceMappingURL=mediaQueries.js.map