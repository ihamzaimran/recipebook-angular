import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DropdownDirective } from './dropdown.directive';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinner } from './loading-spinner/loading-spinner';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinner,
    PlaceHolderDirective,
    DropdownDirective,
    ],
  imports: [
    CommonModule
    ],
  exports: [
    AlertComponent,
    LoadingSpinner,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule
    ],
  entryComponents: [AlertComponent]

})
export class SharedModule {}
