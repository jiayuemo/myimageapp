import { AnyAction } from 'redux';
import { ImageState, ImageActionType } from './types';

export const DEFAULT_STATE: ImageState = [];

/**
 * Reduces the given state and an action to a new state
 * @param state The current state
 * @param action An action
 * @return A New state
 */
export default function reducer(state = DEFAULT_STATE, action: AnyAction): ImageState {
  switch (action.type) {
  case ImageActionType.IMAGE_GET_SUCCESS:
    return action.payload.images;
  default:
    return state;
  }
}
