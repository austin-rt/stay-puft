const trapFocus = (e: any, id: string, enabled: boolean) => {
  // only execute if tab is pressed
  if (e.key !== 'Tab' || !enabled) return;

  // here we query all focusable elements, customize as your own need
  const parentEl = document.querySelector(id);
  const focusableModalElements = parentEl!.querySelectorAll<HTMLElement>(
    'a[href], [role="button"], button:not([disabled]), textarea, input, select'
  );

  const firstElement = focusableModalElements[0];
  const lastElement = focusableModalElements[focusableModalElements.length - 1];

  console.log(firstElement, lastElement);
  // if going forward by pressing tab and lastElement is active shift focus to first focusable element
  if (!e.shiftKey && document.activeElement === lastElement) {
    firstElement!.focus();
    return e.preventDefault();
  }

  // if going backward by pressing tab and firstElement is active shift focus to last focusable element
  if (e.shiftKey && document.activeElement === firstElement) {
    lastElement!.focus();
    e.preventDefault();
  }
};

export default trapFocus;
