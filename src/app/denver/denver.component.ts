import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'denver',
  templateUrl: './denver.component.html',
  styleUrls: ['./denver.component.css']
})
export class DenverComponent implements OnInit {


navExpanded = false;

locations = [
  {
    city: "Denver",
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
