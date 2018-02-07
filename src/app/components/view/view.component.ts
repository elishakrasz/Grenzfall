import { Component, OnInit } from '@angular/core';
declare var $: any;

import { data } from '../../data';
import { Item } from '../../shared/models/item';
import { ParentItem } from '../../shared/models/parentItem';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient, HttpParams, HttpRequest, HttpResponse } from '@angular/common/http';
import { ItemService } from '../../shared/services/item.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public titleOptions: Object = {
    key: '9nnvndnE4idefG-7B9dbxh==',
    charCounterCount: false,
    toolbarInline: true,
    toolbarButtons: ['bold', 'italic', 'underline'],
    pluginsEnabled: ['image', 'link'],
    imageEditButtons: ['wirisEditor', 'wirisChemistry', 'imageDisplay', 'imageAlign', 'imageInfo', 'imageRemove'],
    direction: 'rtl',
    events: {
      'froalaEditor.initialized': function(e, editor) {
        editor.edit.off();
        console.log('initialized');
      }
    }
  };

  item: Item;
  parentItem: ParentItem;
  id: string;
  display = true;
  routeNumber: number;
  parentDisplay = true;
  childId: string;
  parent: string;
  lang: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private itemService: ItemService
  ) {
    this.item = data;
    this.parentItem = data;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => (this.id = params.id));

    this.activatedRoute.queryParams.subscribe(params => (this.lang = params.lang));

    this.itemService.getItem(this.id)
      .subscribe(res => {
        this.item = res;
      });

      if (this.activatedRoute.firstChild) {
          this.activatedRoute.firstChild.params.subscribe(params => (this.childId = params.id));

          this.itemService.getParentItem(this.childId)
          .subscribe(res => {
          this.parentItem = res;
          });
      } else {
        return null;
      }

      $.FroalaEditor.DefineIcon('alert', {NAME: 'info'});
      $.FroalaEditor.RegisterCommand('alert', {
        title: 'Hello',
        focus: false,
        undo: false,
        refreshAfterCallback: false,

        callback: function () {
          alert('Hello!');
        }
      });
  }


  Toggle(show: boolean) {
    this.display = !this.display;
  }

  parentToggle(show: boolean) {
    this.parentDisplay = !this.parentDisplay;
  }
  navigate() {
    // this.router.navigate(['item', this.routeNumber], {relativeTo: this.activatedRoute});
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
