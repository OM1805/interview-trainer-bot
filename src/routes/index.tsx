import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SetupScreen } from "@/components/interview/SetupScreen";
import { InterviewScreen } from "@/components/interview/InterviewScreen";
import { AnalysisLoading, AnalysisScreen } from "@/components/interview/AnalysisScreen";
import { ReportScreen } from "@/components/interview/ReportScreen";
import { questions, type AnswerPhase, type CameraState } from "@/lib/interview-mock";

const title = "AI Mock Interview — Practice & Get Instant Feedback";
const description =
  "Run a guided 3-question mock interview with timer, camera guidance and a detailed performance report.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Stage = "setup" | "interview" | "analyzing" | "analysis" | "report";

function Index() {
  const [stage, setStage] = useState<Stage>("setup");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<AnswerPhase>("idle");
  const [camera, setCamera] = useState<CameraState>("active");
  const [role, setRole] = useState("Software Engineer");
  const [difficulty, setDifficulty] = useState("Intermediate");

  useEffect(() => {
    if (stage !== "analyzing") return;
    const t = setTimeout(() => setStage("analysis"), 1800);
    return () => clearTimeout(t);
  }, [stage]);

  const goToQuestion = (i: number) => {
    setIndex(i);
    setPhase("idle");
    setStage("interview");
  };

  if (stage === "setup") {
    return (
      <main className="min-h-screen bg-background">
        <SetupScreen
          role={role}
          difficulty={difficulty}
          onRoleChange={setRole}
          onDifficultyChange={setDifficulty}
          onStart={() => goToQuestion(0)}
        />
      </main>
    );
  }

  if (stage === "interview") {
    return (
      <main className="min-h-screen bg-background">
        <InterviewScreen
          index={index}
          role={role}
          difficulty={difficulty}
          phase={phase}
          camera={camera}
          onCameraChange={setCamera}
          onStart={() => setPhase("answering")}
          onStop={() => setPhase("stopped")}
          onSubmit={() => {
            setPhase("processing");
            setStage("analyzing");
          }}
          onExit={() => setStage("setup")}
        />
      </main>
    );
  }

  if (stage === "analyzing") {
    return (
      <main className="min-h-screen bg-background">
        <AnalysisLoading />
      </main>
    );
  }

  if (stage === "analysis") {
    const isLast = index === questions.length - 1;
    return (
      <main className="min-h-screen bg-background">
        <AnalysisScreen
          index={index}
          isLast={isLast}
          onContinue={() => (isLast ? setStage("report") : goToQuestion(index + 1))}
        />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <ReportScreen
        role={role}
        difficulty={difficulty}
        onReview={() => {
          setIndex(0);
          setStage("analysis");
        }}
        onRetry={() => {
          setIndex(0);
          setPhase("idle");
          setStage("setup");
        }}
        onDashboard={() => setStage("setup")}
      />
    </main>
  );
}
