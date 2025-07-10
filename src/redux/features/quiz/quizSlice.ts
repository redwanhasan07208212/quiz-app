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
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
    startQuiz: (state) => {
      state.isQuizStarted = true;
      state.currentQuestionIndex = 0;
      state.userAnswers = Array(state.questions.length).fill(null); // Reset answers
      state.isQuizCompleted = false; // Reset completion status
    },
    completeQuiz: (state) => {
      state.isQuizCompleted = true;
    },
  },
});

export const {
  setAnswer,
  nextQuestion,
  previousQuestion,
  startQuiz,
  completeQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
