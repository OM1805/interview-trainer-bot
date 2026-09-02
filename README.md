# Mock Interview Studio

STEP 1 — MOCK INTERVIEW UI ONLY

OBJECTIVE

Build the complete frontend UI for a standalone "AI Mock Interview" module.

This step is UI ONLY.

The purpose is to create and verify the complete user experience and visual design before any real AI, camera, microphone, speech-to-text, backend, or database functionality is added.

IMPORTANT

Do not implement functionality that is not required to demonstrate the UI.

This task is considered successful when the screens, layouts, components, states, navigation, and visual flow are complete and polished.

Do not move into backend or AI development.

CURRENT SCOPE

Create a polished, professional mock interview interface suitable for an ATS/career platform.

The complete UI flow should cover:

Interview Setup

Interview Question

Answer/Recording State

Answer Submitted / Analysis State

Next Question

Final Interview Report

Use realistic placeholder/mock data wherever dynamic data would normally come from.

This is a frontend prototype only.

DO NOT IMPLEMENT

Gemini API

Any AI API

Python/FastAPI backend

Supabase

Database

Authentication

MediaPipe

Face detection

Eye tracking

Real webcam/camera access

Real microphone access

Real audio recording

Speech-to-text

faster-whisper

Audio storage

Video storage

File storage

Backend services

Use local mock/static data only where needed to demonstrate the UI.

Do not create fake backend services just to simulate APIs.

DESIGN DIRECTION

Create a modern, clean, professional interview platform.

The interface should feel like a real interview application rather than a generic dashboard.

Prioritize:

Clean spacing

Strong visual hierarchy

Professional typography

Clear buttons

Minimal unnecessary decoration

Easy-to-understand status indicators

Accessible contrast

Responsive design

Desktop-first interview experience

Good mobile/tablet responsiveness

Use a consistent design system throughout the module.

Avoid:

Excessive gradients

Excessive animations

Unnecessary cards

Visual clutter

Decorative elements that do not improve usability

The interface should look production-ready even though the functionality is currently mocked.

VISUAL DESIGN SPECIFICATION

Overall Style

Use a:

Clean

Minimal

Professional

Premium but not flashy

Calm

Focused

visual style.

The candidate should immediately understand:

Where they are

Which question they are answering

How much time remains

Whether the camera status is okay

What action they should take next

The design should feel appropriate for a professional ATS/career platform.

COLOR SYSTEM

Use a neutral professional color system.

Primary

Use deep navy / dark blue for important actions and primary branding.

Background

Use a very light neutral background for general pages.

Use slightly darker neutral surfaces where necessary to separate interview areas.

Cards

Use white or near-white surfaces.

Text

Use:

Dark charcoal for primary text

Medium gray for secondary/supporting text

Status colors

Use:

Green = good / active / successful

Yellow or amber = warning

Red = error / problem

Blue = information / processing

Do not use excessive colors.

Do not make the interface overly colorful.

TYPOGRAPHY

Use a modern, highly readable sans-serif font.

Create a clear hierarchy:

Large page titles

Medium section headings

Clearly readable question text

Smaller supporting text

Highly visible timer

The interview question should be one of the strongest visual elements on the interview screen.

Avoid decorative fonts.

LAYOUT

Use generous spacing.

Keep important information visually separated.

For the main interview screen, use a desktop two-column layout:

------------------------------------------------
| Question / Answer | Camera Preview            |
|                   |                            |
| Timer             | Camera Status              |
| Controls          | Warnings                   |
------------------------------------------------


The question and answer area should receive slightly more visual importance than secondary information.

The webcam preview should be large enough to clearly represent the candidate's camera area.

CARDS

Use subtle cards with:

Rounded corners

Light borders

Very subtle shadows where appropriate

Do not make every small element a separate card.

Use cards only when they improve grouping and readability.

BUTTONS

Primary button

Use:

Strong visual emphasis

Clearly readable text

Medium rounded corners

Comfortable click area

Secondary button

Use less visual emphasis while maintaining clear visibility.

Error/destructive buttons

Make them visually distinct from normal actions.

Buttons should have clear:

Default

Hover

Focus

Disabled

visual states.

TIMER

The timer must be highly visible during the interview.

Use:

10:00

as the initial visual example.

The timer should look important without dominating the entire screen.

Create visual states for:

Normal

Warning when time is getting low

Critical when time is nearly finished

These are visual states only.

Do not implement real interview timing logic.

WEBCAM PREVIEW

The webcam section should look realistic but remain a placeholder.

Use:

Large rectangular/square preview area

Clear camera frame

Small status indicator

Camera status text

Do not use a random stock image of a person as the camera feed.

The placeholder should clearly communicate that this represents the candidate's live camera.

Because this is UI-only, do not access the actual camera.

CAMERA ENGAGEMENT STATUS

Show a compact status such as:

Camera Engagement: Good

Possible visual states:

Good

Warning

Face Not Detected

Multiple Faces

Keep these statuses easy to understand.

Do not use terminology such as "eye tracking" because this UI represents camera engagement/head-facing status rather than perfect eye tracking.

WARNING DESIGN

Warnings must be noticeable but not alarming.

Examples:

Please face the camera.

Face not detected.

Multiple faces detected.

Warnings should not make the candidate think that the interview has automatically failed.

Use clear status styling and concise messages.

These are visual states only.

PROGRESS INDICATOR

Show:

Question 1 of 3

Use a simple progress indicator such as:

● ─ ○ ─ ○


or an equivalent clean design.

The candidate should always understand their progress through the interview.

ANALYSIS SCREEN

Make the analysis screen easy to scan.

Use clear score representations.

Example:

English Quality       8/10
████████░░

Grammar                7/10
███████░░░

Clarity                8/10
████████░░


Include the full evaluation categories:

English Quality

Grammar

Sentence Formation

Clarity

Relevance

Answer Quality

Do not overload the screen with charts.

Prioritize useful information over visual decoration.

FINAL REPORT DESIGN

The final report should feel like a meaningful assessment.

Make the overall score visually prominent.

Show:

82 / 100

Include clear sections for:

Overall Score

Category Scores

Overall Strengths

Areas for Improvement

Recommended Next Steps

The report should be easy to scan and understand.

Do not use excessive charts or unnecessary visualizations.

RESPONSIVE DESIGN

Make the UI fully responsive.

Desktop

Use a spacious two-column interview layout.

Tablet

Use reduced spacing and a flexible two-column or stacked layout depending on screen width.

Mobile

Use a single-column layout.

Recommended order:

Question

Timer

Answer controls

Camera preview

Camera/status information

Ensure:

Buttons remain usable

Timer remains visible

Text does not overflow

Webcam placeholder scales correctly

Cards and sections remain readable

Navigation remains usable

No horizontal scrolling occurs

ACCESSIBILITY

Ensure:

Good text/background contrast

Buttons are clearly distinguishable

Important status information is not communicated by color alone

Text remains readable at smaller screen sizes

Interactive elements have clear hover/focus states

Controls have clear labels

ANIMATION

Use only subtle animations where they improve the experience.

Acceptable:

Button hover

Loading indicator

Smooth state transitions

Progress transitions

Avoid:

Excessive motion

Decorative animations

Distracting effects

The interview environment should feel focused and distraction-free.

SCREEN 1 — INTERVIEW SETUP

Create an interview setup screen.

Include:

Page title: AI Mock Interview

Short description explaining that the candidate will answer 3 interview questions

Job Role selector

Difficulty selector

Interview duration information

Number of questions

Camera requirement information

Microphone requirement information

Start Interview primary button

Example values:

Job Role:
Software Engineer

Difficulty:
Intermediate

Questions:
3 Questions

Time:
10 minutes per question

Include a small informational section:

You will answer each question verbally while your camera is on. Your answers will be transcribed and evaluated after submission.

This is only explanatory UI.

Do not imply that real camera or microphone functionality is working yet.

The setup screen should clearly communicate the interview rules without overwhelming the user.

SCREEN 2 — INTERVIEW QUESTION

Create the main interview screen.

Main area

Include:

Question number

Question text

Large question area

Answer status

Timer

Answer controls

Webcam area

Include:

Webcam preview placeholder

Camera status

Camera engagement status

Warning/status area

Example:

Question 1 of 3

Tell me about yourself and your experience relevant to this role.

Timer:
09:42

Camera:
Camera Active

Camera Engagement:
Good

The webcam area should visually resemble a real camera preview.

Because this is UI-only, use a visual placeholder instead of accessing the real camera.

CAMERA/WARNING UI STATES

Create visual UI states for:

Camera Active

Camera Not Detected

Face Not Detected

Multiple Faces Detected

Please Face the Camera

These are visual states only.

Warnings must be non-blocking.

Example messages:

Please face the camera.

Face not detected.

Multiple faces detected.

Make it visually clear that these are warnings and do not automatically fail the candidate.

Do not implement detection logic.

ANSWER CONTROLS

Include:

Start Answer

Stop Answer

Submit Answer

Create visual states for:

Not Started

Answering

Answer Stopped

Submitted

Processing

The answering state should clearly indicate that the candidate is currently answering.

Example:

Listening...

This is only a visual placeholder.

Do not implement microphone recording.

SCREEN 3 — ANSWER SUBMITTED / ANALYSIS

After submitting an answer, show an analysis/loading state.

Example:

Analyzing your answer...

Show a subtle loading indicator.

Then show a mocked analysis result.

Include:

English Quality

Grammar

Sentence Formation

Clarity

Relevance

Answer Quality

Example scores:

English Quality: 8/10
Grammar: 7/10
Sentence Formation: 8/10
Clarity: 8/10
Relevance: 9/10
Answer Quality: 8/10

Also include:

Strengths

Clear explanation

Relevant experience

Good structure

Areas for Improvement

Improve sentence structure

Give more specific examples

Avoid repetitive wording

Better Answer

Show a clearly separated example of how the candidate could answer the question better.

Include:

Continue to Next Question

All values are mock data.

SCREEN 4 — QUESTION 2 / QUESTION 3

The same interview interface should support:

Question 2 of 3

and

Question 3 of 3

Use different mock questions.

Question 2

Describe a challenging problem you faced and how you solved it.

Question 3

Why should we hire you for this role?

Show interview progress clearly:

Question 1 / 3
Question 2 / 3
Question 3 / 3

Do not implement real question generation.

SCREEN 5 — FINAL INTERVIEW REPORT

After Question 3, create a final report screen.

Title:

Interview Report

Include:

Overall Score

82 / 100

Show sections for:

Answer Quality

English & Grammar

Clarity

Relevance

Camera Engagement

Interview Performance

Include simple visual score representations.

Overall Strengths

Strong relevance

Clear communication

Good technical explanation

Overall Improvements

Improve sentence structure

Give more concrete examples

Maintain stronger camera engagement

Recommended Next Steps

Example:

Practice giving structured answers using specific examples and keep answers concise.

Include:

Review Answers

Try Another Interview

Back to Dashboard

All information should be mock/static data.

NAVIGATION / UI STATES

The prototype should allow the user to move through the screens so the entire experience can be visually reviewed.

Use frontend state/mock navigation only.

Do not create a backend.

Do not create API calls.

Do not persist interview results.

The visual flow should be:

Setup
↓
Start Interview
↓
Question 1
↓
Answering
↓
Submitted
↓
Analysis
↓
Question 2
↓
Analysis
↓
Question 3
↓
Analysis
↓
Final Report

Provide a way to return to previous appropriate screens where useful.

COMPONENT QUALITY

Keep UI components organized and reusable.

Use reusable components for:

Timer

Question header

Webcam preview

Status indicator

Warning message

Score card

Analysis section

Progress indicator

Primary/secondary buttons

Do not introduce unnecessary libraries or architecture.

Use the existing/default frontend setup of this Lovable project rather than creating a separate application.

Do not modify unrelated parts of the project.

IMPORTANT RESTRICTIONS

This is STEP 1 ONLY.

Do not implement any actual functionality for:

Gemini

AI question generation

AI answer evaluation

Camera access

Face detection

Eye tracking

Microphone access

Audio recording

Speech-to-text

faster-whisper

FastAPI

Python backend

Supabase

Authentication

File storage

Video storage

Audio storage

Use mock data and visual states only.

Do not claim that any AI or hardware functionality is working.

Do not redesign unrelated existing application features.

Do not perform additional feature development beyond this objective.

FINAL VERIFICATION

Before finishing this task, verify that:

Every required screen exists.

Navigation between the screens works visually.

All required UI states are represented.

The design is consistent.

The layout is responsive.

The UI looks polished and professional.

Only mock/static data is being used.

No backend/API/AI functionality was added.

No camera or microphone functionality was added.

No audio or video is being stored.

Existing unrelated functionality was not modified.

The implementation stayed within the scope of Step 1 — UI only.

Do not move to the next development step.

Stop after completing and verifying the UI prototype.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://interview-trainer-bot.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1a5852e1-0991-4f17-b078-fb1c2a8ccccb).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
