import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, Observable, startWith,map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forms';
  public input:any;                         


  myControl =new FormControl("");
  public options:string[]=[ 'Mary','Shelley' ,'Igor']

  filteredOptions: any;


  ngOnInit(){
    this.filteredOptions=this.myControl.valueChanges.pipe(
      startWith(''),
      map(value=> this._filter(value || ""))
    );
  }



  public _filter(value:string):string[]{
    const filterValue:any=value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue))
  }
}
