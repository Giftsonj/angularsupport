import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  usrName: string;
  pass: string;

  doSubmit(e) {
    // let name = document.getElementsByName("usrName")

    // console.log("name "+name)
    // alert("hii")
    this.usrName = e.target.elements[0].value;
    this.pass = e.target.elements[1].value;

    // var temp = e.target.getElementsByName('usrnme')
    // console.log(temp)
    //console.log(usrName, pass)

    this.router.navigate(['support', this.usrName])
    // return false;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    // this.doSubmit();
  }
}
