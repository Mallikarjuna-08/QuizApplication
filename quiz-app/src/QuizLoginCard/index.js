import "./index.css";

const QuizLoginCard = (props) => {
  const { onStartQuiz } = props;

  return (
    <div className="login-card-container">
      <div className="login-card">
        <h1 className="login-title">Welcome to the Ultimate Quiz!</h1>
        <p className="login-subtitle">Test your knowledge and challenge yourself 🔥</p>
        <button className="start-button" onClick={onStartQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizLoginCard;
