import {Component, OnInit} from '@angular/core';

export interface AgeData {
    age: number;
    males: number;
    females: number;
    total: number;
}

const AGES_DATA: AgeData[] = [
    {age: 1, males: 50, females: 50, total: 100},
    {age: 2, males: 100, females: 100, total: 200},
    {age: 3, males: 150, females: 150, total: 300},
    {age: 4, males: 200, females: 200, total: 400},
    {age: 5, males: 250, females: 250, total: 500},
];

@Component({
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
    displayedColumns: string[] = ['age', 'males', 'females', 'total'];
    dataSource = AGES_DATA;

    constructor() {
    }

    ngOnInit() {
    }

}
