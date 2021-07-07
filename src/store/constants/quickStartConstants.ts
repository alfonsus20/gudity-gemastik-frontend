export const SHOW_QUICKSTART = "SHOW_QUICKSTART";
export const HIDE_QUICKSTART = "HIDE_QUICKSTART";

export interface QuickStartShown {
  type: typeof SHOW_QUICKSTART;
}

export interface QuickStartHidden {
  type: typeof HIDE_QUICKSTART;
}

export type QuickStartDispatchTypes = QuickStartShown | QuickStartHidden;
