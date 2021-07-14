import { AnyAction } from 'redux';
import { LoadingState } from './types';

export const DEFAULT_STATE: LoadingState = {};

/**
 * Reduces the given state and an action to a new state
 * @param state The current state
 * @param action An action
 * @return A New state
 */
export default function reducer(state = DEFAULT_STATE, action: AnyAction): LoadingState {
  const { type } = action;
  const regex = new RegExp('(.*)_(REQUEST|SUCCESS|ERROR)');
  const matches = regex.exec(type);

  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  const isLoading = (requestState === 'REQUEST');
  return {
    ...state,
    [requestName]: isLoading,
  };
}
