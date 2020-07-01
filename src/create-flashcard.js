export class Flashcard {
  constructor(question, possibleAnswers, correctAnswer) {
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
    this.timesUp = 30;
  }
}


