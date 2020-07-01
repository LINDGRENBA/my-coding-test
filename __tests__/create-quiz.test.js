
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

});