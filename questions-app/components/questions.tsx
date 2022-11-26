import React from "react";
import Form from "./form";
import Results from "./results";
const Questions: React.FC = () => {

    const ENDPOINT: string = "https://6fuovob538.execute-api.us-east-2.amazonaws.com/prod/generate_questions";
    const CHARACTER_LIMIT = 32;
    const [prompt, setPrompt] = React.useState("");
    const [questions, setQuestions] = React.useState([]);
    const [hasResult, setHasResult] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    const onSubmit = () => {
      console.log("Submitting: " + prompt);
      setIsLoading(true);
      fetch(`${ENDPOINT}?prompt=${prompt}`)
        .then((res) => res.json()
        .then(onResult)
      );
    };

    const onResult = (data: any) => {
        setQuestions(data.questions);
        setHasResult(true);
        setIsLoading(false);
    };

    const onReset = () => {
        setPrompt("");
        setHasResult(false);
        setIsLoading(false);
    };

    let displayedElement = null;

    if (hasResult) {
        displayedElement = (
            <Results prompt={prompt} questions={questions} onBack={onReset}/>
        );
    } else {
        displayedElement = (
            <Form prompt={prompt} setPrompt={setPrompt} onSubmit={onSubmit} isLoading={isLoading} characterLimit={CHARACTER_LIMIT} />
        );
    }


    return (
      <>
        <h1>Any Questions?</h1>
        {displayedElement}
      </>
    );

};

export default Questions;