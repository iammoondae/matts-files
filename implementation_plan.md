# Implementation Plan: Diagram Text Overlap and Layout Alignment Fixes

This plan details the steps for:
1. Fixing text wrapping and text box coordinates in `generate_all_diagrams.py` to prevent horizontal text overflows and text overlaps in the 72 programmatic diagrams.
2. Correcting specific layout and scientific issues, including:
   - **Density Scale Correction** (Science Week 2, Image 2): Tipping the balance scale down on the heavier iron block side (higher Y) instead of up.
   - **Arrow Alignment** (Science Week 1, Image 2): Aligning phase change arrows correctly to the boundaries of the Solid/Liquid/Gas boxes.
   - **Checklist Layout Expansion** (All subjects, Image 3): Expanding the card and checklist width to X = 100 to 700 to provide more breathing room for text labels.
3. Re-running the diagram generator, recompiling Grade 3 database, and running the database validation Quality Gate to ensure a clean PASS status.

## User Review Required

> [!IMPORTANT]
> **1. PIL Text Wrapping Logic**:
> We will implement a custom `wrap_text` helper function in [generate_all_diagrams.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/generate_all_diagrams.py) that wraps long lines of text to fit within the box boundaries based on font size and pixel width metrics. This will prevent lines like "Can be perceived by the five senses" from overlapping neighboring boxes.
>
> **2. Scientific Accuracy Correction (Density Scale)**:
> In the Solid Density diagram (Science Week 2, Image 2), the previous scale tilted upward on the iron block side (Y = 300) and downward on the wood block side (Y = 350). Since iron is more dense and heavier than wood, the scale must tip downward on the iron side. We will adjust the tilting bar coordinates to reflect this physics reality.

## Proposed Changes

### 1. Diagram Generator Code

#### [MODIFY] [generate_all_diagrams.py](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/scratch/generate_all_diagrams.py)
* Add a `wrap_text(text, font, max_width)` helper.
* Refactor `draw_textbox` to automatically wrap text to the box width (with standard padding) and center the lines vertically.
* Correct the Science Week 2 Image 2 balance scale line coordinates so the bar tilts down on the right (Y = 370) and up on the left (Y = 280), aligning the pans and blocks accordingly.
* Adjust the Phase Change arrows in Science Week 1 Image 2 to connect from X = 350 to X = 200, matching the actual box borders.
* Expand the checklist card width to X = 100 to 700 for all `idx == 3` concept maps, shifting checkboxes and text labels to prevent overflows.

### 2. Compilation and Validation

#### [MODIFY] [task.md](file:///home/moondae/Antigravity%20Projects/Matts%20Files_apk/task.md)
* Add new tasks for tracking these diagram styling and layout corrections.

## Verification Plan

### Automated Tests
* Run `python3 scratch/generate_all_diagrams.py` to re-generate the 72 PNG assets.
* Run `python3 scratch/generate_g3_all_subjects.py` to compile the database.
* Run `python3 scratch/validate_db.py` to check that the database satisfies all Quality Gate checks.

### Manual Verification
* Inspect the generated diagrams to confirm that no text overflows occur and that the density scale is scientifically accurate.
