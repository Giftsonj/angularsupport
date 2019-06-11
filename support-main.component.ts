import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-support-main',
  templateUrl: './support-main.component.html',
  styleUrls: ['./support-main.component.css']
})
export class SupportMainComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  user: string = this.route.snapshot.paramMap.get('id');
  // isBcColor: boolean = true;
  letStyles: {
    // "background-color": "green",
  };
  isClicked = false;
  // letStyles = {
  //   "background-color": "skyblue",
  // }
  mainProd(evt) {
    // alert()
    // console.log("hii how are you")
    // this.letStyles = {
    //   "background-color": "green",

    // }
    var buttons = document.getElementsByClassName("btnStyle");
    // console.log(evt)
    // buttons.evt.target
    // *[NgFor]
    for (var i = 0; i < buttons.length; i++) {

      // if (!(buttons[i] == evt.target)) {
      //   this.letStyles = {
      //     "background-color": "white",

      //     // $scope.myObj = {
      //     //   "color" : "white",
      //     //   "background-color" : "coral",
      //     //   "font-size" : "60px",
      //     //   "padding" : "50px"
      //     // }
      //   }
      // }
      if (buttons[i] == evt.target) {
        console.log(buttons[i].className)

        evt.target.id = true;
        buttons[i].classList.add("activeclass");

        // this.letStyles = {
        //   "background-color": "skyblue",
        // evt.target.sty
        // $scope.myObj = {
        //   "color" : "white",
        //   "background-color" : "coral",
        //   "font-size" : "60px",
        //   "padding" : "50px"
        // }
        // }

        // buttons[i]
      }else{
      buttons[i].classList.remove("activeclass");
      // buttons[i]. = "white";
      // console.log(buttons[i])
      // var varWhiteColor = buttons[i].
      // console.log("dsdsd"+evt.target.id)
      // this.s
    }
  }

    // var isClicked = false;
    // return this.letStyles;

  }
  ngOnInit() {
  }

}
