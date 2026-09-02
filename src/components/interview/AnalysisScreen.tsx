import { ArrowRight, CheckCircle2, Lightbulb, Loader2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, ProgressIndicator, ScoreBar, StatusPill } from "./primitives";
import { analyses, questions } from "@/lib/interview-mock";

export function AnalysisLoading() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <Loader2 className="h-8 w-8 animate-spin text-primary" aria-hidden />
      <h1 className="mt-5 text-xl font-semibold text-foreground">Analyzing your answer…</h1>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">
        We're reviewing your response for clarity, grammar and relevance. This usually takes a few
        seconds.
      </p>
      <div className="mt-6 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-surface">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-primary" />
      </div>
    </div>
  );
}

export function AnalysisScreen({
  index,
  onContinue,
  isLast,
}: {
  index: number;
  onContinue: () => void;
  isLast: boolean;
}) {
  const question = questions[index] ?? questions[0]!;
  const analysis = analyses[question.id] ?? analyses[1]!;
  const average = (
    analysis.categories.reduce((a, c) => a + c.score, 0) / analysis.categories.length
  ).toFixed(1);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Answer analysis</h1>
          <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{question.text}</p>
        </div>
        <StatusPill tone="good" icon={<CheckCircle2 className="h-3.5 w-3.5" />}>
          Answer submitted
        </StatusPill>
      </header>

      <div className="mt-5">
        <ProgressIndicator current={index + 1} total={questions.length} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <Panel className="p-5 sm:p-7">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-lg font-semibold text-foreground">Evaluation</h2>
            <p className="text-sm text-muted-foreground">
              Average <span className="font-semibold text-foreground">{average}/10</span>
            </p>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {analysis.categories.map((c) => (
              <ScoreBar key={c.label} label={c.label} score={c.score} />
            ))}
          </div>
        </Panel>

        <div className="space-y-6">
          <Panel className="p-5 sm:p-6">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CheckCircle2 className="h-4 w-4 text-success" aria-hidden /> Strengths
            </h2>
            <ul className="mt-3 space-y-2">
              {analysis.strengths.map((s) => (
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
              {analysis.improvements.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>

      <Panel className="mt-6 border-primary/20 p-5 sm:p-7">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Lightbulb className="h-4 w-4 text-primary" aria-hidden /> Better answer
        </h2>
        <blockquote className="mt-3 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-foreground">
          {analysis.betterAnswer}
        </blockquote>
      </Panel>

      <div className="mt-7 flex justify-end">
        <Button size="lg" className="w-full sm:w-auto" onClick={onContinue}>
          {isLast ? "View Interview Report" : "Continue to Next Question"} <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
