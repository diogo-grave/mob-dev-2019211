import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteEpisodes';

@Injectable({
    providedIn: 'root'
})
export class FavouriteService {

    constructor(private storage: Storage) { }
//Logic to all like/dislike function 
//Retrieved from Mikhail Timofeev, lecturer from CCT, module Mobile Development 
//https://drive.google.com/file/d/1T_UPqV98wRzuYHBgmlOV_Oy5ha9SN9Ie/view?usp=sharing

    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY);
    }

    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [episodeId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
        });
    }

}