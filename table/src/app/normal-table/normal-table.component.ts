import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableInfoService } from '../service/table-info.service';

// let detail:any=[];
@Component({
  selector: 'app-normal-table',
  templateUrl: './normal-table.component.html',
  styleUrls: ['./normal-table.component.scss']
})
export class NormalTableComponent implements OnInit {
  
  
  public displayedColumns:string[]=["id","name","email","phone"];
  public detail!:MatTableDataSource<any>;
  public value:any;
  public option:number[]=[2,5,10]

  @ViewChild("paginator") paginator!:MatPaginator;
  @ViewChild(MatSort) matSort!:MatSort;

  constructor(public service:TableInfoService) {
    
  }
  

   ngOnInit(): void {
     this.service.getData().subscribe({
       next:(respose:any)=> {
        this.detail=new MatTableDataSource(respose),
        this.detail.paginator=this.paginator;
        this.detail.sort=this.matSort;
      },
       error:(error)=>console.error(error),
       complete:()=>console.log("completed")
      });
      // console.log(detail);
      
  }

  searching(search:Event){
    const filter=(search.target as HTMLInputElement).value
    // console.log(filter);
    this.detail.filter=filter.trim().toLowerCase();
  }


}
