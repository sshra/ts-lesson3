const checkbox = document.querySelector('checkbox');

const isHTMLInputElement = (
  element: Element | null,
) : element is HTMLInputElement => {
  return (element instanceof HTMLInputElement);
}

if (isHTMLInputElement(checkbox)) {
  checkbox.checked;
}

const isNumber = (value: unknown): value is number =>
  typeof value === 'number';

const format = (value: string | number): string => {
  if (typeof value === 'number') {
    return value.toFixed(2);
  } else {
    return parseFloat(value).toFixed(2);
  }
}