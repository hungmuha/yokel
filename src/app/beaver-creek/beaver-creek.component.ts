import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beaver-creek',
  templateUrl: './beaver-creek.component.html',
  styleUrls: ['./beaver-creek.component.css']
})
export class BeaverCreekComponent implements OnInit {


navExpanded = false;

locations = [
  {
    city: "Beaver Creek",
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
