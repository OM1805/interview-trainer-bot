import type { ReactNode } from "react";
import { AlertTriangle, Camera, CameraOff, CheckCircle2, Info, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CameraState } from "@/lib/interview-mock";

/* ---------------------------------- Card --------------------------------- */

export function Panel({
  children,
  className,
  as: As = "section",
}: {
  children: ReactNode;
  className?: string;
  as?: "section" | "div" | "article";
}) {
  return (
    <As
      className={cn(
        "rounded-xl border border-border bg-card shadow-[var(--shadow-card)]",
        className,
      )}
    >
      {children}
    </As>
  );
}

/* ------------------------------ Status pill ------------------------------ */

export type StatusTone = "good" | "warning" | "error" | "info" | "neutral";

const toneStyles: Record<StatusTone, string> = {
  good: "bg-success-soft text-success border-success/25",
  warning: "bg-warning-soft text-warning-foreground border-warning/40",
  error: "bg-destructive-soft text-destructive border-destructive/25",
  info: "bg-info-soft text-info border-info/25",
  neutral: "bg-muted text-muted-foreground border-border",
};

const toneDot: Record<StatusTone, string> = {
  good: "bg-success",
  warning: "bg-warning",
  error: "bg-destructive",
  info: "bg-info",
  neutral: "bg-muted-foreground",
};

export function StatusPill({
  tone = "neutral",
  children,
  icon,
  className,
}: {
  tone?: StatusTone;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
        toneStyles[tone],
        className,
      )}
    >
      {icon ?? <span className={cn("h-2 w-2 shrink-0 rounded-full", toneDot[tone])} />}
      <span className="truncate">{children}</span>
    </span>
  );
}

/* --------------------------- Warning / callout --------------------------- */

export function WarningMessage({
  tone = "warning",
  title,
  description,
}: {
  tone?: StatusTone;
  title: string;
  description?: string;
}) {
  const Icon = tone === "good" ? CheckCircle2 : tone === "info" ? Info : AlertTriangle;
  return (
    <div className={cn("flex gap-3 rounded-lg border px-3 py-2.5", toneStyles[tone])}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
      <div className="min-w-0">
        <p className="text-sm font-semibold leading-snug">{title}</p>
        {description ? <p className="mt-0.5 text-xs opacity-80">{description}</p> : null}
      </div>
    </div>
  );
}

/* --------------------------------- Timer --------------------------------- */

export type TimerState = "normal" | "warning" | "critical";

export function Timer({ value, state = "normal" }: { value: string; state?: TimerState }) {
  const tone: Record<TimerState, string> = {
    normal: "border-border bg-surface text-foreground",
    warning: "border-warning/40 bg-warning-soft text-warning-foreground",
    critical: "border-destructive/30 bg-destructive-soft text-destructive",
  };
  const label: Record<TimerState, string> = {
    normal: "Time remaining",
    warning: "Time running low",
    critical: "Time almost up",
  };
  return (
    <div className={cn("rounded-lg border px-4 py-3", tone[state])}>
      <p className="text-[11px] font-semibold uppercase tracking-wider opacity-75">
        {label[state]}
      </p>
      <p className="mt-1 font-display text-3xl font-bold tabular-nums sm:text-4xl">{value}</p>
    </div>
  );
}

/* ---------------------------- Progress indicator -------------------------- */

export function ProgressIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-muted-foreground">
        Question {current} of {total}
      </span>
      <ol className="flex items-center gap-1.5" aria-label={`Question ${current} of ${total}`}>
        {Array.from({ length: total }, (_, i) => {
          const step = i + 1;
          const done = step < current;
          const active = step === current;
          return (
            <li key={step} className="flex items-center gap-1.5">
              {i > 0 ? <span className="h-px w-5 bg-border" aria-hidden /> : null}
              <span
                className={cn(
                  "grid h-6 w-6 place-items-center rounded-full border text-[11px] font-bold transition-colors",
                  active && "border-primary bg-primary text-primary-foreground",
                  done && "border-success bg-success-soft text-success",
                  !active && !done && "border-border bg-card text-muted-foreground",
                )}
              >
                {done ? "✓" : step}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/* -------------------------------- Score bar ------------------------------- */

export function ScoreBar({
  label,
  score,
  max = 10,
  suffix,
}: {
  label: string;
  score: number;
  max?: number;
  suffix?: string;
}) {
  const pct = Math.round((score / max) * 100);
  const tone = pct >= 80 ? "bg-success" : pct >= 60 ? "bg-primary" : "bg-warning";
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="min-w-0 truncate text-sm font-medium text-foreground">{label}</span>
        <span className="shrink-0 text-sm font-semibold tabular-nums text-muted-foreground">
          {score}
          {suffix ?? `/${max}`}
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-surface">
        <div
          className={cn("h-full rounded-full transition-[width] duration-500", tone)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ----------------------------- Webcam preview ----------------------------- */

const cameraMeta: Record<
  CameraState,
  { label: string; tone: StatusTone; engagement: string; engagementTone: StatusTone; warning?: string }
> = {
  active: {
    label: "Camera Active",
    tone: "good",
    engagement: "Good",
    engagementTone: "good",
  },
  "not-detected": {
    label: "Camera Not Detected",
    tone: "error",
    engagement: "Unavailable",
    engagementTone: "neutral",
    warning: "We can't detect a camera. You can still continue the interview.",
  },
  "face-not-detected": {
    label: "Camera Active",
    tone: "good",
    engagement: "Face Not Detected",
    engagementTone: "warning",
    warning: "Face not detected.",
  },
  "multiple-faces": {
    label: "Camera Active",
    tone: "good",
    engagement: "Multiple Faces",
    engagementTone: "warning",
    warning: "Multiple faces detected.",
  },
  "face-the-camera": {
    label: "Camera Active",
    tone: "good",
    engagement: "Warning",
    engagementTone: "warning",
    warning: "Please face the camera.",
  },
};

export function WebcamPreview({ state }: { state: CameraState }) {
  const meta = cameraMeta[state];
  const offline = state === "not-detected";
  return (
    <div className="space-y-4">
      <div
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-surface",
          offline ? "border-destructive/30" : "border-border",
        )}
        role="img"
        aria-label={`Camera preview placeholder — ${meta.label}`}
      >
        <div className="absolute inset-0 grid place-items-center px-6 text-center">
          <div className="flex flex-col items-center gap-2">
            {offline ? (
              <CameraOff className="h-8 w-8 text-destructive" aria-hidden />
            ) : (
              <Camera className="h-8 w-8 text-muted-foreground" aria-hidden />
            )}
            <p className="text-sm font-semibold text-foreground">Your camera preview</p>
            <p className="max-w-[26ch] text-xs text-muted-foreground">
              {offline
                ? "No camera signal available."
                : "This area represents your live camera during the interview."}
            </p>
          </div>
        </div>
        {/* framing guide */}
        <div
          className="pointer-events-none absolute inset-x-[22%] inset-y-[14%] rounded-lg border-2 border-dashed border-border/80"
          aria-hidden
        />
        <div className="absolute left-3 top-3">
          <StatusPill tone={meta.tone} className="bg-card/90 backdrop-blur">
            {meta.label}
          </StatusPill>
        </div>
      </div>

      <dl className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-surface px-3 py-2.5">
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Camera
          </dt>
          <dd className="mt-1.5">
            <StatusPill tone={meta.tone}>{meta.label}</StatusPill>
          </dd>
        </div>
        <div className="rounded-lg border border-border bg-surface px-3 py-2.5">
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Camera Engagement
          </dt>
          <dd className="mt-1.5">
            <StatusPill
              tone={meta.engagementTone}
              icon={meta.engagementTone === "good" ? <CheckCircle2 className="h-3.5 w-3.5" /> : undefined}
            >
              {meta.engagement}
            </StatusPill>
          </dd>
        </div>
      </dl>

      {meta.warning ? (
        <WarningMessage
          tone={offline ? "error" : "warning"}
          title={meta.warning}
          description="This is a reminder only — it does not fail your interview."
        />
      ) : (
        <WarningMessage
          tone="good"
          title="You're well positioned."
          description="Keep facing the camera while you answer."
        />
      )}
    </div>
  );
}

export const multipleFacesIcon = Users;
