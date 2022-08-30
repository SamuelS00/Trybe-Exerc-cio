import EmailNotification from './EmailNotification';
import PhoneNotification from './PhoneNotification';
import ConsoleNotification from './ConsoleNotification';
import Notificator from './interfaces/Notificator';


export default class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  private notificator: Notificator;
  constructor(
    readingGoal: number,
    email: string,
    notificator: Notificator = new ConsoleNotification('')
  ) {
    this.notificator = notificator;
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}

const readingEmail = new ReadingTracker(2, 'samuelsamamdmmmf@gmail.com', new EmailNotification('samuelsamamdmmmf@gmail.com'));
const readingPhone = new ReadingTracker(12, 'samuelsamamdmmmf@gmail.com', new PhoneNotification(38293920400));
const readingConsole = new ReadingTracker(21, 'samuelsamamdmmmf@gmail.com');
