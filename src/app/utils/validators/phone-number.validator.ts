import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNumberValidator(): ValidatorFn {
  const curpRegrex = /^[0-9]+$/i;
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) {
      return null;
    }
    const forbidden = curpRegrex.test(control.value);
    return !forbidden ? { forbiddenNumber: true } : null;
  };
}
