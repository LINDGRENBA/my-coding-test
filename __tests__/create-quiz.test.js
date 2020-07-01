
import { Quiz } from './../src/create-quiz.js';
import { Flashcard } from '../src/create-flashcard.js';

describe('Quiz', () => {

  jest.useFakeTimers();
  let myQuiz;
  let flashcards;
  let testCard;

  beforeEach(function() {
    testCard = new Flashcard("What's javascript?", ["A city in North Dakota", "A new species of animal", "A programming language"], "A programming language");
    flashcards = [testCard];
    myQuiz = new Quiz(flashcards);
    jest.clearAllTimers();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should correctly create a Quiz object', () => {
    expect(myQuiz).toEqual({totalScore: 0, flashcards: flashcards, index: 0});
  });

  test('should increment index by 1 after 30 seconds', () => {
    jest.setTimeout(35000);
    myQuiz.increaseIndex();
    jest.advanceTimersByTime(31000);
    expect(myQuiz.index).toEqual(1);
  });

  test('should increase totalScore by 1', () => {
    myQuiz.increaseTotalScore();
    expect(myQuiz.totalScore).toEqual(1);
  });

  test('should push flashcard object to wrongAnswers array if user selects wrong answer', () => {
    let userAnswer = "A city in North Dakota";
    if(!testCard.checkUserAnswer(userAnswer)) {
      myQuiz.saveWrongAnswersForReview(testCard);
      expect(myQuiz.wrongAnswers[0]).toEqual(testCard);
    }
  });

});