import {AfterViewInit, Component, OnDestroy, NgZone} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {DemographicsData, PopulationIoService} from "../population-io.service";

am4core.useTheme(am4themes_animated);

@Component({
    selector: 'app-pyramid-chart',
    templateUrl: './pyramid-chart.component.html',
    styleUrls: ['./pyramid-chart.component.css']
})
export class PyramidChartComponent implements AfterViewInit, OnDestroy {
    private chart: am4charts.XYChart;

    constructor(private zone: NgZone, private populationIoService: PopulationIoService) {
    }

    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            this.createMaleChart();
            this.createFemaleChart();
        });
    }

    getPopulationData(): DemographicsData[] {
        return this.populationIoService.getSlovakPopulation();
    }

    private createMaleChart() {
        var maleChart = am4core.create("male-chart", am4charts.XYChart);
        maleChart.paddingRight = 0;
        maleChart.data = this.getPopulationData();

        this.createMaleChartAxes(maleChart);
        this.createMaleSeries(maleChart);
    }

    private createMaleSeries(maleChart) {
        var maleSeries = maleChart.series.push(new am4charts.ColumnSeries());
        maleSeries.dataFields.valueX = "male";
        maleSeries.dataFields.valueXShow = "percent";
        maleSeries.calculatePercent = true;
        maleSeries.dataFields.categoryY = "age";
        maleSeries.interpolationDuration = 1000;
        maleSeries.columns.template.tooltipText = "Males, age {categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
        maleSeries.sequencedInterpolation = true;
    }

    private createMaleChartAxes(maleChart) {
        this.createMaleValueAxis(maleChart);
        this.createMaleCategoryAxis(maleChart);
    }

    private createMaleValueAxis(maleChart) {
        var maleValueAxis = maleChart.xAxes.push(new am4charts.ValueAxis());
        maleValueAxis.renderer.inversed = true;
        maleValueAxis.min = 0;
        maleValueAxis.max = 10;
        maleValueAxis.strictMinMax = true;

        maleValueAxis.numberFormatter = new am4core.NumberFormatter();
        maleValueAxis.numberFormatter.numberFormat = "#.#'%'";
    }

    private createMaleCategoryAxis(maleChart) {
        var maleCategoryAxis = maleChart.yAxes.push(new am4charts.CategoryAxis());
        maleCategoryAxis.dataFields.category = "age";
        maleCategoryAxis.renderer.grid.template.location = 0;
        maleCategoryAxis.renderer.minGridDistance = 15;
    }

    private createFemaleChart() {
        var femaleChart = am4core.create("female-chart", am4charts.XYChart);
        femaleChart.paddingLeft = 0;
        femaleChart.data = this.getPopulationData();

        this.createFemaleChartAxes(femaleChart);
        this.createFemaleSeries(femaleChart);
    }

    private createFemaleSeries(femaleChart) {
        var femaleSeries = femaleChart.series.push(new am4charts.ColumnSeries());
        femaleSeries.dataFields.valueX = "female";
        femaleSeries.dataFields.valueXShow = "percent";
        femaleSeries.calculatePercent = true;
        femaleSeries.fill = femaleChart.colors.getIndex(4);
        femaleSeries.stroke = femaleSeries.fill;
        femaleSeries.sequencedInterpolation = true;
        femaleSeries.columns.template.tooltipText = "Females, age {categoryY}: {valueX} ({valueX.percent.formatNumber('#.0')}%)";
        femaleSeries.dataFields.categoryY = "age";
        femaleSeries.interpolationDuration = 1000;
    }

    private createFemaleChartAxes(femaleChart) {
        this.createFemaleCategoryAxis(femaleChart);
        this.createFemaleValueAxis(femaleChart);
    }

    private createFemaleValueAxis(femaleChart) {
        var femaleValueAxis = femaleChart.xAxes.push(new am4charts.ValueAxis());
        femaleValueAxis.min = 0;
        femaleValueAxis.max = 10;
        femaleValueAxis.strictMinMax = true;
        femaleValueAxis.numberFormatter = new am4core.NumberFormatter();
        femaleValueAxis.numberFormatter.numberFormat = "#.#'%'";
        femaleValueAxis.renderer.minLabelPosition = 0.01;
    }

    private createFemaleCategoryAxis(femaleChart) {
        var femaleCategoryAxis = femaleChart.yAxes.push(new am4charts.CategoryAxis());
        femaleCategoryAxis.renderer.opposite = true;
        femaleCategoryAxis.dataFields.category = "age";
        femaleCategoryAxis.renderer.grid.template.location = 0;
        femaleCategoryAxis.renderer.minGridDistance = 15;
    }

    ngOnDestroy() {
        this.zone.runOutsideAngular(() => {
            if (this.chart) {
                this.chart.dispose();
            }
        });
    }
}
