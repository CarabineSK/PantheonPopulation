import { Component } from '@angular/core';
import {PopulationIoService} from "./population-io.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pantheon-population';

  constructor(private populationIO: PopulationIoService) {

  }

  ngOnInit() {
    this.populationIO.getCountries().subscribe((data: {}) => {
        console.log(data);
        // this.products = data;
    });
  }
}
