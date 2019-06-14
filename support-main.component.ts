import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-support-main',
  templateUrl: './support-main.component.html',
  styleUrls: ['./support-main.component.css']
})
export class SupportMainComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  user: string = this.route.snapshot.paramMap.get('id');
  counter: number = 0;
  varTextContent;
  varDesTarget: string = "";
  varDesTargetLen: number = 0;
  varDesTargetVal: string = "";
  tech1: string = "";
  // addCounter:number = 0;
  mainProd(evt) {
    var buttons = document.getElementsByClassName("btnStyle");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] == evt.target) {
        buttons[i].classList.add("activeclass");
        this.varTextContent = evt.target.innerText;
        // this.doChange(varTextContent);
      } else {
        buttons[i].classList.remove("activeclass");
      }
    }
    // return varTextContent;
  }
  mainSubProd(evt) {
    // console.log("this is sub product")

    var buttons = document.getElementsByClassName("fas fa-star");
    // if(evt.target != )
    for (var i = 0; i < buttons.length; i++) {

      if (buttons[i] == evt.target) {
        if (buttons[i].className == "fas fa-star activeclassSub") {
          buttons[i].classList.remove("activeclassSub");
          this.counter = this.counter - 1;
          // console.log(this.counter)

        }
        else {
          buttons[i].classList.add("activeclassSub");
          this.counter = this.counter + 1;
          // console.log(this.counter)
        }

      }
      // if (buttons[i].className == "fas fa-star activeclassSub") {
      // buttons[i].classList.remove("activeclassSub");
      // console.log("2" + buttons[i].className)
      // }
      // else
      // {
      //   buttons[i].classList.add("activeclassSub");

      // }
    }
    // console.log(buttons)

  }
  doChange(evt) {
    // console.log(evt.target.value)
    this.varDesTarget = evt.target.value;
    this.varDesTargetLen = this.varDesTarget.length;
    // this.varDesTargetVal
    // console.log("content" + this.varTextContent);
    if (this.varTextContent != undefined) {
      // alert()
      // console.log(varDesTargetLen)
      if (this.varDesTargetLen == 1) {
        // console.log(this.varDesTargetVal)
        this.varDesTargetVal = this.varTextContent + this.varDesTarget;
        // console.log(this.varDesTargetVal)
      }
      else {
        // console.log("2")
        this.varDesTargetVal = this.varDesTarget;
      }
    }
    // console.log(this.varDesTargetVal)
  }
  tech(evt) {
    this.tech1 = evt.target.id;
    // console.log(this.tech1)
    // buttons[i].classList.add("activeclassSub");
    var buttons = document.getElementsByClassName("btnDesc");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] == evt.target) {
        buttons[i].classList.add("activeclass");
        // this.varTextContent = xevt.target.innerText;
        // this.doChange(varTextContent);
      } else {
        buttons[i].classList.remove("activeclass");
      }
    }
  }

  doSeverity(evt) {

    var buttons = document.getElementsByClassName("btn btn-default btn-circle");
    for (var i = 0; i < buttons.length; i++) {
      if (buttons[i] == evt.target) {
        buttons[i].classList.add("activeclass");
        // this.varTextContent = evt.target.innerText;
        // this.doChange(varTextContent);
      } else {

        buttons[i].classList.remove("activeclass");
      }
    }
  }
  doSubmit(evt) {

  }
  ngOnInit() {
  }
}
