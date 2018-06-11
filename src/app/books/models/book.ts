export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public abstract: string,
    public authors: string[],
    public rating: number
  ) {}
}
