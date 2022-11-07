import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface data{
  id:number;
  name:string;
  email:string;
  phone:number;
}
@Injectable({
  providedIn: 'root'
})
export class TableInfoService {

  public url="users"
  constructor( public http:HttpClient) { }
  
  getData():Observable<data>{
   return this.http.get<data>(this.url)
  }
}
