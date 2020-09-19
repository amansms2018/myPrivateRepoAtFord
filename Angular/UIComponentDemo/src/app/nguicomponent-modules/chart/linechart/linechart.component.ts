import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Data } from '../../models/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  url = 'http://localhost:58617/API/Charts/GetCharts';

  data: Data[];

  Player = [];

  Run = [];

  Linechart = [];

  constructor(private dataService: DataService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {

    // this.httpClient.get(this.url).subscribe((result: Data[]) => {

      this.dataService.getData().forEach(x => {

        this.Player.push(x.PlayerName);

        this.Run.push(x.Run);

      });

      console.log('inside linecap  Player ---->' + this.Player.toString());
      console.log('inside linecap ' + this.Run.toString());
      this.Linechart = new Chart('canvas', {

        type: 'line',

        data: {

          labels: this.Player,

          datasets: [

            {

              data: this.Run,

              borderColor: '#3cb371',

              backgroundColor: '#0000FF',

            }

          ]

        },

        options: {

          legend: {

            display: false

          },

          scales: {

            xAxes: [{

              display: true

            }],

            yAxes: [{

              display: true

            }],

          }

        }

      });

    // });

  }

}
