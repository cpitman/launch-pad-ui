import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { App } from '../models/app'

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  @Input()
  apps: App[];

  @Output()
  appSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAppSelect(app: App): void {
    this.appSelected.emit(app);
  }

}
