import Question from "./home/Question";
import QuizSummary from "./home/QuizSummary";
import { useAppSelector } from "./redux/hooks";

function App() {
  const { isQuizCompleted } = useAppSelector((state) => state.quiz);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-6 md:p-10">
        <h1 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-10">
          🎯 General Quiz App
        </h1>

        {!isQuizCompleted ? <Question /> : <QuizSummary />}
      </div>
    </div>
  );
}

export default App;
