import { ErrorState } from './types';

/**
 * Selects the given requests errorStatus from the state
 * @param state ErrorState object in the store
 * @param requestName The name of the request
 * @returns boolean errorStatus
 */
export function selectError(
  state: ErrorState,
  requestName: string,
): boolean {
  const errorStatus = state[requestName];
  if (errorStatus === undefined) {
    return false;
  }
  return errorStatus;
}
