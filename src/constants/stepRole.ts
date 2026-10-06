import { type StepRole } from "../components/DevProcessStep/DevProcessStep.types";
import { type CSSProperties } from "react";

const stepRoleColor: Record<StepRole, string> = {
  "me": "var(--navy)",
  "both": "var(--panel)",
  "ai": "var(--panel)",
}

const stepRoleTextColor: Record<StepRole, string> = {
  "me": "var(--panel)",
  "both": "var(--navy)",
  "ai": "oklch(0.5 0.09 195)",
}

const stepRoleBorderColor: Record<StepRole, string> = {
  "me": "var(--navy)",
  "both": "var(--navy)",
  "ai": "oklch(0.5 0.09 195)",
}

const stepRoleBorderType: Record<StepRole, string> = {
  "me": "solid",
  "both": "solid",
  "ai": "dashed",
}

export const stepRoleStr: Record<StepRole, string> = {
  "me": "自分",
  "both": "共同",
  "ai": "AI",
}

export const stepRoleIcon: Record<StepRole, string[]> = {
  "me": ["user"],
  "both": ["user", "bot"],
  "ai": ["bot"],
}

export const getStepRoleStyle = (role: StepRole) => {
  return {
    "--step-role-color": stepRoleColor[role], 
    "--step-role-text-color": stepRoleTextColor[role],
    "--step-role-border-color": stepRoleBorderColor[role],
    "--step-role-border-type": stepRoleBorderType[role]
  } as CSSProperties;
}