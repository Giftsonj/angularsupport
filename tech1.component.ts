import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech1',
  templateUrl: './tech1.component.html',
  styleUrls: ['./tech1.component.css']
})
export class Tech1Component implements OnInit {

  constructor() { }
  tech1(evt){
    var buttons = document.getElementsByClassName("btnDesctech1");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] == evt.target) {
        buttons[i].classList.add("activeclass");
        // this.doChange(varTextContent);
      } else {
        buttons[i].classList.remove("activeclass");
      }
    }
  }
  ngOnInit() {
  }

}
