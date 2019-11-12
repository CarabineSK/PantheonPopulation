import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CalculationStorageService} from "../calculation-storage.service";

@Component({
    selector: 'app-life-expectancy-calculator',
    templateUrl: './life-expectancy-calculator.component.html',
    styleUrls: ['./life-expectancy-calculator.component.css']
})
export class LifeExpectancyCalculatorComponent implements OnInit {
    public expectancyForm;
    public currentExpectation;
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
        let calculations = this.calculationStorage.getAllCalculations();
        if (calculations) {
            this.items = calculations.reverse();
        }
    }

    onSubmit(customerData) {
        this.calculationStorage.addExpectation(customerData);
        this.currentExpectation = this.calculationStorage.getLastExpectation();
        this.fetchCalculations();
    }
}
