import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { App } from '../models/app'
import { AppInstance } from '../models/app-instance'
import { AppService } from '../app.service';

@Component({
  selector: 'app-create-app-instance',
  templateUrl: './create-app-instance.component.html',
  styleUrls: ['./create-app-instance.component.scss']
})
export class CreateAppInstanceComponent implements OnInit {

  app: App;
  appInstance: AppInstance;

  constructor(private location: Location, private route:ActivatedRoute, private appService: AppService) { }

  ngOnInit() {
    this.appInstance = new AppInstance();
    this.route.params.forEach((params) => {
      let name = params['name'];
      this.appService.getAppByName(name).then((i) => {
        this.app = i;
        this.appInstance.appId = i.id;
      });
    });
    
  }

  cancel() {
    this.location.back();
  }

  create() {

  }

}
