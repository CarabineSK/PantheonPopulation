import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

export interface DemographicsData {
    age: string;
    male: number;
    female: number;
}

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

    getSlovakPopulation(): DemographicsData[] {
       return [
            {
                "age": "0 to 5",
                "male": 10175713,
                "female": 9736305
            },
            {
                "age": "5 to 9",
                "male": 10470147,
                "female": 10031835
            },
            {
                "age": "10 to 14",
                "male": 10561873,
                "female": 10117913
            },
            {
                "age": "15 to 17",
                "male": 6447043,
                "female": 6142996
            },
            {
                "age": "18 to 21",
                "male": 9349745,
                "female": 8874664
            },
            {
                "age": "22 to 24",
                "male": 6722248,
                "female": 6422017
            },
            {
                "age": "25 to 29",
                "male": 10989596,
                "female": 10708414
            },
            {
                "age": "30 to 34",
                "male": 10625791,
                "female": 10557848
            },
            {
                "age": "35 to 39",
                "male": 9899569,
                "female": 9956213
            },
            {
                "age": "40 to 44",
                "male": 10330986,
                "female": 10465142
            },
            {
                "age": "45 to 49",
                "male": 10571984,
                "female": 10798384
            },
            {
                "age": "50 to 54",
                "male": 11051409,
                "female": 11474081
            },
            {
                "age": "55 to 59",
                "male": 10173646,
                "female": 10828301
            },
            {
                "age": "60 to 64",
                "male": 8824852,
                "female": 9590829
            },
            {
                "age": "65 to 69",
                "male": 6876271,
                "female": 7671175
            },
            {
                "age": "70 to 74",
                "male": 4867513,
                "female": 5720208
            },
            {
                "age": "75 to 79",
                "male": 3416432,
                "female": 4313697
            },
            {
                "age": "80 to 84",
                "male": 2378691,
                "female": 3432738
            },
            {
                "age": "> 85",
                "male": 2000771,
                "female": 3937981
            }
        ];
    }

}
