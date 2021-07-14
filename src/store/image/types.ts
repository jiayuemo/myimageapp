import { Action } from 'redux';
import { ImageHit } from '../../services/image-search/types/ImageHit';

/**
 * Define action types
 */
export enum ImageActionType {
  IMAGE_GET_REQUEST = 'IMAGE_GET_REQUEST',
  IMAGE_GET_SUCCESS = 'IMAGE_GET_SUCCESS',
  IMAGE_GET_ERROR = 'IMAGE_GET_ERROR',
}

/**
 * Define the actions themselves, these are redux actions paramaterized by
 * its type field - which refers to the string defined in the action types above
 */
export type ImageRequestAction = Action<ImageActionType.IMAGE_GET_REQUEST>;

export interface ImageSuccessAction extends Action<
  ImageActionType.IMAGE_GET_SUCCESS
> {
  payload: {
    images: ImageHit[] | null;
  };
}

export interface ImageErrorAction extends Action<
  ImageActionType.IMAGE_GET_ERROR
> {
  payload: {
    error: Error;
  };
}

export type ImageState = Array<ImageHit>;

export type ImageAction = ImageRequestAction
                        | ImageSuccessAction
                        | ImageErrorAction;
