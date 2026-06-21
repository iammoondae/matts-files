# Universal Curriculum-to-Syllabus Master Prompt v4

## Integrated Curriculum Extraction, Expansion, and Student-Facing Content Database Pipeline

This version incorporates:
- **Phase 1**: Curriculum Extraction JSON
- **Phase 2**: Curriculum Expansion JSON
- **Phase 3**: Syllabus Outline Generation
- **Phase 4**: Student-Facing Content Database Generation

---

### Phase 1 – Curriculum Extraction JSON
Extract from raw curriculum document:
- Subject & Grade Level
- Term
- Content Standards & Performance Standards
- Competencies (original wording and sequence)
- Suggested Activities & Assessments
- Performance Tasks
- Sample Clustering

#### Extraction Schema
```json
{
  "subject": "",
  "grade_level": "",
  "terms": []
}
```

---

### Phase 2 – Curriculum Expansion JSON
Expand extracted competencies into:
- Concepts & Subconcepts
- Essential Vocabulary
- Skills & Applications
- Learning Experiences
- Formative Assessments

#### Expansion Schema
```json
{
  "competency_id": "",
  "concepts": [],
  "subconcepts": [],
  "essential_vocabulary": [],
  "skills": [],
  "learning_experiences": []
}
```

---

### Phase 3 – Syllabus Generation
Generate a weekly syllabus map outlining:
- Week Number & Topic
- Concepts Covered
- Vocabulary
- Competencies Mapped
- Daily Lesson / Session Breakdown (1 week = 5 instructional sessions)
- Traceability Audit (linking back to the raw curriculum)

---

### Phase 4 – Content Database Generation (NEW)
Generate the actual student-facing educational content database objects based on the Weekly Syllabus. The output must strictly follow the target database schema.

#### Database Quality Gates
- **Slides (exactly 25)**: Interactive slides explaining the weekly concepts.
- **Standard Quiz (exactly 25)**: Multiple choice and validation questions.
- **Challenge Quiz (exactly 5)**: Higher-Order Thinking Skills (HOTS) questions.
- **Performance Task (exactly 1)**: Practical application project with clear rubrics/criteria.
- **Worksheets (exactly 3 pages)**: Stylus-ready HTML worksheet exercises.

#### Target Database Schema
```json
{
  "color": "", // hex color code
  "icon": "", // emoji icon
  "title": "", // subject name
  "subtitle": "Week X: Topic Name",
  "slides": [
    {
      "title": "Slide Title",
      "text": "Student-facing instruction explaining a concept.",
      "examples": [
        { "title": "Example Title", "content": "Real-world example or sentence." }
      ]
    }
  ],
  "standard": [
    {
      "type": "choice" | "verify",
      "q": "Quiz question text?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": 0 // 0-indexed correct option
    }
  ],
  "challenge": [
    {
      "type": "choice" | "verify",
      "q": "Challenge question text?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "answer": 0
    }
  ],
  "performance": {
    "type": "performance",
    "title": "Performance Task Title",
    "desc": "Step-by-step student instructions for the hands-on project.",
    "labels": ["Evaluation Criteria 1", "Evaluation Criteria 2", "Evaluation Criteria 3"]
  },
  "worksheet": {
    "pages": [
      "<div class=\"ws-page-content\"><h3>Exercise 1: Title</h3><p class=\"ws-instruction\">Instructions</p><div class=\"ws-item-row\"><div class=\"ws-q\">Question</div><div class=\"writing-line\"><span class=\"ws-answer\">Answer</span></div></div></div>"
    ]
  }
}
```

---

### Content Presentation & Pedagogy Style Guide (Critical)
To ensure the generated content is engaging and effective for students:

1. **Student-Facing & Active Tone**:
   - Avoid teacher-facing instructions, pedagogical summaries, or grade-level standard labels (e.g., do NOT say *"This slide covers competency standard 3.2"* or *"This module is designed for Grade 3"*).
   - Talk directly to the student as an active learner (e.g., *"Look around you! What do you see?"*, *"Let's trace the letters in the word..."*, *"Can you help Kiko find..."*).
2. **Everyday Analogies & Active Observation**:
   - Explain abstract rules using real-world analogies (e.g., compare sentence predicates to motor engines that make the subject run).
   - Connect language concepts to physical observations (e.g., identify words ending in blends by observing objects around the house).
3. **Special Science Elementary School (SSES) Enrichment**:
   - Integrate scientific content themes (nature, weather, plants, animals, energy, health, hygiene) directly into reading, grammar, and vocabulary exercises.
   - Use analytical, inquiry-based challenge questions that require observation, classification, or inference.
4. **Local and Regional Contexts**:
   - Include local transport (calesas, bancas), local flora/fauna (mangoes, carabaos, geckos), community festivals, and Filipino character names (Matteo, Kiko, etc.).
5. **No Advanced Suffixes**:
   - Keep the content advanced/enriched but remove all explicit suffixes such as `[Advanced]` or `(Advanced)` from user-visible titles and text fields.

