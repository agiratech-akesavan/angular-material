import { NgModule } from '@angular/core';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatAutocompleteModule } from "@angular/material/autocomplete"

const material=[
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule
];

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { }
