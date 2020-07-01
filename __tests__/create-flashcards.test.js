import { Flashcard } from '../src/create-flashcard.js';

describe('Flashcard', () => {

  test('Should create a flashcard object', () => {
    let possibleAnswers = ["A city in North Dakota", "A new species of animal", "A programming language"]
    let testFlashcard = new Flashcard("What's javascript?", possibleAnswers, "A programming language");
    expect(testFlashcard).toEqual({question: "What's javascript?", possibleAnswers:possibleAnswers, correctAnswer: "A programming language", timesUp: 30});
  });

});