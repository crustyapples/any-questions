interface ResultsProps {
    questions: string[];
    onBack: any;
    prompt: string;
}

const Results: React.FC<ResultsProps> = (props) => {

    const questionsElements = [];
    for (let i =-0; i<props.questions.length; i++) {
        const element = <div key={i}>{props.questions[i]}</div>;
        questionsElements.push(element)
    }

  return (
    <>
      <div>
      <div>
        <b>Who you're asking: </b>
        </div>
        <div>{props.prompt}</div>
        <div>
        <b>Questions generated: </b>
        </div>
        <div>{questionsElements}</div>
      </div>
      <button onClick={props.onBack}>Back</button>
    </>
  );
};

export default Results;
