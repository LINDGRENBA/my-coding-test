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

  }

}

//timesUp could be used in UI portion and actively update to display to user the remaining time
