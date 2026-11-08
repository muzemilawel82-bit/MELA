# MELA (መላ) · Ethiopian Grade 12 AI Educational Platform

> **መላ (MELA)** — *"Solution, Wisdom, and Resourceful Direction"*  
> An AI-powered educational platform designed specifically for Ethiopian Grade 12 students preparing for the Ethiopian University Entrance Examination (EUEE).

---

## 🌟 Overview & Mission

Grade 12 is the pivotal academic year for Ethiopian secondary students. **MELA** empowers students across both the **Natural Science** and **Social Science** streams to:
- Study anywhere, anytime, with curriculum-aligned digital textbooks and high-yield notes.
- Watch teacher-created video lessons with chapter timestamps and concept breakdowns.
- Ask questions and receive step-by-step bilingual explanations (English & Amharic) from the **MELA AI Assistant**.
- Take timed **National Exam (EUEE)** mock papers with automatic scoring and detailed rationales.
- Track mastery, diagnose weak topics, and receive personalized study plans on the **Student Performance Dashboard**.
- Expand vocabulary with the **Smart Academic Dictionary** featuring English definitions, Amharic translations (ፊደል), and audio pronunciation.

---

## 🚀 Key Modules & Capabilities

### 1. 📚 Digital Library (ዲጂታል ቤተ-መጽሐፍት)
- **Official MoE Textbooks & Reference Guides**: Mathematics (Natural & Social), Physics, Chemistry, Biology, English, Civics & Ethical Education, Geography, History, and Economics.
- **Search & Filter**: Find materials by subject, stream, unit, or keywords in English and Amharic.
- **Online Reader Modal**: In-app chapter preview and one-click download for offline study.

### 2. 🎥 Video Learning Hub (የቪዲዮ ትምህርት)
- **Chapter-by-Chapter Masterclasses**: Video lessons created by experienced Ethiopian educators.
- **Interactive Player UI**: Chapter timestamps, progress scrub bar, dual Amharic-English subtitles indicator, and key takeaway panels.
- **Instant Practice**: Direct link from any video lesson to practice drills testing that specific concept.

### 3. 🤖 MELA AI Study Assistant (መላ AI ረዳት)
- **Bilingual Tutor**: Ask academic questions in English or Amharic (e.g., *"የኳድራቲክ እኩልታን ደረጃ በደረጃ አስረዳኝ"* or *"Explain Newton's Second Law"*).
- **Step-by-Step STEM Solver**: Breaks complex Math and Science problems into Givens, Formulas, Substitutions, and Final Checks.
- **Exam Strategy Advice**: Highlights frequent national exam traps and distractors.

### 4. 📝 National Exam Preparation (የ12ኛ ክፍል ፈተና ዝግጅት)
- **Authentic EUEE Past Papers**: Simulated entrance exam papers (2015, 2016 E.C.) for Natural and Social Science.
- **Exam Testing Arena**: Countdown timer with urgency alerts, question palette navigator, and review flags.
- **Instant Detailed Rationales**: Question-by-question breakdown explaining why the correct choice is right and where typical misconceptions occur.

### 5. 📊 Student Performance Dashboard (የተማሪ የውጤት ዳሽቦርድ)
- **Readiness Metric**: Computed overall percentage readiness for university entrance.
- **Projected EUEE Score**: Dynamic prediction out of 700 points with national benchmark thresholds.
- **Weak Topic Diagnostic Radar**: Automatically flags topics below 60% with instant "Rescue Drill" links.
- **Score Progression Chart**: Responsive SVG visualization showing score trajectory across exam sittings.

### 6. 📖 Smart Bilingual Dictionary (ስማርት መዝገበ-ቃላት)
- **Academic Glossary**: Core terminology spanning all Grade 12 STEM and Social subjects.
- **English-Amharic Definitions**: Word, Ge'ez script translation, phonetic transcription, academic definition, and curriculum example sentences.
- **Audio Pronunciation**: Text-to-Speech simulation to hear proper academic pronunciation.

---

## 💻 Quick Start & Running Locally

### Option 1: Built-in Micro Server
Run the lightweight Node.js server included in this repository:
```bash
node _serve.js
```
Open your browser and navigate to:
```
http://localhost:8765
```

### Option 2: Direct Browser Launch
Double-click `INDEX.HTML` or open it directly in any modern browser (Chrome, Edge, Firefox, Safari). No external build tools, npm installs, or compilers are required.

---

## 📁 Repository Structure

```
MELA/
├── INDEX.HTML          # High-fidelity single-page educational application (HTML5/CSS3/Vanilla JS)
├── _serve.js           # Ultra-fast local HTTP server (port 8765)
├── README.md           # Documentation and user guide
├── backend/            # Planned Node.js/Express REST API and Gemini AI integration
│   ├── config/         # Database and environment configurations
│   ├── controllers/    # AI, Exam, Auth, and Result controllers
│   ├── routes/         # Express API route declarations
│   └── server.js       # Main API server entry point
├── database/           # Database schemas and seed data
│   ├── schema.sql      # PostgreSQL / SQLite relational schema
│   └── seed.sql        # Grade 12 questions and textbook metadata
└── frontend/           # Planned multi-component React/Next.js frontend
    └── src/            # Assets, components, pages, and services
```

---

## 🇪🇹 Proudly Developed for Ethiopian Students
Built with modern web standards, responsive design, and deep integration of Ethiopian educational realities.
