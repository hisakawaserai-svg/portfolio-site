import { type AppType } from "../components/AppCard/AppCard.types";
import { apps } from '../data/apps';

export const getApp = (appId: string): AppType | null => {
  const result = apps.find(app => app.id === appId);
  return result ?? null;
}