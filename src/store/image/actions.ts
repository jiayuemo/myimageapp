import { ImageHit } from '../../services/image-search/types/ImageHit';
import {
  ImageActionType,
  ImageRequestAction,
  ImageSuccessAction,
  ImageErrorAction,
} from './types';
import { AppDispatch } from '../types';
import ImageSearchClient from '../../services/image-search';

/**
 * Action creators, returns the actual action object itself
 */
export const getImageRequest = (): ImageRequestAction => ({
  type: ImageActionType.IMAGE_GET_REQUEST,
});

export const getImageSuccess = (images: ImageHit[] | null): ImageSuccessAction => ({
  type: ImageActionType.IMAGE_GET_SUCCESS,
  payload: {
    images,
  },
});

export const getImageError = (error: Error): ImageErrorAction => ({
  type: ImageActionType.IMAGE_GET_ERROR,
  payload: {
    error,
  },
});

/**
 * This is why we wrote all the boilerplate
 * Thunk action creator, the centerpiece of the redux thunk pattern
 * @param query search string
 * @return A promise containing void to discourage chaining
 */
export const getMultipleImages = (
  query: string,
) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(getImageRequest());
  try {
    console.log(process.env.npm_config_image_search_api_key);
    const myClient = new ImageSearchClient();
    const images = await myClient.searchImages(query);
    dispatch(getImageSuccess(images));
  } catch (error) {
    dispatch(getImageError(error));
  }
};

/**
 * This is why we wrote all the boilerplate
 * Thunk action creator, the centerpiece of the redux thunk pattern
 * @param id image id number
 * @return A promise containing void to discourage chaining
 */
export const getSingleImage = (
  id: number,
) => async (dispatch: AppDispatch): Promise<void> => {
  dispatch(getImageRequest());
  try {
    console.log(process.env.npm_config_image_search_api_key);
    const myClient = new ImageSearchClient();
    const images = await myClient.searchImageById(id);
    dispatch(getImageSuccess(images));
  } catch (error) {
    dispatch(getImageError(error));
  }
};
