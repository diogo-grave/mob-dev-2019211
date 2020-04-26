import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'app-deaths',
    templateUrl: './deaths.page.html',
    styleUrls: ['./deaths.page.scss'],
})
export class DeathsPage implements OnInit {
//Code similar to: https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/
    deaths: Observable<any>;
    text: any;

    constructor(private router: Router, private api: ApiService) { }
    //Main method to chech for API by getDeaths method
    ngOnInit() {
        this.deaths = this.api.getDeaths();
        this.deaths.subscribe(data => {
            console.log('info', data);
        });
    }
    //Search method and retrieved from API with variable
    search() {
        this.deaths = this.api.getDeath(this.text);
        this.deaths.subscribe(data => {
            console.log('info', data);
        });
    }
}