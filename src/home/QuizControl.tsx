import { Button } from "../components/ui/button";
import {
  completeQuiz,
  nextQuestion,
  previousQuestion,
} from "../redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  const { questions, currentQuestionIndex, userAnswers } = useAppSelector(
    (state) => state.quiz
  );

  const handleNext = () => {
    dispatch(nextQuestion());
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };
  const handleComplete = () => {
    dispatch(completeQuiz());
  };

  return (
    <div className="flex justify-between items-center mt-6 px-6 pb-6">
      <Button
        onClick={handlePrevious}
        disabled={currentQuestionIndex === 0}
        className="w-32 py-2 text-base font-medium border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        ← Previous
      </Button>

      {currentQuestionIndex < questions.length - 1 && (
        <Button
          onClick={handleNext}
          disabled={userAnswers[currentQuestionIndex] === null}
          className="w-32 py-2 text-base font-medium border border-blue-950 rounded-md bg-blue-950 text-white hover:bg-blue-950/95 transition-colors duration-200"
        >
          Next →
        </Button>
      )}
      {currentQuestionIndex === questions.length - 1 && (
        <Button
          onClick={handleComplete}
          disabled={userAnswers[currentQuestionIndex] === null}
          className="w-32 py-2 text-base font-medium border border-blue-950 rounded-md bg-blue-950 text-white hover:bg-blue-950/95 transition-colors duration-200"
        >
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
