import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {RestProvider} from '../../providers/rest/rest';
import {Accomodations} from "../../models/accomodations";

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
    providers: [RestProvider]
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  accomodations: Accomodations[];
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getAccomodations();
  }

    getAccomodations() {
        this.restProvider.getAccomodations()
            .then(data => {
                console.log(this.accomodations);
                this.accomodations = <Accomodations[]>data;
            });
    }
}
