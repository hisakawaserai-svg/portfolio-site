export type TimelineEventType = {
  phase: number,
  date: string,
  title: string,
  coderLabel?: string,
  coderDisc?: string,
  connection?: string,

  appId?: string,  // release / color / appName の代わり
}