import { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useAppSelector } from "../redux/hooks";

const Question = () => {
  const { questions, currentQuestionIndex } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = questions[currentQuestionIndex];
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    // Add your logic here to go to next question
    console.log("Selected:", selectedOption);
    setSelectedOption(""); // Reset for next question
  };

  const handlePrevious = () => {
    // Add logic here to go to previous question if needed
    console.log("Go to previous question");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
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

        <CardFooter className="flex justify-between items-center mt-4 px-4 pb-4">
          <Button
            variant="secondary"
            className="w-28"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>

          <Button
            className="w-28"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Question;
