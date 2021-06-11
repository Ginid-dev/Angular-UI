import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../../service/user/user.service';

import { TermsOfUseComponent } from '../../modals/terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from 'src/app/modals/privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  user: any = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  };

  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  errorMessage: string = null;

  constructor(private UserService: UserService, private modal: NgbModal) {}

  ngOnInit(): void {}

  register() {
    this.errorMessage = null;
    this.UserService.register(this.user)
      .then((result) => {})
      .catch((err) => {
        this.errorMessage = err.message;
      });
  }

  openTermsModal() {
    this.modal.open(TermsOfUseComponent);
  }

  openPrivacyModal() {
    this.modal.open(PrivacyPolicyComponent);
  }
}
