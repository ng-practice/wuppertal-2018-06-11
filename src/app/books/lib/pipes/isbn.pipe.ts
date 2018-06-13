import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isbn'
})
export class IsbnPipe implements PipeTransform {
  transform(isbn: string, separatorOption?: string): string {
    if (!isbn) {
      return isbn;
    }

    const separator = separatorOption || '-';
    const normalizedIsbn = isbn.replace(/-/g, '').trim();
    const groups = [];

    for (let i = 0; i < normalizedIsbn.length; i += 4) {
      groups.push(normalizedIsbn.substr(i, 4));
    }

    return groups.join(separator);
  }
}
