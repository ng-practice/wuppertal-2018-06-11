import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class IsbnValidator implements Validator {
  isbnMatcher = /\d{3}-\d{3}-\d{3}/;

  validate(control: AbstractControl): ValidationErrors | null {
    return this.isbnMatcher.test(control.value)
      ? null
      : { isbn: true };
  }
}
