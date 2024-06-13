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
export declare const isElementVisible: (el: HTMLElement, offset: number) => boolean;
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
declare const scrollToElement: (selector: string, behavior?: ScrollBehavior, offset?: number, checkForVisibility?: boolean) => void;
export default scrollToElement;
