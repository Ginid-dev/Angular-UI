import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '../components/header/header.module';
import { FooterModule } from '../components/footer/footer.module';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, FeaturesRoutingModule, HeaderModule, FooterModule],
})
export class FeaturesModule {}
