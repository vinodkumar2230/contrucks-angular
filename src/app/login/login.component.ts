import { NgModule, Component, Pipe, OnInit, Directive, forwardRef, Attribute } from '@angular/core';
import {
    ReactiveFormsModule,
    FormsModule,
    Validators,
    FormBuilder,
    NgForm,
    FormGroup,
    FormControl,
    AbstractControl,
    NG_VALIDATORS,
} from '@angular/forms';
// import {
//     ReactiveFormsModule,
//     FormsModule,
//     FormGroup,
//     FormControl,
//     Validators,
//     FormBuilder,
//     NgForm
// } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    myform = this.fb.group({
        //userid validation
        userid: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(32)]),
        //password valildation     
        password: new FormControl('', [Validators.required, Validators.minLength(8),
        // Validators.pattern("[a-zA-Z0-9]+[\ !\ *]+[a-zA-Z0-9]+")
        ]),
        //Password Confirmation         
        // confirmpassword: new FormControl('', [Validators.required,Validators.minLength(8)])

    }, 
    //validating password and confirm password field
    // { validator: this.checkIfMatchingPasswords('password', 'confirmpassword') }

    );
    //validation function for password and confirm password field
    // checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    //     return (group: FormGroup) => {
    //         let passwordInput = group.controls[passwordKey],
    //             passwordConfirmationInput = group.controls[passwordConfirmationKey];
    //         if (passwordInput.value !== passwordConfirmationInput.value || passwordConfirmationInput.invalid) {
    //             return passwordConfirmationInput.setErrors({ notEquivalent: true })
    //         }

    //         else {
    //             return passwordConfirmationInput.setErrors(null);
    //         }
    //     }
    // }




    constructor(public router: Router, private fb: FormBuilder) {
    }

    ngOnInit() {

    }

    onSubmit(signupdata: any): void {

        this.router.navigateByUrl("/dashboard");
    }
    //functions used to get values from form to properties in controller
    get userid() {
        return this.myform.get("userid");
    }

    get password() {
        return this.myform.get("password");

    }
   }
