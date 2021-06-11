import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './privacy-policy.component';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [CommonModule],
  exports: [PrivacyPolicyComponent],
  entryComponents: [PrivacyPolicyComponent],
})
export class PrivacyPolicyModule {}
