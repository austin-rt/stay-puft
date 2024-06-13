"use strict";
exports.__esModule = true;
exports.isElementVisible = void 0;
/**
 * Checks if the specified element is currently visible within the viewport,
 * considering an optional offset for top sticky elements live navbars or headers.
 * @param el - The element to check for visibility.
 * @param offset - An optional offset to consider for top sticky elements live navbars or headers. Positive values expand the visible area, while negative values shrink it. If not provided, the visibility check is performed without any offset adjustment.
 * @example
 * // Check if the element with id "myElement" is visible with a 50px offset
 * const isVisible = isElementVisible(document.getElementById('myElement'), 50);
 * if (isVisible) {
 *   console.log('The element is visible.');
 * } else {
 *   console.log('The element is not visible.');
 * }
 * @limitations This function only checks if the element's bounding box is within the viewport, considering the specified offset. It does not account for CSS visibility or opacity.
 */
var isElementVisible = function (el, offset) {
    var rect = el.getBoundingClientRect();
    // get the height and width of the window or the document
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    return (
    // if the top and left of the element are greater than or equal to the negative offset
    // and the bottom and right of the element are less than or equal to
    // the window height and width plus the offset
    rect.top + offset >= 0 &&
        rect.left + offset >= 0 &&
        rect.bottom <= windowHeight + offset &&
        rect.right <= windowWidth + offset);
};
exports.isElementVisible = isElementVisible;
/**
 * Scrolls to the specified element on the page with optional offset adjustment,
 * providing smooth scrolling behavior.
 * @param selector - The CSS selector of the element to scroll to.
 * @param behavior - An optional parameter to specify the scrolling behavior. Defaults to "smooth" if not provided.
 * @param offset - An optional offset to adjust the scroll position. If not provided, it searches for an element matching [data-slmr-offsetter="header"], if none is found, no offset adjustment is applied to the scroll position.
 * @param checkForVisibility - An optional flag to check if the element is already visible before scrolling. Defaults to false if not provided.
 * @example
 * // Scroll to the element with the class "scroll-target" with a 100px offset
 * scrollToElement('.scroll-target', 100);
 * @limitations This function scrolls to the top-left corner of the specified element. It does not provide fine-grained control over scroll position or support for horizontal scrolling.
 */
var scrollToElement = function (selector, behavior, offset, checkForVisibility) {
    var _a;
    if (behavior === void 0) { behavior = 'smooth'; }
    if (checkForVisibility === void 0) { checkForVisibility = false; }
    if (!document)
        return;
    var element = document.querySelector(selector);
    if (!element)
        return;
    var headerHeight = (_a = document.querySelector('[data-slmr-offsetter="header"]')) === null || _a === void 0 ? void 0 : _a.clientHeight;
    // check for offset, then header height, then default to 0
    var offsetAmount = offset && offset <= 0 ? offset : headerHeight ? headerHeight + 15 : 0;
    // if flag is on and the element is already visible, return
    if (checkForVisibility && (0, exports.isElementVisible)(element, offsetAmount))
        return;
    // scroll to the element minus the offset amount from the top of the document
    window.scrollTo({
        behavior: behavior,
        top: element.getBoundingClientRect().top -
            document.body.getBoundingClientRect().top -
            offsetAmount
    });
};
exports["default"] = scrollToElement;
//# sourceMappingURL=scrollToElement.js.map