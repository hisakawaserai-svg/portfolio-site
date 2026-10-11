const ActionMap = ['history', 'apps', 'about', 'process', 'skills'] as const;

const orderMap = new Map<string, number>(
  ActionMap.map((item, index) => [item, index])
);

const NOT_FOUND_ACTION = 5;
export function sortActions(actions: string[]): string[]{
  return [...actions].sort((a, b) => {
    const actionA = orderMap.get(a) ?? NOT_FOUND_ACTION;
    const actionB = orderMap.get(b) ?? NOT_FOUND_ACTION;

    return actionA - actionB;
  })
}