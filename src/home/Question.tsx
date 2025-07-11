import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAnswer } from "../redux/features/quiz/quizSlice";
import QuizControl from "./QuizControl";

const Question = () => {
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const dispatch = useAppDispatch();
  const currentQuestion = questions[currentQuestionIndex];

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (answer: string) => {
    setSelectedOption(answer);
    dispatch(setAnswer({ questionIndex: currentQuestionIndex, answer }));
  };

  return (
    <div className="flex justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <Card className="w-full max-w-xl shadow-lg rounded-2xl bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">
            {currentQuestion.question}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500 dark:text-gray-300 mt-1">
            প্রশ্ন {currentQuestionIndex + 1} / {questions.length}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                id={`option-${index}`}
                value={option}
                className="peer hidden"
                checked={selectedOption === option}
                onChange={() => handleSelect(option)}
              />
              <label
                htmlFor={`option-${index}`}
                className={`block cursor-pointer border rounded-xl px-4 py-2 text-gray-700 dark:text-gray-200 transition-all duration-200
                  peer-checked:border-blue-600 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-800 dark:peer-checked:border-blue-400
                  hover:bg-gray-100 dark:hover:bg-gray-700`}
              >
                {option}
              </label>
            </div>
          ))}
        </CardContent>

        <QuizControl />
      </Card>
    </div>
  );
};

export default Question;
