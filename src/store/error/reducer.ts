import { AnyAction } from 'redux';
import { ErrorState } from './types';

export const DEFAULT_STATE: ErrorState = {};

/**
 * Reduces the given state and an action to a new state
 * @param state The current state
 * @param action An action
 * @return A New state
 */
export default function reducer(state = DEFAULT_STATE, action: AnyAction): ErrorState {
  const { type } = action;
  const regex = new RegExp('(.*)_(REQUEST|ERROR)');
  const matches = regex.exec(type);

  if (matches) {
    const [, requestName, requestState] = matches;
    if (requestState === 'ERROR') {
      return {
        ...state,
        [requestName]: true,
      };
    }
    return {
      ...state,
      [requestName]: false,
    };
  }
  return state;
}
