export type BandType = 'check' | 'steps' | 'eq' | 'progress' | 'bookmark';

type Platform = {
  platform: 'iOS' | 'Android' | 'Web', 
  platformURL?: string,
}

type Role = 'me' | 'ai';
type RoleText = {
  role: Role,
  text: string[],
}

type DateType = 'create' | 'release'
type DateInfo = {
  dateType: DateType,
  date: string,
}

type Tech = {
  name: string,
  usage: string[];
}

export type ReleaseType = 'release' | 'unrelease' | 'demo';

export type AppType = {
  id: string,
  image?: string,
  title: string,
  description: string,
  color: string,
  textColor: string,
  band: BandType,

  platforms?: Platform[],
  reason: string,
  points: string[],
  techs: Tech[],
  roles: RoleText[],
  release: ReleaseType,
  coder: Role,
  githubUrl?: string,
  dateInfo?: DateInfo[],

  gradient?: string,
}
