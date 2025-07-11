import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetQuiz } from "../redux/features/quiz/quizSlice";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const QuizSummary = () => {
  const { questions, userAnswers } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();

  const totalQuestions = questions.length;
  const correctAnswers = questions.filter(
    (q, i) => q.correctAnswer === userAnswers[i]
  ).length;
  const wrongAnswers = totalQuestions - correctAnswers;

  const handleRestart = () => {
    dispatch(resetQuiz());
  };

  return (
    <Card className="bg-white dark:bg-gray-800 shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          🎉 Quiz Completed!
        </CardTitle>
        <CardDescription className="text-center text-gray-600 dark:text-gray-300 mt-1">
          Here's how you did:
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 text-lg text-gray-700 dark:text-gray-200">
        <div className="flex justify-between">
          <span>Total Questions:</span>
          <span>{totalQuestions}</span>
        </div>
        <div className="flex justify-between text-green-600 font-semibold">
          <span>Correct Answers:</span>
          <span>{correctAnswers}</span>
        </div>

        <div className="flex justify-between text-red-500 font-semibold">
          <span>Wrong Answers:</span>
          <span>{wrongAnswers}</span>
        </div>

        <div className="text-center mt-6">
          <Button onClick={handleRestart} className="px-6 py-2 text-lg">
            🔁 Restart Quiz
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizSummary;
