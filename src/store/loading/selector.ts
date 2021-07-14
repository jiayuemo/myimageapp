import { LoadingState } from './types';

/**
 * Selects the given requests LoadingState from the state
 * @param state LoadingState object in the store
 * @param requestName The name of the request
 * @returns boolean loadingStatus
 */
export function selectError(
  state: LoadingState,
  requestName: string,
): boolean {
  const loadingStatus = state[requestName];
  if (loadingStatus === undefined) {
    return false;
  }
  return loadingStatus;
}
