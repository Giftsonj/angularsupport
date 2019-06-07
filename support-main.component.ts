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

  ngOnInit() {
  }

}
