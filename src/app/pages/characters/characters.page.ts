import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {
    //We need an array of characters, so we create an array
    //Code from: https://youtu.be/NBeExE9dvR0
    characters = [];
    offset = 0;
    numberCharacters = 63;

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {
        //Since this is the main function, we call ourselves the methods we want.
        this.openCharacters();
    }

    openCharacters(event?) {
        //This method calls the api and assumes that the offset parameter is passed to the API
        this.api.getCharacters(this.offset).subscribe(data => {
            //It shows on the console all the data of this method, in the form of an array of characters
            console.log(data);
            this.characters = this.characters.concat(data);
            //Once the array is populated, the event is completed
            if (event) {
                event.target.complete();
            }
        })
    }

    loadMore(event?) {

        //This calculation will increase the offset number by 20 every time the event happens 
        this.offset = this.offset + 20;
        //as soon as the offset has been updated, run the method again
        this.openCharacters(event);

        //Method for when the number of characters is the limit
        if (this.offset > this.numberCharacters) {
            event.target.disabled = true;
        }
    }

    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
    }
}