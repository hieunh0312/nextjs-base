export const LOCATION = {
  HOME: () => "/",
};

export const HIDDEN_HEADER = [];

export const HIDDEN_FOOTER = [];

// EX: Routes for not signed in yet
export const ONLY_GUESTS_ROUTES = [];

// EX: Routes for signed in
export const ONLY_AUTH_ROUTES = [];

export const STORAGE_KEY = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

export const COLOR_VARIABLES = {
  "--color-white": "#fff",
  "--color-black": "#000",
  "--color-transparent": "transparent",

  "--color-primary": "#f25840",

  "--color-neural-1": "#5e5e5e",
};

export const TIME_BY_MILLISECONDS = {
  SECOND: 1000,
  MINUTE: 60 * 1000,
  HOUR: 60 * 60 * 1000,
  DAY: 24 * 60 * 60 * 1000,
};

export const TOAST_MESSAGE_LENGTH_LIMIT = {
  SHORT: 30,
  MEDIUM: 80,
  LONG: 150,
};

export const TOAST_TIME_CLOSE = {
  SHORT: 1500,
  MEDIUM: 2000,
  LONG: 3000,
};

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const DEFAULT_TIME_OUT_CALL_API = 10_000;
