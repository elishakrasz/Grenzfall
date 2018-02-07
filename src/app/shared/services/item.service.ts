import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ParentItem } from '../models/parentItem';
import { Item } from '../models/item';

@Injectable()
export class ItemService {

  apiUrl = environment.apiUrl;
  apiPostUrl = environment.apiPostUrl;
  lang;

  constructor(private http: HttpClient) { }

  getItem(id: string, lang?: string): Observable<Item> {
    const httpHeaders = new HttpHeaders()
                         .set('Content-Type', 'application/json');
    const httpParams = new HttpParams()
                        .set('idIndb', id)
                        .set('lang', lang);
    return this.http.get<Item>(this.apiUrl, { headers: httpHeaders,
      params: httpParams });
  }

  getParentItem(childId: string): Observable<ParentItem> {
    const httpHeaders = new HttpHeaders()
                         .set('Content-Type', 'application/json');
    const httpParams = new HttpParams()
                        .set('idIndb', childId);

    return this.http.get<ParentItem>(this.apiUrl, { headers: httpHeaders,
      params: httpParams });
  }

  updateItem(item: Item): Observable<Item> {

    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put<Item>(this.apiPostUrl + item.external_db_id, item);
    }

}
