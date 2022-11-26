interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
  const isPromptValid = props.prompt.length < props.characterLimit;
  const updatePromptValue = (text: string) => {
    if (text.length <= props.characterLimit) {
      props.setPrompt(text);
    }
  };

  let statusColor = "text-gray-500";
  let statusText = `Input must be less than ${props.characterLimit} characters`
  if (!isPromptValid) {
    statusColor = "text-red-700";
  }
  return (
    <>
      <div className="mb-6 text-gray-800">
        <p>
          Let me know who you're asking questions and I will generate a list of
          questions for you!
        </p>
      </div>

      <input
        className="p-2 w-full rounded-md focus:outline-yellow-900 focus:outline text-gray-900"
        type="text"
        placeholder="physics professor"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div className={statusColor + " flex justify-between my-2 text-sm mb-6"}>
        <div>{statusText}</div>
        <div>
          {props.prompt.length}/{props.characterLimit}
        </div>
      </div>
      <button
        className="bg-gradient-to-r from-yellow-900 to-yellow-600 disabled:opacity-50 text-white w-full p-2 rounded-md text-lg"
        onClick={props.onSubmit}
        disabled={props.isLoading || !isPromptValid}
      >
        Submit
      </button>
    </>
  );
};

export default Form;
