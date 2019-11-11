import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PopulationIoService {
    private apiEndpoint = 'http://api.population.io/';
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {
    }

    private extractData(res: Response) {
        return res || {};
    }

    getCountries(): Observable<any> {
        const apiEndpoint = this.apiEndpoint;
        return this.http.get(apiEndpoint + 'countries/').pipe(
            map(this.extractData));
    }

}
