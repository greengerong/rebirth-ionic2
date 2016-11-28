import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ToastController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RebirthValidators } from '../../core/validators/rebirth-validators';

@Component({
  selector: 'contact-us',
  templateUrl: './contact-us.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactUsComponent {
  issueForm: FormGroup;

  constructor(private fb: FormBuilder, private toastCtrl: ToastController) {
    this.issueForm = fb.group({
      'username': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, RebirthValidators.email])],
      'issue': ['', Validators.required],
    });
  }

  onSubmit(value): void {
    console.log("issue", value);
    this.issueForm.reset();
    this.issueForm.markAsPristine();
    this.toastCtrl.create({
      message: '谢谢你的反馈,我们会尽快处理你的反馈',
      duration: 1000,
      position: 'middle'
    }).present();
  }
}
