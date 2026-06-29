# Database Quality Standards (rules/db_quality_standards.md)

This module defines quality gate parameters for curriculum databases and media assets.

---

## 1. Weekly Topic JSON Schema
Each week's file (e.g., `data/g3/week1.json`) must contain a valid JSON object containing curriculum nodes. The quality compiler validates these sections for each subject (Math, Science, English, Filipino, Makabansa, GMRC):

* **slides**: Exactly 25 slides. Each slide contains:
  * `title`: slide title (without tags like `[Advanced]`).
  * `text`: slide content (80 to 150 words of rich student-facing text, without newlines).
  * `image`: unique filename in `images/` directory.
  * `examples`: list of examples with `title` and `content`.
* **standard** (or **quiz**): Exactly 25 multiple-choice questions.
* **challenge**: Exactly 5 advanced questions.
* **worksheet**: Exactly 3 worksheets, each containing drawing layers, input boxes, and parent correct keys `.ws-answer`.
* **performance**: Exactly 1 performance task containing description, objectives, steps, and parent grading rubrics.

---

## 2. Text Uniqueness & Distribution Rules
To pass the quality compiler checks (`unique.py`):
* **Slide Uniqueness**: No two slides within a subject-week can contain identical sentences of 6 words or more.
* **MCQ Choice Uniqueness**: Choices for multiple-choice questions must not contain duplicate options.
* **Answer Index Distribution**: Correct options must be distributed to prevent index bias.
  * No single option index (e.g., Option A) can constitute more than 50% of the answers in standard quizzes (size >= 10), or 70% in challenges (size < 10).
  * Standard quizzes must not have all answers pointing to a single index.
