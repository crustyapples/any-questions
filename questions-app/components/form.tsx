interface FormProps {
    prompt: string;
    setPrompt: any;
    onSubmit: any;
    isLoading: boolean;
    characterLimit: number;
}

const Form: React.FC<FormProps> = (props) => {
    const isPromptValid = props.prompt.length <= props.characterLimit;
    const updatePromptValue = (text: string) => {
        if (text.length <= props.characterLimit) {
            props.setPrompt(text);
        }
    }
  return (
    <>
      <p>
        Let me know who you're asking questions and I will generate a list of
        questions for you!
      </p>

      <input
        type="text"
        placeholder="physics professor"
        value={props.prompt}
        onChange={(e) => updatePromptValue(e.currentTarget.value)}
      ></input>
      <div>{props.prompt.length}/{props.characterLimit}</div>
      <button onClick={props.onSubmit} disabled={props.isLoading || !isPromptValid}>Submit</button>
    </>
  );
};

export default Form;
