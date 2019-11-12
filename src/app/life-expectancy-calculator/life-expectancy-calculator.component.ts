import {Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-life-expectancy-calculator',
    templateUrl: './life-expectancy-calculator.component.html',
    styleUrls: ['./life-expectancy-calculator.component.css']
})
export class LifeExpectancyCalculatorComponent implements OnInit {
    public expectancyForm;

    constructor(private formBuilder: FormBuilder) {
        this.expectancyForm = this.formBuilder.group({
            sex: '',
            country: '',
            date: '',
            age: ''
        });
    }

    ngOnInit() {
    }

    onSubmit(customerData) {
        console.log(customerData);
        // Process checkout data here
        // console.warn('Your order has been submitted', customerData);

        // this.items = this.cartService.clearCart();
        // this.checkoutForm.reset();
    }

}
