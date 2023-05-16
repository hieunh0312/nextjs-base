export function existedVal(value) {
  return value !== null && value !== undefined;
}

export function emptyFn() {
  return null;
}

export const isProfileFalse = (profile) =>
  !profile ||
  profile === null ||
  profile === undefined ||
  profile === "null" ||
  profile === "undefined" ||
  (typeof profile === "object" && Object.keys(profile ?? {}).length === 0);
