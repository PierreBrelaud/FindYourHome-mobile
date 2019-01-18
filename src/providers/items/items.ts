import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  constructor(public api: Api) { }

  query(params?: any) {
    //console.log('test');
    //console.log(this.api.get('/api/accomodations', params));
      return this.api.get('/accomodations', params).subscribe(
          data => {
              console.log('my data: ', data);
          })
  }

  add(item: Item) {
  }

  delete(item: Item) {
  }

}
