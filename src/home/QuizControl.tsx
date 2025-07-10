import { Button } from "../components/ui/button";
import {
  nextQuestion,
  previousQuestion,
} from "../redux/features/quiz/quizSlice";
import { useAppDispatch } from "../redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();

  const handleNext = () => {
    dispatch(nextQuestion());
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  return (
    <div className="flex justify-between items-center mt-6 px-6 pb-6">
      <Button
        onClick={handlePrevious}
        className="w-32 py-2 text-base font-medium border border-gray-300 dark:border-gray-600 rounded-md bg-transparent text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        ← Previous
      </Button>

      <Button
        onClick={handleNext}
        className="w-32 py-2 text-base font-medium border border-blue-950 rounded-md bg-blue-950 text-white hover:bg-blue-950/95 transition-colors duration-200"
      >
        Next →
      </Button>
    </div>
  );
};

export default QuizControl;
