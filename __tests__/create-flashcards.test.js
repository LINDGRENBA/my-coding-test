import { Flashcard } from '../src/create-flashcard.js';

describe('Flashcard', () => {

  jest.useFakeTimers();
  let testCard;

  beforeEach(function() {
    testCard = new Flashcard("What's javascript?", ["A city in North Dakota", "A new species of animal", "A programming language"], "A programming language");
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('Should have a question, array of answers, correct answer and timesUp equal to 30 when created', () => {
    expect(testCard).toEqual({question: "What's javascript?", possibleAnswers:["A city in North Dakota", "A new species of animal", "A programming language"], correctAnswer: "A programming language", timesUp: 30});
  });

  test('should have a timesUp level of 26 after 4 seconds', () => {
    testCard.decreaseTime();
    jest.advanceTimersByTime(4001);
    expect(testCard.timesUp).toEqual(26);
  });

});