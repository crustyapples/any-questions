import React from "react";
import Form from "./form";
import Results from "./results";
import Footer from "./footer";
import Image from "next/image";
import logo from "../public/questions-app.png"

const Questions: React.FC = () => {
  const ENDPOINT: string =
    "https://6fuovob538.execute-api.us-east-2.amazonaws.com/prod/generate_questions";
  const CHARACTER_LIMIT = 32;
  const [prompt, setPrompt] = React.useState("");
  const [questions, setQuestions] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    setIsLoading(true);
    fetch(`${ENDPOINT}?prompt=${prompt}`).then((res) =>
      res.json().then(onResult)
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
      <Results prompt={prompt} questions={questions} onBack={onReset} />
    );
  } else {
    displayedElement = (
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={onSubmit}
        isLoading={isLoading}
        characterLimit={CHARACTER_LIMIT}
      />
    );
  }

  const gradientTextStyle =
    "text-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-900 to-yellow-600 font-light w-fit mx-auto";

  return (
    <div className="h-screen flex">
      <div className="max-w-m m-auto p-2">
        <div className="bg-[#F8F5F4] p-6 rounded-md text-black">
          <div className="text-center my-6">
            <Image className="mx-auto" alt="questions app logo" src={logo} width={100} />
            <h1 className={gradientTextStyle + " text-3xl font-bold"}>Any Questions?</h1>
          <div className={gradientTextStyle + " font-light"}>Your AI-powered QnA Assistant!</div>
          </div>

          {displayedElement}
        </div>
        <Footer/>
      </div>
      
    </div>
  );
};

export default Questions;