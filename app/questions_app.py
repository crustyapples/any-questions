import os
import argparse
import openai

CHAR_LIMIT = 32

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input","-i", type=str,required=True)
    args = parser.parse_args()
    user_input = args.input

    if validate_length(user_input):
        result = generate_questions(user_input)
        print(result)

    else: 
        raise ValueError(f"Input is too long. Must be under {CHAR_LIMIT} characters")

def validate_length(prompt: str):
    return len(prompt) < CHAR_LIMIT

def generate_questions(prompt: str):
    openai.api_key = os.getenv("OPENAI_API_KEY")
    input_prompt = f"Generate 10 questions for me to ask a {prompt}:"
    print(input_prompt)
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
    questions: str = response["choices"][0]["text"]
    
    # splitting text data into list
    questions = questions.split('\n')
    
    # removing empty elements
    questions = [q for q in questions if q != '']

    return questions

if __name__ == "__main__":
    main()