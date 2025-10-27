import "./index.css";
import { Component } from "react";
import QuizLoginCard from "../QuizLoginCard";
import WinOrLoseCard from "../WinOrLoseCard";
import QuestionsCard from "../QuestionsCard";

class QuizPage extends Component {
  state = {
    isQuizStarted: false,
    score: 0,
    showResultCard: false,
    currentQuestionIndex: 0,
  };

  onStartQuiz = () => {
    this.setState({ isQuizStarted: true });
  };

  onSelectOption = (id, selectedOptionId) => {
    const { questionsList } = this.props;
    const { currentQuestionIndex, score } = this.state;

    const currentQuestion = questionsList[currentQuestionIndex];
    const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

    if (currentQuestionIndex < questionsList.length - 1) {
      this.setState({
        currentQuestionIndex: currentQuestionIndex + 1,
        score: isCorrect ? score + 1 : score,
      });
    } else {
      this.setState({
        score: isCorrect ? score + 1 : score,
        showResultCard: true,
      });
    }
  };

  onRestartQuiz = () => {
    this.setState({
      isQuizStarted: false,
      score: 0,
      showResultCard: false,
      currentQuestionIndex: 0,
    });
  };

  render() {
    const { isQuizStarted, showResultCard, score, currentQuestionIndex } = this.state;
    const { questionsList } = this.props;

    let content;
    if (!isQuizStarted) {
      content = <QuizLoginCard onStartQuiz={this.onStartQuiz} />;
    } else if (showResultCard) {
      content = (
        <WinOrLoseCard
          score={score}
          total={questionsList.length}
          onRestartQuiz={this.onRestartQuiz}
        />
      );
    } else {
      const questionDetails = questionsList[currentQuestionIndex];
      content = (
        <QuestionsCard
          questionDetails={questionDetails}
          onSelectOption={this.onSelectOption}
        />
      );
    }

    return (
      <div className="quiz-page-container">
        <div className="quiz-content">{content}</div>
      </div>
    );
  }
}

export default QuizPage;
