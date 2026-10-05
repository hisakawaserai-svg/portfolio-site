export type StepRole = 'me' | 'both' | 'ai';

export type DevProcessStepType = {
  stepNum: number;
  title: string;
  text: string;
  stepRole: StepRole;

  desc?: string;
  inLoop?: boolean;
}