import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { LoadingState } from './loading/types';
import { ErrorState } from './error/types';
import { ImageState } from './image/types';

export interface GlobalState {
  loading: LoadingState,
  error: ErrorState,
  image: ImageState,
}

export type AppDispatch = ThunkDispatch<GlobalState, null, AnyAction>;
