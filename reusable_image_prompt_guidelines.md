# Reusable Image Prompt Generation Framework (for Weeks 2-6+)

This document provides a comprehensive, reusable prompt and instructions to generate image-generating prompts for any subsequent week (Week 2, 3, 4, 5, 6, etc.). 

By using the **System Prompt** section below, you can paste it into an AI coding assistant (like Gemini or Claude) along with any week's database JSON (e.g., `week2.json`), and it will automatically generate a document identical in format and quality to `week1_image_prompts.md`.

---

## Part 1: System Prompt to Copy-Paste to the AI
*Copy the text in the box below and provide the week's JSON database file (e.g., `week2.json`) to generate the prompts.*

```markdown
You are an expert educational content designer and prompt engineer. Your task is to analyze the study guide slides for Grade 3 (Week [X]) across all 6 subjects (Math, Science, English, Filipino, Makabansa, GMRC) and generate a comprehensive image generation prompt document for Google Nano Banana.

### Task Specifications
1. **Subject Coverage**: Generate prompts for all 6 subjects: Math, Science, English, Filipino, Makabansa, GMRC.
2. **Image Count**: Choose exactly 5 slides per subject, for a total of 30 slides/images.
3. **Slide Selection**:
   - Locate the 3 slides per subject that currently have image paths registered (typically Slide 4, 11, and 18).
   - Identify 2 additional slides per subject that contain highly visual concepts (e.g., local context, diagrams, comparative processes, or common errors) to reach a total of 5 slides per subject.
4. **Naming Convention**: Use the filename structure `{subject}_w[X]_img{index}.png` where `index` goes from 1 to 5.
5. **Output Format**: Return a single, clean Markdown (.md) document structure matching the template below.

---

### Core Style Guide (Must be integrated into all prompts)
- **Aesthetic**: Clean, 2D vector educational illustration style, with soft shadows, rounded corners, and clear outlines.
- **Audience**: Age-appropriate for 8-year-old Grade 3 children. Avoid complex details, busy textures, or photorealistic elements.
- **Subject Palette Rules**:
  * **Math**: Sky blue theme (#0284c7)
  * **Science**: Emerald green theme (#10b981)
  * **English**: Indigo theme (#4f46e5)
  * **Filipino**: Pink theme (#ec4899)
  * **Makabansa**: Violet theme (#8b5cf6)
  * **GMRC**: Rose theme (#f43f5e)
- **CRITICAL CONSTRAINT**: No text, numbers, letters, labels, symbols (except generic visual cues like question marks or checks), or watermarks inside the generated images.

---

### Prompt Construction Template
For each of the 30 images, output:
- **Filename**: `{subject}_w[X]_img{index}.png`
- **Slide Index**: [0-24]
- **Slide Title**: [Title]
- **Description**: [Brief educational purpose]
- **Google Nano Banana Prompt**:
  > **Prompt**: [Visual description focusing on: Topic, Learning Focus, Essential Elements, Subject Palette colors, 2D vector style detail, white or plain background]
  > **Negative Prompt**: text, words, letters, numbers, labels, 3D render, photorealistic, complex background, shadow, messy, blurry, photo.

---

### Template Structure for the Output:
# Google Nano Banana Image Prompts - Grade 3 Study Guide (Week [X])

[Brief introduction]

## Filename Conventions and Index mapping
[Include a markdown table mapping Subject, Image Index, Slide Index, Slide Title, and Recommended Filename]

## Style Guide (Consistent Across All Prompts)
[Brief summary of style guidelines]

## 1. Math Week [X] Prompts
### Image 1: [Slide Title]
- **Filename**: ...
- **Slide Index**: ...
- **Slide Title**: ...
- **Description**: ...
- **Google Nano Banana Prompt**:
  > **Prompt**: ...
  > **Negative Prompt**: ...
...
[Repeat for all subjects: Math, Science, English, Filipino, Makabansa, GMRC]
```

---

## Part 2: Step-by-Step Slide Selection Criteria
When you select slides to expand the visual coverage from 3 to 5 images per subject, use this selection hierarchy to choose the best candidate slides:

1. **Category 1: Pre-existing Images (Keep & Upgrade)**
   * **Rule**: Always keep the 3 slides that currently contain image paths (usually index 4, 11, and 18).
   * **Purpose**: This ensures we replace the existing Pillow-generated diagrams with high-quality Nano Banana versions.

2. **Category 2: Localized Contexts (High Visual Priority)**
   * **Rule**: Look for slides mentioning local cultures, towns, landmarks, or crops (e.g., Lake Sebu, Polomolok pineapples, GenSan tuna stalls, T'boli weaving).
   * **Purpose**: Kids connect strongly with local imagery, making it highly valuable.

3. **Category 3: Abstract or Comparative Concepts**
   * **Rule**: Choose slides that compare two terms (e.g., Common Nouns vs Proper Nouns, Solid vs Liquid, Near vs Far) or show a process (e.g., Water Cycle stages).
   * **Purpose**: Side-by-side or step-by-step visuals directly reduce cognitive load.

4. **Category 4: Common Errors (Visual Redirection)**
   * **Rule**: Select "Common Error" slides (e.g., Overlapping Tiles, Opinion in Logs, Mixing Near and Far).
   * **Purpose**: Showing a comparative diagram of "Correct (neat)" vs "Incorrect (messy)" helps prevent common learning mistakes.

---

## Part 3: Example Output Format
Here is a skeleton example of what the generated file will look like:

```markdown
# Google Nano Banana Image Prompts - Grade 3 Study Guide (Week 2)

This document contains a comprehensive set of image-generating prompts for **Week 2**...

## Filename Conventions and Index mapping
| Subject | Image Index | Slide Index | Slide Title | Recommended Filename |
| :--- | :---: | :---: | :--- | :--- |
| **Math** | 1 | 4 | Understanding Angles | `math_w2_img1.png` |
...

## Style Guide (Consistent Across All Prompts)
...

## 1. Math Week 2 Prompts
### Image 1: Understanding Angles
* **Filename**: `math_w2_img1.png`
* **Slide Index**: Slide 4
* **Slide Title**: Understanding Angles
* **Description**: Visualizing right, acute, and obtuse angles.
* **Google Nano Banana Prompt**: 
  > **Prompt**: An educational 2D vector diagram illustrating three types of angles side-by-side: a 90-degree right angle marked with a square corner cue, a narrow acute angle, and a wide obtuse angle. The lines are dark blue, and the arcs of the angles are highlighted in a bright sky blue color. Clean, minimalist vector style, white background.
  > **Negative Prompt**: text, words, letters, numbers, labels, 3D render, photorealistic, blurry, shadow.
```
