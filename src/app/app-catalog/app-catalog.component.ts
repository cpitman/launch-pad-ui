import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
import * as _ from 'lodash';

import { App } from '../models/app'
import { AppService } from '../app.service'

@Component({
  selector: 'app-app-catalog',
  templateUrl: './app-catalog.component.html',
  styleUrls: ['./app-catalog.component.scss']
})
export class AppCatalogComponent implements OnInit {

  apps: App[];
  tags: string[]; 

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getInstalledApps().then((i) => {
      this.apps = i;
      this.tags = _.sortBy(_.union(..._.map(this.apps, (i) => i.tags)), (t) => t);
    });
  }

  addApp(app: App): void {
    this.router.navigate(['/app', app.name]);
  }

}
