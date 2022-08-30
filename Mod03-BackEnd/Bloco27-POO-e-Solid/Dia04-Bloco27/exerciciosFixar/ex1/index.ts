import ReadingTracker from "./ReadingTracker";
import WishList from "./WishList";

const readTracker = new ReadingTracker(20);
const wishList = new WishList();

wishList.addToWishList({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishList.showWishList();

readTracker.trackReadings(12);
readTracker.trackReadings(9);