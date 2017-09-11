import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fort-collins',
  templateUrl: './fort-collins.component.html',
  styleUrls: ['./fort-collins.component.css']
})
export class FortCollinsComponent implements OnInit {

  
navExpanded = false;

locations = [
  {
    city: "Fort Collins",
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
