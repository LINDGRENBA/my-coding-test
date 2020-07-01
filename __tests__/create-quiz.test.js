
import { Quiz } from './../src/create-quiz.js';
import { Flashcard } from '../src/create-flashcard.js';

describe('Quiz', () => {

  jest.useFakeTimers();
  let myQuiz;
  let flashcards;
  let testCard;

  beforeEach(function() {
    flashcards = [new Flashcard, new Flashcard];
    myQuiz = new Quiz(flashcards);
    testCard = new Flashcard("What's javascript?", ["A city in North Dakota", "A new species of animal", "A programming language"], "A programming language");
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

  test('totalScore should increase by 1', () => {
    let userAnswer = "A programming language";
    expect(myQuiz.totalScore).toEqual(1);
  });

});