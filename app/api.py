from fastapi import FastAPI
from questions_app import generate_questions 

app = FastAPI()


@app.get("/generate_questions")
async def generate_questions_api(prompt: str):
    return {"message": f"Hello these are your questions {generate_questions(prompt)}"}
