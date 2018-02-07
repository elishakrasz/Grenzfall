import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  route: number;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['item', this.route], {relativeTo: this.activatedRoute});
  }
}
