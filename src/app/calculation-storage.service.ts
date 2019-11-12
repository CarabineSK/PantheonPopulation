import {Injectable} from '@angular/core';
import {ExpectationControls, PopulationIoService} from "./population-io.service";

export interface ExpectationData {
    sex: string;
    country: string;
    date: string;
    age: string;
    expectation: number;
}

@Injectable({
    providedIn: 'root'
})
export class CalculationStorageService {
    private storageKey = 'expectations';

    constructor(private populationIo: PopulationIoService) {
    }

    addExpectation(expectationControls: ExpectationControls) {
        let expectations = this.get();
        if (expectations === null) {
            expectations = [];
        }
        if (expectations.length >= 5) {
            expectations.shift();
        }
        expectations.push(this.getExpectation(expectationControls));
        this.set(expectations);
    }

    getExpectation(expectationControls: ExpectationControls): ExpectationData {
        const expectation = this.populationIo.getExpectation(expectationControls);
        return {
            sex: expectationControls.sex,
            country: expectationControls.country,
            date: expectationControls.date,
            age: expectationControls.age,
            expectation
        };
    }

    getLastExpectation(): ExpectationData {
        return [...this.get()].pop();
    }

    getAllCalculations(): ExpectationData[] {
        return this.get();
    }

    set(data: any): void {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to localStorage', e);
        }
    }

    get() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey));
        } catch (e) {
            console.error('Error getting data from localStorage', e);
            return null;
        }
    }
}
