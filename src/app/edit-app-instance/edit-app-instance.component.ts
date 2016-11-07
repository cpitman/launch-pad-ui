import { Component, OnInit } from '@angular/core';

import {App} from '../models/app'
import {AppInstance} from '../models/app-instance'

@Component({
  selector: 'app-edit-app-instance',
  templateUrl: './edit-app-instance.component.html',
  styleUrls: ['./edit-app-instance.component.scss']
})
export class EditAppInstanceComponent implements OnInit {
  app: App
  instance: AppInstance

  constructor() { }

  ngOnInit() {
  }

}
