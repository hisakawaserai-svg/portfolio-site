import { type Variant } from "../components/BirdMascot/BirdMascot.types.ts";

export const getVariant = (hour: number): Variant => {
  if (hour >= 6 && hour < 15) return 'day';
  if (hour >= 15 && hour < 24) return 'night';
  return 'sleep'
}