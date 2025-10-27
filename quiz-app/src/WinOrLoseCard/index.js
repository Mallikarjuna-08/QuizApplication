import "./index.css";

const WinOrLoseCard = (props) => {
  const { score, total, onRestartQuiz } = props;

  const percentage = Math.round((score / total) * 100);
  const message =
    percentage >= 60
      ? "🎉 Great job! You passed the quiz!"
      : "😔 Keep practicing and try again!";

  return (
    <div className="win-or-lose-card">
      <h1 className="result-title">{message}</h1>
      <p className="score-text">
        Your Score: <span className="highlight">{score}</span> / {total}
      </p>
      <p className="percentage-text">Percentage: {percentage}%</p>
      <button className="restart-button" onClick={onRestartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default WinOrLoseCard;
