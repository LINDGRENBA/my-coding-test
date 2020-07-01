import { flashcards } from './create-flashcard.js';

export class Quiz {
  constructor(flashcards) {
    this.totalScore = 0;
    this.flashcards = flashcards;
    this.index = 0;
    this.wrongAnswers;
  }

  increaseIndex() {
    setTimeout(() => {
      this.index += 1;
    }, 30000);
  }

  increaseTotalScore() {
    this.totalScore += 1;
  }

  saveWrongAnswersForReview(testCard) {
    this.wrongAnswers = [];
    this.wrongAnswers.push(testCard);
    // wrongAnswers.push(this.flashcards[index]);
  }

}


//could use setTimeout to change index after 30 seconds