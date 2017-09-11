import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vail',
  templateUrl: './vail.component.html',
  styleUrls: ['./vail.component.css']
})
export class VailComponent implements OnInit {

	
navExpanded = false;

locations = [
  {
    city: "Vail",
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
