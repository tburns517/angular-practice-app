import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public successClass = "text-success";

  public failed = true;
  public special = true;
  public messageClasses = {
    "text-success": !this.failed,
    "text-failure": this.failed,
    "text-special": this.special
  }

  constructor() { }

  ngOnInit() {
  }

}
