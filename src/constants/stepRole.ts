import { type StepRole } from "../components/DevProcessStep/DevProcessStep.types";

export const stepRoleColor: Record<StepRole, string> = {
  "me": "var(--navy)",
  "both": "var(--panel)",
  "ai": "var(--panel)",
}

export const stepRoleTextColor: Record<StepRole, string> = {
  "me": "var(--panel)",
  "both": "var(--navy)",
  "ai": "oklch(0.5 0.09 195)",
}

export const stepRoleBorderColor: Record<StepRole, string> = {
  "me": "var(--navy)",
  "both": "var(--navy)",
  "ai": "oklch(0.5 0.09 195)",
}

export const stepRoleStr: Record<StepRole, string> = {
  "me": "自分",
  "both": "共同",
  "ai": "AI",
}

export const stepRoleBorderType: Record<StepRole, string> = {
  "me": "solid",
  "both": "solid",
  "ai": "dashed",
}

export const stepRoleIcon: Record<StepRole, string[]> = {
  "me": ["user"],
  "both": ["user", "bot"],
  "ai": ["bot"],
}