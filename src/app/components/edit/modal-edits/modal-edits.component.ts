import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-edits',
  templateUrl: './modal-edits.component.html',
  styleUrls: ['./modal-edits.component.css']
})
export class ModalEditsComponent implements OnInit {
  @Output() deleteItem = new EventEmitter();
  @Output() itemReset = new EventEmitter();
  @Output() updateItem = new EventEmitter();

  @Input() basicDelete;
  @Input() basicSave;
  @Input() basicReset;

  constructor() { }

  ngOnInit() {
  }



}
