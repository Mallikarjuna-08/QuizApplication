import "./index.css"

const QuestionsCard = (props) => {
    const { questionDetails, onSelectOption } = props
    const { question, options, id } = questionDetails
    const onClickOption = (optionId) => {
        onSelectOption(id, optionId)
    }

    return (
        <div className="question-card-container">
            <h1 className="question-title">{question}</h1>
            <ul className="options-container">
                {options.map((eachOption) => (
                    <li key={eachOption.optionId} className="option-item">
                        <button
                            className="option-btn"
                            onClick={() => onClickOption(eachOption.optionId)}
                        >
                            {eachOption.optionText}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default QuestionsCard;
