import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ParentItem } from '../../../shared/models/parentItem';

@Component({
  selector: 'app-parent-item',
  templateUrl: './parent-item.component.html',
  styleUrls: ['./parent-item.component.css']
})
export class ParentItemComponent implements OnInit {

  @Input() parentItem: ParentItem;
  @Input() titleOptions;
  @Input() parentDisplay;
  @Output() parentToggle = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
