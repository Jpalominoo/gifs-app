import { Gif } from "../interfaces/gif.interface";
import { GiphyResponse } from "../interfaces/giphy.interface";



    export class GifMapper {

        static mapGiphyResponseToGif(item: GiphyResponse  ): Gif {

            return{
                id: item.id,
                title: item.title,
                url: item.images.original.url

            }
            
        }

        static mapGiphyResponseToGifArray(items: GiphyResponse[]): Gif[] {

            return items.map(this.mapGiphyResponseToGif);
            

        }

    }