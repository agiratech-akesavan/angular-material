import { NgModule } from '@angular/core';
import { MatButtonModule }  from '@angular/material/button';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner"
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTabsModule } from "@angular/material/tabs"


const material=[
  MatButtonModule,
  MatBadgeModule,
  MatIconModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatGridListModule,
  MatTabsModule
]


@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
