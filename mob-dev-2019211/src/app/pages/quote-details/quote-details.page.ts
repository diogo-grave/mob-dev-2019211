import { Component, OnInit } from '@angular/core';
//Add the ActivatedRoute, where can be used further in our code to path/navigate 
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.page.html',
  styleUrls: ['./quote-details.page.scss'],
})
export class QuoteDetailsPage implements OnInit {
 
    quote: any; 
    quoteID = null;
    constructor(private activatedRoute: ActivatedRoute, private api:ApiService) { }

    ngOnInit() {

        //Here the function use the path from constructor to GET paraments pased in ID.
        this.quoteID = this.activatedRoute.snapshot.paramMap.get('id');

        this.api.getQuote(this.quoteID).subscribe(data => {
            this.quote = data[0];

            console.log(JSON.stringify(data[0]));
        });
    }

}
