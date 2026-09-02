import { Camera, Clock, Info, ListChecks, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Panel } from "./primitives";
import { difficulties, jobRoles } from "@/lib/interview-mock";

interface Props {
  role: string;
  difficulty: string;
  onRoleChange: (v: string) => void;
  onDifficultyChange: (v: string) => void;
  onStart: () => void;
}

const facts = [
  { icon: ListChecks, label: "Questions", value: "3 Questions" },
  { icon: Clock, label: "Time", value: "10 minutes per question" },
  { icon: Camera, label: "Camera", value: "Required — keep your face visible" },
  { icon: Mic, label: "Microphone", value: "Required — answer out loud" },
];

export function SetupScreen({
  role,
  difficulty,
  onRoleChange,
  onDifficultyChange,
  onStart,
}: Props) {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Career Practice
        </p>
        <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">AI Mock Interview</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          You will answer 3 interview questions in a simulated interview session. Choose your role
          and difficulty to begin.
        </p>
      </header>

      <Panel className="mt-8 p-5 sm:p-7">
        <h2 className="text-lg font-semibold text-foreground">Interview settings</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="job-role">Job Role</Label>
            <Select value={role} onValueChange={onRoleChange}>
              <SelectTrigger id="job-role" className="h-10 w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {jobRoles.map((r) => (
                  <SelectItem key={r} value={r}>
                    {r}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="difficulty">Difficulty</Label>
            <Select value={difficulty} onValueChange={onDifficultyChange}>
              <SelectTrigger id="difficulty" className="h-10 w-full">
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map((d) => (
                  <SelectItem key={d} value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <dl className="mt-7 grid gap-3 sm:grid-cols-2">
          {facts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-lg border border-border bg-surface px-4 py-3"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <div className="min-w-0">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {label}
                </dt>
                <dd className="text-sm font-medium text-foreground">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex gap-3 rounded-lg border border-info/25 bg-info-soft px-4 py-3">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-info" aria-hidden />
          <p className="text-sm leading-relaxed text-foreground">
            You will answer each question verbally while your camera is on. Your answers will be
            transcribed and evaluated after submission.
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button size="lg" className="w-full sm:w-auto" onClick={onStart}>
            Start Interview
          </Button>
          <p className="text-xs text-muted-foreground">
            Prototype preview — camera, microphone and scoring are simulated with sample data.
          </p>
        </div>
      </Panel>
    </div>
  );
}
