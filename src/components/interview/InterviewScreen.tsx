import { Mic, Square, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, ProgressIndicator, StatusPill, Timer, WebcamPreview } from "./primitives";
import type { TimerState } from "./primitives";
import { questions, type AnswerPhase, type CameraState } from "@/lib/interview-mock";

interface Props {
  index: number;
  role: string;
  difficulty: string;
  phase: AnswerPhase;
  camera: CameraState;
  onStart: () => void;
  onStop: () => void;
  onSubmit: () => void;
  onExit: () => void;
}

const timerByIndex: { value: string; state: TimerState }[] = [
  { value: "09:42", state: "normal" },
  { value: "02:18", state: "warning" },
  { value: "00:38", state: "critical" },
];

const phaseMeta: Record<AnswerPhase, { label: string; tone: "neutral" | "good" | "info" | "warning" }> = {
  idle: { label: "Not Started", tone: "neutral" },
  answering: { label: "Listening…", tone: "good" },
  stopped: { label: "Answer Stopped", tone: "warning" },
  processing: { label: "Processing", tone: "info" },
  submitted: { label: "Submitted", tone: "info" },
};

export function InterviewScreen({
  index,
  role,
  difficulty,
  phase,
  camera,
  onStart,
  onStop,
  onSubmit,
  onExit,
}: Props) {
  const question = questions[index] ?? questions[0]!;
  const timer = timerByIndex[index] ?? timerByIndex[0]!;
  const status = phaseMeta[phase];

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:flex-wrap sm:justify-between">
        <div className="min-w-0">
          <h1 className="truncate text-xl font-bold text-foreground sm:text-2xl">
            AI Mock Interview
          </h1>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {role} · {difficulty}
          </p>
        </div>
        <Button variant="outline" size="sm" className="shrink-0" onClick={onExit}>
          Exit interview
        </Button>
      </header>

      <div className="mt-5">
        <ProgressIndicator current={index + 1} total={questions.length} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
        {/* Question / answer column */}
        <div className="space-y-6">
          <Panel className="p-5 sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <StatusPill tone="info">Question {index + 1}</StatusPill>
              <StatusPill tone="neutral">{question.focus}</StatusPill>
            </div>
            <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              {question.text}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Answer out loud. Take a moment to structure your response before you start.
            </p>
          </Panel>

          <Panel className="p-5 sm:p-6">
            <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Answer status
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <StatusPill tone={status.tone}>{status.label}</StatusPill>
                  {phase === "answering" ? (
                    <span className="flex items-center gap-1" aria-hidden>
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-3 w-1 animate-pulse rounded-full bg-success"
                          style={{ animationDelay: `${i * 150}ms` }}
                        />
                      ))}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {phase === "idle" && "Press Start Answer when you're ready."}
                  {phase === "answering" && "Your answer is being captured."}
                  {phase === "stopped" && "Answer stopped. Submit it for evaluation."}
                  {(phase === "processing" || phase === "submitted") &&
                    "Your answer has been submitted."}
                </p>
              </div>
              <Timer value={timer.value} state={timer.state} />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                className="w-full sm:w-auto"
                onClick={onStart}
                disabled={phase !== "idle"}
              >
                <Mic /> Start Answer
              </Button>
              <Button
                variant="destructive"
                className="w-full sm:w-auto"
                onClick={onStop}
                disabled={phase !== "answering"}
              >
                <Square /> Stop Answer
              </Button>
              <Button
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={onSubmit}
                disabled={phase !== "stopped"}
              >
                {phase === "processing" ? <Loader2 className="animate-spin" /> : <Send />}
                Submit Answer
              </Button>
            </div>
          </Panel>
        </div>

        {/* Camera column */}
        <Panel className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold text-foreground">Camera</h2>
          </div>
          <div className="mt-4">
            <WebcamPreview state={camera} />
          </div>

        </Panel>
      </div>
    </div>
  );
}
