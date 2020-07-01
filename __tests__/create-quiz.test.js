
import { Quiz } from './../src/create-quiz.js';
import { Flashcard } from '../src/create-flashcard.js';

describe('Quiz', () => {

  jest.useFakeTimers();
  let myQuiz;
  let flashcards;

  beforeEach(function() {
    flashcards = [new Flashcard, new Flashcard];
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
    jest.advanceTimersByTime(30001);
    expect(myQuiz.index).toEqual(1);
  });

});