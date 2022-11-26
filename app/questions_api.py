from http.client import HTTPException
from fastapi import FastAPI
from questions_app import generate_questions, CHAR_LIMIT
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)

@app.get("/generate_questions")
async def generate_questions_api(prompt: str):
    validate_input_length(prompt)
    questions = generate_questions(prompt)
    return {f"questions": questions}

def validate_input_length(prompt: str):
    if len(prompt) >= CHAR_LIMIT:
        raise HTTPException(status_code=400, detail=f"Input is too long. Must be under {CHAR_LIMIT} characters")