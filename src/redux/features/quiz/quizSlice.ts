import { createSlice } from "@reduxjs/toolkit";
import { quizData } from "../../../lib/quizData";

interface QuizState {
  questions: typeof quizData;
  currentQuestionIndex: number;
  userAnswers: (string | null)[];
  isQuizStarted: boolean;
  isQuizCompleted: boolean;
}

const initialState: QuizState = {
  questions: quizData,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null), // Initialize userAnswers with null values
  isQuizStarted: false,
  isQuizCompleted: false,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
      console.log(questionIndex, answer);
      state.userAnswers[questionIndex] = answer;
    },
  },
});

export const { setAnswer } = quizSlice.actions;
export default quizSlice.reducer;
