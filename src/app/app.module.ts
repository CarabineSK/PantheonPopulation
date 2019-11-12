import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NgZone} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {LifeExpectancyCalculatorComponent} from './life-expectancy-calculator/life-expectancy-calculator.component';
import {
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatListModule, MatNativeDateModule, MatPaginatorModule,
    MatSelectModule, MatSortModule, MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {PopulationIoService} from "./population-io.service";
import {HttpClientModule} from "@angular/common/http";
import { OverviewComponent } from './overview/overview.component';
import { PyramidChartComponent } from './pyramid-chart/pyramid-chart.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalculationStorageService} from "./calculation-storage.service";

const appRoutes: Routes = [
    // {path: 'calculator', component: LifeExpectancyCalculatorComponent},
    // {path: 'hero/:id', component: HeroDetailComponent},
    // {
    //     path: 'heroes',
    //     component: HeroListComponent,
    //     data: {title: 'Heroes List'}
    // },
    // {
    //     path: '',
    //     redirectTo: '/calculator',
    //     pathMatch: 'full'
    // },
    // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        LifeExpectancyCalculatorComponent,
        OverviewComponent,
        PyramidChartComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatTableModule,
        MatTabsModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatSortModule,
        MatSelectModule,
    ],
    providers: [
        MatDatepickerModule,
        PopulationIoService,
        CalculationStorageService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
