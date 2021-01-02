import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  formData;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.formData = params;
    });
  }

  ngOnInit(): void {
  }

}
