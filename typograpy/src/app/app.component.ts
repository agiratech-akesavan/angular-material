import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typograpy';
  public open=false;
  notification:any=0;  
  i=0;
  public tiles:any = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  add(){
    this.i++;
    this.notification=this.i
  }


  public showIt=false;

  load(){
    this.showIt=true;
    setTimeout(()=>{
      this.showIt=false;
    },5000)
  }
}
