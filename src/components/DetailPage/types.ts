/** @module components/DetailPage */
import { ImageState } from '../../store/image/types';

export interface DetailPageOwnProps {
  id: number;
}

export interface DetailPageStateProps {
  images: ImageState;
  loading: boolean;
  error: boolean;
}

export interface DetailPageDispatchProps {
  getSingleImage(
    id: number
  ): void;
}

export type DetailPageContainerProps = DetailPageStateProps & DetailPageDispatchProps;
export type DetailPageProps = DetailPageOwnProps & DetailPageStateProps & DetailPageDispatchProps;
