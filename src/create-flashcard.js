import { Quiz } from './create-quiz.js';
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
      //if user answers correctly, add a point to their total score
      return true;
    } else {
      //if wrong or skip, add the flashcard to an array, to be used to review later
      return false;
    }
  }

}

//timesUp could be used in UI portion and actively update to display to user the remaining time
