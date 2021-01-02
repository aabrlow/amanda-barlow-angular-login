import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      dob: [null, [Validators.required, Validators.min(1910), Validators.max(2000)]]
    });
  }

  ngOnInit(): void {
  }
 
  loginClick() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        email: this.loginForm.value.email,
        firstName: this.loginForm.value.firstName,
        lastName: this.loginForm.value.lastName,
        dob: this.loginForm.value.dob
      }
    };
    this.router.navigate(['/success-page'], navigationExtras);
  }
}
