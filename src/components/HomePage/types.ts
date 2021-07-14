/** @module components/HomePage */
import { ImageState } from '../../store/image/types';

export interface HomePageStateProps {
  images: ImageState;
  loading: boolean;
  error: boolean;
}

export interface HomePageDispatchProps {
  getMultipleImages(
    query: string
  ): void;
}

export type HomePageContainerProps = HomePageStateProps & HomePageDispatchProps;
export type HomePageProps = HomePageStateProps & HomePageDispatchProps;
