import {Component, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('graphContainer') graphContainer;
  private chart;

  constructor() {
    // Do stuff
  }

  ngAfterViewInit() {
    this.chart = new PieChart({
      container: this.graphContainer.nativeElement,
      data: [{
        url: "https://zoomcharts.com/dvsl/data/pie-chart/browsers.json",
      }]
    });
  }

}

