# Subject-Specific Workflows & Details (workflows/subjects.md)

This document maps out subject workflows, curriculum integrations, translation mappings, and icon lists.

---

## 1. Subject Definitions & Color Codes
Each subject represents a branch of the DepEd MATATAG Curriculum and maps to its own primary color and visual icon:

| Subject | Icon | Base Accent Color (Dark Mode HSL/Hex) | Base Accent Color (Light Mode HSL/Hex) |
| :--- | :--- | :--- | :--- |
| **Mathematics** | 🔢 | `#06b6d4` (Cyan) | `#0284c7` (Deep Cyan) |
| **Science** | 🔬 | `#10b981` (Emerald) | `#059669` (Deep Emerald) |
| **English** | 🙋‍♂️ | `#a855f7` (Purple) | `#7c3aed` (Deep Purple) |
| **Filipino** | 🇵🇭 | `#f43f5e` (Rose) | `#e11d48` (Deep Rose) |
| **Makabansa** | 🏘️ | `#3b82f6` (Blue) | `#2563eb` (Deep Blue) |
| **GMRC** | 🧘‍♂️ | `#eab308` (Yellow) | `#ca8a04` (Deep Yellow) |

---

## 2. Bilingual Translation Flow
Filipino, Makabansa, and GMRC must maintain high-density English/Filipino bilingual features.

* **Translation Activation**: The translation button (`#header-trans-btn`) in the top controls header is only visible when the active subject is **Filipino**, **Makabansa**, or **GMRC**. For Math, Science, and English, it is hidden.
* **Inline Phrases**: Reading passages and quiz cards in these subjects use nested spans:
  `<span class="fil-phrase" data-translation="English translation...">Filipino phrase</span>`
* **Translation Handler**: Tapping the translation button toggles the `.show-translation` class on `<body>`. When active, translation phrases become visible beneath or alongside the Filipino text, styled in a muted blue (`--text-translation`).
