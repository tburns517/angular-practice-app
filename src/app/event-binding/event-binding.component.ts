import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public welcome = "";
  public showText = "false";
  public welcomeShowHide = "Welcome to the 'Learning Angular App'";

  constructor() { }

  ngOnInit() {
  }

  displayWelcome() {
    this.welcome = "Welcome to the 'Learning Angular App'";
  }

}
