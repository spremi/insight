//
// [insight]
//
// Sanjeev Premi <spremi@ymail.com>
//
// Available under terms of the BSD-3-Clause license.
//

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    user: ['', Validators.required],
    pass: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onCancel() {
    this.loginForm.setValue({
      user: '',
      pass: '',
    });

    this.loginForm.markAsUntouched();
  }

  onlogin() {
    const payload = {
      id: this.loginForm.get('user').value,
      pass: this.loginForm.get('pass').value,
    };

    console.log('TODO: Dispatch action');
  }
}
