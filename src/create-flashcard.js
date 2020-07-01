export class Flashcard {
  constructor(question, possibleAnswers, correctAnswer) {
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
    this.timesUp = 30;
    this.timeInterval;
  }

  decreaseTime() {
    setInterval(() => {
      this.timesUp--;
    }, 1000);
  }


}

//timesUp could be used in UI portion and actively update to display to user the remaining time
