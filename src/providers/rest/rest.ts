import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

    getAccomodations() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl+'/accomodations').subscribe(data => {
              console.log(data);
                resolve(data);
            }, err => {
                console.log(err);
            });
        });
    }

}
