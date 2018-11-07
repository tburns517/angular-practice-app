import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  public hasError = true;
  public otherHasError = false;
  public colorBlue = "blue";
  public headerStyles = {
    color: "orange",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

}
