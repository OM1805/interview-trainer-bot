// Static mock data for the AI Mock Interview UI prototype (Step 1 - UI only).

export type CameraState =
  | "active"
  | "not-detected"
  | "face-not-detected"
  | "multiple-faces"
  | "face-the-camera";

export const cameraStates: { value: CameraState; label: string }[] = [
  { value: "active", label: "Camera Active" },
  { value: "not-detected", label: "Camera Not Detected" },
  { value: "face-not-detected", label: "Face Not Detected" },
  { value: "multiple-faces", label: "Multiple Faces Detected" },
  { value: "face-the-camera", label: "Please Face the Camera" },
];

export type AnswerPhase = "idle" | "answering" | "stopped" | "processing" | "submitted";

export const jobRoles = [
  "Software Engineer",
  "Frontend Engineer",
  "Data Analyst",
  "Product Manager",
];

export const difficulties = ["Beginner", "Intermediate", "Advanced"];

export interface MockQuestion {
  id: number;
  text: string;
  focus: string;
}

export const questions: MockQuestion[] = [
  {
    id: 1,
    text: "Tell me about yourself and your experience relevant to this role.",
    focus: "Background & Experience",
  },
  {
    id: 2,
    text: "Describe a challenging problem you faced and how you solved it.",
    focus: "Problem Solving",
  },
  {
    id: 3,
    text: "Why should we hire you for this role?",
    focus: "Motivation & Fit",
  },
];

export interface CategoryScore {
  label: string;
  score: number;
}

export interface AnswerAnalysis {
  categories: CategoryScore[];
  strengths: string[];
  improvements: string[];
  betterAnswer: string;
}

export const analyses: Record<number, AnswerAnalysis> = {
  1: {
    categories: [
      { label: "English Quality", score: 8 },
      { label: "Grammar", score: 7 },
      { label: "Sentence Formation", score: 8 },
      { label: "Clarity", score: 8 },
      { label: "Relevance", score: 9 },
      { label: "Answer Quality", score: 8 },
    ],
    strengths: ["Clear explanation", "Relevant experience", "Good structure"],
    improvements: [
      "Improve sentence structure",
      "Give more specific examples",
      "Avoid repetitive wording",
    ],
    betterAnswer:
      "I'm a software engineer with four years of experience building web applications, mostly with React and Node.js. At my last role I owned the checkout experience for a product used by around 40,000 monthly users, where I reduced page load time by 35% by restructuring our data fetching. I'm drawn to this role because it combines product thinking with deep frontend work, which is exactly where I do my best work.",
  },
  2: {
    categories: [
      { label: "English Quality", score: 8 },
      { label: "Grammar", score: 8 },
      { label: "Sentence Formation", score: 7 },
      { label: "Clarity", score: 7 },
      { label: "Relevance", score: 8 },
      { label: "Answer Quality", score: 8 },
    ],
    strengths: ["Concrete situation", "Logical reasoning", "Owned the outcome"],
    improvements: [
      "Quantify the final result",
      "Keep the setup shorter",
      "Explain trade-offs considered",
    ],
    betterAnswer:
      "Our nightly data sync began failing intermittently and blocking reporting for the sales team. I reproduced the failure by replaying production payloads locally, found a race condition between two workers, and introduced an idempotency key plus a queue lock. Failures dropped from roughly ten per week to zero, and I documented the fix so the on-call rotation could handle similar issues.",
  },
  3: {
    categories: [
      { label: "English Quality", score: 9 },
      { label: "Grammar", score: 8 },
      { label: "Sentence Formation", score: 8 },
      { label: "Clarity", score: 9 },
      { label: "Relevance", score: 8 },
      { label: "Answer Quality", score: 8 },
    ],
    strengths: ["Confident tone", "Tied skills to the role", "Concise closing"],
    improvements: [
      "Reference the company's goals",
      "Add one measurable achievement",
      "Reduce filler phrases",
    ],
    betterAnswer:
      "You're looking for someone who can ship customer-facing features quickly without sacrificing quality. That's what I've done for the last three years: I led a redesign that lifted activation by 12% while cutting our bug backlog in half. I also enjoy mentoring, so I'd contribute beyond my own tickets by strengthening the review culture on the team.",
  },
};

export const finalReport = {
  overallScore: 82,
  categories: [
    { label: "Answer Quality", score: 82 },
    { label: "English & Grammar", score: 78 },
    { label: "Clarity", score: 84 },
    { label: "Relevance", score: 88 },
    { label: "Camera Engagement", score: 74 },
    { label: "Interview Performance", score: 80 },
  ],
  strengths: ["Strong relevance", "Clear communication", "Good technical explanation"],
  improvements: [
    "Improve sentence structure",
    "Give more concrete examples",
    "Maintain stronger camera engagement",
  ],
  nextSteps: [
    "Practice giving structured answers using specific examples and keep answers concise.",
    "Rehearse a 90-second version of your introduction until it feels natural.",
    "Record a practice round and review where you lose eye contact with the camera.",
  ],
};
