import { Book } from './types/Book';

export default class WishList {
  private wishList: Book[];

  constructor() {
    this.wishList = [];
  }

  addToWishList(book: Book): void {
    this.wishList.push(book);
  };

  showWishList(): void {
    console.log(this.wishList);
  };
};