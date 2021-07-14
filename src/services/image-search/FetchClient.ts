/** @module services/image-search */

import { API } from './types/API';
import { ImageHit } from './types/ImageHit';

class FetchClient implements API {
  private prefix: string;

  private apiKey: string;

  /**
  * Construct a new fetch client
  *
  * @return a client that uses the fetch api to hit a defined endpoint
  */
  constructor(apiURL = '', secretApiKey = 'mySecretKey') {
    this.prefix = apiURL;
    this.apiKey = secretApiKey;
  }

  /**
   * Searches all images in the pixabay database based on
   *
   * @param query url encoded search term
   * @return A promise containing an array of image hit
   */
  async searchImages(query: string): Promise<Array<ImageHit>> {
    const response = await fetch(`${this.prefix}/?key=${this.apiKey}&q=${query}&safesearch=true`);
    await FetchClient.handleError(response);
    const json = await response.json();
    const imageHits = json.hits;
    return imageHits;
  }

  /**
   * Searches all images in the pixabay database based on
   *
   * @param id numeric imageID
   * @return A promise containing an array of image hit, single element
   */
  async searchImageById(id: number): Promise<Array<ImageHit>> {
    const response = await fetch(`${this.prefix}/?key=${this.apiKey}&id=${id}&safesearch=true`);
    await FetchClient.handleError(response);
    const json = await response.json();
    const imageHits = json.hits;
    return imageHits;
  }

  /**
   * Checks for errors and throws with a message
   *
   * @param response Response object from the fetch api call
   * @return Promise of void, should never return only
   * @throws An error if a passed response is not ok
   */
  static async handleError(response: Response): Promise<void> {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  }
}

export default FetchClient;
