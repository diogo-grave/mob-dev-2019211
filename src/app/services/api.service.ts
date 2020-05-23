import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
//This file is the main routers to url requests, where methods in page.ts are called through this page
    constructor(private http: HttpClient) { }

    getEpisodes() {
        return this.http.get('https://www.breakingbadapi.com/api/episodes');
    }
//When we need to pass a variable to the API is fundamental using `` instead of ''
    getEpisode(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/episodes/${id}`);
    }

    getCharacters(chars) {
         return this.http.get(`https://www.breakingbadapi.com/api/characters?limit=20&offset=${chars}`)
    }

    getCharacter(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/characters/${id}`);
    }

    getQuotes() {
        return this.http.get('https://www.breakingbadapi.com/api/quotes');
    }

    getQuote(id) {
        return this.http.get(`https://www.breakingbadapi.com/api/quotes/${id}`);
    }

    getDeaths() {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count`);
    }

    getDeath(name) {
        return this.http.get(`https://www.breakingbadapi.com/api/death-count?name=${name}`);
    }

    searchQuote(name){
       return this.http.get(`https://www.breakingbadapi.com/api/quote?author=${name}`);
    }

}