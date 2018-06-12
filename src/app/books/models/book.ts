export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public abstract: string,
    public authors: string[],
    public rating = 0,
    public cover = '/assets/img/book-covers/dummy.png'
  ) {}
}
