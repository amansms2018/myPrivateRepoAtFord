import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '../nguicomponent-modules/models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  DataForChart: Data[];
  d: Data = new Data();
  constructor(private httpClient: HttpClient) {




    this.d.PlayerName = 'Orbit Sharia';
    this.d.Run = 5;
    this.DataForChart = [
                  { PlayerName: 'Orbit Sharia', Run: 5 },
                  { PlayerName: 'Orbit Sharia', Run: 66 },
                  { PlayerName: 'Orbit Sharia', Run: 35 },
                  { PlayerName: 'Orbit Sharia', Run: 15 },
                  { PlayerName: 'Orbit Sharia', Run: 75 },
                  { PlayerName: 'Orbit Sharia', Run: 85 },
                ];

    console.log(this.DataForChart);


//  this.d.PlayerName = 'Orbit Sharia';
//  this.d.Run = 5;
//  this.DataForChart.push(this.d);


//  this.d.PlayerName = 'AAAA Sharia';
//  this.d.Run = 9;
//  this.DataForChart.push(this.d);


//  this.d.PlayerName = 'Sikar';
//  this.d.Run = 19;
//  this.DataForChart.push(this.d);


//  this.d.PlayerName = 'Virat Kho';
//  this.d.Run = 79;
//  this.DataForChart.push(this.d);

//  this.d.PlayerName = 'Rishabh Pan';
//  this.d.Run = 99;
//  this.DataForChart.push(this.d);

//  this.d.PlayerName = 'Yadav Pan';
//  this.d.Run = 59;
//  this.DataForChart.push(this.d);

//  this.d.PlayerName = 'Yadav Pan';
//  this.d.Run = 59;
//  this.DataForChart.push(this.d);

}
// tslint:disable-next-line:typedef
getData() {
   return this.DataForChart;
}
}

