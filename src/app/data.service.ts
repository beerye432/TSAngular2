import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getDataset(num: string){

    let params = new URLSearchParams();
    params.set('id', num);

    return this.http.get('/api/data', {search: params}).map(result => result.json());
  }

}
