
import { Quiz } from './../src/create-quiz.js';

describe('Quiz', () => {

  test('should correctly create a Quiz object', () => {
    let questions = ["flashcard"];
    const myQuiz = new Quiz(questions);
    expect(myQuiz).toEqual({totalScore: 0, questions: questions, index: 0});
  });

});