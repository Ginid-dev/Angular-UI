import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [FooterComponent],
})
export class FooterModule {}
