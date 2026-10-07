export type SkillLevel = 1 | 2 | 3 | 4;

export const indicatorLabel: Record<SkillLevel, string> = {
  1: "触った（今は書けない）",
  2: "説明だけできる",
  3: "見ながら直せる",
  4: "白紙からかける",
}