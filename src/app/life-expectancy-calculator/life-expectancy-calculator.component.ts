import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {CalculationStorageService} from "../calculation-storage.service";

@Component({
    selector: 'app-life-expectancy-calculator',
    templateUrl: './life-expectancy-calculator.component.html',
    styleUrls: ['./life-expectancy-calculator.component.css']
})
export class LifeExpectancyCalculatorComponent implements OnInit {
    public expectancyForm;
    public items = [];

    constructor(private formBuilder: FormBuilder, private calculationStorage: CalculationStorageService) {
        this.expectancyForm = this.formBuilder.group({
            sex: '',
            country: '',
            date: '',
            age: ''
        });
    }

    ngOnInit() {
        this.fetchCalculations();
    }

    fetchCalculations() {
        this.items = this.calculationStorage.getAllCalculations();
    }

    onSubmit(customerData) {
        console.log(customerData);
        this.calculationStorage.addExpectation(customerData);
        this.fetchCalculations();
    }

}
