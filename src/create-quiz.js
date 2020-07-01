export class Quiz {
  constructor(flashcards) {
    this.totalScore = 0;
    this.flashcards = flashcards;
    this.index = 0;
  }

  increaseIndex() {
    setTimeout(() => {

    }, 30000);
  }

};

// setTimeout(() => {
//   this.index++;
// }, 30000);

//could use setTimeout to change index after 30 seconds