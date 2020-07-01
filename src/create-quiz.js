export class Quiz {
  constructor(flashcards) {
    this.totalScore = 0;
    this.flashcards = flashcards;
    this.index = 0;
  }

  increaseIndex() {
    setTimeout(() => {
      this.index += 1;
    }, 30000);
  }

};


//could use setTimeout to change index after 30 seconds