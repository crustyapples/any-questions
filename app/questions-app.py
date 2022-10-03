import os
import openai
import argparse

def main():
    print("Running")
    parser = argparse.ArgumentParser()
    parser.add_argument("--input","-i", type=str,required=True)
    args = parser.parse_args()
    user_input = args.input

    print(f"User input: {user_input}")
    generate_questions(user_input)
    pass

def generate_questions(prompt: str):
    openai.api_key = os.getenv("OPENAI_API_KEY")
    input_prompt = f"Generate 10 questions for me to ask a {prompt}:"

    response = openai.Completion.create(
    model="text-davinci-002",
    prompt=input_prompt,
    temperature=1,
    max_tokens=256,
    top_p=1,
    frequency_penalty=0,
    presence_penalty=0
    )


    # getting questions from response variable
    questions: str = print(response["choices"][0]["text"])

    print(questions)

if __name__ == "__main__":
    main()