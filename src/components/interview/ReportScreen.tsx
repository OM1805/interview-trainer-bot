import { CheckCircle2, Compass, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, ScoreBar, StatusPill } from "./primitives";
import { finalReport } from "@/lib/interview-mock";

export function ReportScreen({
  role,
  difficulty,
  onReview,
  onRetry,
  onDashboard,
}: {
  role: string;
  difficulty: string;
  onReview: () => void;
  onRetry: () => void;
  onDashboard: () => void;
}) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <header>
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Interview Report</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          {role} · {difficulty} · 3 questions completed
        </p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)]">
        <Panel className="flex flex-col items-center justify-center p-7 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Overall Score
          </p>
          <p className="mt-3 font-display text-6xl font-bold tabular-nums text-primary">
            82<span className="text-2xl text-muted-foreground"> / 100</span>
          </p>
          <div className="mt-4">
            <StatusPill tone="good" icon={<CheckCircle2 className="h-3.5 w-3.5" />}>
              Strong performance
            </StatusPill>
          </div>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-surface">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-700"
              style={{ width: `${finalReport.overallScore}%` }}
            />
          </div>
        </Panel>

        <Panel className="p-5 sm:p-7">
          <h2 className="text-lg font-semibold text-foreground">Category scores</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {finalReport.categories.map((c) => (
              <ScoreBar key={c.label} label={c.label} score={c.score} max={100} suffix="/100" />
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Panel className="p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <CheckCircle2 className="h-4 w-4 text-success" aria-hidden /> Overall strengths
          </h2>
          <ul className="mt-3 space-y-2">
            {finalReport.strengths.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel className="p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <TrendingUp className="h-4 w-4 text-warning" aria-hidden /> Areas for improvement
          </h2>
          <ul className="mt-3 space-y-2">
            {finalReport.improvements.map((s) => (
              <li key={s} className="flex gap-2 text-sm text-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Panel className="mt-6 p-5 sm:p-7">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Compass className="h-4 w-4 text-primary" aria-hidden /> Recommended next steps
        </h2>
        <ol className="mt-4 space-y-3">
          {finalReport.nextSteps.map((s, i) => (
            <li key={s} className="flex gap-3 text-sm leading-relaxed text-foreground">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-surface text-xs font-bold text-primary">
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </Panel>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Button size="lg" onClick={onReview} className="w-full sm:w-auto">
          Review Answers
        </Button>
        <Button size="lg" variant="secondary" onClick={onRetry} className="w-full sm:w-auto">
          Try Another Interview
        </Button>
        <Button size="lg" variant="outline" onClick={onDashboard} className="w-full sm:w-auto">
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
