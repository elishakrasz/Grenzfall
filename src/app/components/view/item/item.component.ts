import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Item } from '../../../shared/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() titleOptions;
  @Input() display;
  @Output() Toggle = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
