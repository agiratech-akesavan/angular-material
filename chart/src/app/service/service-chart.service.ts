import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface detail{
  year:number;
  amount:number;
  color:string;
}
@Injectable({
  providedIn: 'root'
})

export class ServiceChartService {

  constructor(public http:HttpClient) { }

    getData():Observable<detail>{
      return this.http.get<detail>("../../assets/detail.json")
      // return this.http.get<detail>("https://6352822ca9f3f34c373f9733.mockapi.io/Chart");
    }
}
