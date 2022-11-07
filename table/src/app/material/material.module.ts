import { NgModule } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";


const material=[
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSortModule
]

@NgModule({
  imports: [ material ],
  exports:[ material ]
})
export class MaterialModule { }
