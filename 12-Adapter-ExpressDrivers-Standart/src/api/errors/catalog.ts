import { HomeError }                 from "./domain/home";
import { SecurityError }             from "./domain/security";

export const ErrorCatalog = {
  ...HomeError,
  ...SecurityError

} as const;

export type ErrorCode = keyof typeof ErrorCatalog;