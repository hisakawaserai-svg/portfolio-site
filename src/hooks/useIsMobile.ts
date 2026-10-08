import { useSyncExternalStore } from "react";
import { MOBILE_MAX_WIDTH } from "../constants/breakpoints";

const mediaQuery = `(max-width: ${MOBILE_MAX_WIDTH}px)`;

const subscribe = (callback: () => void) => {
  const media = window.matchMedia(mediaQuery);

  media.addEventListener("change", callback);

  return () => {
    media.removeEventListener("change", callback);
  }
}

const getSnapshot = () => {
  return window.matchMedia(mediaQuery).matches;
}

export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot);
}