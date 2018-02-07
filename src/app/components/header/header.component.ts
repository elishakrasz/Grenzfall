import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  route: number;
  routeNumber: number;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      this.router.navigate(['item', this.routeNumber], {relativeTo: this.activatedRoute});
    }
  }
  navigate() {
    this.router.navigate(['item', this.route], {relativeTo: this.activatedRoute});
  }
}
