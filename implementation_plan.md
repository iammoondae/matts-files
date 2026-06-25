# Implementation Plan: Grade 3 Advanced (+2 Level Difficulty) Restructuring, 72 Professional Diagram Assets Generation, and Upgraded Quality Gates

This plan details the steps for:
1. Restructuring the Grade 3 Advanced curriculum templates to present Grade 3 topics at a Grade 4/5 difficulty level.
2. Generating 72 professional, non-cartoonish educational diagrams (3 images per subject per week for all 6 subjects across 4 weeks) and saving them in the `images/` directory.
3. Updating the database validation compiler (`validate_db.py`) to verify that each subject-week in all Grade 3 databases contains at least 3 linked images and that all linked image files exist on disk.
4. Documenting these rules in the Moon Standards (`moon_standards_mlh.md`).
5. Rebuilding, compiling, and deploying the updated databases to GitHub.

---

## User Review Required

> [!IMPORTANT]
> **1. Grade 3 Advanced Definition (+2 Grade Level Context)**:
> We will upgrade the slide texts, quizzes, and worksheets in the advanced templates (`data/sources/g3/*_advanced/`) to cover the Grade 3 topics at a Grade 4/5 difficulty level. For example:
> * **Mathematics**: Multi-step area word problems, composite shapes, coordinate geometry lines, and expanded forms up to 100,000.
> * **Science**: Kinetic molecular theory, solid densities, liquid viscosity/surface tension, and atmospheric pressure.
> * **English**: Collective/abstract nouns, complex irregular plurals, relative pronouns, and perfect tenses.
> * **Filipino**: Pangngalang Lansakan, Panghalip Panaklaw, and Pandiwa aspects (perpektibo, imperpektibo, kontemplatibo).
> * **Makabansa**: National/regional administrative structures, ancestral domains (B'laan/Maguindanaon), and economic development sectors.
> * **GMRC**: Self-regulation models, children rights (UNCRC), social empathy, and environmental stewardship.
>
> **2. Professional Diagram Assets**:
> We will generate and save 72 high-quality, professional educational diagrams (3 images per subject-week) to the `images/` folder. To ensure they are professional, non-cartoonish, and free from AI text spelling anomalies, we will generate them programmatically using a Python script with Pillow (PIL) and Matplotlib, drawing clean tables, charts, grids, geometric shapes, and text labels.
>
> **3. Manifest Registration & Validation**:
> All 72 images will be registered in `manifest.json` under the `"images"` array. The Quality Gate (`validate_db.py`) will enforce that every subject-week has at least 3 images and that all registered images are present on disk.

---

## Proposed Changes

### 1. Database Quality Gate & Moon Standards

#### [MODIFY] [validate_db.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/validate_db.py)
* Add a strict check to verify that each subject-week in Grade 3 compiled JSON files has at least 3 unique images referenced in the slides.
* Verify that every referenced image path actually exists on disk in the `images/` directory.

#### [MODIFY] [moon_standards_mlh.md](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/moon_standards_mlh.md)
* Document in Section 5.C the requirement for at least 3 professional diagrams per subject per week, and that all image assets must exist on disk.

---

### 2. Advanced Subjects Restructuring (+2 Grade Level Context)

#### [MODIFY] [data/sources/g3/](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/data/sources/g3/)
We will update the template generation scripts and source files to inject advanced Grade 4/5 difficulty concepts and equations for all weeks (1-4) across the 6 subjects:
* **Math Advanced**: Update [rewrite_math_sources.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/rewrite_math_sources.py) to generate advanced slides and equations (such as composite area formulas and large place value roundings).
* **Other Advanced Subjects**: Update the source templates for Science, English, Filipino, Makabansa, and GMRC advanced blocks.

---

### 3. Generate Image Assets

#### [NEW] [scratch/generate_all_diagrams.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/generate_all_diagrams.py)
* Create a python script to generate 72 clean, professional vector-style PNG diagrams using PIL (Pillow) and save them to `images/`.
* The script will define structured drawings for:
  * **Math**: area grids, composite shapes, angles, line grids, coordinate axes, place value tables, and rounding hills.
  * **Science**: phase change charts, state comparisons, molecular arrangements, densities, and pressure diagrams.
  * **English**: noun charts, plural rules, pronoun lists, and verb tense timelines.
  * **Filipino**: grammatical tables (tahs/basal/lansakan, panauhan/kailanan, aspekto).
  * **Makabansa**: organizational charts, maps, timelines, and sector charts.
  * **GMRC**: ethics schematics, UNCRC rights lists, empathy steps, and responsibilities grids.

---

### 4. Manifest and Compilation

#### [MODIFY] [manifest.json](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/data/g3/manifest.json)
* Register all 72 new images in the `images` list.

#### [MODIFY] [generate_g3_all_subjects.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/generate_g3_all_subjects.py)
* Update the compiler to automatically inject the 3 images per subject-week into the compiled slide data.

---

## Verification Plan

### Automated Tests
* Run `python3 scratch/generate_all_diagrams.py` to draw the 72 diagrams.
* Run `python3 scratch/generate_g3_all_subjects.py` to compile the databases.
* Run `python3 scratch/validate_db.py` to check that:
  * All subjects have exactly 25 slides, each with 125-150 words.
  * No slides have forbidden prefixes.
  * Every subject-week has at least 3 valid images referenced, and all images exist on disk.

### Manual Verification
* Deploy to GitHub Pages and verify that standard and advanced dashboards load successfully.
* Open the Study Guides and verify that the new professional diagrams display correctly on the slides with full zoom functionality.
