import { NgModule } from '@angular/core';
import {MdInputModule, MdDatepickerModule, MdCoreModule, MdNativeDateModule, MdExpansionModule, MdSelectModule} from '@angular/material';

@NgModule({
  imports: [MdInputModule, MdDatepickerModule, MdCoreModule, MdNativeDateModule, MdExpansionModule, MdSelectModule],
  exports: [MdInputModule, MdDatepickerModule, MdCoreModule, MdNativeDateModule, MdExpansionModule, MdSelectModule],
})
export class MaterialModule { }
