export const MIN_PASSWORD_LENGTH = 8;
export const MAX_PASSWORD_LENGTH = 128;
export const MAX_USERNAME_LENGTH = 30;
// The longest email address the email standard allows.
export const MAX_EMAIL_LENGTH = 254;

/** Shared email check. */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
