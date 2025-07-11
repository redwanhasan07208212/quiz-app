import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-center text-5xl font-bold mb-8 text-gray-800 dark:text-white">
          🎯 General Quiz App
        </h1>
        {!quizComplete ? <Question /> : <QuizSummary />}
      </div>
    </div>
  );
}

export default App;
