import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from "node_modules/chart.js"
import { ServiceChartService } from '../service/service-chart.service';
// import { map } from 'rxjs/operators';


Chart.register(...registerables);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  public value:any;
  public year:any[]=[];
  public amount:any[]=[];
  public color:any[]=[];

  constructor(public serviceChart:ServiceChartService) { 
   }

  ngOnInit():void {
    this.serviceChart.getData().subscribe(data =>{
        this.value=data;
        if(this.value!=null){
          for(let i=0;i<this.value.length;i++){
            this.year.push(this.value[i].year)
            this.amount.push(this.value[i].amount)
            this.color.push(this.value[i].color)
          }
          this.renderCharts(this.year,this.amount,this.color,"barCharts","bar");
          this.renderCharts(this.year,this.amount,this.color,"pieCharts","pie");
          this.renderCharts(this.year,this.amount,this.color,"donutCharts","doughnut");
          this.renderCharts(this.year,this.amount,this.color,"polarCharts","polarArea");
        }

    }
    );

  }

  renderCharts(year:any,amount:any,color:any,id:any,type:any){
    // console.log(color)
    const myChart = new Chart(id, {
      type: type,
      data: {
          labels:year,
          datasets: [{
              label: '# of Votes',
              data:amount,
              backgroundColor:color,
              borderColor: "black",
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  }
}
