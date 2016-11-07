import { Component, OnInit, Input } from '@angular/core';

import { App, AppType } from '../models/app'
import { AppInstance } from '../models/app-instance'
import { ConfigItem, ConfigItemType } from '../models/config-item';

@Component({
  selector: 'app-app-instance-editor',
  templateUrl: './app-instance-editor.component.html',
  styleUrls: ['./app-instance-editor.component.scss']
})
export class AppInstanceEditorComponent implements OnInit {

  AppType = AppType; //expose enum to view
  ConfigItemType = ConfigItemType;

  @Input()
  app: App;

  @Input()
  appInstance: AppInstance;

  constructor() { }

  ngOnInit() {
  }

}
