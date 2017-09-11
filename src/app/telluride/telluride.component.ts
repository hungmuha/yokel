import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'telluride',
  templateUrl: './telluride.component.html',
  styleUrls: ['./telluride.component.css']
})
export class TellurideComponent implements OnInit {


navExpanded = false;

locations = [
  {
    city: "Telluride",
    state: "CO"
  }
]

comments = [];


 dismissNav() {
    this.navExpanded = false;
  }

  toggleNav() {
    console.log("YAyyyy");
    if (!this.navExpanded) {
      this.navExpanded = true;
    } else {
      this.navExpanded = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
