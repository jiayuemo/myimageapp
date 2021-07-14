/** @module services/image-search */

import { ImageHit } from './ImageHit';

/**
 * An Interface that communicates with the Pixabay api service
 */
export interface API {
  /**
   * Searches all images in the pixabay database based on
   *
   * @param query url encoded search term
   * @return A promise containing an array of image hit
   */
  searchImages(query: string): Promise<Array<ImageHit>>;

  /**
   * Searches all images in the pixabay database based on
   *
   * @param id numeric imageID
   * @return A promise containing an array of image hit, single element
   */
  searchImageById(id: number): Promise<Array<ImageHit>>;

}
