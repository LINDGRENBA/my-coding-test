export class Flashcard {
  constructor(question, possibleAnswers, correctAnswer) {
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
    this.timesUp = 30;
  }

  decreaseTime() {
    setInterval(() => {
      this.timesUp--;
    }, 1000);
  }

  checkUserAnswer(userAnswer) {
    if(userAnswer === this.correctAnswer) {
      return true;
    }
  }

}

//timesUp could be used in UI portion and actively update to display to user the remaining time
