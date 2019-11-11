import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from "@angular/router";
import {LifeExpectancyCalculatorComponent} from './life-expectancy-calculator/life-expectancy-calculator.component';
import {
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule, MatNativeDateModule,
    MatSelectModule, MatTableModule,
    MatTabsModule,
    MatToolbarModule
} from "@angular/material";
import {PopulationIoService} from "./population-io.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { OverviewComponent } from './overview/overview.component';

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
        OverviewComponent
    ],
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatToolbarModule,
        MatTableModule,
        MatTabsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSelectModule
    ],
    providers: [
        MatDatepickerModule,
        PopulationIoService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
