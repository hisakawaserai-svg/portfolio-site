import { type ReleaseType } from "../components/AppCard/AppCard.types";

export const releaseLabel: Record<ReleaseType, string> = {
  'release': '公開中',
  'unrelease': '未公開',
  'demo': 'デモ公開中',
}
export const releaseColor: Record<ReleaseType, string> = {
  'release': 'oklch(0.62 0.13 160)',
  'unrelease': 'transparent',
  'demo': 'var(--ink)',
}