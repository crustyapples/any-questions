interface ResultsProps {
    questions: string[];
    onBack: any;
    prompt: string;
}



const Results: React.FC<ResultsProps> = (props) => {

    const questionsElements = [];
    for (let i =-0; i<props.questions.length; i++) {
        const element = <div className="bg-[#F8F5F4] mb-3 p-2 rounded-md" key={i}>{props.questions[i]}</div>;
        questionsElements.push(element)
    }
    
    const resultSection = (label: string, body: any) => {
        return (
            <div className="bg-[#EACFAE] p-4 my-2 rounded-md">
            <div className="text-[#CA9352] text-lg font-bold mb-4">
            {label}
            </div>
            <div>{body}</div>
            </div>
        );
    }


  return (
    <>
      <div>
      {resultSection("Who you're asking: ", <div className="text-xl font-bold text-yellow-900">{props.prompt}</div>)}
      {resultSection("Questions generated: ", <div className="text-lg text-[#422C12]">{questionsElements}</div>)}
      </div>
      <button 
      className="bg-gradient-to-r from-yellow-900 to-yellow-600 disabled:opacity-50 text-white w-full p-2 rounded-md text-lg"
      onClick={props.onBack}>Back</button>
    </>
  );
};

export default Results;
