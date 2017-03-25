import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Card } from '../model/card.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardService {

    private baseUrl: string = 'api/cards';
    private headers: Headers = new Headers({'Authorization': 'Bearer <token>'});

    constructor(private http: Http) {
    }

    getAll(): Promise<Card[]> {
        return this.http.get(this.baseUrl, {
            headers: this.headers
        }).toPromise().then(response => response.json().data as Card[])
            .catch(this.handleError);
    }

    getOne(id: string): Promise<Card> {
        return this.http.get(this.baseUrl + '/' + id, {
            headers: this.headers
        }).toPromise().then(response => response.json().data as Card)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}