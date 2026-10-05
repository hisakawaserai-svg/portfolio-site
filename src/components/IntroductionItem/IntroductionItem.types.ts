export type DescriptionItem =
  | { dt: string; text: string }
  | { dt: string; items: string[] }
  | { dt: string; qual: qualification[] };

type qualification = {
  name: string;
  desc: string;
}