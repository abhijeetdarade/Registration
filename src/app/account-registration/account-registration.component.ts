import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';
    // This lets me use jquery
    //declare var $: any;

@Component({
  selector: 'app-account-registration',
  templateUrl: './account-registration.component.html',
  styleUrls: ['./account-registration.component.scss']
})
export class AccountRegistrationComponent implements OnInit {
  registerForm: FormGroup;
  showModal : boolean;
  submitted = false;
  title = 'ng-bootstrap-modal-demo';
  registerFormData: any={"firstName": '', 'lastName': '', 'phone': '', 'ext': '', 'email': ''};

  constructor(
    private formBuilder: FormBuilder, private modalService: NgbModal) {
  }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      ext: '',
      email: ['', [Validators.required]]
    });
  }

  get f() { return this.registerForm.controls; }

  // onSubmit(val) {
  //   this.submitted = true;

  //   // stop here if form is invalid
  //   if (this.registerForm.invalid) {
  //     return;
  //   }

  //   this.registerFormData = this.registerForm.value;
  //   // display form values on success
  //   //alert('SUCCESS!! :-)\n\n' + JSON.stringify(val, null, 4));
  // }

  openModal(targetModal, user) {

    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.registerFormData = this.registerForm.value;
    

    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
    });
   
    
   }

   dismiss() {
    this.modalService.dismissAll('CLOSE');
   }

  


}
