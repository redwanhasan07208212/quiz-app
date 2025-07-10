import { Button } from "../components/ui/button";

const QuizControl = () => {
  const handleNext = () => {
    // Add your logic here to go to next question
    console.log("Next question");
  };

  const handlePrevious = () => {
    // Add logic here to go to previous question if needed
    console.log("Go to previous question");
  };

  return (
    <div className="flex justify-between items-center mt-4 px-4 pb-4">
      <Button variant="secondary" className="w-28" onClick={handlePrevious}>
        Previous
      </Button>
      <Button className="w-28" onClick={handleNext}>
        Next
      </Button>
    </div>
  );
};

export default QuizControl;
