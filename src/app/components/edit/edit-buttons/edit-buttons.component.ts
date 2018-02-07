import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-buttons',
  templateUrl: './edit-buttons.component.html',
  styleUrls: ['./edit-buttons.component.css']
})
export class EditButtonsComponent implements OnInit {
  @Output() openSave = new EventEmitter();
  @Output() openDelete = new EventEmitter();
  @Output() openReset = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
