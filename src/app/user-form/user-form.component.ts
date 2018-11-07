import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  public maxLength = 1000;

  clearForm() {
    
  }

  constructor() { }

  ngOnInit() {
  }

}
